---
sidebar_position: 2
---

# Firebase Setup

## Overview

Firebase is essential for eBroker app's authentication and notification features. This guide will walk you through setting up Firebase for your app.

## Create Firebase Project

1. Visit [Firebase Console](https://firebase.google.com/)
2. Sign in with your Google account
3. Click on "Add project" button
4. Enter a project name and choose a suitable project ID
5. Select your country/region and click "Create Project"

![Firebase Create Project](/images/app/firebase_create_project.png)

6. Tap on the Flutter icon to add Flutter to your Firebase project

![Firebase Flutter](/images/app/firebase_flutter.png)

7. Open your IDE (VS Code, Android Studio, etc.) and run these commands in the terminal:

```bash
flutter pub add firebase_core
flutter pub add firebase_auth
```

8. Copy and paste both commands one by one like this:

![Firebase Command Run](/images/app/command_run_firebase.png)

> **Important:** Make sure to change your package name first before setting up Firebase!

9. Select Android, iOS, and Web platforms when prompted

![Select Firebase Platforms](/images/app/select_firebase_platforms.png)

10. If asked to override existing Firebase settings, type "yes" and press Enter

![Override Existing Firebase](/images/app/override_existing_firebase.png)

## Enable Phone Authentication

Phone authentication is critical for the app's login functionality. Follow these steps:

1. In the Firebase console, go to the Authentication section
2. Turn on phone login as shown below:

![Firebase Auth](/images/app/firebase_auth.png)

3. Enable Firebase phone auth by tapping the switch button:

![Enable Firebase Auth](/images/app/enable_firebase_auth.png)

4. For testing purposes, add Firebase testing phone numbers to avoid temporary blocks

![Firebase Testing](/images/app/firebase_testing.png)

## Create Keystore for App Signing

To release your Android app, you need to create a keystore file (.jks) and configure the key.properties file.

### Generate JKS File

1. Open your terminal in the project location and run the following command:

```bash
keytool -genkey -v -keystore ~/upload-keystore.jks -keyalg RSA -keysize 2048 -validity 10000 -alias upload
```

2. You'll be prompted to enter the following information:
   - **Keystore password**: Create a strong password and remember it
   - **Re-enter password**: Confirm your password
   - **First and Last name**: Enter your name or company name
   - **Organizational unit**: Enter your department/unit (optional)
   - **Organization**: Enter your company name (optional)
   - **City or Locality**: Enter your city
   - **State or Province**: Enter your state
   - **Country Code**: Enter your two-letter country code (e.g., US, IN, UK)

3. After entering all information, confirm by typing "yes"

4. The keystore file will be created in your home directory (`~/upload-keystore.jks`)

5. Move the keystore file to your project's `android/app` directory:

```bash
mv ~/upload-keystore.jks android/app/
```

### Create key.properties File

1. Navigate to the `android` folder in your project

2. Create a new file named `key.properties`

3. Add the following content to the file (replace with your actual values):

```properties
storePassword=your_keystore_password
keyPassword=your_key_password
keyAlias=upload
storeFile=upload-keystore.jks
```

> **Important Notes:**
> - Keep your keystore file and passwords secure and never commit them to version control
> - Add `key.properties` to your `.gitignore` file
> - Make a backup of your keystore file - if you lose it, you cannot update your app on Play Store
> - The `keyPassword` is typically the same as `storePassword` unless you specified different passwords

### Resolving "missing-client-identifier" Issues

When using real phone numbers, you might encounter a "missing-client-identifier" error. To resolve:

1. Open your terminal in the project location and run:

```bash
cd android
./gradlew signinReport
```

2. Copy the SHA1 and SHA256 keys from the result:

![SHA Key](/images/app/sha_key.png)

> **Important:** You will see SHA keys for both **debug** and **release** variants in the output. You need to add BOTH sets of keys to Firebase for login to work properly in both development and production environments.

3. Add these keys to your Firebase project settings:

![Add SHA Key](/images/app/add_sha_key.png)

4. Make sure to add:
   - **Debug SHA-1** and **SHA-256** (for testing during development)
   - **Release SHA-1** and **SHA-256** (for production app)

### iOS Notification Setup

For iOS devices, complete these additional steps:

1. In Xcode, open your project
2. Select the project icon representing your app
3. Select your app's target
4. Navigate to the Capabilities tab
5. Enable Push Notifications
6. Check Remote Notifications and Background Fetch from Enabling Background Modes

![Xcode Notification](/images/app/xcode_notification.png)

Apple's Push Notification service (APNs) supports two connection types. For token-based (.p8):

1. Log in to the Apple Developer Portal
2. Navigate to Certificates, IDs & Profiles > Identifiers > App IDs
3. Check Capabilities > Push Notifications

![Enable FCM Xcode](/images/app/enable_fcm_xcode.png)

![Xcode Notification 2](/images/app/xcode_notification_2.png)

4. Navigate to Keys Section and add a Universal key for Notifications
5. Download the .p8 file and keep it safe (it can only be downloaded once)

![APN Updated](/images/app/apn_updated.png)

6. Add this .p8 file to Firebase along with your Key ID and Team ID

![Add P8 in Firebase](/images/app/add_p8_in_firebase.png)
