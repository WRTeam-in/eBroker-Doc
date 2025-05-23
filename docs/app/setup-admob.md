---
sidebar_position: 9
---

# Setup AdMob

Integrating Google AdMob into your eBroker application allows you to monetize your app through advertisements. This guide explains how to set up AdMob in your application.

## Creating AdMob Account

1. Create an account on [Google AdMob](https://admob.google.com/)
2. Set up three ad units:
   - Banner Ad
   - Interstitial Ad
   - Rewarded Ad

## Finding Your App ID

1. Visit [AdMob Help](https://support.google.com/admob/answer/7356431?hl=en) for detailed instructions
2. Get your AdMob App ID from your AdMob dashboard

## Configuring Android

1. Open `android/app/src/main/AndroidManifest.xml`
2. Add your Android App ID in the meta-data section as shown:

![AdMob Android](/images/app/admob_android.png)

## Configuring iOS

1. Open `ios/Runner/Info.plist`
2. Add your iOS App ID in the `GADApplicationIdentifier` key:

![AdMob iOS](/images/app/admob_ios.png)

## Admin Panel Configuration

1. Open your admin panel
2. Navigate to Settings > App Settings
3. Find the AdMob section
4. Add your Banner and Interstitial Ad IDs:

![AdMob Admin](/images/app/admob_admin.png)

5. You can enable or disable ads using the toggle button

## Ad Types Explained

### Banner Ads

- Rectangular ads displayed at the top or bottom of the screen
- Less intrusive but always visible
- Good for continuous revenue generation

### Interstitial Ads

- Full-screen ads that appear at natural transition points
- Higher revenue per impression
- Should be used sparingly to avoid disrupting user experience

### Rewarded Ads

- Offer in-app rewards for watching video ads
- Highest engagement and revenue potential
- User-initiated, providing better experience

## Testing AdMob Integration

Before launching your app:

1. Use AdMob test ad IDs during development
2. Test on multiple devices to ensure ads display correctly
3. Verify that ads don't interfere with app functionality
4. Check that enabling/disabling ads from the admin panel works correctly

## AdMob Best Practices

- Don't overload your app with too many ads
- Place ads in positions that won't disrupt user experience
- Comply with Google AdMob policies to avoid account suspension
- Consider user experience when implementing interstitial ads
- Regularly check your AdMob analytics to optimize ad placement and formats
