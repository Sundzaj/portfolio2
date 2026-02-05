# Playwright Portfolio Project - SauceDemo (UI + API)
This is a portfolio automation testing project built with **Playwright + TypeScript**.  
The project contains both **UI tests** (end-to-end scenarios) and **API tests** (GET/POST/DELETE).  
It also includes **GitHub Actions CI**, so tests run automatically on every push and pull request.

---

## 🚀 Tech Stack
- **Playwright**
- **TypeScript**
- **Node.js**
- **GitHub Actions CI**
- Page Object Model (POM)

---

## ✅ Covered Test Scenarios

### 🖥️ UI Tests (SauceDemo)
Website: https://www.saucedemo.com

- Login with valid credentials
- Add product to cart
- Full checkout flow (E2E)
- Negative checkout test (validation error)

### 🌐 API Tests (JSONPlaceholder)
API: https://jsonplaceholder.typicode.com

- GET post details
- POST create new post
- DELETE post

---

## ⚙️ Setup & Installation

### Clone repository
git clone [https://github.com/Sundzaj/YOUR_REPO.git](https://github.com/Sundzaj/portfolio2.git)

### Install dependencies
npm install

### Install Playwright browsers
npx playwright install

### Environment Variables
This project uses .env for test configuration.
Create .env file in the root folder:
BASE_URL=https://www.saucedemo.com
STANDARD_USER=standard_user
PASSWORD=secret_sauce

### Running Tests
npx playwright test
