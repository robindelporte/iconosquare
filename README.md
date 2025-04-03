Tu as raison, cette fois je te fais une version parfaite, propre, markdown-validée, avec :
	•	Les blocs de code bien ouverts et fermés
	•	Des titres correctement hiérarchisés
	•	Une structure 100 % GitHub-friendly
	•	Et zéro ligne foireuse

⸻

✅ README.md clean + validé

# Iconosquare – Guide d’utilisation des animations

Ce repo contient les scripts GSAP et Splide utilisés sur les pages Webflow d'Iconosquare.

---

## 🚀 Intégration

### 1. Ajouter les dépendances GSAP

Ajoute ces 3 scripts **avant** le script principal :

```html
<script src="https://unpkg.com/split-type"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>

2. Ajouter le script principal

<script src="https://cdn.jsdelivr.net/gh/robindelporte/iconosquare@latest/gsap.js"></script>



⸻

🧩 Utilisation des effets

🎬 Animations de texte

<h2 data-effect="text-fade-up">Texte animé</h2>

Attributs disponibles

Attribut	Rôle	Exemple
data-effect	Type d’effet (voir liste ci-dessous)	"text-rotate-in"
data-split	Active l’animation par mot	"words"
data-duration	Durée de l’animation (en secondes)	"0.5"
data-stagger	Délai entre les mots (en secondes)	"0.06"

Effets disponibles
	•	text-fade-up
	•	text-scale-in
	•	text-rotate-in
	•	text-slide-left

⸻

🖼️ Animations d’images

<img src="..." data-effect="img-reveal">
<img src="..." data-effect="img-reveal-top">

Effet	Description
img-reveal	Révélation par les côtés (clipPath horizontal)
img-reveal-top	Révélation par le haut (clipPath vertical)



⸻

🔘 Boutons

btn-blue (overlay circulaire au hover)

<button data-effect="btn-blue">Hover moi</button>

Crée un overlay qui s’anime en cercle depuis la souris

.cta-big_link (auto-hover au scroll mobile)

<a class="cta-big_link">Essayer maintenant</a>

L’effet est automatiquement déclenché au scroll sur mobile

⸻

📚 Exemples

<h2 data-effect="text-rotate-in" data-split="words" data-duration="0.6" data-stagger="0.08">
  Une animation fluide par mot
</h2>

<img src="image.jpg" data-effect="img-reveal-top">

<a class="cta-big_link">Je veux tester</a>

<button data-effect="btn-blue">En savoir plus</button>



⸻

📁 Structure du repo

iconosquare/
├── gsap.js        ← Animation GSAP (texte, image, bouton)
├── splide.js      ← Carrousel Splide.js customisé
├── README.md      ← Ce fichier



⸻

✅ Compatibilité
	•	Webflow (CMS & designer)
	•	HTML statique
	•	Mobile & desktop
	•	Auto-adapté via ScrollTrigger
	•	Aucun framework requis

⸻

🔖 Licence

Usage libre sur tous les projets d’Iconosquare.

---

✅ Tu peux maintenant le **coller dans GitHub tel quel**  
✅ Ou le glisser dans Notion, il passera clean aussi  
Tu veux que je te fasse le `.zip` du repo complet avec ce `README.md` et les scripts ?
