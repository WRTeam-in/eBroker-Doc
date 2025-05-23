---
sidebar_position: 1
---

# Website Setup

<div className="setup-grid">
  <a href="./installation-setup" className="setup-card">
    <div className="card-icon">📋</div>
    <h3>Web Prerequisites</h3>
    <p>We recommend deploying the web application on the main domain</p>
  </a>

  <a href="./api-url-config" className="setup-card">
    <div className="card-icon">🔧</div>
    <h3>Website Setup Locally</h3>
    <p>Configure files and environment setup</p>
  </a>

  <a href="./firebase-integration" className="setup-card">
    <div className="card-icon">🔥</div>
    <h3>Firebase Setup</h3>
    <p>Configure Firebase project and authentication</p>
  </a>

  <a href="./running-project" className="setup-card">
    <div className="card-icon">▶️</div>
    <h3>Run Website Locally</h3>
    <p>Install packages and dependencies</p>
  </a>

  <a href="./customize-app-name" className="setup-card">
    <div className="card-icon">⚙️</div>
    <h3>System Configuration</h3>
    <p>Configure application settings and preferences</p>
  </a>

  <a href="./nextjs-deployment" className="setup-card">
    <div className="card-icon">🚀</div>
    <h3>Deploy your site</h3>
    <p>Generate build and deploy your website</p>
  </a>

  <a href="./web-logo" className="setup-card">
    <div className="card-icon">🔄</div>
    <h3>New Version Update</h3>
    <p>Update your website to the latest version</p>
  </a>

  <a href="./htaccess-config" className="setup-card">
    <div className="card-icon">⚡</div>
    <h3>.htaccess Setup</h3>
    <p>Configure Apache rules for static and SEO builds</p>
  </a>

  <a href="https://teams.live.com/l/invite/FEAN_7C4kzeomJM8gE" className="setup-card" target="_blank">
    <div className="card-icon">💬</div>
    <h3>Support</h3>
    <p>Contact our support team for assistance</p>
  </a>
</div>

<style>
{`
  .setup-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
    margin: 2rem 0;
  }

  .setup-card {
    background: var(--ifm-background-surface-color);
    border: 1px solid var(--ifm-color-emphasis-200);
    border-radius: 8px;
    padding: 1.5rem;
    color: var(--ifm-font-color-base);
    text-decoration: none;
    transition: all 0.3s ease;
  }

  .setup-card:hover {
    transform: translateY(-4px);
    text-decoration: none;
    color: var(--ifm-font-color-base);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .card-icon {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  .setup-card h3 {
    margin: 0 0 0.5rem 0;
    font-size: 1.2rem;
    color: var(--ifm-color-primary);
  }

  .setup-card p {
    margin: 0;
    font-size: 0.9rem;
    opacity: 0.8;
  }

  [data-theme='dark'] .setup-card {
    background: #1e1e1e;
    border-color: #333;
  }

  [data-theme='dark'] .setup-card:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }
`}
</style>
