---
sidebar_position: 11
---

# Connect Admin Panel

Connecting your eBroker app to the admin panel is a crucial step that enables data synchronization between your mobile application and backend system. This guide explains how to configure the connection.

## Admin Panel Setup

Before connecting your app to the admin panel, make sure you have:

1. Set up your admin panel (you can follow the [admin panel documentation](../admin/configure-on-server.md) for guidance)
2. Ensured your admin panel is accessible from the internet with a valid URL

## Configuring Connection Settings

1. Open your app project
2. Navigate to the `settings.dart` file
3. Locate the connection settings section:

![Connect Admin](/images/app/connect_admin.png)

4. Update the following settings:
   - **Host URL**: Your admin panel's URL (e.g., `https://yourdomain.com/`)
   - **API Data Load Limit**: Number of items to load per request (default: 20)
   - **Max Category Load**: Number of categories to show on the home screen (default: 5)

## Understanding the Settings

- **Host URL**: This is the base URL for all API requests. Make sure it includes the protocol (`http://` or `https://`) and ends with a slash `/`.
- **API Data Load Limit**: This setting controls pagination. A higher number loads more data at once but may slow down the app.
- **Max Category Load**: Categories beyond this number will be accessible via the "Show More" button on the home screen.

## Testing the Connection

After configuring the settings:

1. Save the changes
2. Restart your app
3. The app should connect to the admin panel during startup
4. If the connection is successful, you'll see data loading from your admin panel

> **Note:** If your app is stuck on the splash screen, it might indicate a connection issue with the admin panel.

## Troubleshooting Connection Issues

If your app can't connect to the admin panel:

1. Verify that your Host URL is correct and accessible
2. Check if your admin panel server is running
3. Ensure there are no firewall rules blocking the connection
4. Verify that your admin panel API endpoints are working correctly
5. Check for any SSL certificate issues if using HTTPS

## Security Considerations

- Always use HTTPS for the Host URL in production environments
- Consider implementing API rate limiting to prevent abuse
- Regularly update your admin panel to ensure security patches are applied
- Monitor your API usage for any suspicious activity
