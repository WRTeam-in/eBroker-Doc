---
sidebar_position: 1
---

# eBroker App - Key Points

import DocBanner from '@site/src/components/DocBanner/DocBanner';

<DocBanner />

## System Requirements

- Flutter Version: 3.41.* (see [Version Compatibility](version-history.md) for older app versions)
- Java Version: JDK 17
- Firebase account

## Setup Checklist

Follow this order. Generic Flutter steps link out to the common app guide; eBroker-specific steps are documented here.

| # | Step | Guide |
|---|---|---|
| 1 | Install Flutter & dev tools | [Basic Setup ↗](https://wrteam-in.github.io/common_app_doc/GeneralSettings/basicsetup) |
| 2 | **Upgrading from older eBroker build?** Copy keystore + key.properties first | [Update From Old Version](update-from-old-version.md) |
| 3 | Change app name | [Change App Name](change-app-name.md) |
| 4 | Change package name | [Change Package Name](change-package-name.md) |
| 5 | Replace app launcher icon | [Change App Icon](change-app-icon.md) |
| 6 | Replace splash / home / placeholder / login-bg | [Other Icons](other-icons.md) |
| 7 | Set theme colors | [Theme Colors](theme-colors.md) |
| 8 | Firebase project, phone auth, notifications, billing | [Firebase Setup](firebase-setup.md) |
| 9 | Google Maps API keys | [Map API Key](maps-setup.md) |
| 10 | Deep linking | [Setup Deep Link](setup-deep-link.md) |
| 11 | AdMob (optional) | [Setup AdMob](setup-admob.md) |
| 12 | Multi-language | [Add Languages](add-languages.md) |
| 13 | Connect to admin panel API | [Connect Admin Panel](connect-admin-panel.md) |
| 14 | Bump app version | [Change App Version](change-app-version.md) |
| 15 | Build & submit to Play Store | [Generate App](generate-app.md) |

## Critical Rules

- **Change package name BEFORE Firebase setup** — Firebase config is tied to package name; redoing it later means re-downloading `google-services.json`.
- **For production phone OTP** — add the **release** SHA-1 + SHA-256 to Firebase, not just debug. Run `cd android && ./gradlew signinReport`.
- **Never lose `keystore.jks`** — without it you cannot publish updates to an existing Play Store listing. Always copy from previous build.
- **Always use `--no-tree-shake-icons`** when building eBroker (`flutter build appbundle --no-tree-shake-icons`).
