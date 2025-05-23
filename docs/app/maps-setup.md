---
sidebar_position: 8
---

# Map API Key and Place API

For location features to work properly in your app, you need to set up Google Maps and Places API. Follow these steps:

## Setting up Google Cloud Console

1. Open [Google Cloud Console](https://console.cloud.google.com)
2. Select your project

![Cloud Console](/images/app/cloudconsole.png)

3. Enable the following APIs from "Enable API and Services":
   - Geocoding API
   - Places API
   - Geolocation APIs
   - Maps SDK for Android
   - Maps SDK for iOS
   - Maps JavaScript API

![Enable API Services](/images/app/enable_api_services.png)

## Adding Map Keys to Your App

### For Android

1. Navigate to `android > app > src > main > AndroidManifest.xml`
2. Locate the meta-data element for Google Maps API key
3. Replace the value with your Android API key

![Android Map Key](/images/app/android_map_key.png)

### For iOS

1. Navigate to `ios/Runner/AppDelegate.swift`
2. Locate the line where the Google Maps API key is set
3. Replace with your iOS API key

![iOS Map Key](/images/app/ios_map_key.png)

## Setting Up Places API

For the Places API to work (which enables location search functionality):

1. **Enable billing** on your Google Cloud project

   > **Note:** This is mandatory for Places API to work

2. Copy your API key from Google Cloud Console
3. Open your admin panel and go to System Settings
4. Paste the key in the Places API field and save

![Place API Panel](/images/app/place_api_panel.png)

> **Important:** Without enabling a billing account, location search will not work in the app, admin panel, or web application.
