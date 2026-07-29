---
sidebar_position: 17
---

# Google Analytics 4 (GA4) Setup

Google Analytics 4 (GA4) lets you track visitor behavior, traffic sources, and engagement on your eBroker web application. Follow these steps to create a GA4 property and connect it to your website.

## Creating a Google Analytics Account

1. Go to [Google Analytics](https://analytics.google.com/) and sign in with your Google account
2. Enter an account name (e.g. your company or brand name)

![Create Account](/images/web/ga4-create-account.png)

## Creating a Property

1. Enter a property name for your web app
2. Select your reporting time zone and currency

![Create Property](/images/web/ga4-create-property.png)

## Adding Business Details

1. Select **Real Estate** from the industry category dropdown
2. Choose your business size

![Business Details](/images/web/ga4-business-details.png)

## Choosing Business Objectives

Select the objectives that best match your goals, such as **Generate leads**, **Drive sales**, **Understand web and/or app traffic**, and **View user engagement & retention**

![Business Objectives](/images/web/ga4-business-objectives.png)

## Accepting the Terms of Service

1. Select your country/region from the dropdown
2. Check the box to accept the Data Processing Terms
3. Click **I Accept**

![Terms of Service](/images/web/ga4-terms-of-service.png)

## Setting Up Data Collection

1. Choose **Web** as the platform to start collecting data

![Choose Platform](/images/web/ga4-choose-platform.png)

2. Enter your live website URL (without `https://`) in the **Website URL** field
3. Enter a stream name and click **Create & continue**

![Set Up Data Stream](/images/web/ga4-setup-data-stream.png)

## Getting Your Measurement ID

Once the data stream is created, note the **Measurement ID** (starts with `G-`) shown in the stream details

![Stream Details](/images/web/ga4-stream-details.png)

## Getting the Google Tag

1. Click **View tag instructions** and select the **Install manually** tab
2. Copy the Google tag script, and note the Measurement ID (`G-XXXXXXXXXX`) highlighted inside it

![Install Manually](/images/web/ga4-install-manually.png)

## Adding the Measurement ID to Your Website

1. Open the `.env` file in your project's root directory
2. Add your Measurement ID (`G-XXXXXXXXXX`) to the `NEXT_PUBLIC_GA_MEASUREMENT_ID` variable

```
# GOOGLE ANALYTICS 4 (gtag.js) — website tracking, distinct from Firebase's NEXT_PUBLIC_MEASUREMENT_ID above
NEXT_PUBLIC_GA_MEASUREMENT_ID=""
```

![Placement in Website Code](/images/web/ga4-placement-in-website-code.png)

## Building and Deploying

1. Run the appropriate build command based on your `NEXT_PUBLIC_SEO` value in the `.env` file (see [Running the Project](./running-project.md))
2. Upload the generated files to your server
3. Return to Google Analytics and enter your live website URL in the **Test your website** field, then click **Test** to verify the tag is firing correctly

![Test Website](/images/web/ga4-test-website.png)

> **Note:** It can take up to 24-48 hours for data to fully appear in your Google Analytics dashboard after installing the tag.

## Best Practices

- Do not add more than one Google tag to the same page
- Keep your Measurement ID private and avoid committing it to public repositories
- Regularly check the Google Analytics dashboard to monitor traffic, engagement, and conversions
