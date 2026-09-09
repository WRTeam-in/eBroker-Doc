---
sidebar_position: 7
---

# Fix Google Sign-In Popup Blocked on Production

On some production domains (commonly domains hosted on shared hosting providers like Hostinger), clicking **Sign in with Google** may fail silently or throw `auth/popup-blocked` / `auth/cancelled-popup-request`. This happens because the browser/OS blocks the Google OAuth popup when Firebase's default `authDomain` (`your-project.firebaseapp.com`) does not match your production domain.

eBroker Web already ships with a redirect fallback: if the popup is blocked, it automatically retries sign-in using `signInWithRedirect` instead of `signInWithPopup`. To make this work reliably (and to avoid the popup being blocked in the first place), you should point Firebase's `authDomain` to a custom subdomain of your own production domain instead of the default `firebaseapp.com` domain.

This guide walks you through creating that custom auth subdomain using Firebase Hosting and connecting it via a CNAME record in your domain's DNS settings.

## Step 1: Open Your Firebase Project

1. Go to the [Firebase Console](https://console.firebase.google.com/)
2. Select your project

![Select Firebase project](/images/web/firebase-console-select-project.png)

## Step 2: Open Hosting

1. Hover on **Hosting & Serverless** in the left sidebar
2. Click **Hosting**

![Open Hosting menu](/images/web/firebase-hosting-menu-open.png)

## Step 3: Add a Custom Domain

On the **Manage site** dashboard, click **Add custom domain** under the **Domains** section.

![Add custom domain button](/images/web/firebase-hosting-add-custom-domain.png)

## Step 4: Enter the Auth Subdomain

Enter a subdomain of your production domain, for example `auth.yourdomain.com`, then click **Continue**.

:::tip
Use a dedicated subdomain like `auth.yourdomain.com` instead of your root domain — this keeps your Firebase Hosting setup isolated from your main website hosting.
:::

![Enter custom subdomain](/images/web/firebase-custom-domain-enter-subdomain.png)

## Step 5: Copy the DNS Record

Firebase will show you a **CNAME record** (record type, domain name, and value) that you need to add in your domain's DNS settings to verify ownership.

![CNAME setup instructions](/images/web/firebase-custom-domain-cname-instructions.png)

Keep this dialog open (or note down the values) — you'll need them in the next step.

## Step 6: Add the CNAME Record in Your DNS Provider

Go to your domain's DNS management page (Hostinger, GoDaddy, Cloudflare, etc.). The steps below use Hostinger as an example — the fields (record type, name, target/value) are the same everywhere, only the UI differs.

:::info Using a different DNS provider?
- **GoDaddy**: [Add a CNAME record](https://www.godaddy.com/help/add-a-cname-record-19236)
- **Cloudflare**: [Manage DNS records](https://developers.cloudflare.com/dns/manage-dns-records/how-to/create-dns-records/)
:::

1. Go to **Domains > DNS** for your domain

![Open DNS / Nameservers page](/images/web/hostinger-domain-portfolio-dns-link.png)

2. Scroll down to **Manage DNS records** and choose **CNAME** as the record type

![Select CNAME record type](/images/web/hostinger-dns-select-cname-record-type.png)

3. Fill in the record using the values from Step 5:
   - **Name**: your auth subdomain (e.g. `auth.yourdomain.com`)
   - **Target**: the value Firebase gave you (e.g. `your-project.web.app`)
   - Click **Add Record**

![CNAME record filled in](/images/web/hostinger-dns-cname-record-filled.png)

## Step 7: Verify the Domain in Firebase

Go back to the Firebase dialog and click **Verify**.

![Verify domain in Firebase](/images/web/firebase-custom-domain-verify-button.png)

DNS propagation can take anywhere from a few minutes to a few hours. Once verified, the domain status will change to **Connected**.

![Custom domain connected](/images/web/firebase-custom-domain-connected.png)

## Step 8: Update Your `.env` File

In your eBroker Web project, open the `.env` file and set `NEXT_PUBLIC_AUTH_DOMAIN` to your new custom auth subdomain instead of the default `your-project.firebaseapp.com`.

![Set NEXT_PUBLIC_AUTH_DOMAIN in .env](/images/web/web-env-auth-domain-variable.png)

```env title=".env"
NEXT_PUBLIC_AUTH_DOMAIN="auth.yourdomain.com"
```

## Step 9: Add the Domain to Firebase Authorized Domains

1. In the Firebase Console, go to **Authentication > Settings > Authorized domains**
2. Add your custom auth subdomain (e.g. `auth.yourdomain.com`) to the list

## Step 10: Add the Domain to Your Google API Key Restrictions

The Google Maps / Firebase API key used by your web app is usually restricted to a set of allowed websites. Your new auth subdomain must be added there too, otherwise requests from it will be rejected.

1. Go to the [Google Cloud Console Credentials page](https://console.cloud.google.com/apis/credentials) and make sure the correct project is selected
2. Under **API Keys**, open the key used by your web app
3. Under **Website restrictions**, click **Add** and enter your subdomain (e.g. `https://auth.yourdomain.com/*`)
4. Click **Save**

![Add website restriction on API key](/images/web/google-cloud-api-key-add-website-restriction.png)

## Step 11: Add the Domain to Your OAuth 2.0 Client

Google Sign-In also uses an OAuth 2.0 Client ID, which separately restricts which origins and redirect URLs are allowed.

1. On the same Credentials page, scroll down to **OAuth 2.0 Client IDs**

![OAuth 2.0 Client IDs list](/images/web/google-cloud-oauth-client-ids-list.png)

2. Open the **Web application** client used by your web app
3. Under **Authorized JavaScript origins**, click **Add URI** and add your auth subdomain (e.g. `https://auth.yourdomain.com`)
4. Under **Authorized redirect URIs**, click **Add URI** and add the same subdomain with the Firebase auth handler path (e.g. `https://auth.yourdomain.com/__/auth/handler`)
5. Click **Save**

![Add authorized origins and redirect URIs](/images/web/google-cloud-oauth-authorized-origins-redirects.png)

:::tip
Keep the existing `firebaseapp.com` entries in both places — you're adding your new subdomain alongside them, not replacing them.
:::

## Step 12: Rebuild and Redeploy

Rebuild your Next.js app so the new environment variable is picked up, then redeploy it to your production server.

## Result

With `authDomain` pointed at your own subdomain, Google's OAuth popup opens from a domain the browser trusts as part of your site, which resolves the popup-blocked issue on most browsers/OS combinations. As an extra safety net, eBroker Web still falls back to `signInWithRedirect` automatically if a popup is blocked for any other reason (browser extensions, OS-level popup blockers, etc.) — see `GoogleRedirectHandler` for how the redirect result is picked up after the user returns to your site.

## Troubleshooting

- **Domain stuck on "Needs setup"**: double-check the CNAME `Name` and `Target` values exactly match what Firebase gave you, and allow more time for DNS propagation.
- **Still getting `auth/popup-blocked`**: confirm `NEXT_PUBLIC_AUTH_DOMAIN` in `.env` was updated and the app was rebuilt, and that the new subdomain is listed under Firebase's Authorized domains.
- **Redirect flow doesn't complete**: make sure your app is not stripping query parameters on load, since Firebase needs them to resolve the redirect result.
