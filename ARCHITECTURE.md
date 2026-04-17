# Architecture front-end — TéléSport

## Arborescence

```
src/
├── components/
│   ├── Indicator.tsx       ← composant dumb
│   ├── Layout.tsx          ← structure commune avec navigation
│   ├── LineChart.tsx       ← composant dumb
│   └── PieChart.tsx        ← composant smart
├── pages/
│   ├── Home.tsx            ← page d'accueil
│   └── Country.tsx         ← page de détail
├── hooks/
│   └── useData.ts          ← custom hook de gestion des données
├── data/
│   └── olympicsData.json   ← données
├── models/
│   └── olympicDataTypes.ts ← interfaces
├── Router.tsx              ← définition des routes
└── App.tsx
```

---

## Composants

### Composants "dumb" (présentationnels)

Ces composants ne gèrent aucune logique métier. Ils reçoivent des données via leurs props et se contentent d'afficher.

| Composant   | Rôle                                                                  |
| ----------- | --------------------------------------------------------------------- |
| `Indicator` | Affiche un titre et une valeur numérique (ex. nombre de médailles)    |
| `LineChart` | Affiche l'évolution des médailles d'un pays via un graphique linéaire |
| `Layout`    | Enveloppe toutes les pages avec la structure commune (fond, padding)  |

### Composants "smart" (logique)

| Composant  | Rôle                                                                               |
| ---------- | ---------------------------------------------------------------------------------- |
| `PieChart` | Récupère les données via `useData`, calcule les totaux, gère la navigation au clic |

### Pages

| Page      | Route          | Rôle                                                               |
| --------- | -------------- | ------------------------------------------------------------------ |
| `Home`    | `/`            | Vue globale : indicateurs généraux + graphique circulaire par pays |
| `Country` | `/country/:id` | Vue détaillée d'un pays : indicateurs + évolution des médailles    |

---

## Routeur

Le routeur est dans `router.tsx`. Il utilise `Layout` comme route parente, ce qui garantit que la structure commune est toujours affichée quelle que soit la page active.

```
Layout
└── <Outlet />
    ├── /              → Home
    └── /country/:id  → Country
```

---

## Custom Hook — `useData`

`useData` est le point d'accès unique aux données de l'application.

**Ce qu'il expose :**

- `data` — tableau des pays avec leurs participations (`Olympic[] | null`)
- `isLoading` — état de chargement
- `totalParticipatingCountries` — nombre de pays
- `totalGamesEditions` — nombre d'éditions

**Rôle actuel :** simule un appel asynchrone via `setTimeout` et charge les données depuis `olympicsData.json`.

---

## Typage

Toutes les structures de données sont typées via des interfaces TypeScript dans `src/models/`.

| Interface        | Description                                                       |
| ---------------- | ----------------------------------------------------------------- |
| `Olympic`        | Représente un pays avec son nom et ses participations             |
| `Participation`  | Représente une édition des JO (année, ville, médailles, athlètes) |
| `IndicatorProps` | Props du composant `Indicator`                                    |

L'utilisation de `any` est proscrite dans ce projet.
