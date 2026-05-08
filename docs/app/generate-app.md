---
sidebar_position: 15
---

# Generate App

Follow the common Flutter app guide for the full Android build + Play Store submission flow:

[Deployment Guide ↗](https://wrteam-in.github.io/common_app_doc/GeneralSettings/deployment)

## eBroker-specific notes

Always pass `--no-tree-shake-icons` when building eBroker — the app uses dynamic icon loading that the tree-shaker incorrectly strips, causing missing icons in production.

| Output | Command |
|---|---|
| App Bundle (.aab) for Play Store | `flutter build appbundle --no-tree-shake-icons` |
| Split APKs (per ABI) | `flutter build apk --split-per-abi --no-tree-shake-icons` |
| Single Release APK | `flutter build apk --release --no-tree-shake-icons` |

## Output Locations

- AAB: `build/app/outputs/bundle/release/app-release.aab`
- APK: `build/app/outputs/flutter-apk/app-release.apk`

## Pre-build Checklist

- [ ] Version bumped in `pubspec.yaml` ([Change App Version](change-app-version.md))
- [ ] Release SHA keys added to Firebase ([Firebase Setup](firebase-setup.md))
- [ ] `keystore.jks` + `key.properties` present in `android/app/` and `android/`
- [ ] `flutter pub get` run after dependency changes
