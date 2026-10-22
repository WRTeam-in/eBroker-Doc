---
sidebar_position: 22
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

Your application's URLs follow the `/<language>/<country>/...` shape, with the default language and the "All" countries scope left out (for example `/properties` instead of `/en/all/properties`). The `.htaccess` file maps these URLs to the exported pages, so your routing only works correctly on Apache servers with it in place.

:::warning Use the .htaccess from the out folder
The build writes a ready-to-use `.htaccess` file into the `out` folder, together with the generated locale rules that handle the omitted default language and "All" scope. Upload **that file** to the same directory as the rest of the `out` contents (e.g., `public_html`). Because it starts with a dot, it may be hidden in your file manager, so enable "show hidden files" if you can't see it.

The code below is the base rule set, shown for reference. It does **not** include the generated locale rules, so use it only if the file is missing from the `out` folder, and expect URLs without a language or country to fail.
:::

1.  Make sure the `.htaccess` file from the `out` folder is in the root of your deployment directory (the same place you uploaded the `out` folder contents).
2.  If it is missing, create a new file named `.htaccess` (note the dot at the beginning) in that directory and paste the following code into it:

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

Alternatively, you can [view the raw .htaccess content here](/files/htaccess-example.txt) (opens in a new tab) to copy or save it.

3.  **Save the file** on your server.

:::tip Note
Rebuild with `npm run build` after changing your languages or countries, then upload the new `.htaccess` from the `out` folder, since the generated rules are built from them. Languages added later in the admin panel keep working without a rebuild.
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
