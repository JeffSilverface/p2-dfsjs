# Notes d'architecture

## Problèmes identifiés

- **Utilisation excessive des `any`** — C'est une mauvaise pratique qui enlève toute l'utilité de TypeScript. L'utilisation des `any` est proscrite.

- **Typages manquants** — Suite au point précédent, il faut créer les typages manquants.

- **Données non isolées** — La data doit être stockée dans un fichier dédié, ce qui permettrait d'ajouter facilement de nouvelles données sans modifier le code existant.

- **Absence de composants** — Les différents éléments qui composent l'app ne sont pas séparés en composants, ce qui rend l'app difficile à maintenir et à faire évoluer.

- **Page de détail manquante** — Il n'y a pas de page pour le détail de chaque pays, qu'il faudra configurer dans le routeur.

- **Présence de `console.log()`** — C'est une très mauvaise pratique. Il existe des règles ESLint pour vérifier ce type de problème dans une base de code.

- **Layout à créer** — L'idéal serait de créer un Layout avec le header pour la navigation.

- **Routeur à revoir** — Il manque la route pour le composant Country

- **UseEffect** - il y a un useEffect avec une temporisation qui semble simuler un fetch, je pense que c'est pour l'exercice

- **DRY not WET** - On éviter de copier coller du code pour afficher plusieurs fois la même chose on créé un composant et une boucle avec des paramêtres

## Nouvelle architecture

```
src/
├── components/
│   ├── Chart.tsx
│   ├── Indicator.tsx
│   └── Layout.tsx
├── pages/
│   ├── Home.tsx
│   └── Country.tsx
├── hooks/
│   └── useOlympicData.ts
├── data/
│   └── olympicData.json
├── models/
│   └── olympicDataTypes.ts
└── router.tsx
```


