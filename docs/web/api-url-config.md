---
sidebar_position: 3
---

# API URL Configuration

To connect your web application to the admin panel, you need to properly configure the API URL. This setting is crucial for the web application to communicate with your backend system.

## Setting Admin Panel URL

1. Open the main folder of your project
2. Locate the `.env` file and open it
3. Find the variable for the admin panel URL
4. Update it with your admin panel's URL

![Admin URL Configuration](/images/web/admin-url.png)

Make sure you enter the complete URL of your admin panel. This URL will be used by the web application to fetch data from your backend.

## Testing the Connection

After setting up the API URL:

1. Save the `.env` file
2. Restart your development server to apply the changes
3. Check if your web application can connect to the admin panel

If you encounter connection issues, verify that:

- Your admin panel is running and accessible
- The URL is correct and includes the proper protocol (http:// or https://)
- There are no firewall or network issues blocking the connection
