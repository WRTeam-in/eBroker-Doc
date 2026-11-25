---
sidebar_position: 26
title: Staff Permissions
---

# Staff Permissions

v1.9.2 enforces permissions on more admin actions. After updating, open `Settings` → `Admin Users` and review each staff account.

| Module | Actions | Change in v1.9.2 |
| --- | --- | --- |
| Custom Page | Create, read, update, delete | New module |
| Story | Create, read, delete | New module |
| Property Inquiry | Read, update | New module |
| User Inquiries | Read, delete | Delete added |
| Package Feature | Create, read, update, delete | Create and delete added |
| User Package | Read, update | Update added |
| Payment | Read, update | Update added |

## Super admin only

- Running a [system update](./update-system-version.md)
- Log Viewer
- Uploading the Firebase service worker file
- The [maintenance addresses](./maintenance-tools.md)

Staff cannot edit a super admin, change their own permissions, or grant permissions they do not hold.
