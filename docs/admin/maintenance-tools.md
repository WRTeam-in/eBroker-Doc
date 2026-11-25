---
sidebar_position: 27
title: Maintenance Tools
---

# Maintenance Tools

For hosting without shell access. From v1.9.2 these addresses work only for a **logged-in super admin**. Those that change something ask for confirmation first.

| Address | Action |
| --- | --- |
| `/migrate` | Run pending database migrations |
| `/migrate-status` | Show migration status (no confirmation) |
| `/clear` | Clear cached config, routes and views |
| `/storage-link` | Create the public storage link |
| `/add-url` | Save the current address as `APP_URL` |
| `/seed-demo-data` | Add demo data (never on a live site) |

## Maintenance mode

1. Set a long random `MAINTENANCE_TOKEN` in `.env`. While it is empty, the addresses below return 404.
2. Open `/maintenance/down` to turn maintenance mode on, or `/maintenance/up` to turn it off.
3. Enter the token and submit.

A wrong token returns 404, and attempts are limited to 5 per minute.

:::info
Before v1.9.2 the token was part of the URL. The old address still opens, but only shows the form.
:::
