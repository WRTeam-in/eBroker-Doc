---
sidebar_position: 2
---

# Update From Old Version

Use this guide when you already have an eBroker app live on the Play Store and you are moving to a newer eBroker source code release. Skip this page for fresh setups.

## 1. Copy from the Old Build (Critical)

Before doing anything else, copy these two files from your previous project into the new one:

| Source (old project) | Destination (new project) |
|---|---|
| `android/app/keystore.jks` | `android/app/keystore.jks` |
| `android/key.properties` | `android/key.properties` |

> **If you lose `keystore.jks`, you cannot publish updates to your existing Play Store listing using the same key.** You can generate a new `keystore.jks`, but you must then request a signing key reset through Google Play Console support and follow their verification process before publishing updates. Back it up to secure storage to avoid this.

## 2. Confirm Flutter Version

Check the [Version Compatibility](version-history.md) table and switch your Flutter SDK to match the eBroker version you are upgrading to.

For Flutter install / version-switching steps, see the [Basic Setup ↗](https://wrteam-in.github.io/common_app_doc/GeneralSettings/basicsetup) guide.

## 3. Files to Edit (Master Reference)

These are every file you typically touch during an eBroker update. Each is covered in detail in its dedicated doc — this table is the single index.

| File | What changes | Doc |
|---|---|---|
| `lib/settings.dart` | App name, package name, host URL, deep link domain | [Change App Name](change-app-name.md), [Change Package Name](change-package-name.md), [Connect Admin Panel](connect-admin-panel.md), [Setup Deep Link](setup-deep-link.md) |
| `lib/theme.dart` | Fallback theme colors | [Theme Colors](theme-colors.md) |
| `pubspec.yaml` | Version name + version code | [Change App Version](change-app-version.md) |
| `android/app/src/main/AndroidManifest.xml` | Maps API key, AdMob app ID, deep link schema | [Map API Key](maps-setup.md), [Setup AdMob](setup-admob.md), [Setup Deep Link](setup-deep-link.md) |
| `ios/Runner/AppDelegate.swift` | Maps API key | [Map API Key](maps-setup.md) |
| `ios/Runner/Info.plist` | AdMob `GADApplicationIdentifier`, deep link `CFBundleURLSchemes` | [Setup AdMob](setup-admob.md), [Setup Deep Link](setup-deep-link.md) |
| `assets/app_icons/` | Launcher icon source | [Change App Icon](change-app-icon.md) |
| `assets/svg/fallback/` | Splash, home, placeholder, login-bg fallbacks | [Other Icons](other-icons.md) |
| `assets/languages/` | Language JSON files | [Add Languages](add-languages.md) |
| `android/key.properties` | Keystore path + passwords | Copy from old build (above) |

## 4. Pre-Flight Checklist

- [ ] Old `keystore.jks` and `key.properties` backed up offline
- [ ] Old bundle ID noted (must match new build, otherwise it becomes a different app on Play Store)
- [ ] Flutter SDK version matches [Version Compatibility](version-history.md)
- [ ] Firebase project for the old app is accessible (you will reuse it, not create a new one)

## 5. Next Step

Continue with the [Setup Checklist on the Key Points page](app-key-points.md#setup-checklist) — start at step 3 (Change App Name).
