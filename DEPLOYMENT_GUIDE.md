# Deployment Guide for Gender Cell Website (IITK)

This guide provides step-by-step instructions on how to update and deploy the Gender Cell website to the IIT Kanpur institutional server.

## 1. Prerequisites
- **Node.js & npm**: Installed on your local machine.
- **VPN**: If you are off-campus, you must be connected to the IITK VPN to access the server.
- **SFTP Credentials**: Username (`web_gc`) and your password.

---

## 2. Steps to Build and Deploy

### Step 1: Build the Project
Open your terminal in the project root folder (`website_gender_cell`) and run:
```bash
npm run build
```
- This creates (or updates) the `dist/` folder.
- **Note:** All internal links and PDF paths are already configured to work in the `/gc/` subfolder.

### Step 2: Verify Locally (Optional but Recommended)
Test the production build before uploading it:
```bash
npm run preview
```
- Open the resulting link (usually `http://localhost:4173`).
- Check that the URLs look like `.../#/about` and that PDFs open correctly.

### Step 3: Connect to the Server
Use SFTP to connect to the IITK webhome server:
```bash
sftp web_gc@oweb.iitk.ac.in
```
- Enter your password when prompted.

### Step 4: Clear Old Files (If Necessary)
If you want to ensure a clean deployment, you can remove the old assets folder first (be careful!):
```sftp
rm -rf assets
```

### Step 5: Upload the New Code
You must upload the **contents** of the `dist/` folder, not the folder itself:
```sftp
put -r dist/*
```
- This will upload `index.html`, the `assets/` folder, and the `pdf/` folder directly into your root directory.

### Step 6: Verify the Live Site
Visit: **`https://iitk.ac.in/gc/`**

---

## 3. Important Notes

### Subfolder Compatibility
The project is configured with `base: './'` in `vite.config.js`. This allows it to run correctly under the `/gc/` path. Do **not** change this to `/`.

### Hash Routing
We use `HashRouter`. This means:
- Your URLs will contain a `#` (e.g., `iitk.ac.in/gc/#/about`).
- This is necessary because institutional servers do not allow custom URL rewriting needed for standard routing. 
- **Internal Links**: Always use the `<Link>` component in React instead of `<a>` tags for internal pages.

### PDF Management
- All PDFs are stored in `public/pdf`.
- They are referenced in `src/setups/pdfExports.js` using relative paths (`pdf/filename.pdf`).
- **If you add a new PDF**: Put it in `public/pdf` and add it to the list in `pdfExports.js`.

### Disk Quota
- Your account (`web_gc`) has a **250 MB limit**.
- Currently, the PDFs are compressed to save space (~94MB total).
- Check your space using: `ssh web_gc@oweb.iitk.ac.in "quota -s"`

---

## 4. Troubleshooting
- **404 Errors on Assets**: Ensure you uploaded the `assets/` folder correctly inside the root.
- **PDFs Not Opening**: Ensure the `pdf/` folder is present on the server.
- **Changes Not Appearing**: Clear your browser cache or open the site in Incognito mode.

---

## 5. SFTP & Terminal Cheat Sheet

Here are the most common commands you will need for managing files on the server.

### Navigation (Moving Around)
- **`pwd`**: Show current directory on the **server**.
- **`lpwd`**: Show current directory on your **local computer**.
- **`ls`**: List files on the **server**.
- **`lls`**: List files on your **local computer**.
- **`cd <folder>`**: Move into a folder on the **server**.
  - *Example:* `cd assets`
- **`cd ..`**: Move "out" or "up" one level.

### Managing Files
- **`put <file>`**: Upload a file from local to server.
  - *Example:* `put index.html`
- **`put -r <folder>`**: Upload an entire folder and everything inside it.
  - *Example:* `put -r assets`
- **`get <file>`**: Download a file from server to local.
  - *Example:* `get robots.txt`
- **`rm <file>`**: Delete a file on the server.
  - *Example:* `rm test.html`
- **`mv <old_name> <new_name>`**: Rename a file or move it.
  - *Example:* `mv old_index.html index.html`

### Managing Folders
- **`mkdir <name>`**: Create a new folder.
  - *Example:* `mkdir backup`
- **`rmdir <name>`**: Delete an **empty** folder.
  - *Example:* `rmdir old_folder`
- **`rm -rf <name>`**: (SSH only) Delete a folder and **everything inside it**. Use with caution!
  - *Example (from normal terminal):* `ssh web_gc@oweb.iitk.ac.in "rm -rf /users/web_gc/old_site"`
  - *Note: In SFTP, you must delete the files inside a folder before you can delete the folder.*

### How to use SSH for fast cleanup
If you need to delete a lot of files or a whole folder at once, it is faster to use SSH:
```bash
ssh web_gc@oweb.iitk.ac.in "rm -rf /users/web_gc/assets"
```
*(This deletes the old assets folder in one second so you can upload a fresh one).*
