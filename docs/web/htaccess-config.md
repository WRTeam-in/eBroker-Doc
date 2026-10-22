---
sidebar_position: 26
---

# .htaccess Configuration

This guide explains how to configure your Apache web server for both static and dynamic (SEO-enabled) deployments of the eBroker web application using .htaccess rules.

## Apache Configuration (.htaccess)

### Option 1: Static File Hosting (Default Configuration)

Public URLs follow the `/<language>/<country>/...` shape. The default language and the "All" countries scope are left out, so `/properties` is the same page as `/en/all/properties`, and `/ar/india/properties` is the Arabic page for India.

```apache
<IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteBase /

    RewriteRule ^([^/]+)/([^/]+)/property-details/([^/]+)/?$ [lang]/[country]/property-details/[slug]/index.html [L]
    RewriteRule ^([^/]+)/([^/]+)/project-details/([^/]+)/?$ [lang]/[country]/project-details/[slug]/index.html [L]
    RewriteRule ^([^/]+)/([^/]+)/agent-details/([^/]+)/?$ [lang]/[country]/agent-details/[slug]/index.html [L]
    RewriteRule ^([^/]+)/([^/]+)/article-details/([^/]+)/?$ [lang]/[country]/article-details/[slug]/index.html [L]
    RewriteRule ^([^/]+)/([^/]+)/compare-properties/([^/]+)/?$ [lang]/[country]/compare-properties/[slug]/index.html [L]
    RewriteRule ^([^/]+)/([^/]+)/my-property/([^/]+)/?$ [lang]/[country]/my-property/[slug]/index.html [L]
    RewriteRule ^([^/]+)/([^/]+)/my-project/([^/]+)/?$ [lang]/[country]/my-project/[slug]/index.html [L]
    RewriteRule ^([^/]+)/([^/]+)/agent/my-property/(.+)/?$ [lang]/[country]/agent/my-property/[slug]/index.html [L]
    RewriteRule ^([^/]+)/([^/]+)/agent/my-project/(.+)/?$ [lang]/[country]/agent/my-project/[slug]/index.html [L]
    RewriteRule ^([^/]+)/([^/]+)/payment/([^/]+)/?$ [lang]/[country]/payment/[slug]/index.html [L]
    RewriteRule ^([^/]+)/([^/]+)/more-pages/(.+)/?$ [lang]/[country]/more-pages/[...slug]/index.html [L]

    RewriteRule ^([^/]+)/([^/]+)/properties/category/([^/]+)/?$ [lang]/[country]/properties/category/[slug]/index.html [L]
    RewriteRule ^([^/]+)/([^/]+)/properties/city/([^/]+)/?$ [lang]/[country]/properties/city/[slug]/index.html [L]
    RewriteRule ^([^/]+)/([^/]+)/properties/(featured-properties|most-viewed-properties|most-favourite-properties|properties-nearby-city|curated-properties)/?$ [lang]/[country]/properties/[slug]/index.html [L]
    RewriteRule ^([^/]+)/([^/]+)/properties/?$ [lang]/[country]/properties/index.html [L]

    RewriteRule ^([^/]+)/([^/]+)/projects/(featured-projects|most-viewed-projects|most-favourite-projects|projects-nearby-city|curated-projects)/?$ [lang]/[country]/projects/[slug]/index.html [L]
    RewriteRule ^([^/]+)/([^/]+)/projects/?$ [lang]/[country]/projects/index.html [L]

    RewriteRule ^([^/]+)/([^/]+)/agent/(.+)/?$ [lang]/[country]/agent/[...slug]/index.html [L]
    RewriteRule ^([^/]+)/([^/]+)/user/(.+)/?$ [lang]/[country]/user/[...slug]/index.html [L]

    RewriteRule ^([^/]+)/([^/]+)/(about-us|contact-us|faqs|privacy-policy|terms-and-conditions|subscription-plan|search|all-personalized-feeds|properties-on-map|become-agent|become-agent-form|agents|articles|categories)/?$ [lang]/[country]/$3/index.html [L]

    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule ^([^/]+)/([^/]+)/?$ [lang]/[country]/index.html [L]

    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule ^(.*)$ /404.html [L]

</IfModule>
```

:::info Generated locale rules
When you run the static build (`npm run build` with `NEXT_PUBLIC_SEO="false"`), a block of extra rules is generated and inserted into the exported `.htaccess`, right after the `RewriteBase /` line. It is wrapped between `# --- generated at build time by scripts/static-export-routing.js ---` and `# --- end generated ---`.

These rules:

- Redirect URLs that carry a redundant segment (such as `/en/all/properties`, `/all/properties` or `/en/india/properties`) to the short form with a `301`.
- Send the root URL to the default-language, all-countries home page.
- Put the default language and "All" back internally when a URL omits them, so the rules above always see a full `/<language>/<country>/...` path.

They are built from the languages and countries available when you build, so **do not edit or remove the generated block**. Upload the `.htaccess` file from the build output (`out`), not the one in the project root.
:::

### Option 2: Reverse Proxy with SEO Optimization

:::tip Generated automatically
`npm run deploy:vps` writes this file for you with `scripts/generate-standalone-htaccess.js`. To regenerate it yourself, run `npm run generate:standalone-htaccess` (add a port number to override the default `8001`). Use the rules below only if you configure Apache by hand.
:::

```apache
<IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteBase /

    # Google site verification file (googleXXXXXXXXXXXXXXXX.html) - proxy, matches any such file
    RewriteRule ^google[0-9a-f]{16}\.html$ http://127.0.0.1:8001/$0 [P,L]

    RewriteRule ^favicon\.ico$ http://127.0.0.1:8001/favicon.ico [P,L]
    RewriteRule ^apple-touch-icon\.png$ http://127.0.0.1:8001/apple-touch-icon.png [P,L]
    RewriteRule ^manifest\.json$ http://127.0.0.1:8001/manifest.json [P,L]
    RewriteRule ^site\.webmanifest$ http://127.0.0.1:8001/site.webmanifest [P,L]
    RewriteRule ^firebase-messaging-sw\.js$ http://127.0.0.1:8001/firebase-messaging-sw.js [P,L]

    # Allow SSL certificate verification
    RewriteRule ^\.well-known/acme-challenge/ - [L]

    # Serve Next.js STATIC files directly from filesystem (JS/CSS bundles)
    # IMPORTANT: Only match _next/static/, NOT all _next/ requests!
    RewriteRule ^_next/static/(.*) /.next/static/$1 [L]

    # Proxy Next.js DATA requests to Node.js server (required for client-side navigation)
    RewriteRule ^_next/data/(.*) http://127.0.0.1:8001/_next/data/$1 [P,L]

    # Serve public folder static files directly
    RewriteCond %{REQUEST_URI} \.(js|css|svg|jpg|jpeg|png|gif|ico|woff|woff2|ttf|eot|webp|mp4|webm)$
    RewriteRule ^ - [L]

    # Forward all other requests to Node.js server
    RewriteRule ^index.html http://127.0.0.1:8001/$1 [P]
    RewriteRule ^index.php http://127.0.0.1:8001/$1 [P]
    RewriteRule ^/?(.*)$ http://127.0.0.1:8001/$1 [P]
</IfModule>
```

No language or country rules are needed here. The Node.js server handles `/<language>/<country>/...` URLs and omits the default language and "All" itself.

## Important Notes

1. **Port Configuration**:

    - The default Node.js server port is `8001`, and the Option 2 rules above proxy to it
    - If you run the app on a different port, the port in the `.htaccess` file must be the same. Otherwise Apache cannot reach the app and your site returns a `503` or `502` error
    - If you deploy with `npm run deploy:vps`, enter your port when asked and the `.htaccess` is regenerated for it. If you run `pm2` yourself, set the `PORT` environment variable and run `npm run generate:standalone-htaccess <your-port>` to regenerate the `.htaccess`
    - If you edit the `.htaccess` by hand, replace every `8001` in it with your port

2. **SSL/HTTPS**:

    - For production, always use HTTPS
    - Configure SSL certificates in your Apache virtual host configuration

3. **File Permissions**:

    - Ensure proper file permissions for your web server
    - Apache should have read access to all files
    - Node.js process should have necessary permissions for dynamic content

4. **Performance Tips**:

    - Enable gzip compression in Apache configuration
    - Set appropriate cache headers for static content
    - Use CDN for static assets in production

5. **Troubleshooting**:
    - Check Apache error logs if you encounter issues
    - Verify that mod_rewrite is enabled for Apache
    - Make sure mod_proxy is enabled when using Option 2 (Reverse Proxy)

Remember to restart your Apache web server after making changes to these configurations.
