---
sidebar_position: 13
---

# Font Customization

Customizing your eBroker web application's typography reinforces your brand identity and enhances readability across the platform.

## Customizing Website Font

1. Go to [Google Fonts](https://fonts.google.com/) and search for your desired font family.

![Font Change S1](/images/web/font-change-s1.png)

2. Click on searched font, then click on "Get font" > "Get embed Code"

![Font Change S2](/images/web/font-change-s2.png)

![Font Change S3](/images/web/font-change-s3.png)

3. Copy the highlighted `<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100..900&display=swap" rel="stylesheet" />` tag, navigate to `_document.js` file of `pages/` folder in the website code and paste it there.

![Font Change S4](/images/web/font-change-s4.png)

![Font Change S5](/images/web/font-change-s5.png)

4. Now navigate to `globals.css` file in `src/styles/` folder in website code and change the `--font-family:` css variable to include font style according to the font link tag you've attached.It will look like

```css
:root {
  --font-family: "Roboto", sans-serif;
}
```

![Font Change S6](/images/web/font-change-s6.png)
