---
sidebar_position: 12
---

# Generate App (Android)

This guide provides step-by-step instructions for generating a release version of your eBroker Android application, ready for distribution to users or submission to the Google Play Store.

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
