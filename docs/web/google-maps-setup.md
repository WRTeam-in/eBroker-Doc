---
sidebar_position: 4
---

# Google Maps Setup

To enable location-based features in your web application, you need to set up Google Maps API. Follow these steps to configure it properly.

## Obtaining a Google Maps API Key

1. Visit the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Navigate to the APIs & Services > Credentials section
4. Click "Create Credentials" and select "API Key"
5. Restrict the API key for better security (optional but recommended)
6. Copy your newly created API key

## Adding the API Key to Your Project

1. Open the `.env` file in your project's root directory
2. Locate the Google Maps API key variable
3. Paste your API key into this variable

![Google API Configuration](/images/web/google-maps-api-v-1.2.6.png)

## Enabling Required Google APIs

- For full functionality, you'll need to enable `Maps JavaScript API` for your project from Google Cloud Console, go to "APIs & Services" > "Library"

## Restricting Google Maps API Key

To prevent abusive use of google maps api key, you have to add http referrers to your project's google maps api key in the google cloud console.
To restrict follow the steps below :-

1. Select your project in [Google Cloud Console](https://console.cloud.google.com/) (as shown in the below image) and navigate to "APIs & Services" > "Credentials".

![Restricting API Key S1](/images/web/restrict-map-key-s1.png)

2. Create a new API Key (image attached below for help).

![Restricting API Key S2](/images/web/restrict-map-key-s2.png)

3. Name your Maps API key, select `Application Restrictions` as `Websites`, now add your website's url without `https://` (make sure to add `/*` at the end) and click `Done`.

   Note :- (optionally you can add `localhost:3000/*`, if you want to test google maps in your local environment. But make sure you remove it while deploying website in production environment)

![Restricting API Key S3](/images/web/restrict-map-key-s3.png)

4. Scroll down and select `API Restrictions` to `Restrict Key`, click and open the dropdown and type for `Maps Javascript API` and select that checkbox, hit save button after you see `Maps Javascript API` in `Selected APIs` i.e. the restricted api keys list.

![Restricting API Key S4](/images/web/restrict-map-key-s4.png)

5. After saving the restrictions, click on show key and copy the api key you've just restricted.Now paste it in your website code's `.env` file as value of `NEXT_PUBLIC_GOOGLE_MAPS_API`.

![Restricting API Key S5](/images/web/restrict-map-key-s5.png)
![Add Restricted API Key](/images/web/add-restricted-key.png)

## Verifying Setup

After configuring your Google Maps API key:

1. Restart your development server
2. Check if maps are displaying correctly in your application
3. Test location-based features like property search by location

If you encounter any issues, verify that:

- Your API key is correctly entered in the `.env` file
- You've enabled all required APIs
- Your billing is set up correctly on Google Cloud (required for API usage)
