---
sidebar_position: 6
---

# Change App Version

Updating your app version is essential when releasing updates to your eBroker application. This guide explains how to change the app version correctly.

## Understanding App Version Format

The app version in Flutter has two components:

- **Version Name**: The user-visible version number (e.g., 1.0.8)
- **Version Code**: An internal version number (e.g., 23) that increases with each release

For example, in `1.0.8+23`:

- `1.0.8` is the version name visible to users
- `+23` is the version code used by app stores

## Updating the Version

1. Open your project's `pubspec.yaml` file
2. Locate the `version` field
3. Update the version according to your needs:

![App Version](/images/app/app_version.png)

## Version Naming Guidelines

Follow these guidelines when updating your app version:

- **Version Name** (1.0.8):

  - Use semantic versioning: `MAJOR.MINOR.PATCH`
  - Increment MAJOR for incompatible API changes
  - Increment MINOR for new features
  - Increment PATCH for bug fixes

- **Version Code** (23):
  - Always increment this number for each new release
  - This number must be higher than the previous version's code
  - This value is used by app stores to determine if an update is available

## After Changing the Version

After updating the version in `pubspec.yaml`:

1. Run `flutter pub get` to update dependencies
2. Test your app thoroughly before building the final release
3. Create a new build with the updated version

## Best Practices

- Always increment the version code for each release to app stores
- Keep a changelog of what changes in each version
- Consider using a versioning strategy like semantic versioning (semver.org)
- For major updates, consider incrementing the major version number
