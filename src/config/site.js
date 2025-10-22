export const siteConfig = {
  // Informații de bază
  name: "Cofetaria Michelle",
  description: "Cofetărie artizanală cu prăjituri și torturi delicioase, preparate cu ingrediente de calitate superioară în București.",
  url: "https://cofetaria-michelle.ro", // Înlocuiește cu domeniul tău real
  
  // Contact
  phone: "0723384312",
  phoneFormatted: "+40 723 384 312",
  email: "contact@cofetaria-michelle.ro", // Adaugă email-ul tău
  address: "Șoseaua Berceni 35, București 077160",
  
  // Social Media
  social: {
    facebook: "https://www.facebook.com/cofetaria.michelle.9/",
    instagram: "", // Adaugă Instagram-ul tău dacă ai
    tiktok: "", // Adaugă TikTok-ul tău dacă ai
  },
  
  // SEO
  seo: {
    title: "Cofetaria Michelle - Prăjituri și Torturi Artizanale în București",
    description: "Descoperă gusturile autentice ale Cofetăriei Michelle. Prăjituri, torturi și dulciuri artizanale preparate cu pasiune în București. Comandă acum!",
    keywords: "cofetărie, prăjituri, torturi, dulciuri, București, artizanal, comandă online",
    author: "Cofetaria Michelle",
    openGraph: {
      type: "website",
      locale: "ro_RO",
      url: "https://cofetaria-michelle.ro",
      siteName: "Cofetaria Michelle",
      title: "Cofetaria Michelle - Prăjituri și Torturi Artizanale",
      description: "Prăjituri și torturi artizanale delicioase în București",
      images: [
        {
          url: "/images/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Cofetaria Michelle - Prăjituri Artizanale",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Cofetaria Michelle - Prăjituri și Torturi Artizanale",
      description: "Prăjituri și torturi artizanale delicioase în București",
      images: ["/images/og-image.jpg"],
    },
  },
  
  // Orar de funcționare
  schedule: {
    monday: "08:00 - 20:00",
    tuesday: "08:00 - 20:00", 
    wednesday: "08:00 - 20:00",
    thursday: "08:00 - 20:00",
    friday: "08:00 - 20:00",
    saturday: "08:00 - 20:00",
    sunday: "09:00 - 18:00",
  },
  
  // Culori personalizate (pentru componente)
  colors: {
    primary: "#ef7f3a",
    secondary: "#0ea5e9", 
    accent: "#d946ef",
    warm: "#f5c842",
  },
  
  // Produse populare (pentru homepage)
  featuredProducts: [
    {
      id: 1,
      name: "Tort Ciocolată Belga",
      description: "Tort cu ciocolată belgiană premium și cremă de vanilie",
      price: "150",
      image: "/images/products/tort-ciocolata.jpg",
      category: "Torturi"
    },
    {
      id: 2,
      name: "Ecler cu Vanilie",
      description: "Ecler clasic cu cremă de vanilie și glazură de ciocolată",
      price: "12",
      image: "/images/products/ecler-vanilie.jpg",
      category: "Prăjituri"
    },
    {
      id: 3,
      name: "Brioșă cu Nutella",
      description: "Brioșă proaspătă cu cremă de Nutella și alune",
      price: "8",
      image: "/images/products/briosa-nutella.jpg",
      category: "Brioșe"
    }
  ],
  
  // Categorii de produse
  categories: [
    {
      id: "torturi",
      name: "Torturi",
      description: "Torturi personalizate pentru ocazii speciale",
      icon: "cake"
    },
    {
      id: "prajituri", 
      name: "Prăjituri",
      description: "Prăjituri tradiționale și moderne",
      icon: "cookie"
    },
    {
      id: "briose",
      name: "Brioșe",
      description: "Brioșe proaspete și delicioase",
      icon: "croissant"
    }
  ],
  
  // Produse complete
  products: [
    // Torturi
    {
      id: 1,
      name: "Tort Ciocolată Belga",
      description: "Tort cu ciocolată belgiană premium, cremă de vanilie și fructe proaspete",
      price: 150,
      category: "torturi",
      image: "/images/products/tort-ciocolata.jpg",
      ingredients: ["Ciocolată belgiană", "Cremă de vanilie", "Fructe proaspete", "Biscuiți"],
      allergens: ["Gluten", "Lactoza", "Ouă", "Nuci"]
    },
    {
      id: 2,
      name: "Tort Carrot Cake",
      description: "Tort cu morcovi, nucă și cremă de brânză",
      price: 130,
      category: "torturi", 
      image: "/images/products/tort-carrot.jpg",
      ingredients: ["Morcovi", "Nucă", "Cremă de brânză", "Scorțișoară"],
      allergens: ["Gluten", "Lactoza", "Ouă", "Nuci"]
    },
    {
      id: 3,
      name: "Tort Red Velvet",
      description: "Tort roșu cu cremă de brânză și ciocolată",
      price: 140,
      category: "torturi",
      image: "/images/products/tort-red-velvet.jpg", 
      ingredients: ["Cacao", "Cremă de brânză", "Colorant natural", "Vanilie"],
      allergens: ["Gluten", "Lactoza", "Ouă"]
    },
    
    // Prăjituri
    {
      id: 4,
      name: "Ecler cu Vanilie",
      description: "Ecler clasic cu cremă de vanilie și glazură de ciocolată",
      price: 12,
      category: "prajituri",
      image: "/images/products/ecler-vanilie.jpg",
      ingredients: ["Pate choux", "Cremă de vanilie", "Ciocolată", "Zahăr"],
      allergens: ["Gluten", "Lactoza", "Ouă"]
    },
    {
      id: 5,
      name: "Profiterol cu Ciocolată",
      description: "Profiterol cu înghețată și sos de ciocolată cald",
      price: 16,
      category: "prajituri",
      image: "/images/products/profiterol.jpg",
      ingredients: ["Pate choux", "Înghețată vanilie", "Sos ciocolată", "Smântână"],
      allergens: ["Gluten", "Lactoza", "Ouă"]
    },
    {
      id: 6,
      name: "Tiramisu",
      description: "Desert italian cu mascarpone, cafea și cacao",
      price: 20,
      category: "prajituri",
      image: "/images/products/tiramisu.jpg",
      ingredients: ["Mascarpone", "Cafea", "Cacao", "Savoiardi", "Rom"],
      allergens: ["Gluten", "Lactoza", "Ouă", "Alcool"]
    },
    
    // Brioșe
    {
      id: 7,
      name: "Brioșă cu Nutella",
      description: "Brioșă proaspătă cu cremă de Nutella și alune",
      price: 8,
      category: "briose",
      image: "/images/products/briosa-nutella.jpg",
      ingredients: ["Făină", "Nutella", "Alune", "Drojdie", "Lapte"],
      allergens: ["Gluten", "Lactoza", "Alune"]
    },
    {
      id: 8,
      name: "Croissant cu Ciocolată",
      description: "Croissant cu ciocolată și migdale",
      price: 10,
      category: "briose",
      image: "/images/products/croissant-ciocolata.jpg",
      ingredients: ["Făină", "Ciocolată", "Migdale", "Unt", "Drojdie"],
      allergens: ["Gluten", "Lactoza", "Migdale"]
    },
    {
      id: 9,
      name: "Brioșă cu Căpșuni",
      description: "Brioșă cu cremă de căpșuni și zahăr pudră",
      price: 7,
      category: "briose",
      image: "/images/products/briosa-capsuni.jpg",
      ingredients: ["Făină", "Căpșuni", "Cremă", "Zahăr pudră", "Drojdie"],
      allergens: ["Gluten", "Lactoza"]
    }
  ],
  
  // Articole blog
  blogPosts: [
    {
      id: 1,
      title: "Istoria Cofetăriei Artizanale",
      slug: "istoria-cofetariei-artizanale",
      excerpt: "Descoperă cum a început povestea Cofetăriei Michelle și de ce prăjiturile noastre sunt speciale.",
      content: "Povestea Cofetăriei Michelle a început cu o pasiune pentru dulciuri...",
      image: "/images/blog/istoria-cofetariei.jpg",
      date: "2024-01-15",
      author: "Michelle",
      category: "Despre noi"
    },
    {
      id: 2,
      title: "Ingredientele de Calitate Superioară",
      slug: "ingredientele-de-calitate-superioara", 
      excerpt: "De ce alegem doar ingrediente de cea mai bună calitate pentru prăjiturile noastre.",
      content: "La Cofetaria Michelle, calitatea ingredientelor este prioritatea noastră...",
      image: "/images/blog/ingrediente-calitate.jpg",
      date: "2024-01-10",
      author: "Michelle",
      category: "Calitate"
    },
    {
      id: 3,
      title: "Rețete Tradiționale vs. Moderne",
      slug: "retete-traditionale-vs-moderne",
      excerpt: "Cum combinăm rețetele tradiționale cu tehnici moderne în cofetăria noastră.",
      content: "În lumea cofetăriei, echilibrul între tradiție și inovație este esențial...",
      image: "/images/blog/retete-traditionale.jpg", 
      date: "2024-01-05",
      author: "Michelle",
      category: "Rețete"
    }
  ]
}
