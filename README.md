# AI Tech Insights - Eleventy Site

This repository contains the source code for the AI Tech Insights website, built using the Eleventy static site generator and styled with Tailwind CSS.

## Project Overview

This site is designed to be easily maintainable, allowing new content (like guides, tutorials, etc.) to be added simply by creating Markdown files. The build process automatically generates the necessary HTML pages and deploys the site to GitHub Pages.

## Key Technologies

*   **Eleventy (11ty):** A flexible static site generator.
*   **Nunjucks:** The templating language used for layouts (`.njk` files).
*   **Markdown:** Used for writing content pages (`.md` files).
*   **Tailwind CSS v3:** Used for styling. CSS is built as part of the project.
*   **GitHub Pages:** Hosting platform for the static site.
*   **GitHub Actions:** Used for automated building and deployment.

## Project Structure

```
/
├── .github/workflows/deploy.yml  # GitHub Actions workflow for deployment
├── _includes/                    # Layout templates (e.g., base.njk)
│   └── base.njk
├── guides/                       # Content folder for guides (add other categories here)
│   ├── understanding-llms.md
│   └── choosing-llm.md
├── .eleventy.js                # Eleventy configuration file
├── .gitignore                    # Specifies files/folders ignored by Git
├── index.njk                     # Home page content template
├── input.css                     # Tailwind CSS input file
├── package.json                  # Project dependencies and scripts
├── package-lock.json             # Locked dependency versions
├── postcss.config.js             # PostCSS configuration (for Tailwind)
├── tailwind.config.js            # Tailwind CSS configuration
└── README.md                     # This file
```

*   **`_includes/`**: Contains reusable layout files (like the header, footer, and main page structure).
*   **`guides/`**: Contains Markdown files for content in the "Guides" category. Create similar folders for other categories (e.g., `tutorials/`, `automations/`).
*   **`.eleventy.js`**: Configures how Eleventy builds the site (input/output directories, passthrough copies, etc.).
*   **`index.njk`**: The template for the site's home page.
*   **`input.css`**, **`tailwind.config.js`**, **`postcss.config.js`**: Files related to Tailwind CSS configuration and build.
*   **`package.json`**: Defines project scripts and dependencies.
*   **`.github/workflows/deploy.yml`**: Defines the automated build and deployment process triggered on pushes to the `main` branch.

## Local Development

To run the site locally for development and previewing changes:

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd ai-tech-insights-site
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Start the development server:**
    ```bash
    npm start
    ```
    This command starts Eleventy's development server and watches for changes in your files. It also starts a process to watch and rebuild your Tailwind CSS automatically. Open your browser to the local address provided (usually `http://localhost:8080`).

## Building for Production

While deployment is automated via GitHub Actions, you can manually build the site locally using:

```bash
npm run build
```

This command runs both the Eleventy build and the Tailwind CSS build, placing the final static website files in the `_site` directory.

## Content Management Workflow

Adding new content is straightforward:

1.  **Create a Markdown File:** Create a new `.md` file inside the appropriate category folder (e.g., `guides/new-guide-topic.md`).
2.  **Add Front Matter:** At the very top of the file, add YAML front matter to define metadata. Minimally include `title` and `date`. You can also add `description` and `tags`.
    ```yaml
    ---
    title: My New Guide Title
    description: A short description of the guide.
    date: YYYY-MM-DD
    tags:
      - guide # Or other relevant tags/categories
    ---
    ```
3.  **Write Content:** Write your guide content using standard Markdown syntax.
4.  **Commit and Push:** Add the new file to Git, commit your changes, and push to the `main` branch on GitHub.
    ```bash
    git add guides/new-guide-topic.md
    git commit -m "Add new guide: My New Guide Title"
    git push origin main
    ```
5.  **Automatic Deployment:** The GitHub Actions workflow will automatically build and deploy the updated site. The new page will typically be available at a URL like `/category/new-guide-topic/`.

## Deployment

Deployment to GitHub Pages is handled automatically by the GitHub Actions workflow defined in `.github/workflows/deploy.yml`. Any push to the `main` branch will trigger a build and deployment.

The site is configured with a `pathPrefix` in `.eleventy.js` to work correctly when hosted in a subdirectory on GitHub Pages (e.g., `https://username.github.io/repository-name/`).

