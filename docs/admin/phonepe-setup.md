---
sidebar_position: 13
---

# PhonePe Setup

## Set API Keys

Step 1: Login to PhonePe Business Dashboard

Step 2: Click on Developer Settings -> API Keys

Step 3: Copy Client ID, Client Version, Client Secret and Merchant ID
![PhonePe Keys](</images/panel/phonepe/phonepe-1.jpg>)

Step 4: Paste these in admin -> settings -> payment settings -> phonepe

## Setup Webhook
Step 1: Click on Developer Settings -> Webhooks

Step 2: Click on Create New Webhook

Step 3: Fill the details mentioned in below image

![PhonePe Webhook](</images/panel/phonepe/phonepe-2.jpg>)

Step 4: Copy the Webhook Username and Password and add in admin -> settings -> payment settings -> phonepe

:::warning
From v1.9.2, PhonePe webhooks are rejected while the **Webhook Username** or **Webhook Password** is empty.
:::

## Store currency

PhonePe charges in `INR`. Payments are refused if it differs from the store currency in [System Settings](./system-configurations.md#more-settings) (v1.9.2+).
