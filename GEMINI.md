# Rental Car Application

This is a React and TypeScript application designed for a rental car service. It leverages modern frontend technologies to provide a dynamic user experience, including an interactive image carousel and a structured approach to managing car listings.

## Technologies Used

*   **React**: A powerful JavaScript library for building interactive user interfaces.
*   **TypeScript**: A superset of JavaScript that adds static types, improving code quality and maintainability.
*   **Vite**: A next-generation frontend tooling that provides an extremely fast development experience and optimized build process.
*   **React Router DOM**: Used for declarative routing within the application, enabling seamless navigation between different pages.
*   **Swiper**: A highly customizable and modern touch slider that powers the dynamic image carousel on the homepage.
*   **React Icons**: Provides a collection of popular icon libraries as React components, used for consistent UI elements.
*   **ESLint**: A pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript code, ensuring code quality and adherence to best practices.

## Features

*   **Dynamic Image Carousel**: The homepage features an interactive image carousel displaying attractive visuals, likely showcasing available cars or promotions. (Powered by Swiper).
*   **Page Navigation**: The application includes routing for different sections, such as a Home page, an About page, and a Card Demo page, managed by React Router DOM.
*   **Structured Car Data**: A clear interface (`Car.ts`) is defined for car objects, indicating a structured approach to managing and displaying rental car information (name, year, availability, price, image URL).

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

*   Node.js (LTS version recommended)
*   npm or yarn

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [repository-url]
    cd rental-car
    ```
    *(Note: Replace `[repository-url]` with the actual URL of your repository.)*

2.  **Install dependencies:**
    ```bash
    npm install
    # or yarn install
    ```

### Running the Development Server

To start the development server with hot-module reloading:

```bash
npm run dev
# or yarn dev
```

The application will typically be available at `http://localhost:5173`.

### Building for Production

To build the application for production:

```bash
npm run build
# or yarn build
```

This command will compile the TypeScript code and bundle the assets into the `dist` directory.

### Linting

To run ESLint and check for code quality issues:

```bash
npm run lint
# or yarn lint
```

## Project Structure

The project follows a standard React application structure, organized for clarity and maintainability:

```
├── public/                 # Static assets
├── src/
│   ├── assets/             # Static assets like images or local data
│   │   └── carouselImages.ts # Data for the image carousel
│   ├── components/         # Reusable UI components
│   │   ├── CarrouselComp.tsx # The image carousel component
│   │   └── ...
│   ├── css/                # Global CSS styles
│   ├── interfaces/         # TypeScript interfaces for data structures
│   │   └── Car.ts          # Interface defining a Car object
│   ├── layouts/            # Layout components (e.g., Root layout)
│   │   └── Root.tsx
│   ├── pages/              # Main application pages
│   │   ├── HomePage.tsx    # The main landing page
│   │   ├── AboutPage.tsx
│   │   └── ErrorPage.tsx
│   │   └── CardDemoPage.tsx
│   ├── main.tsx            # Entry point of the React application
│   └── index.css           # Global styles
├── .eslintrc.cjs           # ESLint configuration
├── package.json            # Project dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite build configuration
└── README.md               # Project README file
```
