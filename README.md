Parfait, voici ton fichier README.md prêt à être ajouté à ton repo GitHub iconosquare.
Il est clair, bien structuré, et compatible avec l’affichage GitHub (et Notion si tu veux le copier là-bas aussi).

⸻



# 🎯 Iconosquare – GSAP Animation Kit

Ce script rassemble toutes les animations GSAP personnalisées utilisées sur les projets Iconosquare. Il est pensé pour Webflow (ou autre) et s'intègre facilement via CDN.

---

## ✅ Contenu

- **Animations texte** (`fade-up`, `scale-in`, `rotate-in`, `slide-left`)
  - Possibilité d’animer **mot par mot** ou le **bloc entier**
  - Option de réglage personnalisé : `data-duration`, `data-stagger`

- **Animation d'images**
  - `img-reveal`, `img-reveal-top` (avec clip-path)

- **Effets boutons**
  - `btn-blue` : hover avec overlay circulaire
  - `.cta-big_link` : hover simulé au scroll sur mobile

---

## 🚀 Utilisation

### 1. Inclure les dépendances

```html
<script src="https://unpkg.com/split-type"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
<script src="https://cdn.jsdelivr.net/gh/robindelporte/iconosquare@latest/gsap.js"></script>



⸻

2. Animations texte

➤ Exemple simple

<h2 data-effect="text-fade-up">Titre animé</h2>

➤ Exemple mot par mot

<h2 data-effect="text-rotate-in" data-split="words">Animation mot par mot</h2>

➤ Avec vitesse personnalisée

<h2
  data-effect="text-slide-left"
  data-split="words"
  data-duration="0.6"
  data-stagger="0.1"
>
  Animation fluide personnalisée
</h2>



⸻

3. Animation d’images

<img src="..." data-effect="img-reveal">
<img src="..." data-effect="img-reveal-top">



⸻

4. Boutons

btn-blue

<button data-effect="btn-blue">Hover overlay</button>

.cta-big_link (automatique sur mobile)

<a class="cta-big_link">Scroll-to-hover</a>



⸻

📁 Arborescence recommandée

iconosquare/
├── gsap.js
├── README.md



⸻

🔗 CDN public

Tu peux intégrer le script avec ce lien :

https://cdn.jsdelivr.net/gh/robindelporte/iconosquare@latest/gsap.js



⸻

🧠 Infos techniques
	•	Basé sur GSAP + ScrollTrigger + SplitType
	•	Compatible Webflow et autres systèmes CMS
	•	ScrollTrigger joue les animations une seule fois (once: true)
	•	Aucun framework requis

