---
sidebar_position: 16
---

# Running the Project

This guide explains how to run your eBroker web project locally for development and testing purposes before deploying to production.

## Prerequisites

Before running the project, ensure you have:

- Node.js (version 18 or higher) installed
- All configuration settings properly set up in your `.env` file
- Firebase and other integrations configured as needed

## Installing Dependencies

First, you need to install all the required dependencies:

1. Open VS Code terminal by pressing `CTRL+J` in Windows/Linux or `CMD+J` in macOS
2. Run the following command:

```bash
npm i
```

This will take some time to download all necessary packages. Wait until the installation completes.

## Starting Development Server

After the dependencies are installed, you can start the development server:

1. In the same terminal, run:

```bash
npm run dev
```

2. This command will start the development mode of your application
3. Wait for the compilation to complete
4. The terminal will show the local URL where your application is running (typically `http://localhost:3000`)

## Testing Your Application

Once the development server is running:

1. Open your web browser and navigate to the URL shown in the terminal
2. Check if all features are working as expected
3. Test user flows like registration, login, property search, etc.
4. Verify that all integrations with Firebase, Google Maps, etc. are functioning properly

## Making Changes

During development:

1. Make changes to your source files
2. The development server will automatically reload to reflect your changes
3. Check the terminal for any compilation errors
4. Verify your changes in the browser

## Stopping the Server

To stop the development server:

1. Go to the terminal where the server is running
2. Press `CTRL+C` (or `CMD+C` on macOS)
3. Confirm the termination if prompted

## Next Steps

After confirming that everything is working correctly in development mode, you can proceed to:

- [Build and deploy your project](./deployment-without-seo.md) for production
- Set up [SEO for your web application](./seo-for-web.md) if needed
- Configure [sitemap generation](./sitemap-setup.md) for better search engine visibility
