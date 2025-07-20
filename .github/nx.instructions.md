## 🚀 Nx Monorepo Maintainers Guide

Welcome to the **T4G-Tag4Gift Nx Monorepo**! This guide will help maintainers set up, develop, test, and deploy projects using Nx and our favorite plugins. Follow these steps to keep our codebase clean, efficient, and collaborative. 

---

### 🏗️ Workspace Overview
- **Type:** Monorepo
- **Tech Stack:** Nx, NestJS, React, Vite, Expo, GraphQL, Prisma, Docker, PostgreSQL, Redis
- **Plugins:**
  - `@nx/nest` (Backend)
  - `@nx/eslint` (Linting)
  - `@nx/react` (Frontend)
  - `@nx/vite` (Frontend tooling)
  - `@nx/expo` (Mobile)
  - `@nx/gradle` (Android)

---

### ⚡️ Getting Started
1. **Install dependencies:**
   ```bash
   pnpm install
   ```
2. **Run Nx commands:**
   ```bash
   pnpm nx graph         # Visualize project dependencies
   pnpm nx run-many      # Run tasks across projects
   pnpm nx affected:test # Test affected projects
   ```

---

### 🧑‍💻 Development
- Use Nx generators for new apps/libs:
  ```bash
  nx generate @nx/react:application my-app
  nx generate @nx/nest:application api
  ```
- Keep code modular and DRY.
- Use `nx lint` to enforce code style.

---

### 🧪 Testing
- Run tests with:
  ```bash
  nx test <project>
  ```
- Prefer unit tests for logic, e2e for integration.
- Check coverage before merging.

---

### 🚚 Deployment
- Use Nx build targets:
  ```bash
  nx build <project>
  ```
- Github Actions for CI/CD:
  - Build and test on push/PR.
  - Deploy on merge to main.
  - Use `nx affected:build` for efficient builds.
- Ensure environment variables are set for production.
- Follow CI/CD pipeline instructions in the repo.
- Tag releases and update changelogs.

---

### 🛠️ Plugins & Tools
- **@nx/nest:** Backend API scaffolding
- **@nx/eslint:** Linting and code quality
- **@nx/react:** React app generation
- **@nx/vite:** Fast frontend builds
- **@nx/expo:** Mobile app development
- **@nx/gradle:** Android builds
- **Docker:** Containerization for consistent environments
- **PostgreSQL & Redis:** Database and caching
- **Nx Console:** VSCode extension for UI-driven development
- **GraphQL:** API query language for flexible data fetching
- **Prisma:** ORM for database interactions

---

### 🌟 Best Practices
- Keep PRs small and focused.
- Always run `nx lint` and `nx test` before pushing.
- Document new features and changes.
- Use conventional commits (e.g., `feat:`, `fix:`, `chore:`).
- Review dependency updates for security.

---

### 💬 Need Help?
- Check the README for more details.
- Ask questions in the team chat.
- Use Nx docs: https://nx.dev

---

Happy coding! ✨
