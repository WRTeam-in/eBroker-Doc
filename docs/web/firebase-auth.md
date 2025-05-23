---
sidebar_position: 6
---

# Firebase Authentication

Firebase Authentication provides a secure and easy way to manage user authentication in your eBroker web application. This guide will help you set up different authentication methods.

## Enable Authentication Methods

1. Go to your Firebase project in the [Firebase Console](https://console.firebase.google.com/)
2. Navigate to Authentication > Sign-in method
3. Enable the authentication methods you want to use in your application

![Auth Providers](/images/web/auth_providers.png)

## Supported Authentication Methods

For the eBroker web application, we recommend enabling the following authentication methods:

- **Email/Password**: Traditional email and password login
- **Phone**: Authentication via SMS verification code
- **Google**: Sign in with Google account

## Setting Up Phone Authentication

Phone authentication requires additional setup:

1. Make sure you've added your domain to the authorized domains list
2. Enable Phone authentication in the Sign-in method tab
3. Configure SMS verification message (optional)

## Setting Up Social Authentication

For social login methods like Google and Facebook:

1. Enable the authentication method in Firebase
3. Configure the OAuth redirect URLs to include your domain

## Testing Authentication

After enabling authentication methods:

1. Implement the authentication flow in your application
2. Test each authentication method to ensure it works correctly
3. Check the Firebase Authentication dashboard to see registered users

## Troubleshooting

If you encounter issues with authentication:

- Verify that your Firebase configuration is correct in your application
- Check that your domain is correctly added to authorized domains
- For social logins, ensure all OAuth settings are properly configured
- Check the browser console for any Firebase authentication errors
