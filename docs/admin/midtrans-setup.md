---
sidebar_position: 13
---

# Midtrans Setup

## Set API Keys

Step 1: Login to Midtrans Dashboard

Step 2: Click on Settings -> Access Keys

Step 3: Copy Server Key, Client Key and Merchant ID
![Midtrans Keys](</images/panel/midtrans/midtrans-1.jpg>)

Step 4: Paste these in admin -> settings -> payment settings -> midtrans

## Setup Webhook
Step 1: Click on Settings -> Payments -> Notification URL

Step 2: Follow below screenshot instructions

![Midtrans Webhook](</images/panel/midtrans/midtrans-2.jpg>)

Webhooks are verified with your **Server Key**, so it must be correct.

## Store currency

Midtrans charges in `IDR`. Payments are refused if it differs from the store currency in [System Settings](./system-configurations.md#more-settings) (v1.9.2+).
