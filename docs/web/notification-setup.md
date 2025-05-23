---
sidebar_position: 7
---

# Notification Setup

Web push notifications allow you to engage with your users even when they're not actively using your website. Follow these steps to set up notifications for your eBroker web application.

## Getting the VAPID API Key

To enable web push notifications, you need to set up VAPID (Voluntary Application Server Identification) keys:

1. Go to your Firebase project in the [Firebase Console](https://console.firebase.google.com/)
2. Navigate to Project Settings > Cloud Messaging
3. Scroll down to the Web configuration section
4. Find the Web Push certificates section
5. Generate a new key pair if you don't already have one
6. Copy the key pair information

![How to Get VAPID API](/images/web/how-get-vapid-api.png)

## Configuring VAPID Key in Your Project

1. Open the `.env` file in your project's root directory
2. Find the VAPID API key variable
3. Paste your VAPID key into this variable

![VAPID API Configuration](/images/web/vapid_api-v-1.0.9.png)

## Testing Notifications

After setting up the VAPID key:

1. Restart your development server
2. Try to subscribe to notifications in your web application
3. Send a test notification to verify the setup is working correctly

## Troubleshooting

If notifications aren't working:

- Make sure your VAPID key is correctly configured in your `.env` file
- Check that your Firebase project is properly set up
- Verify that your browser supports web push notifications
- Check for permission issues (users must grant notification permissions)
- Look for errors in the browser console

## Best Practices

For effective push notifications:

- Only ask for notification permission after establishing user value
- Keep notifications relevant and timely
- Allow users to easily manage their notification preferences
- Don't overwhelm users with too many notifications
