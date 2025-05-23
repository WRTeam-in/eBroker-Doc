---
sidebar_position: 10
---

# Other Icons

In addition to the app icon, there are several other important icons you'll need to customize in your eBroker application to match your branding.

## Key Icons to Customize

There are three main icons that can be customized via the admin panel:

<div className="row margin-bottom--lg">
  <div className="col col--4">
    <div className="card padding--sm">
      <h4>Splash Logo</h4>
      <img src="/images/app/splash_screen.jpg" alt="Splash Screen" style={{ maxHeight: "200px", objectFit: "contain" }} />
      <p className="text--small">Shown on app's splash screen</p>
    </div>
  </div>
  <div className="col col--4">
    <div className="card padding--sm">
      <h4>Home Logo</h4>
      <img src="/images/app/homelogo.jpg" alt="Home Logo" style={{ maxHeight: "200px", objectFit: "contain" }} />
      <p className="text--small">Displayed in app's home screen</p>
    </div>
  </div>
  <div className="col col--4">
    <div className="card padding--sm">
      <h4>Placeholder</h4>
      <img src="/images/app/placeholder.jpg" alt="Placeholder" style={{ maxHeight: "200px", objectFit: "contain" }} />
      <p className="text--small">Used when images fail to load</p>
    </div>
  </div>
</div>

## Icon Management

<div className="row">
  <div className="col col--6">
    <div className="card padding--sm">
      <h4>Login Screen Image</h4>
      <img src="/images/app/change_login_screen_logo.png" alt="Login Screen" style={{ maxHeight: "200px", objectFit: "contain" }} />
      <p>Replace image at <code>assets/login_background.png</code><br/>(Keep size under 1MB)</p>
    </div>
  </div>
  <div className="col col--6">
    <div className="card padding--sm">
      <h4>Admin Panel Settings</h4>
      <img src="/images/app/change_icons_adminpanel.png" alt="Admin Panel" style={{ maxHeight: "200px", objectFit: "contain" }} />
      <p>Manage via Settings > App Settings</p>
    </div>
  </div>
</div>

## Fallback & Asset Structure

<div className="row">
  <div className="col col--6">
    <div className="card padding--sm">
      <h4>Asset Folders</h4>
      <img src="/images/app/fallback_icons.png" alt="Fallback Icons" style={{ maxHeight: "200px", objectFit: "contain" }} />
      <ul>
        <li>📁 Fallback: For server failure scenarios</li>
        <li>📁 Logo: Company logo assets</li>
        <li>📁 Multi Color SVG: Theme-independent icons</li>
      </ul>
    </div>
  </div>
  <div className="col col--6">
    <div className="card padding--sm">
      <h4>Icon Specifications</h4>
      <ul>
        <li>🎨 Splash Logo: 400x400px (PNG/SVG)</li>
        <li>🏠 Home Logo: 200px width (PNG/SVG)</li>
        <li>🖼️ Placeholder: 300x300px (PNG)</li>
        <li>🔐 Login Background: 1080x1920px (PNG, &lt;1MB)</li>
      </ul>
      <div className="alert alert--info">
        <p>⚠️ Multi-color SVGs won't change with theme color - create separate versions for different themes</p>
      </div>
    </div>
  </div>
</div>

## Quick Setup Steps

1. Upload custom icons through admin panel
2. Replace fallback icons in respective folders
3. Test in both online and offline modes
4. Verify display across different screen sizes
