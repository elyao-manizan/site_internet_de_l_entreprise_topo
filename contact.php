<?php
/* =========================================================
   GéoAxe — envoi des formulaires du site (devis + newsletter)
   Hébergement OVH : utilise la fonction mail() du serveur.
   Répond en JSON au script js/script.js (§ 8).
   ========================================================= */

// Adresse qui reçoit les messages (et qui sert d'expéditeur :
// OVH exige une adresse du domaine pour que l'e-mail parte).
const DESTINATAIRE = 'contact@geoaxe.fr';

// Anti-abus : nombre maximal d'envois par adresse IP et par heure.
const MAX_ENVOIS_PAR_HEURE = 5;

date_default_timezone_set('Europe/Paris');
header('Content-Type: application/json; charset=utf-8');

function repondre($code, $message) {
    http_response_code($code);
    echo json_encode(
        $code === 200 ? ['ok' => true] : ['ok' => false, 'errors' => [['message' => $message]]],
        JSON_UNESCAPED_UNICODE
    );
    exit;
}

// Nettoie une valeur d'une ligne : supprime les retours à la ligne
// (empêche l'injection d'en-têtes) et limite la longueur.
function ligne($valeur, $max = 200) {
    $valeur = trim(preg_replace('/[\r\n\t]+/', ' ', (string) $valeur));
    return mb_substr($valeur, 0, $max);
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    repondre(405, 'Méthode non autorisée.');
}

// Piège à robots : ce champ caché doit rester vide.
if (!empty($_POST['_gotcha'])) {
    repondre(200, ''); // on fait croire au robot que tout s'est bien passé
}

// Limitation du nombre d'envois par IP.
$ip = $_SERVER['REMOTE_ADDR'] ?? 'inconnue';
$fichier = sys_get_temp_dir() . '/geoaxe_form_' . md5($ip);
$maintenant = time();
$envois = [];
if (is_file($fichier)) {
    $envois = array_filter(
        array_map('intval', explode(',', (string) file_get_contents($fichier))),
        function ($t) use ($maintenant) { return $t > $maintenant - 3600; }
    );
}
if (count($envois) >= MAX_ENVOIS_PAR_HEURE) {
    repondre(429, 'Trop d\'envois depuis votre connexion. Merci de réessayer plus tard.');
}

// Adresse e-mail du visiteur (obligatoire dans les deux formulaires).
$email = ligne($_POST['E-mail'] ?? '', 254);
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    repondre(400, 'Adresse e-mail invalide.');
}

// Objet : on n'accepte que les deux objets connus.
$objetsAutorises = [
    'Demande de devis — site GéoAxe',
    'Inscription newsletter — site GéoAxe',
];
$objet = ligne($_POST['_subject'] ?? '');
if (!in_array($objet, $objetsAutorises, true)) {
    $objet = $objetsAutorises[0];
}

// Corps du message : tous les champs remplis, sauf les champs techniques.
// PHP remplace les espaces des noms de champs par « _ » : on les remet.
$lignes = [];
foreach ($_POST as $cle => $valeur) {
    if ($cle === '' || $cle[0] === '_' || $cle === 'rgpd' || is_array($valeur)) continue;
    $valeur = trim((string) $valeur);
    if ($valeur === '') continue;
    $nom = str_replace('_', ' ', ligne($cle, 60));
    if ($cle === 'Message') {
        $lignes[] = "\n" . $nom . " :\n" . mb_substr($valeur, 0, 5000);
    } else {
        $lignes[] = $nom . ' : ' . ligne($valeur, 300);
    }
}
$corps = implode("\n", $lignes)
       . "\n\n--\nEnvoyé depuis le site geoaxe.fr le " . date('d/m/Y à H:i') . '.';

$entetes = implode("\r\n", [
    'From: =?UTF-8?B?' . base64_encode('GéoAxe (site web)') . '?= <' . DESTINATAIRE . '>',
    'Reply-To: ' . $email,
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: 8bit',
]);

$envoye = mail(
    DESTINATAIRE,
    '=?UTF-8?B?' . base64_encode($objet) . '?=',
    $corps,
    $entetes,
    '-f' . DESTINATAIRE
);

if (!$envoye) {
    repondre(500, 'Le serveur n\'a pas pu envoyer le message.');
}

$envois[] = $maintenant;
@file_put_contents($fichier, implode(',', $envois));

repondre(200, '');
