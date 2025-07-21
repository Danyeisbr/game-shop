# Game Shop – Senior Frontend Test

## Overview

Game Shop is a responsive web application built with React 19 and Next.js 15, designed as a technical assessment for senior frontend development. The application demonstrates modern React and Next.js patterns, including the use of Server and Client Components, a clean service layer, and a scalable, maintainable architecture.

## Technologies Used

- **React 19** – Modern functional components and hooks
- **Next.js 15** – App Router, Server/Client Components, API routes
- **TypeScript** – Type safety across the codebase
- **TailwindCSS 4** – Utility-first CSS for rapid, consistent styling
- **ESLint** – Code quality and style enforcement
- **Jest/React Testing Library** – Unit testing

## Features

- **Game Catalog**: Browse a paginated, filterable list of games with images, genres, prices, and descriptions.
- **Genre Filtering**: Filter games by genre using a native select element. The selected genre persists in the URL and is used for API queries.
- **Pagination**: "See More" button fetches the next page of results, replacing the current games and showing a loading spinner during fetch.
- **Cart Functionality**: Add or remove games from the cart. Cart state persists in local storage. The cart page displays all items, their details, and an order summary.
- **Responsive Design**: Fully responsive layout for mobile, tablet, and desktop.
- **Loading Indicators**: Custom loading spinner shown during data fetches and navigation.
- **Navigation**: Simple header with logo (links to catalog) and cart icon; footer logo also links to catalog.
- **Environment Variables**: API base URL is configurable via `.env.local` for flexible deployment.

## Architecture & Design Patterns

- **Server and Client Components**: The app leverages Next.js 15's Server and Client Components for optimal performance and user experience. The catalog and cart use Client Components for interactivity, while static layout and API logic are handled server-side. Further refactoring is planned to maximize the benefits of this separation.
- **Service Layer**: All data fetching is abstracted into service modules, promoting separation of concerns and testability.
- **Reusable Components**: UI elements (GameCard, GenreFilter, CartItem, etc.) are modular and reusable.
- **State Management**: Local state is managed with React hooks; cart state is persisted in local storage for user convenience.
- **Clean Code & Naming**: The codebase follows best practices for readability, maintainability, and scalability.

## API & Data Flow

- **Local API**: The app uses a local API route (`/api/games`) to serve mock game data. Filtering and pagination are handled via URL parameters (`genre`, `page`).
- **Genre Filter**: The genre filter updates the URL and triggers a new API request, ensuring deep linking and shareable URLs.
- **Pagination**: The "See More" button updates the page parameter and fetches the next set of games, replacing the previous results and showing a loading spinner during the fetch.

## Cart Functionality

- **Add/Remove**: Games can be added to or removed from the cart directly from the catalog.
- **Persistence**: Cart contents are stored in local storage, surviving page reloads and browser restarts.
- **Cart Page**: Displays all items, their details, and an order summary (quantity, price, total). Items can be removed individually.
- **Navigation**: "Back to Catalog" button returns to the main catalog page.

## Loading & Navigation

- **Loading Spinner**: A custom spinner is shown during all data fetches and navigation events, providing clear feedback to users.
- **Navigation**: Header and footer logos link to the catalog; cart icon links to the cart page. Navigation is simple and intuitive.

## Environment Variables

- **API URL**: Set the API base URL in `.env.local`:
  ```
  NEXT_PUBLIC_API_URL=http://localhost:3000/api
  ```
  This allows for easy configuration across different environments.

## How to Run Locally

1. Install dependencies:
   ```bash
   npm install
   ```
2. Create a `.env.local` file in the project root and set the API URL as above.
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

- The app is deployed on Vercel and accessible online. Simply connect your GitHub repository and follow the Vercel deployment flow for future updates.

## Future Improvements

With more time, the following enhancements could be implemented:

- **Full SSR/SSG**: Leverage Next.js Server Components and static generation for even better performance and SEO.
- **Advanced State Management**: Integrate a state management library (e.g., Zustand, Redux Toolkit) for more complex flows.
- **Comprehensive Unit & Integration Tests**: Expand test coverage using Jest and React Testing Library.
- **Accessibility (a11y)**: Audit and improve accessibility for all users.
- **Optimistic UI Updates**: Enhance user experience with instant feedback on cart actions.
- **User Authentication**: Add login and user-specific cart/history.
- **API Integration**: Connect to a real backend or external API for live data.
- **Internationalization (i18n)**: Support multiple languages.

## Conclusion

This project demonstrates a modern, scalable approach to building a responsive e-commerce catalog with React and Next.js, emphasizing clean code, modularity, and best practices. The architecture is ready for further extension and refactoring, especially to maximize the benefits of Next.js 15's Server and Client Components paradigm.
