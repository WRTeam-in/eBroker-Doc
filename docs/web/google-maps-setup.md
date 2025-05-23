---
sidebar_position: 4
---

# Google Maps Setup

To enable location-based features in your web application, you need to set up Google Maps API. Follow these steps to configure it properly.

## Obtaining a Google Maps API Key

1. Visit the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Navigate to the APIs & Services > Credentials section
4. Click "Create Credentials" and select "API Key"
5. Restrict the API key for better security (optional but recommended)
6. Copy your newly created API key

## Adding the API Key to Your Project

1. Open the `.env` file in your project's root directory
2. Locate the Google Maps API key variable
3. Paste your API key into this variable

![Google API Configuration](/images/web/google_api-v-1.0.9.png)

## Enabling Required Google APIs

For full functionality, you'll need to enable these Google APIs for your project:

- Maps JavaScript API
- Places API
- Geocoding API
- Geolocation API

To enable these APIs:

1. In the Google Cloud Console, go to "APIs & Services" > "Library"
2. Search for each API listed above
3. Select each API and click "Enable"

## Verifying Setup

After configuring your Google Maps API key:

1. Restart your development server
2. Check if maps are displaying correctly in your application
3. Test location-based features like property search by location

If you encounter any issues, verify that:

- Your API key is correctly entered in the `.env` file
- You've enabled all required APIs
- Your billing is set up correctly on Google Cloud (required for API usage)
