---
sidebar_position: 21
---

# Cron Job Setup

This guide explains how to set up cron jobs on your server to automate scheduled tasks for your eBroker application.

## Steps to Add Cron Job

### 1. Access Your Server
Access your server via SSH or through your Server Panel's Cron Jobs section.

### 2. Add Cron Job Command

Choose one of the following methods based on your server configuration:

> Schedule frequency: set the cron to run every minute using `* * * * *`.

#### Method 1: Using CURL (If CURL is installed)
```bash
curl -s "https://ebroker.wrteam.me/run-scheduler" > /dev/null 2>&1
```

#### Method 2: Using WGET (If CURL is not installed)
```bash
wget -q "https://ebroker.wrteam.me/run-scheduler" > /dev/null 2>&1
```

#### Method 3: Using PHP Command (If URL scheduler is not working)
```bash
cd /home/u863526903/domains/thewrteam.in/public_html/dev-ebroker && php artisan schedule:run
```

## Important Notes

:::warning Important Configuration Notes
- **Check URL**: Make sure "https://ebroker.wrteam.me" is correct and replace it with your actual domain
- **Project Path**: Replace "/home/u863526903/domains/thewrteam.in/public_html/dev-ebroker" with your actual project path if needed
- **Server Configuration**: You may need to adjust the cron job command based on your server configuration
:::

## Understanding the Cron Job

### Cron Schedule Format
- `* * * * *` is a wildcard pattern representing:
  - **Minute** (0-59)
  - **Hour** (0-23) 
  - **Day of Month** (1-31)
  - **Month** (1-12)
  - **Day of Week** (0-7, where 0 and 7 = Sunday)

### Command Explanations

- **curl/wget**: Command-line tools for transferring data with URLs
- **`> /dev/null 2>&1`**: Redirects output to /dev/null (discards it) and shows errors in the terminal
- **Purpose**: This cron job runs every minute to process email queues and other scheduled tasks

### Method Selection Guide

1. **URL-based methods** (curl/wget): Use these if your server supports external HTTP requests
2. **PHP command method**: Use this as a fallback if URL-based scheduler fails, as it directly runs the Laravel scheduler

## Troubleshooting

If you encounter issues:

1. Verify your domain URL is correct and accessible
2. Check if curl or wget is installed on your server
3. Ensure the project path is correct for PHP command method
4. Verify that your server allows cron jobs
5. Check server logs for any error messages

## Verification

After setting up the cron job, monitor your application to ensure:
- Email queues are being processed
- Scheduled tasks are running as expected
- No error logs are generated

The cron job will automatically handle background processes and keep your application running smoothly.