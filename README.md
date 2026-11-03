# Petlove

A responsive web app for finding a pet and keeping track of your own pets. Visitors can read pet-related news, browse adoption and sale listings with filters, and find partner organizations. Registered users get a profile where they save favorite listings, manage their pets and edit their personal data.

> **Status: in development.** The project setup, routing and route access control are done; the pages are being built now. See [Roadmap](#roadmap) for progress.

**Live demo:** _coming soon_ · **Design:** [Figma](https://www.figma.com/file/puMNfZVg4YI8UZoJ1QiLLi/Petl%F0%9F%92%9Bve?type=design&node-id=55838-750&mode=design&t=Xg1IwIcKebTl5xGs-0) · **API:** [Swagger docs](https://petlove.b.goit.study/api-docs/)

<!-- Add a screenshot or GIF of the app here once the UI is ready. -->

## Features

**For everyone**

- **News:** keyword search and server-side pagination; each article opens at its source in a new tab.
- **Notices:** a list of pet listings filtered by keyword, category, sex, pet type and location (with city autocomplete), sorted by popularity or price; every filter change refreshes the results.
- **Our friends:** partner organizations with contacts, working hours and map links.
- Responsive layout from 320 px to desktop, with a burger menu on mobile and tablet.

**For registered users**

- Registration and login with client-side form validation and automatic sign-in after registration.
- Favorites: add and remove listings, view the details of each listing and contact its author.
- **Profile:** edit personal data and avatar, manage your pets, and switch between favorite and viewed listings.
- **Add pet:** a validated form for adding a new pet to the profile.
- Logout with confirmation, which clears the session on the server and on the client.

**Access control**

| Route type | Routes                                   | Guest                  | Signed-in user           |
| ---------- | ---------------------------------------- | ---------------------- | ------------------------ |
| Public     | `/home`, `/news`, `/notices`, `/friends` | ✅                     | ✅                       |
| Restricted | `/register`, `/login`                    | ✅                     | redirected to `/profile` |
| Private    | `/profile`, `/add-pet`                   | redirected to `/login` | ✅                       |

## Tech stack

**In use**

- [React 19](https://react.dev/) and [TypeScript 6](https://www.typescriptlang.org/)
- [Vite 8](https://vite.dev/): dev server and build
- [React Router 8](https://reactrouter.com/): data router with layout, private and restricted routes
- [ESLint 10](https://eslint.org/) with type-aware rules from typescript-eslint, React rules from @eslint-react, hooks rules and automatic import sorting
- [Prettier](https://prettier.io/): code formatting, integrated with ESLint and the editor through the shared `.vscode` settings

**Planned, as the related features are built**

- [Redux Toolkit](https://redux-toolkit.js.org/): global state and authentication
- [React Hook Form](https://react-hook-form.com/) + [Yup](https://github.com/jquense/yup): form validation
- [React Select](https://react-select.com/): location autocomplete in the filters

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) 24 or later
- npm (comes with Node.js)

### Installation

```bash
git clone <repository-url>
cd PetLove-app
npm ci
npm run dev
```

The app opens at [http://localhost:5173](http://localhost:5173).

`npm ci` installs the exact dependency versions from `package-lock.json`. Use `npm install` only when you add or update packages.

### Production build

```bash
npm run build
npm run preview
```

`build` type-checks the project and writes the production bundle to `dist/`. `preview` serves that bundle locally.

## Scripts

| Command                | What it does                                                |
| ---------------------- | ----------------------------------------------------------- |
| `npm run dev`          | Starts the dev server with hot module replacement           |
| `npm run build`        | Type-checks the project and builds it for production        |
| `npm run preview`      | Serves the production build locally                         |
| `npm run typecheck`    | Runs the TypeScript compiler without emitting files         |
| `npm run lint`         | Lints the project with ESLint                               |
| `npm run lint:fix`     | Lints the project and fixes what can be fixed automatically |
| `npm run format`       | Formats all files with Prettier                             |
| `npm run format:check` | Checks formatting without changing files                    |

## Project structure

```
src/
├── hooks/          # Custom hooks (useAuth)
├── layouts/        # Shared layout (MainLayout)
├── pages/          # One folder per page
├── routing/        # Router config, route paths and route guards
├── App.tsx         # Renders the router
└── main.tsx        # Entry point
```

Imports use the `@/` alias for `src/` (for example, `@/pages/HomePage/HomePage`). Files in the same folder import each other with relative `./` paths.

## Roadmap

- [x] Project setup: TypeScript, ESLint, Prettier, path aliases
- [x] Routing with a shared layout and a 404 page
- [x] Private and restricted routes
- [ ] Header, navigation and burger menu
- [ ] Global styles, fonts and SVG sprite
- [ ] Redux store and authentication
- [ ] News page with search and pagination
- [ ] Notices page with filters and modals
- [ ] Our friends page
- [ ] Registration and login forms
- [ ] Profile page and pet management
- [ ] Deployment

## Acknowledgements

The design and the backend API were provided by [GoIT](https://goit.global/) as part of the course's technical specification. The frontend in this repository is my own implementation.

## Author

**Sergey Sirota**

- GitHub: [@SerginhoDev](https://github.com/SerginhoDev)
- LinkedIn: _add link_
