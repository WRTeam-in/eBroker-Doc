---
sidebar_position: 9
---

# Setting Favicon Icon

The favicon is the small icon that appears in browser tabs, bookmarks, and other areas. Customizing it helps with brand recognition and gives your web application a professional look.

## Changing the Favicon

1. Navigate to the `pages` folder in your project
2. Open the `_app.js` file
3. Locate the favicon link tag in the file
4. Update the path to your custom favicon

![Change Icon](/images/web/changeIcon.png)

## Creating a Favicon

If you need to create a favicon:

1. Prepare a square image that represents your brand (ideally 16x16, 32x32, or 64x64 pixels)
2. Convert it to `.ico` format using an online converter or image editing software
3. Place the favicon file in your project's public folder
4. Update the reference in `_app.js` as shown above

## Multiple Favicon Sizes

For better compatibility across devices, you may want to include multiple favicon sizes:

```jsx
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
```

## Testing Your Favicon

After updating the favicon:

1. Save all changes
2. Restart your development server
3. Open your application in a browser
4. Check if the new favicon appears in the browser tab
5. Clear your browser cache if the old favicon still appears
