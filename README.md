Parfait, voici un README.md orienté utilisation uniquement, ultra clair, prêt à être lu directement depuis GitHub ou copié dans Notion.

⸻



# 📘 Iconosquare – Guide d’utilisation des animations

Ce projet regroupe les scripts d’animation utilisés sur les pages Webflow d’Iconosquare.

---

## 🚀 Intégration

### 1. Ajouter les dépendances GSAP

Dans Webflow ou dans ton projet HTML, ajoute **ces 3 CDN obligatoires** avant le script principal :

```html
<script src="https://unpkg.com/split-type"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>

2. Charger le script Iconosquare

<script src="https://cdn.jsdelivr.net/gh/robindelporte/iconosquare@latest/gsap.js"></script>



⸻

🧩 Utilisation des effets

✨ Animation de texte

Structure de base :

<h2 data-effect="text-fade-up">Texte animé</h2>

Options disponibles :

Attribut	Description	Exemple
data-effect	Type d’animation (fade, rotate, etc.)	text-fade-up
data-split	Animation par mot (si words)	data-split="words"
data-duration	Durée custom (facultatif)	data-duration="0.5"
data-stagger	Délai entre les mots (facultatif)	data-stagger="0.08"

Effets disponibles :
	•	text-fade-up
	•	text-scale-in
	•	text-rotate-in
	•	text-slide-left

⸻

🖼 Animation d’images

Ajout de l’attribut :

<img src="..." data-effect="img-reveal">
<img src="..." data-effect="img-reveal-top">

Effets disponibles :
	•	img-reveal → masque horizontal (depuis les côtés)
	•	img-reveal-top → masque vertical (depuis le haut)

Durée : 1.3s par défaut

⸻

🔘 Animation des boutons

btn-blue — overlay circulaire

<button data-effect="btn-blue">Bouton</button>

Nécessite que le bouton ait position: relative
L’effet crée automatiquement un overlay circulaire au hover

⸻

.cta-big_link — hover déclenché au scroll (mobile uniquement)

<a class="cta-big_link">Je veux tester</a>

Pas besoin d’attribut : effet automatique au scroll sur mobile

⸻

🛠 Utilisation dans Webflow
	•	Les effets fonctionnent avec le CMS
	•	L’animation par mot est compatible avec les titres contenant des icônes (grâce à display-inline)
	•	Les animations sont jouées une seule fois au scroll (once: true)
	•	Les animations sont configurables sans modifier le JS

⸻

📎 Exemple complet

<h2 data-effect="text-rotate-in" data-split="words" data-duration="0.6" data-stagger="0.1">
  Découvrez nos outils Instagram
</h2>

<img src="..." data-effect="img-reveal-top">

<a class="cta-big_link">Essayer maintenant</a>
<button data-effect="btn-blue">En savoir plus</button>



⸻

🧪 Environnement supporté
	•	✅ Webflow
	•	✅ HTML statique
	•	✅ Mobile + desktop
	•	✅ CMS ready

⸻

✍️ Licence

Utilisation libre sur les projets Iconosquare.

---

Tu peux maintenant :
- Copier ce contenu dans ton fichier `README.md`
- Ou le drag & drop direct dans GitHub Desktop

Tu veux un petit badge style “Made for Webflow” aussi ? 😄
