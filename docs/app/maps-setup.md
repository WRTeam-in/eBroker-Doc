---
sidebar_position: 8
---

# Map API Key

For location features to work properly in your app, you need to set up Google Maps. Follow these steps:

## Setting up Google Cloud Console

1. Open [Google Cloud Console](https://console.cloud.google.com)
2. Select your project

![Cloud Console](/images/app/cloudconsole.png)

3. Enable the following APIs from "Enable API and Services":
   - Geocoding API
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

> **Important:** Without enabling a billing account, location search will not work in the app, admin panel, or web application.
