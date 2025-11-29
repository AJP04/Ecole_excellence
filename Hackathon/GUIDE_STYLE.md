# Guide de Style - École Excellence

## 🎨 Identité Visuelle

### Couleurs Principales

```css
/* Couleurs principales */
--primary-color: #2563eb;    /* Bleu professionnel */
--secondary-color: #f59e0b;  /* Orange dynamique */
--accent-color: #10b981;     /* Vert succès */
--dark-color: #1f2937;       /* Gris foncé texte */
--light-color: #f9fafb;      /* Gris très clair */
--gray-color: #6b7280;       /* Gris moyen */
--white-color: #ffffff;      /* Blanc pur */
```

### Couleurs d'État
```css
--success-color: #059669;    /* Vert validation */
--warning-color: #d97706;    /* Orange attention */
--error-color: #dc2626;      /* Rouge erreur */
```

## 📝 Typographie

### Police Principale
- **Famille** : Inter (Google Fonts)
- **Fallback** : -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif
- **Caractéristiques** : Moderne, lisible, professionnelle

### Échelle Typographique
```css
--font-size-xs: 0.75rem;     /* 12px */
--font-size-sm: 0.875rem;    /* 14px */
--font-size-base: 1rem;      /* 16px */
--font-size-lg: 1.125rem;    /* 18px */
--font-size-xl: 1.25rem;     /* 20px */
--font-size-2xl: 1.5rem;     /* 24px */
--font-size-3xl: 1.875rem;   /* 30px */
--font-size-4xl: 2.25rem;    /* 36px */
--font-size-5xl: 3rem;       /* 48px */
```

### Poids de Police
- **300** : Light (textes secondaires)
- **400** : Regular (texte standard)
- **500** : Medium (labels, sous-titres)
- **600** : Semibold (titres de cartes)
- **700** : Bold (titres principaux)

## 🔲 Espacements

### Système d'Espacement (basé sur rem)
```css
/* Espacements standards */
0.25rem  /* 4px  - Très petit */
0.5rem   /* 8px  - Petit */
0.75rem  /* 12px - Petit+ */
1rem     /* 16px - Base */
1.5rem   /* 24px - Moyen */
2rem     /* 32px - Grand */
2.5rem   /* 40px - Grand+ */
3rem     /* 48px - Très grand */
4rem     /* 64px - Extra grand */
5rem     /* 80px - Section */
```

## 🎯 Composants UI

### Boutons
```css
/* Bouton principal */
.btn-primary {
  background: var(--primary-color);
  color: var(--white-color);
  padding: 0.75rem 1.5rem;
  border-radius: var(--border-radius);
}

/* Bouton secondaire */
.btn-secondary {
  background: var(--secondary-color);
  color: var(--white-color);
}

/* Bouton outline */
.btn-outline {
  background: transparent;
  border: 2px solid var(--primary-color);
  color: var(--primary-color);
}
```

### Cartes
```css
.card {
  background: var(--white-color);
  border-radius: var(--border-radius-lg);
  padding: 2rem;
  box-shadow: var(--shadow);
  border: 1px solid #e5e7eb;
}
```

### Formulaires
```css
.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid #e5e7eb;
  border-radius: var(--border-radius);
  font-size: var(--font-size-base);
}

.form-group input:focus {
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
}
```

## 🌊 Effets Visuels

### Rayons de Bordure
```css
--border-radius: 0.5rem;      /* 8px - Standard */
--border-radius-lg: 1rem;     /* 16px - Grande carte */
```

### Ombres
```css
--shadow: 0 1px 3px rgba(0, 0, 0, 0.1);           /* Légère */
--shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);      /* Moyenne */
--shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.1);      /* Grande */
```

### Transitions
```css
--transition: all 0.3s ease;      /* Standard */
--transition-fast: all 0.15s ease; /* Rapide */
```

### Dégradés
```css
/* Dégradé principal */
background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));

/* Dégradé héro */
background: linear-gradient(135deg, #2563eb, #f59e0b);

/* Dégradé succès */
background: linear-gradient(135deg, var(--accent-color), var(--primary-color));
```

## 📱 Responsive Design

### Breakpoints
```css
/* Mobile first approach */
@media (max-width: 480px)  { /* Petit mobile */ }
@media (max-width: 768px)  { /* Tablet/Mobile */ }
@media (max-width: 1024px) { /* Tablet */ }
@media (max-width: 1200px) { /* Desktop */ }
@media (min-width: 1201px) { /* Large desktop */ }
```

### Grilles Responsive
```css
/* Grille adaptative */
.grid-responsive {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}
```

## 🎨 Icônes

### Font Awesome 6
- **Taille standard** : `var(--font-size-lg)`
- **Couleur principale** : `var(--primary-color)`
- **Dans les boutons** : margin-right: 0.5rem

### Icônes Contextuelles
- **Sciences** : `fas fa-flask`
- **Arts** : `fas fa-paint-brush`
- **Sports** : `fas fa-running`
- **International** : `fas fa-globe`
- **Contact** : `fas fa-envelope`
- **Téléphone** : `fas fa-phone`
- **Adresse** : `fas fa-map-marker-alt`

## ⚡ Animations

### Classes d'Animation
```css
/* Fade in */
.fade-in {
  opacity: 0;
  animation: fadeIn 0.8s ease-out 0.3s both;
}

/* Slide in left */
.slide-in-left {
  opacity: 0;
  transform: translateX(-30px);
  animation: slideInLeft 0.8s ease-out 0.4s both;
}
```

### Effets Hover
```css
/* Carte avec effet lift */
.card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-xl);
}

/* Bouton avec effet */
.btn:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}
```

## 🔍 États des Composants

### États des Liens
```css
a:hover { opacity: 0.8; }
a:focus-visible { 
  outline: 2px solid var(--primary-color);
  outline-offset: 2px;
}
```

### États des Formulaires
```css
.error { border-color: var(--error-color); }
.success { border-color: var(--success-color); }
```

## ♿ Accessibilité

### Contrastes
- **Texte principal** : Ratio 7:1 (AAA)
- **Texte secondaire** : Ratio 4.5:1 (AA)
- **Éléments interactifs** : Ratio 3:1 minimum

### Focus Visible
```css
:focus-visible {
  outline: 2px solid var(--primary-color);
  outline-offset: 2px;
}
```

### Préférences Utilisateur
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

## 📐 Bonnes Pratiques

### Classes Utilitaires
- Préférer les variables CSS aux valeurs hardcodées
- Utiliser des classes sémantiques
- Éviter la duplication de code

### Nommage
- **BEM** pour les composants complexes
- **Classes descriptives** : `.team-card`, `.news-grid`
- **Variables cohérentes** : `--primary-color`

### Structure CSS
1. Variables CSS (`:root`)
2. Reset/Base styles
3. Layout (Grid, Flexbox)
4. Components
5. Utilities
6. Responsive (Mobile-first)

---

*Ce guide garantit une cohérence visuelle et une maintenabilité optimale du site École Excellence.*