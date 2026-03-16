# Developer Profile Website

A responsive developer portfolio website built with HTML, CSS, and TypeScript.

## Project Structure

```text
/portfolio-website
├── src/            # Source files
│   ├── index.html  # Main entry point
│   ├── style.css   # Stylesheets
│   ├── app.ts      # TypeScript source
├── dist/           # Compiled JavaScript
├── .github/        # GitHub Actions workflows
├── .devcontainer/  # Dev Container configuration
├── nginx.conf      # Nginx configuration for static hosting
├── tsconfig.json   # TypeScript configuration
├── package.json    # Project dependencies and scripts
└── README.md       # Documentation
```

## Features

- Responsive Design (Works on mobile and desktop)
- Home, About, and Contact pages/sections
- Dynamic data display using TypeScript
- Contact Form (logs data to console)
- Automated deployment to GitHub Pages

## How to Run Locally

### Prerequisites

- [Node.js](https://nodejs.org/) (v20+ recommended)
- [Docker](https://www.docker.com/) (Optional, for Dev Container/Nginx testing)

### Local Development

1.  **Clone the repository.**
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Compile TypeScript:**
    ```bash
    npm run build
    ```
4.  **Run with local server:**
    ```bash
    npm start
    ```

### Dev Container

Use Visual Studio Code's "Remote - Containers" extension to open the project in a pre-configured environment with all dependencies pre-installed.

### Local Nginx Setup

To test with Nginx via Docker:
```bash
docker-compose up -d
```
Access the site at `http://localhost:8080`.

## Git Branching Strategy

The project follows a standard branching model:

- `main`: **Production branch**. Always deployable. Only merge reviewed and tested features here.
- `feature/*`: **New features**. (e.g., `feature/add-section`)
- `bugfix/*`: **Fixing issues**. (e.g., `bugfix/phoneno`)
- `content/*`: **Content updates**. (e.g., `content/update-text`)

## CI/CD Deployment Process

The project uses GitHub Actions for automated deployment.

1.  **Trigger:** On every push to the `main` branch.
2.  **Steps:**
    - Checkout code
    - Install Node.js and dependencies
    - Compile TypeScript with `npm run build`
    - Prepare a `build/` directory with static assets and compiled JS.
    - Deploy to the `gh-pages` branch using the `JamesIves/github-pages-deploy-action`.
3.  **Access:** Once deployed, the website is available at `https://username.github.io/repository-name`.

---

Created with GitHub Copilot and Gemini 3 Flash (Preview).
