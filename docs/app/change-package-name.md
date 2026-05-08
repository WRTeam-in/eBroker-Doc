---
sidebar_position: 4
---

# Change Package Name

Follow the common Flutter app guide for the full package-name change procedure:

[Package Name Setup ↗](https://wrteam-in.github.io/common_app_doc/GeneralSettings/packagename)

## eBroker-specific notes

- **Do this BEFORE Firebase setup.** Firebase config is bound to your package name; changing it after Firebase is configured forces a re-download of `google-services.json` and the Firebase platform reconfiguration.
- After running the rename command, also update `androidPackageName` in `lib/settings.dart` so app code references the new ID.
