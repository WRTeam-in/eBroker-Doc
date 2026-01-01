---
sidebar_position: 1
title: Changelog
---

## Version 1.2.9 (January 01, 2026)

### ✨ Added

- Location‑based home slider with type support for Properties
- Fast image loading with low‑quality blur placeholders
  - Applied to: Property title image and Project title image
  - Not applied to galleries or other images
- AI‑assisted Content Generation
  - Generate Description, Meta Title, Meta Description and Meta Keywords for Properties & Projects
  - Uses Gemini (configurable in Admin → Settings → System → Gemini AI)
  - Designed to minimize requests for production API keys (cost‑aware)
- Image watermarking for uploads (`jpg`, `jpeg`, `png`, `webp`)
  - Modules
    - Property: title image, gallery images
    - Project: title image, gallery images, floor images (supported extensions)
- Admin side‑menu redesign for better usability
- Multiple payment gateways can be enabled simultaneously

### 🔄 Improved

- Homepage performance: significantly faster initial load; reviewed location‑based data loading
- Static notification label translations
- WebP added as an allowed image extension across all uploads

### 🔁 Fixed

- Admin sidebar mobile view layout issues

### 📦 Migration / Ops Notes

- All images moved from `public/` to Laravel Storage
  - Ensure storage symlink is present (`php artisan storage:link`)
  - Review and verify uploads/paths across modules:
    - Facilities, Categories, Nearby places
    - Customer profiles, Verify form files
    - Property: image, gallery, meta image, documents, 3D images
    - Project: image, gallery, meta image, documents, floor plans
    - City images, Ad banners, Chat files, Sliders, Articles, Notifications
    - Settings → all logos, SEO settings, Firebase notification, Admin profile
    - Bank receipts

---

## Version 1.2.8 (November 14, 2025)

### ✨ Added

- Dynamic Banner Ads
- Phone login with password
- Admin can create users for frontend by email and password
- Allowed Admin to assign packages to users
- Added translations in Privacy Policy, Terms & Conditions, and About Us pages
- Allowed plan re-purchase/renewal even if limit reached before expiry
- City images with different styles and new UI
- Web: All Properties section with Load More on homepage
- App: SEO section in the dropdown

### 🔄 Improved

- General
  - Admin can edit user's listing with reason
  - Users can edit their properties in all statuses except Sold and Rented
  - Added slug_id and id parameter filters for Projects API (SEO meta without token)
  - Email login toggle in admin settings and settings API
  - Renamed Social Login to Google/Apple Login in admin settings
  - Changed login flow for better UX
  - Proper deeplinking implementation for:
    - Project Details
    - Agent Details
    - Chats
    - Article Details
  - Property share deeplink handling improvements
  - Appointment listing filters (status, meeting type)
  - Show Property / Project / Agent IDs for reference
  - Language content now editable directly from admin via form
  - Update See All in homepage to skip lat/long when location-based data is unavailable
- Web
  - Changed language structure from /en/ → ?lang=en
- App
  - Dark mode home logo and login page image configurable from admin
  - Improved text area padding
  - Applied first-letter capitalization to text areas

### 🔁 Fixed

- Property view count: avoid duplicate counts from the same user on the same day; user-level listing counts are cleared every 3 months while overall counts for properties and projects persist
- XSS attack fixes in all admin forms
- Web: Fixed Location model alignment in mobile view

## Version 1.2.7 (October 14, 2025)

### ✨ Added

- Articles section on the home screen in App (same as web)

### 🔄 Improved

- Optimized homepage initialization and data loading logic for improved performance.
- Enhanced SEO management system for better meta handling and overall search visibility.
- Updated UI of properties on the map screen for a cleaner and more consistent look.

### 🔁 Fixed

- Corrected rent duration label display for rental properties to ensure accurate information representation.

### ⏪ Rollback

- AI-powered natural language search for properties (e.g., "properties in Dubai", "1 BHK properties") has been rolled back across the entire system (Admin, Web, and App) for further optimization and performance improvements.

## Version 1.2.6 (October 08, 2025)
 
### ✨ Added

- Appointment module across admin, web, and app
- AI-powered natural language search for properties (e.g., "properties in Dubai", "1 BHK properties")
- Advanced nearby places filter on property list (e.g., select place type like school and set distance)
- Admin panel menu search to quickly find settings and sections (e.g., Razorpay, Properties, Email Configuration)
- Agent dashboard with statistics (web)

### 🔄 Improved

- Google API requests handled in backend with caching for location-related features (property listing, project listing, home page location selection)

## Version 1.2.5 (August 04, 2025)

### ✨ Added

- Multi-language support for Title & Description in all required menus
- Personalized New Listing Notifications (Category Based)
- Sold & Rented Property Count on Agent Detail Page
- Article View Count Tracking
- Subscription Expiry Alerts & Notifications

### 🔄 Improved

- Complete Web & App UI Redesign

## Version 1.2.4 (May 23, 2025)

### ✨ Added

- Offline Bank Transfer for Package Subscription
- Compare Properties
- Home screen according to user selected latitude longitude also range of radius to be show properties in range selected
- Dynamic Homepage Data with order with title
- Chat Messages Seen with unread count
- System according to selected timezone

### 🔄 Improved

- Other issues fixed in app, admin and web

## Version 1.2.3 (March 25, 2025)

### ✨ Added
- Project Status Flow: Matches property status flow, including admin approval and user activation/deactivation
- New Package System: Modular package system with limits for properties, projects, and features; migrated old packages
- Featured Projects: Featured projects appear in the admin panel under advertisements
- Mobile App Enhancements: Email login, social media links in profile edit, and agent details screen

### 🔄 Improved
- Package Subscription: Improved flow with failed transaction handling and enhanced admin webhook code

---

## Version 1.2.2 (January 31, 2025)

### ✨ Added
- Email SMTP Setup: Added for better email communication
- Email Login: Introduced a new login method using email and password
- Automated Emails: Triggered by events like registration verification, welcome email, status changes, and password reset
- Property Status: New statuses: In-review, Accepted, Rejected, Appeal (with reason for rejection)

### 🔄 Improved
- Profile Completion: Users must fill in name, email, and mobile before adding properties/projects or initiating chats
- Admin Verification: Admin can require Agent verification before project/property upload
- Image Differentiation: App and Web images differentiated in the slider
- Admin Profile Update: Admin profile image can be updated
- Cookie Toggle: Added toggle option for cookies in admin web settings
- Property Activation: Users can activate/deactivate properties after admin approval
- Web-Specific Dashboard UI: New user-friendly UI for the user dashboard
- Web-Specific Property Details: Users can view detailed pages of their properties

---

## Version 1.2.1 (December 31, 2024)

### ✨ Added
- Flutterwave Payment Integration: Seamlessly integrate payments through Flutterwave
- Block User Chat: Users can now block other users directly from the chat
- Advanced Filters (Web & App): Enhanced filtering options with facilities for better search results
- Admin Project Creation: Admins can now create projects directly from the admin panel

### 🔄 Improved
- Direct Access to Agent Profiles (Web & App): Tapping on an agent in the property list now directly opens the agent's profile page
- Property Success Message: A dynamic success message is displayed after adding a property
- Agent List (Web & App): Properties added by admins are now visible in the agent list
- Property Filter by Admin: Admins can filter properties by public/private and by owner type (user/admin)
- Delete All Chats (App): Added an option to delete all chat messages at once
- Login Screen UI (App): Redesigned login screen for a better user experience
- Delete Each Message (Web): Users can now delete individual chat messages
- Internal Enhancements: General improvements across admin panel, APIs, web, and app for smoother performance

---

## Version 1.2.0 (November 25, 2024)

### ✨ Added
- Mortgage Calculator: Added in property details of sell type property. Normal Users can see only overall data, Premium Users can see overall data as well as data according to year and month wise.

### 🔄 Improved
- Advertisement improvements: Added Expiration for feature properties, expiration is decided on the package's end date used to feature property, removed type from feature properties as the type was not in used.
- Admin System Settings Currency option on Currencies available Improvements: In admin system settings, buy selecting the currency will get currency symbol automatically.
- Other Internal Improvements in admin, apis, web and app.

---

## Version 1.1.9 (October 23, 2024)

### ✨ Added
- Agent Verification System (Admin, Web and App)
- Option to toggle Auto Approval (properties, projects and advertisements)Toggle for verified agents. (Admin, Web and App)

### 🔄 Improved
- App UI Improvements
- Show the Facilities properties in the property list on the top
- Optimized Properties and Notification APIs
- Optimized User Accounts Permission management (Admin)

---

## Version 1.1.8 (September 24, 2024)

### ✨ Added
- Integration of Twilio SMS Gateway
- Implementation of a toggle feature to choose between Firebase OTP and Twilio for SMS sending of OTP authentication
- Provision for administrators to switch between login methods, including Number Login, Social Login, or a combination of both
- Customizable distance measurement Options for displaying nearby properties, accessible through the admin panel

### 🔄 Improved
- General improvements and bug fixes to enhance overall app performance

---

## Version 1.1.7 (September 05, 2024)

### ✨ Added
- Slug Management: Custom Slug input in property, Project, Article and Category option available
- Document Upload: Added Documents Upload option in Property, User or admin can now attach documents with property
- FAQ Section: New feature FAQ added to show frequently asked questions and answers
- City Image Management: Can change the images of Unsplash API now for cities and Updated the UI for the Nearby City section in web
- Payment Integration (web): Integrated PayPal as a payment method in web

### 🔄 Improved
- Slider Enhancements: Sliders now support different types (Default, Category, Property, and Other Links)
- Required Fields: Mandatory option in Facility Data to make any facility required or not
- UI and Performance Improvements (web): Enhanced the responsiveness of the home page UI, Added the ability to append suffixes to numbers
- Next.js Version Updated (web): Upgraded to the latest Next.js version, removed deprecated packages, and ensured code is free of vulnerabilities
- Improvements: Other Fixes and Improvements in App, Web and Admin code

---

## Version 1.1.6 (July 29, 2024)

### ✨ Added
- Agent Section in App and Web
- Log viewer in admin panel

### 🔄 Improved
- Updated Laravel version from 9 to 10
- Flutter latest version compatible [flutter 3.22]
- Added Webhook signature verification in Paystack, Stripe, and Razorpay for more security in payments
- Other Fixes and Improvements in App, Web and Admin code

---

## Version 1.1.5 (June 04, 2024)

### ✨ Added
- Paystack (web)
- Load more in all pages (Web)
- Native Ads (App)
- Home infinity scroll

### 🔄 Improved
- Currency format added (en, ar, hi) support for number with suffix (App)

### 🔁 Migration
- Notification migrated to new version of firebase

---

## Version 1.1.4 (May 06, 2024)

### ✨ Added
- Google and Apple Sign-in (App)
- Personalized feed in web
- Razorpay in web
- Adsense in web

### 🔄 Improved
- Made SEO settings optional

### 🔁 Fixed
- Bug Fixes
