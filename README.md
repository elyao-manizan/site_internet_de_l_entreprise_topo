# GéoAxe — Site vitrine

Site statique HTML / CSS / JavaScript, sans framework ni serveur.
Hébergeable gratuitement sur GitHub Pages ou Netlify.

---

## 1. Ce qu'il reste à faire avant la mise en ligne

Quatre actions, dans l'ordre de priorité :

| # | Action | Où | Temps |
|---|---|---|---|
| 1 | Déposer **le logo** au nom `logo-geoaxe.png` | `assets/images/` | 1 min |
| 2 | Activer **le formulaire de contact** (voir § 3) | `contact.html` | 2 min |
| 3 | Déposer **les photos** (liste complète dans `assets/images/README.md`) | `assets/images/` | variable |
| 4 | Remplacer **les projets d'exemple** par vos vraies références (voir § 4) | `references.html`, `index.html` | 30 min |
| 5 | Compléter **les mentions légales** (adresse, assurance, hébergeur) | `mentions-legales.html` | 5 min |

> Le site fonctionne et reste présentable même si les photos manquent : un cadre
> sombre indique le nom du fichier attendu. Rien ne casse.

---

## 2. Structure des fichiers

```
.
├── index.html                # Accueil
├── domaines-activite.html    # Les 6 domaines, avec sommaire latéral
├── savoir-faire.html         # Les 4 familles de compétences (accordéons)
├── references.html           # Portfolio filtrable + exemples de livrables
├── contact.html              # Formulaire, coordonnées, FAQ, newsletter
├── mentions-legales.html
├── confidentialite.html      # Politique de confidentialité (RGPD)
├── robots.txt / sitemap.xml  # Référencement
├── css/style.css             # Tous les styles (variables de couleur en haut)
├── js/
│   ├── icons.js              # Les icônes du site (SVG dessinés à la main)
│   └── script.js             # Menu, accordéons, filtres, formulaire
└── assets/
    ├── favicon.svg
    └── images/               # Vos photos — voir le README de ce dossier
```

L'en-tête et le pied de page sont identiques sur chaque page : si vous modifiez
un lien de menu, pensez à le faire dans les 7 fichiers HTML.

---

## 3. Activer le formulaire de contact (2 minutes)

Aujourd'hui, si le formulaire n'est pas configuré, il ouvre le logiciel de
messagerie du visiteur avec le message pré-rempli. C'est une solution de
secours : beaucoup de visiteurs abandonnent à cette étape, surtout sur mobile.

Pour recevoir les demandes directement par e-mail :

1. Créez un compte gratuit sur <https://formspree.io> (50 messages/mois inclus).
2. Créez un formulaire, indiquez `geoaxe2@gmail.com` comme adresse de réception.
3. Copiez l'identifiant du formulaire (de la forme `mbldqwer`).
4. Dans `contact.html`, remplacez `VOTRE_ID` :

   ```html
   <form action="https://formspree.io/f/VOTRE_ID" ...>
   ```

   devient par exemple :

   ```html
   <form action="https://formspree.io/f/mbldqwer" ...>
   ```

5. Faites de même pour la newsletter avec `VOTRE_ID_NEWSLETTER`
   (créez un second formulaire Formspree, ou supprimez le bloc newsletter).

Validez ensuite un envoi de test : le premier message reçu doit être confirmé
depuis votre boîte mail.

---

## 4. Ajouter ou modifier un projet (page Références)

Dans `references.html`, dupliquez un bloc `<article class="project-card">` puis :

- renseignez `data-category` avec **une seule** de ces valeurs :
  `topographie`, `batiment`, `travaux-publics`, `vrd`, `controle`, `geomatique` ;
- remplacez le titre, l'année, la description et les étiquettes ;
- déposez la photo dans `assets/images/` et corrigez le chemin de l'image.

Le filtre par secteur et le bouton « Voir plus » se mettent à jour tout seuls
(6 projets affichés, puis 6 de plus à chaque clic).

Les textes entre crochets — `[Ville]`, `[Contexte : …]`, `[Année]` — sont des
emplacements à remplacer par vos vraies informations avant publication.

---

## 5. Personnaliser les couleurs et les textes

- **Couleurs** : tout est regroupé dans les variables `:root`, en haut de
  `css/style.css` (`--navy-900`, `--accent`, etc.). Le vert `--accent: #2f8f3f`
  reprend celui du logo.
- **Coordonnées** : `geoaxe2@gmail.com` et `07 48 33 70 41` apparaissent dans
  la barre de contact, le pied de page et la page contact des 7 fichiers HTML,
  ainsi que dans `js/script.js`. Une recherche/remplacement suffit.
- **Textes** : chaque section est repérée par un commentaire
  `<!-- ============ NOM DE LA SECTION ============ -->`.

---

## 6. Tester en local

```bash
python3 -m http.server 8000
```

Puis ouvrez <http://localhost:8000>.

> Ouvrir `index.html` par double-clic fonctionne aussi, mais passer par un petit
> serveur local reproduit fidèlement le comportement en ligne.

---

## 7. Mise en ligne

### Option A — GitHub Pages (gratuit)

1. Poussez le dépôt sur GitHub.
2. Réglages du dépôt → **Pages** → source : branche principale, dossier `/`.
3. Le site est publié sur `https://<compte>.github.io/<dépôt>/`.

### Option B — Netlify (gratuit, nom de domaine plus simple)

1. Glissez-déposez le dossier sur <https://app.netlify.com/drop>,
   ou connectez le dépôt GitHub pour un déploiement à chaque `git push`.

Dans les deux cas, pensez ensuite à :

- remplacer `https://www.geoaxe.fr` par l'adresse réelle dans `robots.txt` et
  `sitemap.xml` ;
- compléter le nom de l'hébergeur dans `mentions-legales.html` ;
- déclarer le site dans la Search Console de Google.

---

## 8. Cadre d'intervention (positionnement métier)

Le site présente exclusivement des prestations techniques : mesure,
représentation, implantation, contrôle et récolement. Il ne mentionne ni
bornage, ni division parcellaire, ni aucun acte réservé aux géomètres-experts
inscrits à l'Ordre. Cette distinction est rappelée sur l'accueil, la page
Domaines d'activité, la page Contact et les mentions légales : ne la retirez pas.

---

## 9. Informations légales de l'entreprise

- GéoAxe — nom commercial de l'entreprise individuelle YAO Manizan Emmanuel Laurent
- SIREN 130 058 670 — SIRET 130 058 670 00014
- Code APE 7112A — Activité des géomètres
- Immatriculation au RNE : 15/09/2026 — début d'activité : 14/09/2026
