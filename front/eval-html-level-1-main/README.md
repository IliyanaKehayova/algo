# Évaluation HTML / CSS (niveau 1)

- Durée : 2 à 4 heures

## Objectif

A partir de maquettes fournies, implémenter l'interface de pages web en utilisant uniquement HTML5 et CSS3.

**Compétences évaluées :**

- Structurer une page avec HTML
- Mettre en forme une page avec CSS
- Respecter une maquette graphique

## Consignes

**Commencez par cloner ce dépôt sur votre machine locale !**

Créez les 3 pages demandées.

Respectez au maximum les maquettes fournies :

- Disposition des éléments ;
- Tailles et espacements ;
- Couleurs ;
- Typographies (si indiquées).

Utilisez un HTML sémantique : `header, nav, main, section, article, footer`

Vérifiez qu'aucune erreur n'apparaît dans le navigateur.

## Contraintes

- ✅ Autorisé : HTML5, CSS3
- ❌ Interdit : JavaScript, Framework CSS, Copie d'un site existant



## Arborescence Web
```
eval-html-level-1/
│
├── 01-affiche-piscine.html
├── 02-carte-visite.html
├── 03-affiche-securite.html
│
├── css/
│   └── piscine.css
│   └── carte-visite.css
│   └── affiche-securite.css
│
└── img/
│   └── avatar-developpeur.png
│   └── avatar-developpeuse.png
│   └── swimming.webp
│   └── security.jpg
│   └── wood.jpg│
|
└── maquettes/
│   └── 01-affiche-piscine.png
│   └── 02-carte-visite.png
│   └── 03-affiche-securite.png
```

## Conseil

Commencez par créer la structure HTML des trois pages avant de travailler le CSS. Pensez à tester régulièrement votre travail dans le navigateur.




# Page 1 : [Affiche Piscine](./maquettes/01-affiche-piscine.png)

**Largeur du cadre principal :** 920px centré sur la page.

**Police :** Arial

- <span style="display: inline-block; vertical-align: middle; width: 20px; height: 20px; background: #0c4e94"></span> Bleu : `#0c4e94` 
- <span style="display: inline-block; vertical-align: middle; width: 20px; height: 20px; background: #000000"></span> Noir : `#000000`
- <span style="display: inline-block; vertical-align: middle; width: 20px; height: 20px; background: #d31f26"></span> Rouge : `#d31f26`

# Page 2 : [Carte de visite ](./maquettes/02-carte-visite.png)

**Largeur du cadre principal :** 780px centré sur la page.

**Police :** Verdana, Geneva, Tahoma, sans-serif

Remplacer la photo de la maquette par l'un des avatars présents dans le dossier img *(avatar-developpeur.png ou avatar-developpeuse.png)*.

- Icône Enveloppe : ✉️
- Icône Téléphone : 📞
- <span style="display: inline-block; vertical-align: middle; width: 20px; height: 20px; background: #4CAF50"></span> Vert 1 : `#4CAF50`
- <span style="display: inline-block; vertical-align: middle; width: 20px; height: 20px; background: #8BC34A"></span> Vert 2 : `#8BC34A`
- <span style="border: 1px solid black; display: inline-block; vertical-align: middle; width: 20px; height: 20px; background: #f0f2f5"></span> Gris : `#f0f2f5`
- <span style="border: 1px solid black; display: inline-block; vertical-align: middle; width: 20px; height: 20px; background: #333333"></span> Noir : `#333333`
- <span style="border: 1px solid black; display: inline-block; vertical-align: middle; width: 20px; height: 20px; background: #ffffff"></span> Blanc : `#ffffff`

# Page 3 : [Règles de sécurité](./maquettes/03-affiche-securite.png)

**Largeur du cadre principal :** 960px centré sur la page.
**Police :** Arial, sans-serif

- Icône Danger : ⚠️
- Icône Interdit : 🚫
- Icône recommandation : ✅

- <span style="border: 1px solid black; display: inline-block; vertical-align: middle; width: 20px; height: 20px; background: #FFFF00"></span> Jaune : `#FFFF00`
- <span style="border: 1px solid black; display: inline-block; vertical-align: middle; width: 20px; height: 20px; background: #f8d7da"></span> Rouge 1 : `#f8d7da`
- <span style="border: 1px solid black; display: inline-block; vertical-align: middle; width: 20px; height: 20px; background: #721c24"></span> Rouge 2 : `#721c24`
- <span style="border: 1px solid black; display: inline-block; vertical-align: middle; width: 20px; height: 20px; background: #dc3545"></span> Rouge 3 : `#dc3545`
- <span style="border: 1px solid black; display: inline-block; vertical-align: middle; width: 20px; height: 20px; background: #e2f0d9"></span> Vert 1 : `#e2f0d9`
- <span style="border: 1px solid black; display: inline-block; vertical-align: middle; width: 20px; height: 20px; background: #155724"></span> Vert 2 : `#155724`
- <span style="border: 1px solid black; display: inline-block; vertical-align: middle; width: 20px; height: 20px; background: #e9ecef"></span> Gris 1 : `#e9ecef`
- <span style="border: 1px solid black; display: inline-block; vertical-align: middle; width: 20px; height: 20px; background: #6c757d"></span> Gris 2 : `#6c757d`



# Critères d'évaluation (par page web)

| Critère | Points | 
| --- | --- |
| Respect des maquettes | 8 |
| Structure HTML | 5 |
| Mise en forme CSS | 5 |
| Qualité du code et indentation | 2 |
| Total | 20 |

**Bonus :** Si votre code HTML ne contient ni `<div>` ni `<span>`, un bonus de points vous sera accordé !

# Restitution du travail

**Lorque vous avez terminé, 2 options s'offrent à vous :** 

- Poussez votre travail sur un dépôt github/gitlab et transmettre le lien par email à l'évaluateur

OU

- Compressez votre travail dans un fichier ZIP puis le transmettre par email à l'évaluateur.