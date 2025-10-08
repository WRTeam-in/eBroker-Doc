---
sidebar_position: 20
---

# Gemini AI Setup

Follow these steps to enable Gemini AI search in the Admin Panel.

## 1) Create an API key

1. Open Google Cloud Console and go to `APIs & Services` > `Credentials`.
2. Click `Create credentials` > `API key`.
![Gemini API Setup](/images/panel/gemini-ai/gemini_api_setup.png)
3. Enter a clear name for the key (e.g., "eBroker Gemini Key").
4. Under `API restrictions`, select `Restrict key` and choose `Generative Language API`.
5. (Optional) Under `Application restrictions`, choose `IP addresses` and add the public IP of your server if you want to restrict usage by server IP.

![Setup API](/images/panel/gemini-ai/gemini_api_setup_3.png)

6. Click `Create` and copy the generated key.
![Copy API Key](/images/panel/gemini-ai/gemini_api_setup_1.png)

> Reference: The key dialog shows that you must pass it as the `key=API_KEY` parameter when calling the API.

## 2) Configure in Admin Panel

1. Log in to the Admin Panel.
2. Navigate to `Settings` > `System Settings`.
3. Turn on `Enable Gemini AI Search`.
4. Paste the copied value into `Gemini API Key`.
5. Click `Save`.
![Setup API](/images/panel/gemini-ai/gemini_api_setup_2.png)

After saving, it can take up to 5 minutes for settings to take effect.


