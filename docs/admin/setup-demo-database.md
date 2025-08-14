---
sidebar_position: 50
---

# Demo Database Setup

:::note
This step is **optional**. Only follow these instructions if you want to set up a demo database with sample data for testing or exploration. If you do **not** want demo data, you can skip this section.
:::

## Quick Setup Steps

Follow these main steps to set up the eBroker demo database:

1. **Take a Backup of Your Current Database**  
   * Before making any changes, back up your existing database to prevent data loss.

2. **Empty Your Database**  
   * Remove all existing tables and data from your target database.

3. **Import the Demo SQL File**  
   * **Download:** [demo-database-latest.sql](https://drive.google.com/file/d/1LZck51sGJjhte8q-kPr3CYz-CMrveTqk/view?usp=sharing)  
   * Import this file into your empty database using phpMyAdmin.

4. **Download Demo Images**  
   * **Download:** [demo-images.zip](https://drive.google.com/file/d/1Hfb6auZEPqfh4qvNUr17YCRMXThEiEEr/view?usp=sharing)  
   * Extract file to your Admin project -> public -> images. Under Images folder extract your file

5. **Default Admin Credentials**  
   * **Email:** `admin@gmail.com`  
   * **Password:** `admin123`

:::warning Important
The demo data and credentials are for testing and learning purposes only. Do not use them in production environments.
:::

## Demo Images Setup

After downloading the demo images:

1. **Property Images:** Upload to `/public/images/properties/`
2. **Profile Images:** Upload to `/public/images/profiles/`
3. **Category Icons:** Upload to `/public/images/categories/`
4. **Other Assets:** Upload to respective directories as per folder structure

## Troubleshooting

If you encounter issues:

1. **Database Import Errors:** Ensure your database is completely empty
2. **Image Upload Issues:** Check file permissions (755 for directories)
3. **Login Problems:** Clear browser cache and try incognito mode