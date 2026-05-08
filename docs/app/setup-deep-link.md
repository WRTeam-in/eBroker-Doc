---
sidebar_position: 10
---

# Setup Deep Link

Follow the common Flutter app guide for the full deep-link configuration (Android intent filters, iOS URL schemes, `.well-known` files):

[Deeplink Setup ↗](https://wrteam-in.github.io/common_app_doc/GeneralSettings/deeplink)

## eBroker-specific notes

Deep links in eBroker are configured in **three** places — all three must agree or links will not open the app.

1. **Admin Panel** → Settings → System Settings → Deep Link Settings → set your **Schema**.
2. **`lib/settings.dart`** → set `shareNavigationWebUrl` to your domain (web domain if you want web fallback redirect; otherwise admin panel domain).
3. **Android `AndroidManifest.xml`** and **iOS `Info.plist`** → use the same schema and domain (covered in the common doc).

iOS `Info.plist` snippet (schema must match Admin Panel value):

```xml
<key>CFBundleURLSchemes</key>
<array>
    <string>your_schema</string>
</array>
```

## Quick test

Send `https://yourdomain.com/<link_path>` to a device with the app installed. If the app does not open, mismatch between the three locations above is the usual cause.
