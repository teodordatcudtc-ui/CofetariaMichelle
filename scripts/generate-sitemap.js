const fs = require('fs')
const path = require('path')

// Site configuration
const siteConfig = {
  url: 'https://cofetaria-michelle.ro',
  name: 'Cofetaria Michelle'
}

// Static pages
const staticPages = [
  {
    url: '',
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: 1.0
  },
  {
    url: '/meniu',
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: 0.9
  },
  {
    url: '/galerie',
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: 0.8
  },
  {
    url: '/despre',
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: 0.7
  },
  {
    url: '/comanda',
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: 0.9
  },
  {
    url: '/blog',
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: 0.8
  },
  {
    url: '/contact',
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: 0.7
  }
]

// Blog posts (you can add more as needed)
const blogPosts = [
  {
    slug: 'istoria-cofetariei-artizanale',
    lastModified: '2024-01-15T00:00:00.000Z',
    changeFrequency: 'monthly',
    priority: 0.6
  },
  {
    slug: 'ingredientele-de-calitate-superioara',
    lastModified: '2024-01-10T00:00:00.000Z',
    changeFrequency: 'monthly',
    priority: 0.6
  },
  {
    slug: 'retete-traditionale-vs-moderne',
    lastModified: '2024-01-05T00:00:00.000Z',
    changeFrequency: 'monthly',
    priority: 0.6
  }
]

// Generate sitemap
function generateSitemap() {
  const allPages = [...staticPages, ...blogPosts.map(post => ({
    url: `/blog/${post.slug}`,
    lastModified: post.lastModified,
    changeFrequency: post.changeFrequency,
    priority: post.priority
  }))]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (page) => `  <url>
    <loc>${siteConfig.url}${page.url}</loc>
    <lastmod>${page.lastModified}</lastmod>
    <changefreq>${page.changeFrequency}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`

  // Write to public directory
  const publicDir = path.join(__dirname, '..', 'public')
  const sitemapPath = path.join(publicDir, 'sitemap.xml')
  
  fs.writeFileSync(sitemapPath, sitemap)
  console.log('✅ Sitemap generated successfully at:', sitemapPath)
  console.log(`📄 Generated ${allPages.length} URLs`)
}

// Run the script
generateSitemap()
