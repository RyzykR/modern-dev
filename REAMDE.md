# React Azure SWA Demo

This is a demo React app deployed automatically to **Azure Static Web Apps** using **GitHub Actions CI/CD**.

---

## 🚀 Project Setup

### Prerequisites
- Node.js v20+
- npm (comes with Node.js)

### Install dependencies
```bash
npm install
```
### Run the app locally
```bash
npm test
```
### Run the app locally
```bash
npm run lint
```
### Run the app locally
```bash
npm run build
```

## ⚙️ Continuous Deployment (CI/CD)

This project uses GitHub Actions to automate linting, testing, building, and deploying the app.

### 🔁 Trigger

CI/CD is triggered automatically when code is:
- Pushed to the `main` branch
- A pull request targets the `main` branch

### 🔧 Workflow Steps

1. Checkout code
2. Install dependencies using `npm ci`
3. Lint the code (`npm run lint`)
4. Run tests (`npm test`)
5. Build the app using Vite (`npm run build`)
6. Deploy to Azure Static Web Apps

### 🚀 Deployment Target

- Production deployment happens from the `main` branch
- Azure handles the hosting via Static Web Apps

### 🔐 Environment Variables

- `AZURE_STATIC_WEB_APPS_API_TOKEN` must be set as a secret in GitHub for deploy access
