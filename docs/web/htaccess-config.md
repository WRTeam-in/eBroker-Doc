# .htaccess Configuration

This guide explains how to configure your Apache web server for both static and dynamic (SEO-enabled) deployments of the eBroker web application using .htaccess rules.

## Apache Configuration (.htaccess)

### Option 1: Static File Hosting (Default Configuration)

```apache
# ============================================================
# OPTION 1: STATIC FILE HOSTING (DEFAULT CONFIGURATION)
# ============================================================
<IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteBase /
    RewriteRule ^([^/]+)/property-details/([^/]+)/?$ [locale]/property-details/[slug]/index.html [L]
    RewriteRule ^([^/]+)/project-details/([^/]+)/?$ [locale]/project-details/[slug]/index.html [L]
    RewriteRule ^([^/]+)/agent-details/([^/]+)/?$ [locale]/agent-details/[slug]/index.html [L]
    RewriteRule ^([^/]+)/article-details/([^/]+)/?$ [locale]/article-details/[slug]/index.html [L]
    RewriteRule ^([^/]+)/compare-properties/([^/]+)/?$ [locale]/compare-properties/[slug]/index.html [L]
    RewriteRule ^([^/]+)/my-property/([^/]+)/?$ [locale]/my-property/[slug]/index.html [L]
    RewriteRule ^([^/]+)/my-project/([^/]+)/?$ [locale]/my-project/[slug]/index.html [L]
    RewriteRule ^([^/]+)/payment/([^/]+)/?$ [locale]/payment/[slug]/index.html [L]
    RewriteRule ^([^/]+)/all/([^/]+)/?$ [locale]/all/[slug]/index.html [L]

    RewriteRule ^([^/]+)/properties/category/([^/]+)/?$ [locale]/properties/category/[slug]/index.html [L]
    RewriteRule ^([^/]+)/properties/city/([^/]+)/?$ [locale]/properties/city/[slug]/index.html [L]
    RewriteRule ^([^/]+)/properties/([^/]+)/ [locale]/properties/[slug]/index.html [L]
    RewriteRule ^([^/]+)/properties/?$ [locale]/properties/index.html [L]
    RewriteRule ^([^/]+)/projects/featured-projects/?$ [locale]/projects/featured-projects/index.html [L]
    RewriteRule ^([^/]+)/projects/ [locale]/projects/index.html [L]
    RewriteRule ^([^/]+)/user/(.+)/?$ [locale]/user/[slug]/index.html [L]
    RewriteRule ^([^/]+)/(about-us|contact-us|faqs|privacy-policy|terms-and-conditions|subscription-plan|search|all-personalized-feeds|properties-on-map)/?$ [locale]/$2/index.html [L]

    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule ^([^/]+)/?$ [locale]/index.html [L]

    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule ^(.\*)$ /404.html [L]

</IfModule>
```

### Option 2: Reverse Proxy with SEO Optimization


```apache
# ============================================================
# OPTION 2: REVERSE PROXY WITH SEO OPTIMIZATION
# ============================================================
<IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteBase /
    
    # Allow SSL certificate verification
    RewriteRule ^.well-known/acme-challenge/(.*) /.well-known/acme-challenge/$1 [L]
    
    # Handle Next.js static files
    RewriteRule ^_next/(.*) /.next/$1 [L]
    
    # Allow direct access to common static files
    RewriteCond %{REQUEST_URI} \.(js|css|svg|jpg|jpeg|png|gif|ico)$
    RewriteRule ^ - [L]
    
    # Forward all other requests to Node.js server
    RewriteRule ^index.html http://127.0.0.1:8001/$1 [P]
    RewriteRule ^index.php http://127.0.0.1:8001/$1 [P]
    RewriteRule ^/?(.*)$ http://127.0.0.1:8001/$1 [P]
</IfModule>
```

## Important Notes

1. **Port Configuration**: 
   - Make sure the Node.js server port (8001) matches your `package.json` configuration
   - Update the port in the configurations if you're using a different port

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