# Bootstrap 5 Static Site with Nunjucks and Gulp

This project is a modern boilerplate for building fast, responsive, and easy-to-maintain static websites. It uses the Nunjucks templating engine to keep code DRY (Don't Repeat Yourself) and Gulp as a task runner to automate the entire development and build workflow.

This setup is perfect for portfolios, landing pages, or any project where you want the benefits of a templating engine without the overhead of a large framework.

## ✨ Features

* **Nunjucks Templating:** Write clean, reusable HTML with layouts, partials, and logic.
* **Gulp Automation:** A powerful build system for compiling templates, handling assets, and more.
* **Live Development Server:** A local server with BrowserSync automatically reloads the page on any change.
* **Automated Deployment:** Push to your `main` branch, and GitHub Actions will automatically build and deploy your site to GitHub Pages.
* **Optimized Folder Structure:** Source and distribution files are kept separate for a clean workflow.

## 🚀 Tech Stack

* **Templating:** [Nunjucks](https://mozilla.github.io/nunjucks/)
* **Task Runner:** [Gulp](https://gulpjs.com/)
* **CSS Framework:** [Bootstrap 5](https://getbootstrap.com/)
* **CI/CD:** [GitHub Actions](https://github.com/features/actions)

## ⚙️ Getting Started

Follow these steps to get the project running on your local machine for development and testing.

### 1. Prerequisites

Make sure you have [Node.js](https://nodejs.org/) (which includes npm) installed on your system.

### 2. Installation

Clone the repository and install the necessary dependencies.

```sh
# Clone the project
git clone [https://your-repository-url.com/](https://your-repository-url.com/)
cd your-project-folder

# Install dependencies
npm install
3. Running the Development Server
This command will compile the site, start a local server at http://localhost:3000, and automatically watch for any file changes.

Bash

npm start
4. Building for Production
When you're ready to deploy, this command will create a clean, optimized dist folder with all your static files.

Bash

npm run build
🛰️ Deployment
This project is configured for automated deployment to GitHub Pages.

Automatic Trigger: Deployment is handled automatically by the GitHub Action defined in .github/workflows/deploy.yml. A new version of your site will be built and deployed every time you push a commit to the main branch.

First-Time Setup: After your first push, the GitHub Action will create a new branch called gh-pages. You need to tell GitHub Pages to use this branch as its source.

In your GitHub repository, go to Settings > Pages.

Under "Build and deployment," set the Source to Deploy from a branch.

Set the Branch to gh-pages and the folder to / (root).

Click Save.
