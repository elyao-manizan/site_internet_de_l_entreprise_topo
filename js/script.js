/* =========================================================
   GéoAxe — Interactions du site
   ---------------------------------------------------------
   1. Menu mobile
   2. Ombre du header au défilement
   3. Accordéons (savoir-faire + FAQ)
   4. Apparition des blocs au défilement
   5. Sommaire actif (page Domaines d'activité)
   6. Filtres du portfolio + bouton « Voir plus »
   7. Emplacements photo : détection des images manquantes
   8. Formulaire de contact (envoi Formspree)
   9. Année automatique dans le pied de page
   ========================================================= */
(function () {
  'use strict';

  var $  = function (sel, ctx) { return (ctx || document).querySelector(sel); };
  var $$ = function (sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); };

  /* -------------------------------------------------------
     1. Menu mobile
     ------------------------------------------------------- */
  var navToggle = $('#navToggle');
  var primaryNav = $('#primaryNav');

  if (navToggle && primaryNav) {
    navToggle.addEventListener('click', function () {
      var open = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!open));
      navToggle.setAttribute('aria-label', open ? 'Ouvrir le menu' : 'Fermer le menu');
      primaryNav.classList.toggle('is-open', !open);
      document.body.classList.toggle('nav-open', !open);
    });

    // Fermeture au clic sur un lien
    $$('a', primaryNav).forEach(function (link) {
      link.addEventListener('click', function () {
        navToggle.setAttribute('aria-expanded', 'false');
        primaryNav.classList.remove('is-open');
        document.body.classList.remove('nav-open');
      });
    });

    // Fermeture avec la touche Échap
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && primaryNav.classList.contains('is-open')) {
        navToggle.setAttribute('aria-expanded', 'false');
        primaryNav.classList.remove('is-open');
        document.body.classList.remove('nav-open');
        navToggle.focus();
      }
    });
  }

  /* -------------------------------------------------------
     2. Ombre du header au défilement
     ------------------------------------------------------- */
  var header = $('.site-header');
  if (header) {
    var onScroll = function () {
      header.classList.toggle('is-stuck', window.scrollY > 8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* -------------------------------------------------------
     3. Accordéons (savoir-faire + FAQ)
     ------------------------------------------------------- */
  function setupAccordion(itemSelector, triggerSelector, exclusive) {
    $$(itemSelector).forEach(function (item) {
      var trigger = $(triggerSelector, item);
      var panel = $('.accordion-panel, .faq-panel', item);
      if (!trigger || !panel) return;

      trigger.setAttribute('aria-expanded', item.classList.contains('is-open') ? 'true' : 'false');

      trigger.addEventListener('click', function () {
        var isOpen = item.classList.contains('is-open');

        if (exclusive && !isOpen) {
          $$(itemSelector).forEach(function (other) {
            if (other === item) return;
            other.classList.remove('is-open');
            var t = $(triggerSelector, other);
            if (t) t.setAttribute('aria-expanded', 'false');
          });
        }

        item.classList.toggle('is-open', !isOpen);
        trigger.setAttribute('aria-expanded', String(!isOpen));
      });
    });
  }

  setupAccordion('.accordion-item', '.accordion-trigger', false);
  setupAccordion('.faq-item', '.faq-trigger', true);

  /* -------------------------------------------------------
     4. Apparition des blocs au défilement
     ------------------------------------------------------- */
  var reveals = $$('.reveal');
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!reveals.length) {
    // rien à faire
  } else if (reduceMotion || !('IntersectionObserver' in window)) {
    reveals.forEach(function (el) { el.classList.add('is-visible'); });
  } else {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

    reveals.forEach(function (el) { revealObserver.observe(el); });
  }

  /* -------------------------------------------------------
     5. Sommaire actif (page Domaines d'activité)
     ------------------------------------------------------- */
  var domainLinks = $$('.domains-nav a');
  if (domainLinks.length && 'IntersectionObserver' in window) {
    var sections = domainLinks
      .map(function (a) { return document.getElementById(a.getAttribute('href').slice(1)); })
      .filter(Boolean);

    var sectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        domainLinks.forEach(function (a) {
          a.classList.toggle('is-active', a.getAttribute('href') === '#' + entry.target.id);
        });
      });
    }, { rootMargin: '-25% 0px -60% 0px', threshold: 0 });

    sections.forEach(function (s) { sectionObserver.observe(s); });
  }

  /* -------------------------------------------------------
     6. Filtres du portfolio + bouton « Voir plus »
     ------------------------------------------------------- */
  var projectGrid = $('#projectGrid');
  if (projectGrid) {
    var STEP = 6;                       // nombre de projets affichés par palier
    var cards = $$('.project-card', projectGrid);
    var filterBtns = $$('.filter-btn');
    var loadMoreBtn = $('#loadMore');
    var emptyState = $('#projectEmpty');
    var currentFilter = 'all';
    var shown = STEP;

    function render() {
      var matching = cards.filter(function (c) {
        return currentFilter === 'all' || (c.dataset.category || '').split(' ').indexOf(currentFilter) > -1;
      });

      cards.forEach(function (c) { c.classList.add('is-hidden'); });
      matching.slice(0, shown).forEach(function (c) { c.classList.remove('is-hidden'); });

      if (loadMoreBtn) {
        loadMoreBtn.parentNode.style.display = matching.length > shown ? '' : 'none';
      }
      if (emptyState) {
        emptyState.style.display = matching.length ? 'none' : '';
      }
    }

    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        filterBtns.forEach(function (b) {
          b.classList.remove('is-active');
          b.setAttribute('aria-pressed', 'false');
        });
        btn.classList.add('is-active');
        btn.setAttribute('aria-pressed', 'true');
        currentFilter = btn.dataset.filter || 'all';
        shown = STEP;
        render();
      });
    });

    if (loadMoreBtn) {
      loadMoreBtn.addEventListener('click', function () {
        shown += STEP;
        render();
      });
    }

    render();
  }

  /* -------------------------------------------------------
     7. Emplacements photo : détection des images manquantes
     Si le fichier existe, on masque le libellé « photo à fournir ».
     ------------------------------------------------------- */
  $$('.media img').forEach(function (img) {
    var wrap = img.closest('.media');
    if (!wrap) return;

    var ok = function () { wrap.classList.add('has-image'); };
    var ko = function () { wrap.classList.remove('has-image'); img.remove(); };

    if (img.complete) {
      if (img.naturalWidth > 0) { ok(); } else { ko(); }
    } else {
      img.addEventListener('load', ok);
      img.addEventListener('error', ko);
    }
  });

  /* -------------------------------------------------------
     7 bis. Logo : on affiche le fichier image s'il existe,
     sinon le logo vectoriel de secours dessiné dans icons.js.
     ------------------------------------------------------- */
  $$('.logo-img').forEach(function (img) {
    var fallback = img.nextElementSibling;
    var useFallback = function () {
      img.remove();
      if (fallback) fallback.style.display = 'inline-flex';
    };
    if (img.complete) {
      if (img.naturalWidth === 0) useFallback();
    } else {
      img.addEventListener('error', useFallback);
    }
  });

  /* -------------------------------------------------------
     8. Formulaire de contact
     Envoi AJAX vers Formspree (voir data-endpoint sur le <form>).
     Tant que l'identifiant n'est pas renseigné, on bascule
     automatiquement sur l'ouverture du logiciel de messagerie.
     ------------------------------------------------------- */
  $$('form[data-contact-form]').forEach(function (form) {
    var status = $('.form-status', form);
    var submitBtn = $('button[type="submit"]', form);
    var endpoint = form.getAttribute('action') || '';
    var notConfigured = endpoint.indexOf('VOTRE_ID') > -1 || endpoint === '';

    function show(type, message) {
      if (!status) { window.alert(message); return; }
      status.textContent = message;
      status.className = 'form-status is-visible is-' + type;
      status.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.reportValidity()) return;

      var data = new FormData(form);

      // Secours : ouverture du logiciel de messagerie si Formspree
      // n'est pas encore configuré.
      if (notConfigured) {
        var lines = [];
        data.forEach(function (value, key) {
          if (key.charAt(0) === '_' || key === 'rgpd') return;
          lines.push(key + ' : ' + value);
        });
        var mail = form.dataset.fallbackEmail || 'geoaxe2@gmail.com';
        window.location.href = 'mailto:' + mail +
          '?subject=' + encodeURIComponent('Demande de devis — site GéoAxe') +
          '&body=' + encodeURIComponent(lines.join('\n'));
        show('success', 'Votre logiciel de messagerie va s\'ouvrir avec le message pré-rempli. Il ne reste qu\'à l\'envoyer.');
        return;
      }

      if (submitBtn) { submitBtn.disabled = true; submitBtn.dataset.label = submitBtn.textContent; submitBtn.textContent = 'Envoi en cours…'; }

      fetch(endpoint, { method: 'POST', body: data, headers: { Accept: 'application/json' } })
        .then(function (res) {
          if (res.ok) {
            form.reset();
            show('success', 'Merci, votre message est bien parti. Réponse sous 24 heures ouvrées.');
          } else {
            return res.json().then(function (d) {
              throw new Error((d.errors || []).map(function (x) { return x.message; }).join(', ') || 'Erreur');
            });
          }
        })
        .catch(function () {
          show('error', 'L\'envoi a échoué. Écrivez-moi directement à geoaxe2@gmail.com ou appelez le 07 48 33 70 41.');
        })
        .then(function () {
          if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = submitBtn.dataset.label || 'Envoyer ma demande'; }
        });
    });
  });

  /* -------------------------------------------------------
     9. Année automatique dans le pied de page
     ------------------------------------------------------- */
  $$('[data-year]').forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });
})();
