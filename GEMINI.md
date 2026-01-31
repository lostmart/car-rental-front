# Gemini Project: Car Rental Platform

This document provides a comprehensive overview of the Car Rental Platform project, intended to be used as a context for AI-powered development tools like Gemini.

## Project Overview

The Car Rental Platform is a modern, responsive web application for renting cars. It is built with React, TypeScript, and Vite. The application features a dynamic and elegant user interface, including a hero section, an interactive image carousel, and a set of reusable components. It uses client-side routing for a fast and smooth user experience.

### Key Technologies

*   **Framework**: React 18
*   **Language**: TypeScript
*   **Build Tool**: Vite
*   **Routing**: React Router DOM v6
*   **UI Components**: Chakra UI, Framer Motion
*   **Styling**: Emotion, CSS Modules
*   **Carousel**: Swiper
*   **Icons**: React Icons
*   **Testing**: Vitest, React Testing Library
*   **Linting**: ESLint

## Building and Running

### Prerequisites

*   Node.js (LTS version 18.x or higher)
*   npm

### Installation

1.  **Clone the repository**:
    ```bash
    git clone <repository-url>
    cd rental-car
    ```
2.  **Install dependencies**:
    ```bash
    npm install
    ```

### Development

To start the development server with hot-module reloading, run:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

### Building for Production

To create an optimized production build, run:

```bash
npm run build
```

The bundled application will be located in the `dist/` directory.

### Preview Production Build

To preview the production build locally, run:

```bash
npm run preview
```

### Testing

The project uses Vitest for unit and integration testing.

*   **Run tests in watch mode**:
    ```bash
    npm test
    ```
*   **Run tests once with coverage**:
    ```bash
    npm run test:coverage
    ```
*   **Open the interactive test UI**:
    ```bash
    npm run test:ui
    ```

Coverage reports are generated in the `coverage/` directory.

### Linting

To check the code quality and enforce coding standards, run:

```bash
npm run lint
```

The project is configured to enforce zero warnings.

## Development Conventions

*   **Coding Style**: The project follows standard TypeScript and React best practices.
*   **Component Structure**: Components are organized into `common`, `features`, and `layout` directories. Reusable, generic components are in `common`, feature-specific components are in `features`, and layout components are in `layout`.
*   **Styling**: The project uses a combination of Chakra UI for pre-built components and Emotion for custom styling.
*   **State Management**: For this project, we are using a combination of local component state (`useState`, `useReducer`) and React Context (`createContext`) for global state.
*   **Testing**: All new components and features should have corresponding unit or integration tests.
*   **Commit Messages**: Commit messages should be descriptive and follow conventional commit standards.
*   **Branching**: Feature branches should be created from the `main` branch.
*   **Pull Requests**: All code changes should be submitted through pull requests and require at least one approval before merging.
