---
sidebar_position: 11
---

# Country Code Configuration

Setting a default country code for your eBroker web application helps streamline the user experience when entering phone numbers for registration, login, or contact purposes.

## Setting Default Country Code

1. Open the `.env` file in your project's root directory
2. Locate the default country code variable
3. Set it to your preferred country code (e.g., "IN" for India, "US" for the United States)

![Default Country Code](/images/web/default_country_code-v-1.0.9.png)

## Why Set a Default Country Code?

Setting a default country code offers several benefits:

- It streamlines the phone number entry process for users
- It pre-fills the country code dropdown in phone input fields
- It helps ensure phone numbers are stored in a consistent format
- It improves the user experience for your primary target audience

## Country Code Format

When setting the country code, use the two-letter ISO country code (ISO 3166-1 alpha-2) in uppercase:

- ✅ Use: `IN` (for India)
- ✅ Use: `US` (for United States)
- ❌ Don't use: `in`, `us` (lowercase)
- ❌ Don't use: `+91`, `91` (numeric codes)

:::tip Find Your Country Code
You can find a comprehensive list on the Google Developers site: [Country Codes List](https://developers.google.com/hotels/hotel-prices/dev-guide/country-codes).
:::

## Testing the Default Country Code

After setting the default country code:

1. Save the `.env` file
2. Restart your development server
3. Go to a page with a phone number input field (e.g., registration or login)
4. Verify that the correct country code is pre-selected

If the country code is not appearing correctly, double-check your `.env` file configuration and ensure you've restarted your development server after making changes.
