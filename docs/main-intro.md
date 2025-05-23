---
sidebar_position: 1
---

# Introduction

Thank you for purchasing code. It really means a lot and It's our pleasure to serve top-notch service to you. Thank you so much for choosing [WRTeam](https://wrteam.in/). If you have trouble with the code and documentation please contact to our Support Team [Here](#support).

## Prerequisite

### For With SEO Support

- **VPS Hosting:** A Virtual Private Server (VPS) is mandatory to ensure reliable performance and security. Shared hosting environments are not supported for this web application.
- **Node.js Support:** The server must support Node.js, as it is essential for running the application.
- **Memory Requirements:** The server should have at least 3-4 GB of free RAM to handle the application's processes effectively.
- **SSH Root Access:** The server must provide SSH root access to execute Node.js commands and manage the application.

### For Web Without SEO

- **Shared Hosting:** is sufficient if the web application does not require SEO functionalities.

### For Admin

- **PHP Version:** eBroker Admin panel is built using Laravel Framework 10.0 so you need PHP version minimum 8.1.0 or higher version installed on your server.

### For App

- **Flutter Version:** 3.27.3
- **Java Version:** JDK version **22**

> **Important Note:** A **VPS server** is only required if you plan to use the web application with **SEO**. However, if you are only using the **web application without SEO, app and the admin panel** you can option for a **shared hosting server** as it is sufficient for these components.

eBroker is an app to sell or rent your properties - it basically connects users.

To run the application you need to setup Flutter first. Here you can see its steps to setup > [Flutter Setup](https://docs.flutter.dev/get-started/install).

# Firebase

## Overview

In order to run your app and enable authentication features, you need to set up a Firebase project. Follow the steps below to create a Firebase project.

## Create Firebase Project

1. Visit [Firebase Console](https://firebase.google.com/)
2. Sign in with your Google account
3. Click on "Add project" or "Create a project"
4. Enter a project name and choose a suitable project ID
5. Select your country/region and click "Create Project"
6. Tap on the Flutter icon
7. Open any IDE (VS Code, Android Studio, etc.) and paste these commands in the terminal:
   ```
   flutter pub add firebase_core
   flutter pub add firebase_auth
   ```
8. Copy and paste both commands one by one
9. Select Android, iOS, and Web platforms

> **Note:** Make sure to change package name first! [Click here](#packagename) to learn how.

## Enable Phone Auth

You will need to enable Firebase authentication to use login with OTP. If you skip this step, you will not be able to log into the app.

1. In the Firebase console, go to the Authentication section
2. Turn on phone login by tapping on the switch button
3. Add Firebase testing numbers for testing purposes
   > **Note:** Firebase may temporarily block you if you login multiple times with the same number or device

To resolve the "missing-client-identifier" issue with real phone numbers:

1. Open terminal in project location
2. Run the following commands:
   ```
   cd android
   ./gradlew signinReport
   ```
3. Copy the SHA1 and SHA256 keys
4. Add these keys in Firebase project settings

## Setup Notification

1. Get server key from your Firebase project and set in panel
2. Go to Project Settings -> Cloud Messaging -> Manage API on Google Cloud Console
3. Copy the server key
4. Set this key in the Notification FCM key field in admin panel

### For iOS Notifications

1. In Xcode, open the project
2. Select the project icon that represents your app
3. Select your app's target
4. Navigate to the Capabilities tab
5. Enable Push Notifications
6. Check Remote Notifications and Background Fetch from Enabling Background Modes

APNs (Apple's Push Notification service) supports two types of connections:

#### For Token-based (.p8)

1. Log in to the Apple Developer Portal
2. Navigate to Certificates, IDs & Profiles > Identifiers > App IDs
3. Check Capabilities > Push Notifications
4. Navigate to Keys Section and add a Universal key for Notifications
5. Download the .p8 file (keep it safe, as it will be downloaded only once)
6. Add this .p8 file to Firebase along with your Key ID and Team ID

# App Settings

## Change App Name

1. Go to lib > settings.dart
2. Find the variable named `applicationName="Your app name"` and update it
3. Run the following commands to change the actual name:
   ```
   flutter pub global activate rename
   rename setAppName --targets ios,android --value "YourAppName"
   ```

## Change Package Name

1. Go to lib > settings.dart
2. Update the `androidPackageName` variable
3. You'll also need to run package renaming commands

## Change App Icon

To change app icon:

1. Replace icon files in the appropriate directories
2. Or use Flutter launcher icons package

## Change App Version

Update version in `pubspec.yaml`

## Theme Colors

Customize app theme colors in the theme file

## Add Languages

Add new languages by adding translation files

## Map API Key and Place API

Configure Google Maps API key in app settings

## Setup Deep Link

Configure Firebase Dynamic Links for deep linking

## Setup Admob

Integrate Google AdMob for monetization

# Other Icons

Instructions for changing various app icons

# Connect Admin Panel

Connect your app to the admin panel by updating the API endpoint

# Generate App (Android)

Steps to build and generate your Android app

## Support

If you need help or have questions, please reach out to our support team.

## Your Feedback

We value your feedback! Please rate our product.

## Contact Us

For any inquiries, please [contact us](https://wrteam.in/contact-us/).
