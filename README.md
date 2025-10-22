# Cofetaria Michelle - Website

Un site web complet și modern pentru Cofetaria Michelle, o cofetărie artizanală din București. Site-ul este construit cu Next.js 14, Tailwind CSS și Framer Motion pentru o experiență utilizator excepțională.

## 🚀 Caracteristici

- **Design Modern**: Interfață elegantă și profesională cu paletă de culori fresh
- **Responsive**: Optimizat pentru toate dispozitivele (mobile, tablet, desktop)
- **SEO Optimizat**: Meta tags, Open Graph, Twitter Cards, JSON-LD, sitemap
- **Performanță**: Optimizare imagini, lazy loading, preload fonts
- **Accesibilitate**: HTML semantic, contrast optim, aria attributes
- **Animații**: Microinteracțiuni fluide cu Framer Motion
- **Formulare**: Sistem complet de comandă și contact cu validare

## 📁 Structura Proiectului

```
cofetaria-michelle/
├── public/
│   ├── images/                 # Imagini ale site-ului
│   │   ├── products/          # Imagini produse
│   │   ├── gallery/           # Imagini galerie
│   │   ├── team/              # Imagini echipă
│   │   └── blog/              # Imagini blog
│   ├── favicon.ico            # Favicon
│   ├── robots.txt             # Robots.txt pentru SEO
│   └── site.webmanifest       # Web App Manifest
├── src/
│   ├── app/                   # Next.js App Router
│   │   ├── api/              # API Routes
│   │   │   ├── orders/       # API pentru comenzi
│   │   │   ├── contact/      # API pentru contact
│   │   │   └── sitemap/      # API pentru sitemap
│   │   ├── meniu/            # Pagina meniu
│   │   ├── galerie/          # Pagina galerie
│   │   ├── despre/           # Pagina despre
│   │   ├── comanda/          # Pagina comandă
│   │   ├── blog/             # Pagina blog
│   │   ├── contact/          # Pagina contact
│   │   ├── layout.tsx        # Layout principal
│   │   ├── page.tsx          # Pagina principală
│   │   └── globals.css       # Stiluri globale
│   ├── components/            # Componente React
│   │   ├── Header.tsx        # Header cu navigare
│   │   ├── Footer.tsx        # Footer
│   │   ├── ProductCard.tsx   # Card produs
│   │   └── OrderForm.tsx     # Formular comandă
│   └── config/               # Configurări
│       ├── site.js           # Configurare site centralizată
│       └── images.js         # Configurare imagini
├── scripts/
│   └── generate-sitemap.js   # Script generare sitemap
├── package.json
├── tailwind.config.js
├── next.config.js
└── tsconfig.json
```

## 🛠️ Tehnologii Utilizate

- **Next.js 14** - Framework React cu App Router
- **TypeScript** - Tipizare statică
- **Tailwind CSS** - Framework CSS utility-first
- **Framer Motion** - Biblioteca pentru animații
- **Lucide React** - Iconițe moderne
- **Next/Image** - Optimizare imagini

## 📋 Instalare și Rulare

### 1. Instalare dependențe

```bash
npm install
```

### 2. Rulare în modul dezvoltare

```bash
npm run dev
```

Site-ul va fi disponibil la `http://localhost:3000`

### 3. Build pentru producție

```bash
npm run build
```

### 4. Rulare în modul producție

```bash
npm start
```

### 5. Generare sitemap

```bash
npm run generate-sitemap
```

## ⚙️ Configurare

### Configurare Site

Toate datele site-ului sunt centralizate în `src/config/site.js`:

```javascript
export const siteConfig = {
  name: "Cofetaria Michelle",
  phone: "0723384312",
  address: "Șoseaua Berceni 35, București 077160",
  // ... alte configurări
}
```

**IMPORTANT**: Actualizează următoarele în `site.js`:
- `url` - URL-ul real al site-ului
- `email` - Adresa de email
- `social.instagram` - Link Instagram (dacă există)
- `verification.google` - Codul de verificare Google

### Configurare Imagini

1. **Înlocuiește imaginile placeholder** din `public/images/` cu imagini reale
2. **Generează favicon-urile** și înlocuiește fișierele din `public/`
3. **Optimizează imaginile** pentru web (WebP, dimensiuni corecte)

### Configurare SEO

1. **Google Search Console**: Adaugă codul de verificare în `layout.tsx`
2. **Google Analytics**: Adaugă codul de tracking
3. **Sitemap**: Rulează `npm run generate-sitemap` după fiecare actualizare

## 📱 Pagini Site

### 1. **Acasă** (`/`)
- Hero section cu CTA-uri
- Secțiune caracteristici
- Produse populare
- Call-to-action final

### 2. **Meniu** (`/meniu`)
- Lista completă de produse
- Filtrare pe categorii
- Căutare produse
- Vizualizare grilă/listă

### 3. **Galerie** (`/galerie`)
- Grid responsive cu imagini
- Lightbox pentru vizualizare
- Filtrare pe categorii
- Funcții download și share

### 4. **Despre** (`/despre`)
- Povestea cofetăriei
- Statistici și realizări
- Valorile companiei
- Echipa
- Testimoniale

### 5. **Comandă** (`/comanda`)
- Formular complet de comandă
- Validare în timp real
- Selectare produs, dată, oră
- Opțiuni livrare/ridicare

### 6. **Blog** (`/blog`)
- Articole despre cofetărie
- Categorii și filtrare
- Newsletter signup
- SEO optimizat

### 7. **Contact** (`/contact`)
- Informații de contact
- Formular de mesaje
- Hartă (placeholder)
- Social media links

## 🎨 Design și Culori

### Paleta de Culori
- **Primary**: `#ef7f3a` (Portocaliu cald)
- **Secondary**: `#0ea5e9` (Albastru)
- **Accent**: `#d946ef` (Mov)
- **Warm**: `#f5c842` (Galben cald)

### Fonturi
- **Headings**: Playfair Display (serif elegant)
- **Body**: Inter (sans-serif modern)

### Componente
- **Butoane**: Stil pill cu hover effects
- **Carduri**: Border radius 10-14px, shadow subtil
- **Animații**: Smooth transitions cu Framer Motion

## 🔧 API Routes

### `/api/orders` (POST)
Procesează comenzile de la formularul de comandă.

**Body:**
```json
{
  "name": "string",
  "phone": "string",
  "email": "string",
  "product": "number",
  "date": "string",
  "time": "string",
  "message": "string",
  "delivery": "pickup|delivery"
}
```

### `/api/contact` (POST)
Procesează mesajele de contact.

**Body:**
```json
{
  "name": "string",
  "email": "string",
  "phone": "string",
  "subject": "string",
  "message": "string"
}
```

### `/api/sitemap` (GET)
Generează sitemap-ul XML pentru SEO.

## 📊 SEO și Performance

### Optimizări SEO
- ✅ Meta tags dinamice per pagină
- ✅ Open Graph și Twitter Cards
- ✅ JSON-LD structured data
- ✅ Sitemap XML automat
- ✅ Robots.txt configurat
- ✅ Canonical URLs
- ✅ Schema markup LocalBusiness

### Optimizări Performance
- ✅ Next.js Image optimization
- ✅ Font preloading
- ✅ Lazy loading imagini
- ✅ Code splitting
- ✅ CSS purging cu Tailwind
- ✅ Bundle optimization

### Accesibilitate
- ✅ HTML semantic
- ✅ ARIA attributes
- ✅ Contrast optimizat
- ✅ Keyboard navigation
- ✅ Screen reader friendly
- ✅ Focus indicators

## 🚀 Deployment

### Vercel (Recomandat)
1. Conectează repository-ul la Vercel
2. Configurează variabilele de mediu
3. Deploy automat la fiecare push

### Netlify
1. Build command: `npm run build`
2. Publish directory: `.next`
3. Configurează redirects pentru SPA

### VPS/Shared Hosting
1. Rulează `npm run build`
2. Uploadează folderul `.next` și `public`
3. Configurează serverul pentru Next.js

## 📝 Checklist TO-DO

### Înainte de lansare:
- [ ] Înlocuiește toate imaginile placeholder cu imagini reale
- [ ] Generează și înlocuiește favicon-urile
- [ ] Actualizează `site.js` cu datele reale
- [ ] Configurează Google Search Console
- [ ] Adaugă Google Analytics
- [ ] Testează toate formularele
- [ ] Verifică toate link-urile
- [ ] Testează pe dispozitive mobile
- [ ] Optimizează imaginile pentru web
- [ ] Configurează SSL/HTTPS
- [ ] Testează viteza site-ului
- [ ] Verifică accesibilitatea

### După lansare:
- [ ] Monitorizează performanța
- [ ] Actualizează conținutul regulat
- [ ] Răspunde la feedback clienți
- [ ] Analizează statisticile
- [ ] Optimizează continuu

## 🆘 Suport

Pentru întrebări sau probleme:
- **Email**: contact@cofetaria-michelle.ro
- **Telefon**: 0723384312
- **Adresă**: Șoseaua Berceni 35, București 077160

## 📄 Licență

Acest proiect este proprietatea Cofetăriei Michelle. Toate drepturile rezervate.

---

**Cofetaria Michelle** - Prăjituri și torturi artizanale în București 🧁
