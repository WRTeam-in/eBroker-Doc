---
sidebar_position: 12
---

# Razorpay Setup

## Set API Keys

Follow these steps to set up Razorpay payment gateway in your eBroker application:

### Step 1: Get API Keys from Razorpay

1. Login to your Razorpay Dashboard
2. Navigate to the API Keys section
3. Generate a new API key pair if you don't already have one
4. Copy both the Key ID and Key Secret

### Step 2: Configure in Admin Panel

1. Go to Admin Panel > Settings > Payment Settings
2. Enable Razorpay by toggling the switch
3. Paste the Key ID and Key Secret into the respective fields
4. Save the changes

## Setup 3: Setup Webhook

Step 1: Login to Razorpay Dashboard  
Step 2: Click Account & Setting option -> Developers
Step 3: Click Webhooks
Step 4: Click Add New Webhook

![Razorpay Step 1](</images/panel/razorpay/razorpay-webhook-step1.png>)

![Razorpay Step 2](</images/panel/razorpay/razorpay-webhook-step2.jpg>)

Step 5: Add Webhook Secret in your admin -> settings -> payment settings -> Razorpay -> RazorpayWebhook Secret

### Step 4: Test the Integration

1. Create a test payment to verify the integration works correctly
2. Check that payment status updates properly in your admin dashboard

:::tip
For security, never share your Razorpay Key Secret publicly. Only use the test mode keys during development.
:::
