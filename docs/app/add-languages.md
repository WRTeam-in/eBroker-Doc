---
sidebar_position: 7
---

# Add Languages

Adding support for multiple languages is essential for reaching a global audience with your eBroker application. This guide explains how to add new languages to your app.

## Locating Language Files

1. Navigate to the `assets/languages/` directory in your project
2. You'll find template language files that you can use as a starting point

![Template](/images/app/template.png)

## Translation Process

You can use any translation service to create new language files. We recommend:

1. [IBM Language Translator](https://www.ibm.com/demos/live/watson-language-translator/self-service/home) for automated translations
2. Professional translation services for more accurate results

You'll need to translate three sets of files:

- App language file
- Web language file
- Admin panel language file

![Translate Files](/images/app/translate_files.png)

## Adding a New Language in Admin Panel

1. Go to your admin panel
2. Navigate to the Languages tab
3. Add your new language:
   - Enter the language name
   - Provide the language code (e.g., 'en' for English, 'es' for Spanish)
   - Enable or disable RTL (Right-to-Left) mode if needed
   - Upload your translated files

![Admin Panel Language](/images/app/admin_panel_language.png)

## Language Codes

Common language codes include:

- English: `en`
- Spanish: `es`
- French: `fr`
- Arabic: `ar` (RTL language)
- Hindi: `hi`
- Chinese: `zh`

## Right-to-Left (RTL) Support

For languages that read from right to left (like Arabic, Hebrew, or Persian):

1. Enable the RTL option when adding the language
2. The app will automatically adjust layouts and text alignment for RTL languages

## Testing the Translation

After adding a new language:

1. Save all changes in the admin panel
2. Restart your app
3. Check if the new language appears in the language selection menu
4. Switch to the new language and verify that all text elements are correctly translated
5. For RTL languages, verify that the layout adjusts properly

## Updating a Language

If you need to make changes to an existing language:

1. Go to the Languages tab in the admin panel
2. Use the edit button to update the language files
3. Save your changes and restart the app to see the updates
