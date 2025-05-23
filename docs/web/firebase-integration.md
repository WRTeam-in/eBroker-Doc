---
sidebar_position: 5
---

# Firebase Integration for Web

Integrate Firebase with your eBroker web application to enable features like authentication, real-time data, and more. This guide walks you through the setup process.

:::note Before You Start
If you have already configured Firebase for the **eBroker Mobile App** using the same project, you can skip Step 1 and proceed directly to Step 2 (Add Web App to Project). Ensure you use the *same* Firebase project for both web and app for seamless integration.
:::

## Step 1: Create a Firebase Project

If you don't already have a Firebase project for eBroker:

1.  **Navigate to Firebase Console:** Go to [https://console.firebase.google.com/](https://console.firebase.google.com/).
2.  **Add Project:** Click on "Add project".
3.  **Project Name:** Enter a suitable name (e.g., "eBroker Platform").
4.  **Google Analytics (Optional):** Decide whether to enable Google Analytics for this project.
5.  **Create:** Click "Create project" and wait for it to provision.

    *Screenshots showing the project creation flow.*
    ![Firebase Project Creation Step 1](/images/web/createFirebase1.jpg)
    ![Firebase Project Creation Step 2](/images/web/createFirebase2.jpg)
    ![Firebase Project Creation Step 3](/images/web/createFirebase3.jpg)
    ![Firebase Project Creation Step 4](/images/web/createFirebase4.jpg)

## Step 2: Add Web App to Project

Once your project is ready, you need to register your web application:

1.  **Go to Project Settings:** In your Firebase project dashboard, click the gear icon next to "Project Overview" and select "Project settings".
2.  **Add App:** Scroll down to the "Your apps" section and click the Web icon (`</>`).
    ![Add Web App Button](/images/web/addWeb.png)
3.  **Register App:**
    *   Enter an "App nickname" (e.g., "eBroker Web").
    *   *Optional:* Set up Firebase Hosting if you plan to deploy directly through Firebase.
    *   Click "Register app".
    ![Register Web App Form](/images/web/addWeb2.png)

## Step 3: Configure Firebase Credentials

After registering, Firebase provides the necessary configuration details. You need to add these to your web application's `.env` file.

1.  **Copy Firebase Config:** Firebase will display the configuration object (SDK setup). Copy the values for `apiKey`, `authDomain`, `projectId`, `storageBucket`, `messagingSenderId`, and `appId`.
    ![Firebase SDK Configuration Code](/images/web/addWeb3.png)

2.  **Update `.env` File:**
    *   Open the `.env` file in the root of your eBroker web project.
    <!-- *   Locate the `NEXT_PUBLIC_FIREBASE_` variables. -->
    *   Paste the corresponding values you copied from the Firebase console.

    ```dotenv
    NEXT_PUBLIC_API_KEY=YOUR_API_KEY
    NEXT_PUBLIC_AUTH_DOMAIN=YOUR_AUTH_DOMAIN
    NEXT_PUBLIC_PROJECT_ID=YOUR_PROJECT_ID
    NEXT_PUBLIC_STORAGE_BUCKET=YOUR_STORAGE_BUCKET
    NEXT_PUBLIC_MESSAGING_SENDER_ID=YOUR_MESSAGING_SENDER_ID
    NEXT_PUBLIC_APP_ID=YOUR_APP_ID
    NEXT_PUBLIC_MEASUREMENT_ID=YOUR_MEASUREMENT_ID # Optional, if available
    ```

    ![Firebase .env File Configuration Example](/images/web/firebase-v-1.0.9.png) 


## Step 4: Add Authorized Domain for Authentication

To allow users to sign in using Firebase Authentication from your website, you must add your website's domain to the list of authorized domains.

1.  **Navigate to Authentication:** In the Firebase Console, go to the "Build" section in the left sidebar and click on "Authentication".
2.  **Go to Settings:** Click the "Settings" tab.
3.  **Authorized Domains:** Select the "Authorized domains" sub-tab.
4.  **Add Domain:** Click "Add domain" and enter the domain where your eBroker web app is hosted (e.g., `yourdomain.com`). For local development, you might need to add `localhost`.
    ![Firebase Authorized Domains List](/images/web/firebase-configuration.png)

## Completion

You have now successfully integrated Firebase with your eBroker web application! Firebase services like Authentication should now function correctly, provided the credentials match between your `.env` file and the Admin Panel.
