# TéléSport — Olympic Games History Dashboard

Application web interactive pour visualiser les performances historiques des pays aux Jeux Olympiques.

## Installation

### Prérequis

- **Node.js** 22 LTS ou supérieur
- **npm** (inclus avec Node.js)

### Démarrage

```bash
git clone https://github.com/JeffSilverface/p2-dfsjs
cd p2-dfsjs
npm install
npm run dev
```

L'application est accessible sur http://localhost:5173

### Autres commandes

```bash
npm run build    # Build de production
npm run preview  # Prévisualisation du build
npm run lint     # Vérification du code
```

---

## Structure du projet

```
p2-dfsjs/
├── public/
├── src/
│   ├── data/
│   │   └── olympicsData.json       # Données statiques (pays, participations, médailles)
│   ├── models/
│   │   └── olympicDataTypes.ts     # Interfaces TypeScript (Olympic, Participation, IndicatorProps)
│   ├── hooks/
│   │   └── useData.ts              # Hook custom — chargement et agrégation des données
│   ├── components/
│   │   ├── HeaderComponent.tsx     # En-tête responsive (titre adapté mobile/desktop)
│   │   ├── Layout.tsx              # Structure commune (header + <Outlet />)
│   │   ├── Indicator.tsx           # Carte de statistique (titre + valeur)
│   │   ├── LineChart.tsx           # Graphique linéaire (médailles par édition)
│   │   └── PieChart.tsx            # Graphique circulaire (répartition des médailles)
│   ├── pages/
│   │   ├── DashboardPage.tsx       # Page d'accueil — vue globale tous pays
│   │   ├── CountryDetailPage.tsx   # Page détail d'un pays (/country/:id)
│   │   └── NotFound404.tsx         # Page 404
│   ├── Router.tsx                  # Définition des routes (React Router v6)
│   ├── App.tsx                     # Point d'entrée — enregistrement Chart.js + Router
│   └── main.tsx                    # Montage React
├── index.html
├── vite.config.ts
├── tsconfig.json
└── package.json
```

### Pages et routing

| Route | Page | Description |
|-----------------------|---------------------|----------------------------------------------------------------------|
| `/`                   | `DashboardPage`     | Vue d'ensemble : indicateurs globaux + graphique circulaire par pays |
| `/country/:id`        | `CountryDetailPage` | Détail d'un pays : médailles et athlètes par édition                 |
| `*`                   | `NotFound404`       | Page 404 classique                                                   |

---

## Choix techniques

### React 19 + TypeScript
Typage strict de toutes les données métier via les interfaces.

### Vite 7
Utilisé comme bundler et serveur de développement pour sa rapidité (HMR natif, build ESM).

### Tailwind CSS 4
Configuration via le plugin Vite (`@tailwindcss/vite`). Le responsive est géré avec les préfixes utilitaires (`md:`, `hidden md:inline`) directement dans les composants, sans fichier de configuration séparé.

### React Router v6
Routing déclaratif avec un `Layout` parent commun (pattern `<Outlet />`). Les flags de migration v7 (`v7_startTransition`, `v7_relativeSplatPath`) sont activés pour anticiper la prochaine version majeure.

### Chart.js + react-chartjs-2
Seuls les modules Chart.js nécessaires sont enregistrés manuellement dans `App.tsx` (tree-shaking). Les composants `LineChart` et `PieChart` encapsulent les graphiques `react-chartjs-2` pour les rendre réutilisables.

### Hook `useData`
Simule un appel API asynchrone (délai de 500 ms) pour reproduire le comportement d'une future intégration REST. Expose les données brutes ainsi que des indicateurs agrégés (`totalParticipatingCountries`, `totalGamesEditions`). L'architecture permet de remplacer l'import JSON par un `fetch` sans modifier les composants consommateurs.
