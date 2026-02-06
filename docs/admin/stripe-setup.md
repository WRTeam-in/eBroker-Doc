---
sidebar_position: 13
---

# Stripe Setup

## Set API Keys

Step 1: Login to Stripe Dashboard
Step 2: Click API keys

<!-- ![Stripe Keys](</images/panel/stripe(keys).png>) -->

Step 3: Copy publishable key and secret keys and paste it in admin panel system settings

![Stripe Settings](/images/panel/stripe/stripe-admin-setting.png)

## Setup Webhook

Step 1: Login to Stripe Dashboard  

Step 2: Developers -> Webhooks

Step 3: Click Add endpoint
![Stripe Step 1](</images/panel/stripe/stripe-webhook-1.jpg>)

Step 4: Select Required Events
![Stripe Step 2](</images/panel/stripe/stripe-webhook-2.jpg>)

Step 5: Continue -> Select Webhook Event -> Continue

Step 6: Add Webhook URL from admin and required fields -> Create 
![Stripe Step 3](</images/panel/stripe/stripe-webhook-3.jpg>)

Step 7: Copy Webhook ID and add it in admin panel system -> payment settings
![Stripe Step 4](</images/panel/stripe/stripe-webhook-4.jpg>)
