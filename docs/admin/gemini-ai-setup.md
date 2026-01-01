---
sidebar_position: 20
---

# Gemini AI Setup

Use this guide to enable and secure Gemini‑powered features in the Admin Panel. It covers free evaluation keys and production‑ready keys with IP protection, plus rate limits and testing.

:::tip What this setting controls
- Master toggle to enable Gemini AI features
- API key storage used by the server for the Generative Language API
- Global and per‑user daily rate limits
- Cache management for AI‑generated content
:::

## Prerequisites
- A Firebase project for your app backend (`https://console.firebase.google.com/`)
- A linked Google Cloud project with billing enabled for production use

---

## Option A — Free evaluation (Google AI Studio key)
Best for development/demo. Limited quotas and no IP restriction.

1. Open `https://aistudio.google.com/app/apikey`.
2. Click **Create API key** and copy it.
3. In Admin Panel go to `Settings` → `System Settings` → `Gemini AI`:
   - Toggle **Enable Gemini AI features**.
   - Paste the key into **Gemini API Key**.
   - Set your global and per‑user daily limits (set `0` for unlimited).
   - Click **Save**.

> Note: Use only from your backend. Do not expose keys in the browser.

---

## Option B — Production (Google Cloud key with IP & API restrictions)
Recommended for live environments with higher quotas and stronger security.

### 1) Enable the API
1. Open Google Cloud Console → `APIs & Services` → `Library`.
2. Enable **Generative Language API** (`generativelanguage.googleapis.com`).
![Gemini API Setup](/images/panel/gemini-ai/gemini_api_setup.png)

### 2) Create a restricted API key
1. Go to `APIs & Services` → `Credentials` → **Create credentials** → **API key**.
2. Name it clearly (e.g., `eBroker Gemini Server Key`).
3. Click the key → **Restrict key**:
   - Under **API restrictions**: select **Restrict key** → choose **Generative Language API**.
   - Under **Application restrictions**: choose **IP addresses** and add your server's public IPv4 and (if applicable) IPv6.
![Setup API](/images/panel/gemini-ai/gemini_api_setup_3.png)
4. Save and copy the key.
![Copy API Key](/images/panel/gemini-ai/gemini_api_setup_1.png)

### 3) Configure in Admin Panel
1. Log in to Admin Panel → `Settings` → `System Settings` → `Gemini AI`.
2. Toggle **Enable Gemini AI features**.
3. Paste the key into **Gemini API Key**.
4. Set rate limits (see recommendations below).
5. Click **Save**.
![Setup API](/images/panel/gemini-ai/gemini_api_setup_2.png)

> If your server's egress IP changes, update the key's allowed IPs or you'll get `403` errors.
