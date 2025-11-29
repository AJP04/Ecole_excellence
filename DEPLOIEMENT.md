# Guide de Déploiement - École Excellence

## 🚀 Options de Déploiement

### 1. Hébergement Statique Gratuit

#### **Netlify** (Recommandé)
```bash
# 1. Créer un compte sur netlify.com
# 2. Glisser-déposer le dossier du projet
# 3. Le site est en ligne automatiquement
```
- ✅ HTTPS automatique
- ✅ CDN global
- ✅ Déploiement continu avec Git
- ✅ Formulaires de contact intégrés

#### **Vercel**
```bash
# 1. Installer Vercel CLI
npm i -g vercel

# 2. Dans le dossier du projet
vercel

# 3. Suivre les instructions
```

#### **GitHub Pages**
```bash
# 1. Créer un repository GitHub
# 2. Uploader les fichiers
# 3. Activer GitHub Pages dans Settings
# 4. Site accessible sur username.github.io/repo-name
```

### 2. Hébergement Web Traditionnel

#### Prérequis
- Serveur web (Apache, Nginx)
- Support HTML/CSS/JS
- HTTPS recommandé

#### Upload FTP
1. Compresser le dossier du projet
2. Se connecter au serveur FTP
3. Uploader dans le répertoire public_html/
4. Décompresser si nécessaire

## 📁 Préparation avant Déploiement

### 1. Optimisation des Images
```bash
# Compresser les images avec un outil comme TinyPNG
# Formats recommandés :
- JPG : photos (80% qualité)
- PNG : logos, icônes
- WebP : navigation moderne (optionnel)
```

### 2. Validation du Code
- **HTML** : W3C Markup Validator
- **CSS** : W3C CSS Validator
- **Accessibilité** : WAVE Web Accessibility Evaluator

### 3. Tests Responsive
- Chrome DevTools (F12 → Toggle Device Toolbar)
- Firefox Responsive Design Mode
- Test sur appareils réels

## 🔧 Configuration Serveur

### Apache (.htaccess)
```apache
# Compression GZIP
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html text/css text/javascript application/javascript
</IfModule>

# Cache des ressources statiques
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
</IfModule>

# Redirection HTTPS
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

### Nginx
```nginx
server {
    listen 80;
    server_name votre-domaine.fr;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name votre-domaine.fr;
    
    root /path/to/ecole-excellence;
    index index.html;
    
    # Compression
    gzip on;
    gzip_types text/css application/javascript image/svg+xml;
    
    # Cache statique
    location ~* \.(css|js|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, no-transform";
    }
}
```

## 📊 Performance et SEO

### 1. Métriques à Viser
- **Lighthouse Performance** : 90+
- **First Contentful Paint** : < 2s
- **Largest Contentful Paint** : < 2.5s
- **Cumulative Layout Shift** : < 0.1

### 2. Meta Tags SEO
Vérifier que chaque page contient :
```html
<meta name="description" content="Description unique de 150-160 caractères">
<meta name="keywords" content="école, éducation, excellence, paris">
<meta property="og:title" content="École Excellence - Page Title">
<meta property="og:description" content="Description pour réseaux sociaux">
<meta property="og:image" content="https://exemple.fr/image-social.jpg">
```

### 3. Sitemap.xml
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>https://ecole-excellence.fr/</loc>
        <changefreq>weekly</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://ecole-excellence.fr/pages/apropos.html</loc>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
    </url>
    <!-- Ajouter toutes les pages -->
</urlset>
```

## 🔒 Sécurité

### Headers de Sécurité
```html
<!-- Dans le <head> de chaque page -->
<meta http-equiv="X-Content-Type-Options" content="nosniff">
<meta http-equiv="X-Frame-Options" content="DENY">
<meta http-equiv="X-XSS-Protection" content="1; mode=block">
```

### Configuration Serveur
```apache
# Headers sécurisés
Header always set X-Content-Type-Options nosniff
Header always set X-Frame-Options DENY
Header always set X-XSS-Protection "1; mode=block"
Header always set Strict-Transport-Security "max-age=63072000; includeSubDomains; preload"
```

## 📧 Configuration Formulaire Contact

### Option 1: Netlify Forms (Gratuit)
```html
<!-- Ajouter à la form -->
<form netlify>
    <input type="hidden" name="form-name" value="contact">
    <!-- Champs existants -->
</form>
```

### Option 2: Formspree
```html
<form action="https://formspree.io/f/VOTRE_ID" method="POST">
    <!-- Champs existants -->
</form>
```

### Option 3: EmailJS (Frontend)
```javascript
// Intégrer EmailJS pour envoi direct depuis le navigateur
emailjs.send("service_id", "template_id", {
    from_name: nom,
    from_email: email,
    message: message
});
```

## 📈 Analytics et Monitoring

### Google Analytics 4
```html
<!-- Avant </head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Google Search Console
1. Vérifier la propriété du site
2. Soumettre le sitemap.xml
3. Surveiller l'indexation et les erreurs

## 🔄 Maintenance Post-Déploiement

### Checklist de Lancement
- [ ] Toutes les pages se chargent correctement
- [ ] Navigation fonctionnelle
- [ ] Formulaire de contact opérationnel
- [ ] Images optimisées et chargées
- [ ] Responsive sur mobile/tablet
- [ ] Performance Lighthouse > 90
- [ ] Test sur différents navigateurs

### Monitoring Continu
- **Uptime monitoring** : UptimeRobot (gratuit)
- **Performance** : Google PageSpeed Insights
- **Erreurs** : Console de navigateur
- **Analytics** : Google Analytics

### Mises à Jour
```bash
# Workflow recommandé
1. Modifier en local
2. Tester thoroughly
3. Valider avec Lighthouse
4. Déployer en production
5. Vérifier en ligne
```

## 🌍 Domaine Personnalisé

### Achat de Domaine
- **Recommandés** : Namecheap, OVH, Gandi
- **Extension** : .fr (local) ou .com (international)

### Configuration DNS
```dns
Type    Nom     Valeur                  TTL
A       @       IP_DU_SERVEUR          3600
CNAME   www     votre-domaine.fr       3600
```

### SSL/TLS
- **Let's Encrypt** (gratuit) via hébergeur
- **Cloudflare** (gratuit) pour CDN + SSL

## 📞 Support Technique

### Ressources Utiles
- **MDN Web Docs** : Documentation HTML/CSS/JS
- **Can I Use** : Compatibilité navigateurs
- **WebPageTest** : Tests de performance
- **GTmetrix** : Analyse de vitesse

### Outils de Debug
```javascript
// Mode debug pour développement
console.log('Site École Excellence - Version 1.0');

// Performance monitoring
window.addEventListener('load', () => {
    console.log(`Page chargée en ${performance.now()}ms`);
});
```

---

**Le site École Excellence est maintenant prêt pour un déploiement professionnel !** 🎉

*Guide de déploiement - Version 1.0*