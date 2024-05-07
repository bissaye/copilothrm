# React + TypeScript + Vite

# Project Structure

The project follows a typical React application structure with TypeScript. Here's an overview of the directory layout:
```
├── public # Public assets and HTML template
└── src
├── assets # Static assets like images and fonts
│ ├── images
│ │ ├── backgrounds
│ │ └── logos
├── hooks # Reusable custom hooks
├── services # Application services
│ ├── api # API integration modules
│ ├── routes # Routing configuration
│ ├── store # State management setup
│ │ ├── auth # Authentication related state logic
│ │ └── lang # Language and localization logic
│ └── translations # Localization data and utilities
├── utils # Utility functions and helpers
│ ├── helpers # General helper functions
│ └── interfaces # Type interfaces
│ ├── DTO # Data transfer object interfaces
│ └── type # Other type interfaces
└── views # Application views
├── components # Reusable UI components
│ ├── common # Common components like headers, footers, etc.
│ └── ui # UI components like buttons, forms, modals, etc.
├── layouts # Layout components for organizing page structure
└── pages # Application pages
```

## Key Dependencies

- **React** (`react`) and **React DOM** (`react-dom`) for building user interfaces.
- **React Router DOM** (`react-router-dom`) for declarative routing.
- **Zustand** (`zustand`) for state management using hooks.
- **axios** (`axios`) for REST request management.
- **React Intl** (`react-intl`) for internationalization (i18n) support.
- **Font Awesome** (`@fortawesome/react-fontawesome`) for icons.
  
## Development Tools

- **Vite** (`vite`) for fast development server with hot module replacement (HMR).
- **TypeScript** (`typescript`) for static typing.
- **ESLint** (`eslint`) with TypeScript support (`@typescript-eslint/parser` and `@typescript-eslint/eslint-plugin`) for code linting.
- **Tailwind CSS** (`tailwindcss`) for utility-first CSS framework.
  
## Scripts

- `dev`: Starts Vite development server.
- `build`: Builds the project using TypeScript compiler (`tsc`) and Vite.
- `lint`: Lints the project using ESLint with TypeScript support.
- `preview`: Builds and previews the project locally.

## Additional Notes

- **Fast Refresh**: Choose between Babel-based Fast Refresh with `@vitejs/plugin-react` or SWC-based Fast Refresh with `@vitejs/plugin-react-swc` for React component hot reloading.
- **ESLint Configuration**: For production applications, consider enhancing ESLint configuration for type-aware lint rules and React linting rules as described in the setup instructions.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
