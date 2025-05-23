---
sidebar_position: 18
---

# Deployment Without SEO

If you don't require SEO functionality, you can deploy your eBroker web application on a standard shared hosting server using this simplified approach.

## Building Your Application

After making all necessary changes to your web application:

1. Open VS Code terminal by pressing `CTRL+J` in Windows/Linux or `CMD+J` in macOS
2. Run the following command to build your application:

```bash
npm run export
```

This command will take a few seconds to build the live and optimized version of your web application.

## Output Files

After the build process completes:

1. Navigate to the `out` folder in your project directory
2. This folder contains all the files needed for deployment
3. **Important:** Only upload files from the `out` folder to your server

## Uploading to Your Server

You can use any FTP client (like FileZilla) or your hosting control panel to upload the files:

1. Connect to your hosting server
2. Navigate to the public directory (often named `public_html`, `www`, or `htdocs`)
3. Upload all files and folders from the `out` directory
4. Maintain the same folder structure as in the `out` directory

## Adding the .htaccess File (Important for URL Rewriting)

After uploading the contents of the `out` folder, you also need to add a `.htaccess` file to the **same directory** (e.g., `public_html`). This file handles URL rewriting to make sure your application's routing works correctly on Apache servers.

1.  **Create a new file** named `.htaccess` (note the dot at the beginning) in the root of your deployment directory (the same place you uploaded the `out` folder contents).
2.  **Copy and paste** the following code into the `.htaccess` file:

    ```apache
    <IfModule mod_rewrite.c>
        RewriteEngine On
        RewriteBase /
        RewriteRule ^properties-details/([^/]+)/$ properties-details/[slug]/index.html [L]
        RewriteRule ^my-property/([^/]+)/$ my-property/[slug]/index.html [L]
        RewriteRule ^agent-details/([^/]+)/$ agent-details/[slug]/index.html [L]
        RewriteRule ^project-details/([^/]+)/$ project-details/[slug]/index.html [L]
        RewriteRule ^article-details/([^/]+)/$ article-details/[slug]/index.html [L]
        RewriteRule ^properties/categories/([^/]+)/$ properties/categories/[slug]/index.html [L]
        RewriteRule ^properties/city/([^/]+)/$ properties/city/[slug]/index.html [L]
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
        RewriteCond %{REQUEST_FILENAME} !-f
        RewriteCond %{REQUEST_FILENAME} !-d
        RewriteRule ^(.*)$ /404/404.html [L]
    </IfModule>
    ```

Alternatively, you can [view the raw .htaccess content here](/files/htaccess-example.txt) (opens in a new tab) to copy or save it.

3.  **Save the file** on your server.

:::tip Note
This `.htaccess` configuration is typically provided with the eBroker web code. If you already have this file from the source code, you can upload that one directly instead of creating a new one.
:::

## Configuring Your Domain

Once all files are uploaded:

1. Point your domain to the directory containing the uploaded files
2. If necessary, configure your DNS settings to point to your hosting server
3. Wait for DNS propagation (can take up to 24-48 hours)

## Testing Your Deployment

After deployment:

1. Visit your website using your domain name
2. Verify that all pages load correctly
3. Test all functionality (search, user registration, login, etc.)
4. Check that all assets (images, styles, scripts) are loading properly

## Troubleshooting

If you encounter issues:

- Check your server error logs
- Verify that all files were uploaded correctly
- Ensure your hosting environment supports modern JavaScript applications
- Check if any server configuration is blocking your application (e.g., `.htaccess` rules)

## Additional Resources

For more detailed information about Next.js deployment, refer to the [official Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying).
