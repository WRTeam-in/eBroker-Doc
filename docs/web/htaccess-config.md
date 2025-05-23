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
    
    # Property Routes
    RewriteRule ^properties-details/([^/]+)/$ properties-details/[slug]/index.html [L]
    RewriteRule ^my-property/([^/]+)/$ my-property/[slug]/index.html [L]
    RewriteRule ^agent-details/([^/]+)/$ agent-details/[slug]/index.html [L]
    RewriteRule ^project-details/([^/]+)/$ project-details/[slug]/index.html [L]
    RewriteRule ^article-details/([^/]+)/$ article-details/[slug]/index.html [L]
    
    # Category and City Routes
    RewriteRule ^properties/categories/([^/]+)/$ properties/categories/[slug]/index.html [L]
    RewriteRule ^properties/city/([^/]+)/$ properties/city/[slug]/index.html [L]
    
    # Static Pages
    RewriteRule ^about-us$ /about-us.html [L]
    RewriteRule ^all-categories$ /all-categories.html [L]
    RewriteRule ^articles$ /articles.html [L]
    RewriteRule ^contact-us$ /contact-us.html [L]
    RewriteRule ^all-projects$ /all-projects.html [L]
    RewriteRule ^featured-properties$ /featured-properties.html [L]
    RewriteRule ^all-agents$ /all-agents.html [L]
    RewriteRule ^most-viewed-properties$ /most-viewed-properties.html [L]
    RewriteRule ^mostfav-properties$ /mostfav-properties.html [L]
    RewriteRule ^privacy-policy$ /privacy-policy.html [L]
    RewriteRule ^properties/all-properties$ /properties/all-properties.html [L]
    RewriteRule ^properties-nearby-city$ /properties-nearby-city.html [L]
    RewriteRule ^search$ /search.html [L]
    RewriteRule ^subscription-plan$ /subscription-plan.html [L]
    RewriteRule ^terms-and-condition$ /terms-and-condition.html [L]
    
    # User Routes
    RewriteRule ^user$ /user.html [L]
    RewriteRule ^user-register$ /user-register.html [L]
    RewriteRule ^user/advertisement$ /user/advertisement.html [L]
    RewriteRule ^user/dashboard$ /user/dashboard.html [L]
    RewriteRule ^user/edit-property$ /user/edit-property.html [L]
    RewriteRule ^user/add-project$ /user/add-project.html [L]
    RewriteRule ^user/edit-project$ /user/edit-project.html [L]
    RewriteRule ^user/favorites-properties$ /user/favorites-properties.html [L]
    RewriteRule ^user/notifications$ /user/notifications.html [L]
    RewriteRule ^user/profile$ /user/profile.html [L]
    RewriteRule ^user/personalize-feed$ /user/personalize-feed.html [L]
    RewriteRule ^user/projects$ /user/projects.html [L]
    RewriteRule ^user/properties$ /user/properties.html [L]
    RewriteRule ^user/subscription$ /user/subscription.html [L]
    RewriteRule ^user/transaction-history$ /user/transaction-history.html [L]
    RewriteRule ^user/interested/([^/]+)/$ user/interested/[slug]/index.html [L]
    
    # 404 Handler
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule ^(.*)$ /404/404.html [L]
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