# Full-Stack Portfolio Website

This web development project utilizes Next.js, TypeScript, Material-UI, Node.js, Express, and MongoDB to create an organized and feature-rich full-stack portfolio website. The project is structured into frontend setup, backend integration, and API establishment.

## Frontend Setup

The frontend is developed using Next.js, a powerful React framework. Key dependencies include:

- **@emotion/react** and **@emotion/styled**: Used for styling components.
- **@mui/icons-material** and **@mui/material**: Material-UI components and icons for a consistent and aesthetically pleasing UI.
- **axios**: A promise-based HTTP client for making API requests.
- **next**: The Next.js framework.
- **next-optimized-images**: A plugin for optimizing images in Next.js projects.
- **react** and **react-dom**: Core React libraries.

**DevDependencies:**

- **@types/node**, **@types/react**, **@types/react-dom**: TypeScript type definitions for Node.js and React.
- **@typescript-eslint/eslint-plugin**, **@typescript-eslint/parser**, **eslint**: ESLint setup for TypeScript linting.
- **eslint-plugin-import**, **eslint-plugin-jsx-a11y**, **eslint-plugin-react**: ESLint plugins for import, JSX accessibility, and React linting.
- **image-webpack-loader**: Webpack loader for optimizing images.
- **typescript**: TypeScript for static typing.

## Backend Integration

The backend is powered by Node.js and Express. It is organized in a separate `server` folder, functioning as a standalone application.

**Express Dependencies:**

- **express**: A fast, unopinionated web framework for Node.js.
- **mongoose**: MongoDB object modeling for Node.js.
  
## MongoDB Database

MongoDB is used as the database to store and manage data for the portfolio website. The `mongoose` library facilitates the integration of MongoDB with the Node.js application.

## Getting Started

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/portfolio-project.git
    cd portfolio-project
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Run the backend (Express) server:

    ```bash
    cd server
    npm install
    npm start
    ```

4. Run the frontend (Next.js) application:

    ```bash
    npm run dev
    ```

5. Open your browser and navigate to `http://localhost:3000` to view the portfolio website.

Feel free to customize and expand upon this project to showcase your skills and projects in a visually appealing manner. Good luck with your portfolio!
