---
sidebar_position: 3
---

# Change App Name

To change your app name, follow these simple steps:

## Method 1: Using settings.dart

1. Navigate to `lib > settings.dart` in your project
2. Find the variable named `applicationName="Your app name"`
3. Update the text inside the quotes with your desired app name

![App Name](/images/app/app_name.png)

This method only changes the display name of the minimized app. For a complete app name change, you'll need to use Method 2.

## Method 2: Using Rename Package

Run the following commands in your terminal:

```bash
flutter pub global activate rename
```

Once the package is activated, run:

```bash
rename setAppName --targets ios,android --value "YourAppName"
```

Replace "YourAppName" with your desired application name.

This will properly update the app name in all necessary Android and iOS configuration files.
