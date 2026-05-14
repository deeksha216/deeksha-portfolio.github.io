# 🌟 Deeksha's Portfolio Website

A professional, dark-themed portfolio website built with HTML, CSS, and JavaScript.

---

## 📁 Folder Structure

```
portfolio/
├── index.html          ← Main HTML file (open this in browser)
├── style.css           ← All styling
├── script.js           ← Animations & interactions
├── assets/
│   ├── photo.jpg       ← Your profile photo (already added)
│   └── Deeksha_resume.pdf  ← Add your resume PDF here
└── README.md           ← This guide
```

---

## 🚀 How to Open in VS Code

1. **Unzip** the downloaded `portfolio.zip` file
2. Open **VS Code**
3. Click **File → Open Folder** → Select the `portfolio` folder
4. Install the **Live Server** extension:
   - Click the Extensions icon (sidebar) or press `Ctrl+Shift+X`
   - Search for **"Live Server"** by Ritwick Dey
   - Click **Install**
5. Right-click on `index.html` in the file explorer
6. Click **"Open with Live Server"**
7. Your portfolio opens in the browser at `http://127.0.0.1:5500`

---

## ✏️ How to Customize

### Update your details
Open `index.html` and find the sections to edit:
- **Phone / Email / Links** → search for your current info and update
- **Projects** → find the `.project-card` divs and edit the text
- **Skills** → find `.skill-tags` and add/remove `<span>` items

### Add your Resume PDF
- Copy your resume PDF into the `assets/` folder
- Rename it to `Deeksha_resume.pdf`
- The "Download Resume" button will automatically work!

### Change colors
Open `style.css` and edit the `:root` variables at the top:
```css
--accent: #7c3aed;    /* Main purple */
--accent2: #a78bfa;   /* Light purple */
--accent3: #38bdf8;   /* Blue accent */
```

---

## 🌐 How to Host Online (Free!)

### Option 1: GitHub Pages
1. Create a GitHub account at github.com
2. Create a new repository named `deeksha216.github.io`
3. Upload all portfolio files
4. Go to Settings → Pages → Enable GitHub Pages
5. Your site is live at `https://deeksha216.github.io`

### Option 2: Netlify (Drag & Drop)
1. Go to netlify.com → Sign up free
2. Drag your portfolio folder to the deploy zone
3. Get an instant live URL!

---

## 📞 Need Help?
If you get stuck, the VS Code Live Server extension is the easiest way to preview your site.
