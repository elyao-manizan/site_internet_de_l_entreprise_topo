/* =========================================================
   GéoAxe — Sprite d'icônes
   ---------------------------------------------------------
   Toutes les icônes du site sont dessinées ici (SVG "fait main",
   aucune image externe, aucune dépendance). Le sprite est injecté
   au début du <body> de chaque page, puis réutilisé via :
       <svg class="icon" aria-hidden="true"><use href="#icon-xxx"></use></svg>

   Pour ajouter une icône : ajoutez un <symbol id="icon-mon-icone"
   viewBox="0 0 24 24"> … </symbol> dans la chaîne ci-dessous.
   ========================================================= */
(function () {
  var sprite = [
    '<svg xmlns="http://www.w3.org/2000/svg" style="position:absolute;width:0;height:0;overflow:hidden" aria-hidden="true" focusable="false">',
    '<defs><style>symbol{fill:none;stroke:currentColor;stroke-width:1.6;stroke-linecap:round;stroke-linejoin:round}</style></defs>',

    /* --- Logo (repli dessiné, repris de l'identité GéoAxe) --- */
    '<symbol id="icon-logo" viewBox="0 0 48 48" stroke-width="2.2">',
      '<path d="M24 6.5a17.5 17.5 0 0 1 17.5 17.5" stroke-linecap="round"/>',
      '<path d="M6.5 24A17.5 17.5 0 0 1 24 6.5" stroke-linecap="round"/>',
      '<path d="M41.5 24A17.5 17.5 0 0 1 32 39.6" stroke-linecap="round" opacity=".55"/>',
      '<path d="M16 39.6A17.5 17.5 0 0 1 6.5 24" stroke-linecap="round" opacity=".55"/>',
      '<path d="M24 1.5 26.4 8 24 6.2 21.6 8z" fill="currentColor" stroke="none"/>',
      '<path d="M15.5 36 24 17l8.5 19" stroke-linejoin="round"/>',
      '<path d="M24 24.5 27 31h-6z" fill="var(--accent, #2f8f3f)" stroke="none"/>',
      '<path d="M8 40.5c5.5-3.6 10.8-5.4 16-5.4s10.5 1.8 16 5.4" stroke="var(--accent, #2f8f3f)" stroke-width="2" stroke-linecap="round"/>',
    '</symbol>',

    /* --- Domaines d'activité --- */
    '<symbol id="icon-topo" viewBox="0 0 24 24">',
      '<circle cx="12" cy="6" r="2.6"/><path d="M12 8.6v3.2"/>',
      '<path d="M7.5 11.8h9l2 8.2h-13z"/><path d="M3.5 20h17"/>',
      '<path d="M9.4 4.6 6.6 3.2M14.6 4.6l2.8-1.4"/>',
    '</symbol>',
    '<symbol id="icon-building" viewBox="0 0 24 24">',
      '<path d="M3 21h18"/><path d="M5 21V6.5L12 3l7 3.5V21"/>',
      '<path d="M9.5 21v-5h5v5"/><path d="M9 9.5h1.5M13.5 9.5H15M9 12.8h1.5M13.5 12.8H15"/>',
    '</symbol>',
    '<symbol id="icon-infra" viewBox="0 0 24 24">',
      '<path d="M2 20h20"/><path d="M4 20V9l8-5 8 5v11"/>',
      '<path d="M4 9h16M8 20v-7h8v7"/><path d="M12 4v5"/>',
    '</symbol>',
    '<symbol id="icon-vrd" viewBox="0 0 24 24">',
      '<path d="M3 6.5h18M3 17.5h18" opacity=".5"/>',
      '<path d="M8 3v18M16 3v18" stroke-dasharray="2.6 2.6"/>',
      '<circle cx="12" cy="12" r="2.4"/><path d="M12 9.6V6.5M12 14.4v3.1"/>',
    '</symbol>',
    '<symbol id="icon-control" viewBox="0 0 24 24">',
      '<path d="M12 2.5 3.5 6v6c0 5 3.6 8.2 8.5 9.5 4.9-1.3 8.5-4.5 8.5-9.5V6z"/>',
      '<path d="m8.8 12.1 2.3 2.3 4.3-4.6"/>',
    '</symbol>',
    '<symbol id="icon-gis" viewBox="0 0 24 24">',
      '<path d="m3 6.5 6-2.5 6 2.5 6-2.5v13l-6 2.5-6-2.5-6 2.5z"/>',
      '<path d="M9 4v13M15 6.5v13"/>',
      '<circle cx="12" cy="10.5" r="1.6" fill="currentColor" stroke="none"/>',
    '</symbol>',

    /* --- Savoir-faire / matériel --- */
    '<symbol id="icon-gnss" viewBox="0 0 24 24">',
      '<circle cx="12" cy="13" r="5.6"/><path d="M12 7.4v11.2M6.4 13h11.2" opacity=".5"/>',
      '<circle cx="12" cy="13" r="1.4" fill="currentColor" stroke="none"/>',
      '<path d="M12 2.4v2.6"/><path d="m9.8 4.2 2.2-2 2.2 2" fill="currentColor" stroke="none"/>',
      '<circle cx="19.5" cy="5" r="1" fill="currentColor" stroke="none"/>',
      '<circle cx="4.6" cy="6.5" r="1" fill="currentColor" stroke="none"/>',
    '</symbol>',
    '<symbol id="icon-scanner" viewBox="0 0 24 24">',
      '<rect x="8.5" y="3" width="7" height="5.2" rx="1.2"/>',
      '<path d="M12 8.2v3.4"/><path d="M12 11.6 5 21M12 11.6 19 21M12 11.6V21" opacity=".75"/>',
      '<path d="M7.4 16.4a7 7 0 0 1 9.2 0" stroke-dasharray="2 2.4"/>',
    '</symbol>',
    '<symbol id="icon-drone" viewBox="0 0 24 24">',
      '<circle cx="5.5" cy="5.5" r="2.5"/><circle cx="18.5" cy="5.5" r="2.5"/>',
      '<circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>',
      '<rect x="9.5" y="9.5" width="5" height="5" rx="1.2"/>',
      '<path d="m7.3 7.3 2.2 2.2M16.7 7.3l-2.2 2.2M7.3 16.7l2.2-2.2M16.7 16.7l-2.2-2.2"/>',
    '</symbol>',
    '<symbol id="icon-level" viewBox="0 0 24 24">',
      '<rect x="2.5" y="9" width="19" height="6" rx="1.4"/>',
      '<circle cx="12" cy="12" r="2.2"/><path d="M7 9v6M17 9v6" opacity=".6"/>',
    '</symbol>',
    '<symbol id="icon-cad" viewBox="0 0 24 24">',
      '<rect x="2.5" y="3.5" width="19" height="13" rx="1.6"/>',
      '<path d="m6 13.5 4-6 3 3.4 5-5.4"/><path d="M2.5 20.5h19"/>',
    '</symbol>',
    '<symbol id="icon-mnt" viewBox="0 0 24 24">',
      '<path d="m2 16 5-5.5 4 3 5-7 6 9.5"/>',
      '<path d="m2 20 5-5.5 4 3 5-7 6 9.5" opacity=".45"/>',
    '</symbol>',
    '<symbol id="icon-target" viewBox="0 0 24 24">',
      '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4.6"/>',
      '<circle cx="12" cy="12" r="1" fill="currentColor" stroke="none"/>',
      '<path d="M12 1.6v3.2M12 19.2v3.2M1.6 12h3.2M19.2 12h3.2"/>',
    '</symbol>',
    '<symbol id="icon-layers" viewBox="0 0 24 24">',
      '<path d="m12 3 9 4.8-9 4.8-9-4.8z"/><path d="m3 12.4 9 4.8 9-4.8"/>',
      '<path d="m3 16.8 9 4.8 9-4.8" opacity=".5"/>',
    '</symbol>',
    '<symbol id="icon-compass" viewBox="0 0 24 24">',
      '<circle cx="12" cy="12" r="9"/>',
      '<path d="m15.5 8.5-2 5.2-5.2 2 2-5.2z" fill="currentColor" stroke="none" opacity=".85"/>',
    '</symbol>',
    '<symbol id="icon-ruler" viewBox="0 0 24 24">',
      '<rect x="1.8" y="7.5" width="20.4" height="9" rx="1.6" transform="rotate(-8 12 12)"/>',
      '<path d="M6.5 8.4v3M10.2 7.8v4.4M13.9 7.2v3M17.6 6.6v4.4"/>',
    '</symbol>',

    /* --- Engagements / interface --- */
    '<symbol id="icon-check" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="m8 12.4 2.7 2.7L16 9.5"/></symbol>',
    '<symbol id="icon-shield" viewBox="0 0 24 24"><path d="M12 2.5 4 6v6.2c0 4.7 3.3 7.8 8 9.3 4.7-1.5 8-4.6 8-9.3V6z"/></symbol>',
    '<symbol id="icon-clock" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 6.8V12l3.4 2.1"/></symbol>',
    '<symbol id="icon-file" viewBox="0 0 24 24"><path d="M14 2.8H7a1.8 1.8 0 0 0-1.8 1.8v14.8A1.8 1.8 0 0 0 7 21.2h10a1.8 1.8 0 0 0 1.8-1.8V7.6z"/><path d="M14 2.8v4.8h4.8"/><path d="M8.6 12.6h6.8M8.6 16.2h6.8"/></symbol>',
    '<symbol id="icon-lock" viewBox="0 0 24 24"><rect x="4.5" y="10.5" width="15" height="10.2" rx="2"/><path d="M8 10.5V7.8a4 4 0 0 1 8 0v2.7"/></symbol>',
    '<symbol id="icon-euro" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M15.4 8.6a4.4 4.4 0 0 0-6.6 1.5 5.4 5.4 0 0 0 0 3.8 4.4 4.4 0 0 0 6.6 1.5"/><path d="M6.8 11h5.6M6.8 13.4h5.6"/></symbol>',
    '<symbol id="icon-chat" viewBox="0 0 24 24"><path d="M20.4 12.6a7.6 7.6 0 0 1-8.2 7.5L5 21.5l1.4-4.6a7.6 7.6 0 1 1 14-4.3z"/></symbol>',
    '<symbol id="icon-users" viewBox="0 0 24 24"><path d="M15.6 20v-1.8a3.6 3.6 0 0 0-3.6-3.6H6.6A3.6 3.6 0 0 0 3 18.2V20"/><circle cx="9.3" cy="7.4" r="3.4"/><path d="M21 20v-1.8a3.6 3.6 0 0 0-2.7-3.5M15.4 4.2a3.4 3.4 0 0 1 0 6.5"/></symbol>',
    '<symbol id="icon-mail" viewBox="0 0 24 24"><rect x="2.6" y="5" width="18.8" height="14" rx="2"/><path d="m3.4 6.4 8.6 6.6 8.6-6.6"/></symbol>',
    '<symbol id="icon-phone" viewBox="0 0 24 24"><path d="M21 16.9v2.6a1.8 1.8 0 0 1-2 1.8 17.6 17.6 0 0 1-7.7-2.7 17.3 17.3 0 0 1-5.3-5.3A17.6 17.6 0 0 1 3.3 5.6 1.8 1.8 0 0 1 5.1 3.6h2.6a1.8 1.8 0 0 1 1.8 1.6c.1 1 .3 1.9.7 2.8a1.8 1.8 0 0 1-.4 1.9l-1.1 1.1a14 14 0 0 0 5.3 5.3l1.1-1.1a1.8 1.8 0 0 1 1.9-.4c.9.3 1.8.6 2.8.7a1.8 1.8 0 0 1 1.6 1.8z"/></symbol>',
    '<symbol id="icon-pin" viewBox="0 0 24 24"><path d="M12 2.6a6.9 6.9 0 0 0-6.9 6.9c0 5.2 6.9 11.9 6.9 11.9s6.9-6.7 6.9-11.9A6.9 6.9 0 0 0 12 2.6z"/><circle cx="12" cy="9.4" r="2.6"/></symbol>',
    '<symbol id="icon-chevron" viewBox="0 0 24 24" stroke-width="2"><path d="m5.5 8.8 6.5 6.4 6.5-6.4"/></symbol>',
    '<symbol id="icon-arrow" viewBox="0 0 24 24" stroke-width="2"><path d="M4 12h15"/><path d="m13 6 6 6-6 6"/></symbol>',
    '<symbol id="icon-alert" viewBox="0 0 24 24"><path d="M12 3.2 1.8 20.6h20.4z"/><path d="M12 9.6v4.4"/><circle cx="12" cy="17.4" r=".9" fill="currentColor" stroke="none"/></symbol>',
    '<symbol id="icon-search" viewBox="0 0 24 24"><circle cx="10.8" cy="10.8" r="7.2"/><path d="m16.2 16.2 4.6 4.6"/></symbol>',
    '<symbol id="icon-download" viewBox="0 0 24 24"><path d="M21 15.5v3.8a1.8 1.8 0 0 1-1.8 1.8H4.8A1.8 1.8 0 0 1 3 19.3v-3.8"/><path d="m7.4 10.6 4.6 4.6 4.6-4.6"/><path d="M12 15.2V3.4"/></symbol>',
    '<symbol id="icon-linkedin" viewBox="0 0 24 24" stroke="none" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM3 9.5h4v11H3zM10 9.5h3.8v1.5a4.2 4.2 0 0 1 3.7-1.8c3.1 0 4.5 1.9 4.5 5.1v6.2h-4v-5.5c0-1.6-.6-2.5-1.9-2.5-1.2 0-2.1.8-2.1 2.5v5.5h-4z"/></symbol>',
    '<symbol id="icon-quote" viewBox="0 0 24 24" stroke="none" fill="currentColor"><path d="M9.6 5.4c-3.4 1.4-5.6 4.6-5.6 8.6 0 3 1.7 4.8 4 4.8 2 0 3.5-1.5 3.5-3.4 0-1.9-1.3-3.3-3.1-3.3h-.6c.3-1.8 1.6-3.3 3.3-4.1zM20 5.4c-3.4 1.4-5.6 4.6-5.6 8.6 0 3 1.7 4.8 4 4.8 2 0 3.5-1.5 3.5-3.4 0-1.9-1.3-3.3-3.1-3.3h-.6c.3-1.8 1.6-3.3 3.3-4.1z"/></symbol>',

    '</svg>'
  ].join('');

  function inject() {
    if (document.getElementById('geoaxe-sprite')) return;
    var holder = document.createElement('div');
    holder.id = 'geoaxe-sprite';
    holder.setAttribute('aria-hidden', 'true');
    holder.style.cssText = 'position:absolute;width:0;height:0;overflow:hidden';
    holder.innerHTML = sprite;
    document.body.insertBefore(holder, document.body.firstChild);
  }

  if (document.body) { inject(); }
  else { document.addEventListener('DOMContentLoaded', inject); }
})();
