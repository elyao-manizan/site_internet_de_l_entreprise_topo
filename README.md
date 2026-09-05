# Site vitrine — Géomètre-Topographe indépendant

Site statique HTML/CSS/JS, sans framework, sans backend. Déployable gratuitement
sur GitHub Pages ou Netlify.

## Structure du projet

```
site-geometre-topographe/
├── index.html          # Toute la structure et le contenu du site
├── css/
│   └── style.css        # Styles (variables couleurs en haut du fichier)
├── js/
│   └── script.js         # Menu mobile, année du footer, formulaire mailto
└── assets/
    └── icons/            # Dossier libre si vous voulez ajouter des images plus tard
```

Les icônes techniques (station totale, GNSS, scanner laser, drone, etc.) sont
des SVG « faits main », intégrés directement dans `index.html` sous forme de
sprite (`<symbol>` + `<use>`). Aucune image externe, aucune dépendance.

## À personnaliser avant publication

1. **Coordonnées de contact** — déjà renseignées (`ymanizan@gmail.com`, `07 48 33 70 41`)
   dans `index.html` et `js/script.js`. Modifiez-les à ces mêmes endroits si elles changent.
2. **Nom affiché** — actuellement "Emmanuel YAO" dans le header, le hero et le footer.
3. **Couleurs** — modifiables en un seul endroit : les variables `:root` en haut
   de `css/style.css` (`--navy-900`, `--blue-accent`, etc.)
4. **Textes** — chaque section de `index.html` est commentée
   (`<!-- ============ ... ============ -->`) pour la retrouver facilement.

## Tester en local

Ouvrez simplement `index.html` dans un navigateur, ou lancez un petit serveur local :

```bash
python3 -m http.server 8000
```

Puis ouvrez http://localhost:8000

## Déploiement (à faire uniquement avec votre accord)

### Option A — GitHub Pages
1. Créez un dépôt GitHub et poussez ce dossier.
2. Dans les paramètres du dépôt → Pages → sélectionnez la branche principale.
3. Le site sera disponible à `https://<votre-compte>.github.io/<nom-du-depot>/`.

### Option B — Netlify
1. Glissez-déposez le dossier `site-geometre-topographe` sur https://app.netlify.com/drop
   (ou connectez le dépôt GitHub pour un déploiement automatique à chaque `git push`).

## Limites volontaires (positionnement métier)

Ce site ne mentionne ni bornage, ni division parcellaire, ni actes réservés aux
géomètres-experts inscrits à l'Ordre — l'activité présentée est strictement
celle d'un géomètre-topographe (mesure, implantation, métrologie, modélisation).
