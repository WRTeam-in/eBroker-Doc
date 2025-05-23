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

### Resolving "missing-client-identifier" Issues

When using real phone numbers, you might encounter a "missing-client-identifier" error. To resolve:

1. Open your terminal in the project location and run:

```bash
cd android
./gradlew signinReport
```

2. Copy the SHA1 and SHA256 keys from the result:

![SHA Key](/images/app/sha_key.png)

3. Add these keys to your Firebase project settings:

![Add SHA Key](/images/app/add_sha_key.png)

## Setup Notifications

1. Get the server key from your Firebase project
2. Go to Project Settings → Cloud Messaging → Manage API on Google Cloud Console

![Enable FCM](/images/app/enable_fcm.png)

![FCM Server Key](/images/app/fcm_server_key.png)

3. Copy the server key:

![FCM Server Key Get](/images/app/fcm_server_key_get.png)

4. Set the key in your admin panel's Notification FCM key field:

![FCM Set Admin](/images/app/fcm_set_admin.png)

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
