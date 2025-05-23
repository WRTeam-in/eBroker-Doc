---
sidebar_position: 15
---

# Google AdSense Integration

Integrating Google AdSense with your eBroker web application allows you to monetize your website by displaying targeted advertisements. Follow these steps to set up Google AdSense.

## Setting Up Google AdSense

1. Go to [Google AdSense](https://adsense.google.com/start/) and sign in with your Google account
2. Click on "Add site" and enter your website URL

![AdSense](/images/web/adsence.png)

3. Click the "Let's Go" button to proceed

![Let's Go AdSense](/images/web/letsGoadsence.png)

4. Copy the provided AdSense script code

![First Verify](/images/web/first_verify.png)

## Adding the AdSense Script to Your Website

1. Navigate to your project's source files
2. Open the `src` → `pages` → `_document.js` file
3. Add the AdSense script code to the appropriate section

![AdSense Script](/images/web/adsence-script.png)

## Building and Deploying

After adding the AdSense script:

1. Run the command `npm run export` to build your project
2. Upload the generated files to your server
3. Return to Google AdSense and click the "Verify" button

![Verify](/images/web/verify.png)

## Waiting for Approval

After verification, your site will enter a review process:

1. Google will review your website to ensure it complies with AdSense policies
2. During this time, you'll see a "Getting ready" message
3. Your site will not display ads until it has been approved

![Under Review](/images/web/under_re.png)

The review process typically takes a few days to a couple of weeks.

## Placing Ad Units

Once your site is approved:

1. Create ad units in your Google AdSense dashboard
2. Get the ad code for each unit
3. Place these codes in strategic locations on your website

## Best Practices

For effective AdSense integration:

- Don't overload your pages with too many ads
- Place ads in positions that generate engagement without disrupting user experience
- Follow all Google AdSense policies to avoid account suspension
- Regularly check your AdSense dashboard for performance metrics and optimization tips
