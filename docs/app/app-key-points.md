---
sidebar_position: 2
---

# eBroker App - Key Points

## System Requirements

- Flutter Version: 3.29.3
- Java Version: JDK 22
- Firebase account

## Key Setup Steps

### 1. Firebase Configuration

- Create a Firebase project
- Configure phone authentication
- Setup SHA keys for real device testing
- Configure Firebase Cloud Messaging (FCM) for notifications
- Setup iOS push notification certificates if needed

### 2. Essential App Customizations

- **App Name**: Edit in `lib > settings.dart` and use rename package
- **Package Name**: Update in settings file before Firebase setup
- **App Icon**: Replace icon files or use Flutter launcher icons package
- **Theme Colors**: Customize in theme file

### 3. API Integration

- **Google Maps**: Set up API keys for location features
- **Unsplash**: Configure API for image access
- **Payment Gateways**: Set up necessary payment gateway credentials

### 4. Authentication

- Firebase Phone Authentication
- Secure login process
- User registration flow

### 5. Backend Connection

- Connect to admin panel via API endpoint
- Configure webhook URLs if using payment gateways

### 6. Deep Linking

- Set up Firebase Dynamic Links for sharing properties
- Configure app for proper deep link handling

### 7. App Building

- Generate signed APK for Android
- Create proper release builds
- Prepare for store submission

### 8. Performance Considerations

- Image optimization settings
- Map rendering configuration
- Notification handling

### 9. Additional Features

- Multi-language support
- AdMob integration (if using)
- Custom icons and branding

## Common Issues & Solutions

- SHA key issues for phone authentication
- Firebase configuration problems
- Push notification delivery
- Deep link handling errors
