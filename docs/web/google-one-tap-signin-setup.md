---
sidebar_position: 8
---

# Google One Tap Sign-In Setup

Besides the **Continue with Google** button in the login modal, eBroker Web also supports **Google One Tap** — the small prompt that automatically appears in the corner of the homepage offering to sign the visitor in with their Google account, without any click needed to open it.

One Tap is powered by Google Identity Services (GSI) and uses the same OAuth Web Client ID that's already configured for Firebase's Google sign-in provider — you don't need to create a new OAuth client, you only need to copy an existing ID into your `.env` file.

## How It Works

- One Tap is rendered by `GoogleOneTap.jsx`, mounted only on the homepage
- It loads Google's `gsi/client` script and calls `window.google.accounts.id.initialize()` with your `NEXT_PUBLIC_GOOGLE_CLIENT_ID`
- It only shows up when a visitor is **not already logged in** and **Social Login** is enabled in your admin panel settings
- On credential response, it signs the user into Firebase using `signInWithCredential`, then completes the same signup flow as the regular Google button

## Step 1: Enable Google Sign-In in Firebase

1. Go to the [Firebase Console](https://console.firebase.google.com/)
2. Select your project, then open **Authentication > Sign-in method**
3. Click the edit (pencil) icon next to the **Google** provider

![Edit Google sign-in provider](/images/web/firebase-google-signin-edit-provider.png)

## Step 2: Copy the Web Client ID

Expand **Web SDK configuration** and copy the value shown in **Web client ID**.

![Web client ID and secret](/images/web/firebase-google-web-client-id-secret.png)

:::info
This is the same OAuth 2.0 Web application client used for the popup/redirect Google sign-in — see [Fix Google Sign-In Popup Blocked on Production](./google-signin-popup-blocked-fix.md#step-11-add-the-domain-to-your-oauth-20-client) for how it's configured in Google Cloud Console (Authorized JavaScript origins, redirect URIs, etc).
:::

## Step 3: Add the Client ID to Your `.env` File

In your eBroker Web project, open the `.env` file and paste the Web client ID into `NEXT_PUBLIC_GOOGLE_CLIENT_ID`.

![Set NEXT_PUBLIC_GOOGLE_CLIENT_ID in .env](/images/web/web-env-google-client-id-variable.png)

```env title=".env"
NEXT_PUBLIC_GOOGLE_CLIENT_ID="your-client-id.apps.googleusercontent.com"
```

## Step 4: Enable Social Login in the Admin Panel

One Tap only renders when Social Login is turned on for your website. In your eBroker admin panel, go to **Settings** and enable the **Social Login** option for the web app.

## Step 5: Rebuild and Redeploy

Rebuild your Next.js app so the new environment variable is picked up, then redeploy it to your production server.

## Result

Visitors who aren't logged in and already have an active Google session in their browser will see the One Tap prompt appear automatically on the homepage. Signing in through it goes through the same Firebase + backend signup flow as the regular Google button.

![Google One Tap prompt on the homepage](/images/web/web-google-one-tap-prompt-result.png)

## Troubleshooting

- **One Tap never appears**: confirm `NEXT_PUBLIC_GOOGLE_CLIENT_ID` is set and the app was rebuilt, that Social Login is enabled in the admin panel, and that you aren't already logged in (One Tap is skipped when `userData` exists).
- **Prompt appears but sign-in fails**: make sure your production domain is listed under the OAuth client's Authorized JavaScript origins in Google Cloud Console — see [Fix Google Sign-In Popup Blocked on Production](./google-signin-popup-blocked-fix.md#step-11-add-the-domain-to-your-oauth-20-client).
- **Prompt flashes and disappears immediately**: this happens if `cancel_on_tap_outside` fires due to an unrelated click, or if the credential callback throws — check the browser console for Firebase auth errors.
