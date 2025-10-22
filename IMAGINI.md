# Ghid pentru Imagini - Cofetaria Michelle

Acest ghid te va ajuta să înlocuiești imaginile placeholder cu imagini reale pentru site-ul Cofetăriei Michelle.

## 📁 Structura Directoarelor

```
public/images/
├── products/          # Imagini produse (400x400px)
├── gallery/           # Imagini galerie (600x600px)
├── team/              # Imagini echipă (300x300px)
├── blog/              # Imagini blog (800x400px)
├── hero-*.jpg         # Imagini hero (1200x800px)
├── og-*.jpg           # Imagini Open Graph (1200x630px)
└── placeholder-images.json  # Configurare imagini
```

## 🖼️ Dimensiuni și Specificații

### Imagini Hero
- **Dimensiuni**: 1200x800px
- **Format**: JPG, WebP
- **Calitate**: 90%
- **Fișiere**:
  - `hero-cake.jpg` - Tort principal pentru homepage
  - `about-hero.jpg` - Echipa pentru pagina despre

### Imagini Produse
- **Dimensiuni**: 400x400px (pătrat)
- **Format**: JPG, WebP
- **Calitate**: 85%
- **Stil**: Fundal neutru, produs centrat
- **Fișiere**: Toate produsele din `site.js`

### Imagini Galerie
- **Dimensiuni**: 600x600px (pătrat)
- **Format**: JPG, WebP
- **Calitate**: 80%
- **Stil**: Diverse unghiuri, compoziții creative
- **Fișiere**: 12+ imagini pentru galerie

### Imagini Echipă
- **Dimensiuni**: 300x300px (pătrat)
- **Format**: JPG, WebP
- **Calitate**: 85%
- **Stil**: Portrete profesionale, fundal neutru
- **Fișiere**: `michelle.jpg`, `ana.jpg`, `maria.jpg`

### Imagini Blog
- **Dimensiuni**: 800x400px (16:9)
- **Format**: JPG, WebP
- **Calitate**: 80%
- **Stil**: Imagini ilustrative pentru articole
- **Fișiere**: Pentru fiecare articol din blog

### Imagini Open Graph
- **Dimensiuni**: 1200x630px (1.91:1)
- **Format**: JPG, PNG
- **Calitate**: 90%
- **Stil**: Design consistent cu branding-ul
- **Fișiere**: Pentru fiecare pagină principală

## 🎨 Ghid de Stil pentru Imagini

### Culori și Tonuri
- **Paleta principală**: Portocaliu cald (#ef7f3a), albastru (#0ea5e9)
- **Tonuri**: Calde, apetisante, profesionale
- **Contrast**: Bun pentru accesibilitate

### Compoziție
- **Produse**: Centrate, spațiu respirabil în jur
- **Echipă**: Portrete apropiate, expresii prietenoase
- **Galerie**: Diverse unghiuri, detaliile importante vizibile

### Calitate
- **Rezoluție**: Înaltă pentru toate imaginile
- **Focus**: Clar și precis
- **Iluminare**: Naturală, fără umbre excesive

## 📸 Surse Recomandate pentru Imagini

### Gratuite
1. **Unsplash** (https://unsplash.com)
   - Căutări: "cake", "dessert", "bakery", "pastry"
   - Filtre: Food, High Resolution

2. **Pexels** (https://pexels.com)
   - Căutări: "sweet", "dessert", "bakery"
   - Calitate bună, diverse stiluri

3. **Foodiesfeed** (https://foodiesfeed.com)
   - Specializat în imagini de mâncare
   - Calitate profesională

### Premium
1. **Shutterstock** (https://shutterstock.com)
2. **Getty Images** (https://gettyimages.com)
3. **Adobe Stock** (https://stock.adobe.com)

## 🛠️ Optimizare Imagini

### Herramientas Recomandate
1. **TinyPNG** (https://tinypng.com) - Comprimare fără pierdere
2. **Squoosh** (https://squoosh.app) - Google's image optimizer
3. **ImageOptim** (Mac) - Optimizare locală
4. **GIMP** (Gratuit) - Editare avansată

### Proces de Optimizare
1. **Redimensionare** la dimensiunile exacte
2. **Comprimare** pentru web (80-90% calitate)
3. **Conversie** la WebP pentru browser-e moderne
4. **Testare** viteza de încărcare

## 📋 Checklist Imagini

### Înainte de Upload
- [ ] Toate imaginile au dimensiunile corecte
- [ ] Formatul este optimizat (JPG/WebP)
- [ ] Calitatea este bună dar fișierul nu este prea mare
- [ ] Alt text-ul este descriptiv și relevant
- [ ] Imagini sunt testate pe diferite dispozitive

### După Upload
- [ ] Toate imaginile se încarcă corect
- [ ] Nu există imagini lipsă (404 errors)
- [ ] Viteza de încărcare este acceptabilă
- [ ] Imagini arată bine pe mobile și desktop
- [ ] Alt text-ul este corect pentru accesibilitate

## 🚀 Implementare

### 1. Pregătire Imagini
```bash
# Creează directoarele necesare
mkdir -p public/images/{products,gallery,team,blog}

# Copiază imaginile în directoarele corespunzătoare
cp imagini-produse/* public/images/products/
cp imagini-galerie/* public/images/gallery/
cp imagini-echipa/* public/images/team/
cp imagini-blog/* public/images/blog/
```

### 2. Testare
```bash
# Rulează site-ul local
npm run dev

# Verifică toate imaginile
# Testează pe diferite dispozitive
# Verifică viteza de încărcare
```

### 3. Optimizare Finală
```bash
# Rulează build-ul
npm run build

# Testează în producție
npm start
```

## 📞 Suport

Pentru întrebări despre imagini:
- **Email**: contact@cofetaria-michelle.ro
- **Telefon**: 0723384312

---

**Notă**: Toate imaginile trebuie să respecte drepturile de autor și să fie licențiate corespunzător pentru utilizare comercială.
