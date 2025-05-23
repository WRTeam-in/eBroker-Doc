// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 */
export default {
  tutorialSidebar: [
    {
      type: "doc",
      label: "Introduction",
      id: "main-intro",
    },
    {
      type: "category",
      label: "Admin Panel",
      items: [
        "admin/configure-on-server",
        "admin/system-configurations",
        "admin/privacy-policy",
        "admin/terms-conditions",
        "admin/about-us",
        "admin/firebase-settings",
        "admin/twilio-settings",
        "admin/notification-settings",
        "admin/firebase-billing",
        "admin/paypal-keys",
        "admin/paypal-webhook",
        "admin/paystack-keys",
        "admin/paystack-webhook",
        "admin/razorpay-keys",
        "admin/razorpay-webhook",
        "admin/stripe-keys",
        "admin/stripe-webhook",
        "admin/flutterwave-setup",
        "admin/unsplash-api-key",
        "admin/update-system-version",
        "admin/support",
        "admin/feedback",
        "admin/contact-us",
      ],
    },
    {
      type: "category",
      label: "App Documentation",
      items: [
        
        "app/app-key-points",
        "app/change-app-name",
        "app/change-package-name",
        "app/change-app-icon",
        "app/firebase-setup",
        "app/maps-setup",
        "app/theme-colors",
        "app/change-app-version",
        "app/add-languages",
        "app/setup-deep-link",
        "app/setup-admob",
        "app/other-icons",
        "app/connect-admin-panel",
        "app/generate-app",
      ],
    },
    {
      type: "category",
      label: "Web Documentation",
      items: [
        "web/index",
        "web/installation-setup",
        "web/api-url-config",
        "web/google-maps-setup",
        "web/firebase-integration",
        "web/firebase-auth",
        "web/notification-setup",
        "web/customize-app-name",
        "web/set-favicon",
        "web/social-media",
        "web/country-code",
        "web/color-customization",
        "web/web-logo",
        "web/google-maps-iframe",
        "web/google-adsense",
        "web/running-project",
        "web/sitemap-setup",
        "web/deployment-without-seo",
        "web/seo-for-web",
        "web/nextjs-deployment",
        "web/htaccess-config",
      ],
    },
    {
      type: "category",
      label: "Web Videos",
      items: ["web-video/index"],
    },
    "changelog/index",
    "support/index",
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};
