---
sidebar_position: 13
---

# Cashfree Setup

## Set API Keys

Step 1: Login to Cashfree Dashboard
Step 2: Click on Developers -> Click API keys

![Cashfree Keys](</images/panel/cashfree/cashfree-1.jpg>)

Step 3: Generate API keys and copy Client ID and Client Secret

![Cashfree Keys](</images/panel/cashfree/cashfree-2.jpg>)

## Setup Webhook

:::tip
Webhook is managed automatically in system internally
:::

Webhooks are verified with your **Cashfree Secret Key**, so it must be correct.

## Store currency

Set the Cashfree currency in `Settings` → `Payment Settings`. Payments are refused if it differs from the store currency in [System Settings](./system-configurations.md#more-settings) (v1.9.2+).
