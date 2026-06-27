---
sidebar_position: 23
---

# VPS Standalone Deployment

We have implemented a robust, automated deployment workflow designed for Custom Server (VPS) environments. This system compiles the application in **Next.js Standalone build mode**, which produces a lightweight, production-ready Node.js server (`server.js`) that minimizes memory usage and removes the need for the entire `node_modules` directory in production. It also generates optimal Apache configurations for reverse proxying and static asset caching.

---

## Automated Deployment (Recommended)

To deploy the application on your VPS using the automated script:

1. **SSH into the server** and navigate to your project directory.
2. **Run the deployment script**:
   ```bash
   npm run deploy:vps
   ```
   *(Alternatively, run: `bash deploy-vps.sh`)*

3. **Follow the interactive prompts**:
   * Enter your desired **PORT** (default: `8001`).
   * The script will automatically detect conflicting PM2 processes and prompt you to restart or replace them.

### Outcome
Upon successful execution:
* The app will run under **PM2** (named dynamically based on your app name, e.g. `eBroker-Website`).
* It will serve locally on the specified port.
* **Apache** will proxy public-facing traffic and handle high-speed caching for static files.

---

## Manual Deployment

If you prefer to deploy manually or need to troubleshoot, follow these steps to replicate the automated process:

### 1. Configuration & Dependencies
Ensure your `.env` file is correctly configured for your production environment.

```bash
# Install dependencies
npm install

# (Optional) Clean old build artifacts
rm -rf .next out dist
```

### 2. Generate Sitemap & Assets
Run the helper scripts to generate the sitemap:

```bash
# Generate Sitemap
node scripts/setup-sitemap.js
```

### 3. Build Application in Standalone Mode
Build the application by forcing Standalone output:

```bash
# Build with standalone output enabled
export NODE_ENV="production"
export NEXT_OUTPUT_STANDALONE="true"
npm run build
```

### 4. Copy Standalone Assets
Next.js standalone build generates the server but does not copy static folder assets (`public/` and `.next/static/`) into the standalone directory. Run the helper script to copy these assets:

```bash
node scripts/setup-standalone.js
```

### 5. Generate Apache Configuration
Use the included generator to automatically write the correct `.htaccess` file for your port.

```bash
# Replace 8001 with your chosen port
node scripts/generate-standalone-htaccess.js 8001
```

### 6. Start or Reload with PM2
Start or reload the application using PM2 to manage the production process:

```bash
# Start or restart using PM2 ecosystem configuration
pm2 start ecosystem.config.cjs
# or restart if already running
pm2 restart ecosystem.config.cjs --update-env
```

To persist the process list so that it auto-starts on system reboots:
```bash
pm2 save
```

### 7. Finalize Apache Setup
Reload Apache to apply the new `.htaccess` rewrite and proxy rules (ensure `mod_rewrite`, `mod_headers`, and `mod_proxy` are enabled on your server):

```bash
sudo systemctl reload apache2
# or on older/different systems:
sudo service apache2 reload
```

---

## Deployment System Details

### Key Features
* **Standalone Build Mode**: Triggered by setting `NEXT_OUTPUT_STANDALONE="true"`. It forces Next.js to trace all required modules and dependencies, outputting a self-contained folder at `.next/standalone/` that is independent of root node_modules.
* **Automated Script (`deploy-vps.sh`)**:
  * **Safety Checks**: Verifies required command availability (`npm`, `node`, `pm2`) and detects active ports or conflicting PM2 processes.
  * **Clean Build**: Cleans up previous artifacts before compiling.
  * **Asset Preparation**: Automatically runs setup scripts and compiles code.
  * **PM2 Setup**: Uses `ecosystem.config.cjs` to manage environment configurations, logging, and memory limit restarts.
* **Dynamic .htaccess Generation (`scripts/generate-standalone-htaccess.js`)**:
  * Configures reverse-proxy rules to route HTTP requests directly to the standalone Node.js server.
  * Configures direct Apache filesystem serving for static assets (`_next/static` and files inside `public/`) to reduce load on the Node.js process and ensure maximum delivery speed.

### New Scripts & Files

| Script / File | Description |
| :--- | :--- |
| `deploy-vps.sh` | Main deployment entry point script. Runs on the VPS, prompts for a `PORT` and manages the process lifecycle. |
| `scripts/setup-standalone.js` | Copies the `public` and `.next/static` directories into the `.next/standalone` folder so they can be packaged and served properly. |
| `scripts/generate-standalone-htaccess.js` | Programmatically generates the `.htaccess` file using the active port. |
| `next.config.js` | Conditional logic to force `output: 'standalone'` when `NEXT_OUTPUT_STANDALONE="true"` is set. |
| `ecosystem.config.cjs` | PM2 configuration file declaring script location, port environment variables, logs, and process management rules. |

:::warning
Do not edit `.htaccess` directly. It is auto-generated by `scripts/generate-standalone-htaccess.js` during deployment, and any manual changes will be overwritten. If you need custom rewrite rules, update `scripts/generate-standalone-htaccess.js`.
:::
