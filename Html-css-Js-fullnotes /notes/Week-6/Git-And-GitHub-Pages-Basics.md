# Git & GitHub Pages Basics  
## ~30-Minute Introduction for the Bootcamp

Use this in **Session 13** (or 14) as a short block so students understand version control and can host their final project.

---

## 1. Why version control?

**Without Git**

- One copy of the project; if something breaks, hard to go back.
- Sharing code = zip files and "final_v2_real_FINAL.zip".
- No clear history of what changed and when.

**With Git**

- **History:** Every save is a "commit"; you can see and revert changes.
- **Collaboration:** Others can contribute without overwriting your work.
- **Portfolio:** Push to GitHub and show recruiters or teachers your code.
- **Deploy:** GitHub Pages turns a repo into a live website (free).

**In one sentence:** Git tracks changes to your files so you can work safely and share or deploy your project.

---

## 2. Core ideas (no deep dive)

- **Repository (repo):** A folder that Git tracks (your project).
- **Commit:** A saved snapshot of your project with a message (e.g. "Add contact page").
- **Remote:** A copy of the repo on the internet (e.g. GitHub).
- **Push:** Send your commits from your computer to the remote.
- **Clone:** Download a repo (including from GitHub) to your machine.

We do **not** cover branching, merging, or pull requests in this intro — only: init, add, commit, remote, push.

---

## 3. One-time setup

**Install Git**

- Windows: [git-scm.com](https://git-scm.com/) — use defaults.
- Mac: `git --version` in Terminal; if missing, install Xcode Command Line Tools or Git from git-scm.com.

**Configure name and email (once per machine)**

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

**GitHub account**

- Sign up at [github.com](https://github.com) if they don't have one.
- Optional: set up SSH keys later; for the intro, HTTPS is fine.

---

## 4. Basic workflow: turn your project into a repo

**Step 1: Open the project folder in the terminal**

```bash
cd path/to/your/project
```

**Step 2: Start Git tracking**

```bash
git init
```

This creates a hidden `.git` folder. Don't delete it.

**Step 3: See what Git sees**

```bash
git status
```

You'll see "Untracked files" (e.g. `index.html`, `css/`, `js/`).

**Step 4: Stage files (prepare for a snapshot)**

```bash
git add .
```

The `.` means "all changes in this folder." You can also `git add index.html` for a single file.

**Step 5: Commit (save the snapshot)**

```bash
git commit -m "Initial commit: add homepage and styles"
```

Use a short, clear message. Every commit should be a logical step.

**Step 6: Create a repo on GitHub**

- On GitHub: New repository.
- Name it (e.g. `my-portfolio`).
- Don't add README, .gitignore, or license if the project already exists locally.

**Step 7: Connect your local repo to GitHub**

GitHub will show a URL. Use it in:

```bash
git remote add origin https://github.com/YOUR_USERNAME/my-portfolio.git
```

Replace with their actual URL.

**Step 8: Push (upload your commits)**

```bash
git branch -M main
git push -u origin main
```

If GitHub asks for login, use username + password or a **Personal Access Token** (not the account password if 2FA is on).

---

## 5. After you make more changes

```bash
git status          # See what changed
git add .           # Stage everything (or specific files)
git commit -m "Add contact page and form"
git push            # Send to GitHub
```

Do this often: small, clear commits are better than one huge "fixed everything" commit.

---

## 6. GitHub Pages: turn the repo into a website

**Steps**

1. Open the repo on GitHub.
2. **Settings** → **Pages** (left sidebar).
3. Under **Source**, choose **Deploy from a branch**.
4. Branch: **main** (or **master**). Folder: **/ (root)**.
5. Save. After a minute or two, the site is at:

   `https://YOUR_USERNAME.github.io/REPO_NAME/`

**Important**

- The main page **must** be named `index.html` at the root (or in the chosen folder).
- Use **relative** paths for links and assets (`css/styles.css`, not `C:\Users\...`).
- Changes go live after you **push** to the branch you use for Pages.

**Test locally first:** Open `index.html` from the project folder and click through all links and assets to avoid broken paths on GitHub Pages.

---

## 7. What we're not covering (yet)

- **Branches** — working on a feature without touching the main version.
- **Pull requests** — proposing changes on GitHub for review.
- **Merge conflicts** — when two people change the same part of a file.
- **.gitignore** — excluding files (e.g. `node_modules`, `.env`) from the repo.

Those are the next steps after they're comfortable with init, add, commit, push, and GitHub Pages.

---

## 8. Cheat sheet for students

| Goal              | Command |
|-------------------|--------|
| Start tracking    | `git init` |
| See status        | `git status` |
| Stage changes     | `git add .` |
| Save snapshot     | `git commit -m "Message"` |
| Add GitHub remote | `git remote add origin URL` |
| Upload to GitHub  | `git push -u origin main` |
| Later pushes      | `git add .` → `git commit -m "Message"` → `git push` |

---

## 9. Suggested 30-minute session flow

| Time   | Activity |
|--------|----------|
| 0–5    | Why version control and why GitHub (history, sharing, portfolio, deploy). |
| 5–10   | One-time setup: Git install, `user.name` / `user.email`, GitHub account. |
| 10–20  | Live: `git init`, `git add .`, `git commit -m "..."`, show `git status` and `git log`. |
| 20–25  | Create repo on GitHub, `git remote add origin`, `git push -u origin main`. |
| 25–30  | GitHub Pages: Settings → Pages → branch main → save; open the live URL. |

Give them the link to this note so they can repeat the steps at home and use the cheat sheet.
