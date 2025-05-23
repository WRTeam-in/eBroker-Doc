---
sidebar_position: 12
---

# Generate App (Android)

This guide provides step-by-step instructions for generating a release version of your eBroker Android application, ready for distribution to users or submission to the Google Play Store.

## Generate Keystore

Before building your app, you need to create a keystore to securely sign your Android application:

1. Open terminal or command prompt
2. Navigate to the `android/app` directory in your project
3. Create a new keystore by running the appropriate command:

   **For Mac/Linux:**

   ```bash
   keytool -genkey -v -keystore upload-keystore.jks -keyalg RSA -keysize 2048 -validity 10000 -alias upload
   ```

   **For Windows:**

   ```bash
   keytool -genkey -v -keystore upload-keystore.jks -storetype JKS -keyalg RSA -keysize 2048 -validity 10000 -alias upload
   ```

4. Follow the prompts to enter:

   - Keystore password
   - Distinguished name fields (your name, organization, etc.)
   - Alias password

5. Upon completion, the keystore file (`upload-keystore.jks`) will be saved in the `android/app` directory

## Configure key.properties

Next, set up the key.properties file to store keystore information:

1. Open or create the `key.properties` file in the `android` directory
2. Add the following lines to the file:
   ```
   storePassword=your_keystore_password
   keyPassword=your_alias_password
   keyAlias=your_alias_name
   storeFile=your_keystore_name.keystore
   ```
3. Replace the placeholder values with your actual keystore details
4. Save the file

## Building Split APKs

Split APKs optimize your app for different device architectures:

1. Open terminal or command prompt
2. Navigate to your project directory
3. Run the following command:
   ```bash
   flutter build apk --split-per-abi --no-tree-shake-icons
   ```

This will generate optimized APKs for different CPU architectures (ARM, ARM64, x86_64).

## Building Release APK

To create a single APK file for all devices:

1. Open terminal or command prompt
2. Navigate to your project directory
3. Run the following command:
   ```bash
   flutter build apk --release
   ```

The generated APK will be located at `build/app/outputs/flutter-apk/app-release.apk`.

## Building App Bundle

App Bundles are the preferred format for Google Play Store submission:

> **Note:** Before generating the App Bundle, ensure you have completed the keystore configuration steps above.

1. Open terminal or command prompt
2. Navigate to your project directory
3. Run the following command:
   ```bash
   flutter build appbundle --no-tree-shake-icons
   ```

The generated AAB file will be located at `build/app/outputs/bundle/release/app-release.aab`.

## Testing the Build

Before distributing your app:

1. Install the generated APK on a test device
2. Verify that all features work correctly
3. Check performance and responsiveness
4. Ensure proper handling of user data and permissions

## Submitting to Google Play Store

After successful testing:

1. Create a developer account on Google Play Console if you don't have one
2. Create a new application listing
3. Upload your signed AAB or APK file
4. Complete the store listing with screenshots, descriptions, and promotional graphics
5. Set pricing and distribution options
6. Submit for review
