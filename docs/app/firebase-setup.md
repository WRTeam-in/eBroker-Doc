---
sidebar_position: 8
---

# Firebase Setup

Follow the common Flutter app guides for Firebase project creation, push notifications, and billing setup:

- [Firebase Setup ↗](https://wrteam-in.github.io/common_app_doc/GeneralSettings/firebase) — create project, FlutterFire CLI, phone auth, keystore + `key.properties`
- [Notifications ↗](https://wrteam-in.github.io/common_app_doc/GeneralSettings/notifications) — FCM and iOS APNs (.p8) setup
- [Firebase Billing ↗](https://wrteam-in.github.io/common_app_doc/GeneralSettings/firebase-billing/) — enable billing for OTP and Maps quotas

## eBroker-specific notes

### Change package name first

Set your package name **before** running FlutterFire CLI. See [Change Package Name](change-package-name.md).

### Production Phone OTP — Add Release SHA Keys

The most common eBroker support issue is "OTP works in debug but fails on Play Store builds." Cause: only the **debug** SHA-1/SHA-256 was added to Firebase.

To fix, generate both sets:

```bash
cd android
./gradlew signinReport
```

The output lists SHA-1 and SHA-256 for **both** `debug` and `release` variants. In Firebase Console → Project Settings → Your Android app → Add fingerprint, add **all four** values:

- Debug SHA-1
- Debug SHA-256
- Release SHA-1
- Release SHA-256

Without the release fingerprints, phone OTP silently fails for users on Play Store builds.

### Upgrading an existing eBroker app

Reuse the existing Firebase project — do not create a new one. Confirm the package name in Firebase matches your new build's package name exactly.
