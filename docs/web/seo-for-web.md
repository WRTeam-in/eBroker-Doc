---
sidebar_position: 23
---

# SEO for Web

Enabling SEO (Search Engine Optimization) for your eBroker web application requires a VPS server and additional configuration. This guide explains how to set it up.

:::warning
This section is for advanced users who have a VPS server and are familiar with Node.js, npm, and pm2. If you don't need SEO functionality, you can use the [Deployment Without SEO](./deployment-without-seo.md) approach instead.
:::

## Enabling SEO Mode

To enable SEO for your web application:

1. Open the `.env` file in your project's root directory
2. Find the `NEXT_PUBLIC_SEO` variable
3. Set its value to `"true"`

![Next Public SEO](/images/web/next_public_seo.png)

## Server Requirements

For SEO functionality, you'll need:

- A VPS (Virtual Private Server) with at least 3-4GB of free RAM
- SSH root access
- Node.js (version 20.9 or later; 22 LTS recommended) installed
- A Linux-based operating system (preferably Debian-based)

## SEO Benefits

Enabling SEO mode provides several advantages:

- Server-side rendering of pages for better search engine indexing
- Improved page load times for users
- Multilingual meta title, meta description, and schema markup, served in the visitor's language
- Language and country in the URL path (`/<language>/<country>/...`), so each language and country version can be indexed separately
- Sitemap with `hreflang` alternates and an `x-default` entry for every language
- Better handling of meta tags and structured data
- Support for social media preview cards
- Improved accessibility for users with slower connections

## Language and Country URLs

With SEO mode enabled, the language and country are part of the URL path:

- `/<language>/<country>/...`, for example `/ar/india/properties`
- The default language is left out: `/india/properties`
- The "All" countries scope is left out: `/ar/properties`
- When both are left out, you get the plain URL: `/properties`

For a simple overview, see [Language and Country URLs](./language-country-urls.md).

Meta title, meta description, and schema markup are written per language in the admin panel and rendered on the server for the language in the URL.

## SEO Best Practices

In addition to enabling the SEO mode, follow these best practices:

- Create descriptive, unique titles for each page, in every language you offer
- Write compelling meta descriptions, in every language you offer
- Use semantic HTML with proper heading structure
- Ensure your site has a valid sitemap.xml file
- Register your site with Google Search Console and Bing Webmaster Tools
- Implement structured data (schema.org) for rich snippets
- Optimize images with descriptive alt text and efficient formats
- Ensure your site is mobile-friendly
- Create high-quality, unique content

## Next Steps

After enabling SEO, proceed to:

- [Setting up the sitemap](./sitemap-setup.md) for better indexing
- [Next.js deployment](./nextjs-deployment.md) for your SEO-enabled application
