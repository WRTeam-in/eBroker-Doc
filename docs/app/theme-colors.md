---
sidebar_position: 6
---

# Theme Colors

Customizing your app's theme colors helps align it with your brand identity. Here's how to do it:

## Using Admin Panel (Recommended for v1.1.0+)

For version 1.1.0 and newer, you can change theme colors directly from the admin panel:

1. Go to Admin Panel → Settings → App Settings
2. Locate the theme color change section
3. Pick a color by tapping on any of the color options

![Theme Color](/images/app/theme_color.png)

4. You'll see a popup like this:

![Tap RGB](/images/app/tap_rgb.png)

5. Tap on R, G, B text to switch to hex mode:

![Hex](/images/app/hex.png)

6. Enter your desired hex color code and save
7. Restart your app to see the updated colors

## Setting Fallback Colors (Backup Plan)

In case the colors fail to load from the server, you can set fallback colors in the app code:

1. Navigate to the theme.dart file in your project
2. Set fallback theme colors as shown below:

![Theme Color File](/images/app/theme_color_file.png)

This ensures your app always has consistent styling, even if there are connection issues with the server.
