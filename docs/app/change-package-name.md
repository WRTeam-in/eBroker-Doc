---
sidebar_position: 4
---

# Change Package Name

Changing your app's package name is a crucial step, especially before setting up Firebase. Follow these steps:

## Update in settings.dart

1. Navigate to `lib > settings.dart` in your project
2. Find the variable named `androidPackageName="Your package name"`
3. Update the text inside the quotes with your desired package name (e.g., "com.yourcompany.appname")

![Package Name](/images/app/package_name.png)

## Using Rename Package

To properly change the package name throughout your app, run this command in your terminal:

```bash
rename setBundleId --targets android --value "com.example.bundleId"
```

Replace "com.example.bundleId" with your desired package name.

> **Important Note:** Make sure to change the package name before setting up Firebase. If you've already set up Firebase with a different package name, you'll need to update the Firebase configuration to match your new package name.
