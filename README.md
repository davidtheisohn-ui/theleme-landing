# Theleme Landing — Embedded Simulator (React + Vite + Tailwind)

## Déploiement (Vercel + GitHub)
1) Créez un repo GitHub vide `theleme-landing`
2) Uploadez **le contenu** de ce dossier (fichiers à la racine)
3) Vercel → Import From GitHub → Build `npm run build` → Output `dist`

## Local
```bash
npm install
npm run dev
```

## Notes simulateur
- Sauvegarde automatique via `localStorage` (bouton "Sauvegarder")
- Tarifs base par pièce dans `baseMap` (modifiables dans `App.jsx`)
- Effets hover + focus intégrés
