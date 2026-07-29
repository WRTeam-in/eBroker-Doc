---
sidebar_position: 18
---

# Microsoft Clarity Setup

Microsoft Clarity is a free analytics tool that provides session recordings, heatmaps, and AI-driven insights into how visitors use your eBroker web application. Follow these steps to set up Clarity for your website.

## Creating a Microsoft Clarity Account

1. Go to [Microsoft Clarity](https://clarity.microsoft.com/) and click **Sign up**

![Clarity Homepage](/images/web/clarity-homepage-signup.png)

2. Confirm your email address
3. Check the box to accept the Clarity Terms of Use and click **Continue**

![Confirm Email](/images/web/clarity-confirm-email.png)

## Creating a Clarity Project

1. Select the **Website** tab
2. Enter your app name
3. Enter your live website URL
4. Select **Real Estate** from the **Website industry** dropdown
5. Click **Add new project**

![Create Project](/images/web/clarity-create-project.png)

## Getting the Tracking Code

1. On the **Almost there!** screen, choose **Install manually** and click **Get tracking code**

![Installation Methods](/images/web/clarity-installation-methods.png)

2. Copy the tracking code shown

![Tracking Code](/images/web/clarity-tracking-code.png)

## Adding the Clarity Project ID to Your Website

1. Open the `.env` file in your project's root directory
2. Add your Clarity project ID (from the tracking code, the value passed after `"clarity", "script",`) to the `NEXT_PUBLIC_CLARITY_PROJECT_ID` variable

```
# MICROSOFT CLARITY — session recording & heatmaps
NEXT_PUBLIC_CLARITY_PROJECT_ID=""
```

![Placement in Website Code](/images/web/clarity-placement-in-website-code.png)

## Building and Deploying

1. Run the appropriate build command based on your `NEXT_PUBLIC_SEO` value in the `.env` file (see [Running the Project](./running-project.md))
2. Upload the generated files to your server
3. Return to Microsoft Clarity and check the **Getting Started** page — it can take up to 2 hours after installation for session data to start appearing

## Best Practices

- Clarity masks all sensitive content (such as input fields) on your site by default
- Give it a couple of hours after deployment before troubleshooting missing data
- Use session recordings and heatmaps together to identify friction points in the user journey
