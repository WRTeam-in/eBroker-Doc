---
sidebar_position: 1
title: Changelog
---

## Version 1.2.4 (May 22, 2025)

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

### �� Fixed
- Bug Fixes
