---
sidebar_position: 8
---

# Setup Deep Link

Deep linking allows users to open specific content in your eBroker app directly from links in websites, emails, or messages. This guide explains how to set up deep linking for your application.

## Admin Panel Side Configuration
1. **Add Deep Link schema**:
   - In the admin panel, navigate to the `Settings > System Settings` section.
   - Find the "Deep Link Settings" section.
   - Under "Schema" add your desired schema.

![Deep Link 1](/images/app/deeplink/setup_schema_admin.png)

## App Side Configuration 


:::note
 Choose the appropriate domain based on your usage:
 - If using a web domain, add the web domain. (If you want to use web for redirect)
 - If using a panel domain, add the panel domain.
:::
1. **Update `settings.dart`**:
   - Open `lib > settings.dart`.
   - Update the `shareNavigationWebUrl` variable with the domain that you are using for deeplink.

![Deep Link 2](/images/app/deeplink/settings_deeplink.png)

2. **Update for Android**:
   - Open `android > app > src > main > AndroidManifest.xml`.
   - In your `AndroidManifest.xml` file, Update the following with schema you added in admin panel and domain you added in settings.dart:

![Deep Link 3](/images/app/deeplink/manifest_deeplink.png)
   
3. **Update for iOS**:
   - Open `ios > Runner > Info.plist`. 
   - In your `info.plist` file, update the following same as schema you added in admin panel:

     ```xml
     <key>CFBundleURLSchemes</key>
     <array>
         <string>your_schema</string>
     </array>
     ```:

![Deep Link 4](/images/app/deeplink/app_info_plist.png)
     

## How Deep Links Work

When a user clicks a deep link:

1. The link opens your app if it's installed
2. The app navigates to the specific content referenced in the link
3. If the app isn't installed, the link can direct the user to the app store

## Testing Deep Links

After setting up deep links:

1. Create a test link in the format: `https://yourdomain.com/link_path`
2. Send this link to a device with your app installed
3. Click the link and verify that it opens the correct content in your app

## Troubleshooting

If deep links aren't working:

- Verify that the `.well-known` folder and its files are accessible via browser
- Ensure the `.htaccess` file is properly configured
- Check that your app's build configuration correctly includes the deep link handling code
- Test on multiple devices to rule out device-specific issues
