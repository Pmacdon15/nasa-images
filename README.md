# NASA Image & Video Explorer

This is a web application built with Next.js and TypeScript that allows users to explore the vast collection of images and videos from the NASA API. Users can search for specific topics and view the results in a clean, modern interface.

![NASA Image & Video Explorer](./public/file.svg)

## Features

-   **Search**: Search through the entire NASA image and video library.
-   **Image and Video Playback**: View images and play videos directly in the browser.
-   **Modal View**: Click on an image or video to see a larger version in a modal window.
-   **Pagination**: Easily navigate through search results with pagination buttons.
-   **Responsive Design**: The application is fully responsive and works on all screen sizes.

## Technologies Used

-   **Framework**: [Next.js](https://nextjs.org/)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Linting & Formatting**: [Biome](https://biomejs.dev/)
-   **Package Manager**: [Bun](https://bun.sh/)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have [Bun](https://bun.sh/docs/installation) installed on your system to run this project.

### Installation

1.  Clone the repository to your local machine:
    ```bash
    git clone https://github.com/your-username/nasa-images.git
    cd nasa-images
    ```

2.  Install the project dependencies using Bun:
    ```bash
    bun install
    ```

## Environment Variables

This project connects to the public NASA API, which currently does not require an API key for its functionality. Therefore, no `.env.local` file or environment variables are strictly necessary to run this application as is.

However, if you were to integrate other APIs or features that require sensitive information or configuration, you would use a `.env.local` file at the root of your project to store these variables.

**Example `.env.local` structure (for future use or other APIs):**

```
# Example of a private environment variable (only accessible on the server-side)
SECRET_API_KEY=your_secret_api_key_here

# Example of a public environment variable (accessible on both client and server-side)
NEXT_PUBLIC_ANALYTICS_ID=your_analytics_id_here
```

Remember to never commit your `.env.local` file to version control. If you have environment variables that collaborators might need, you can create a `.env.example` file (without sensitive values) to show the required structure.

## Available Scripts

In the project directory, you can run the following commands:

### `bun run dev`

Runs the app in development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.

### `bun run build`

Builds the app for production to the `.next` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

### `bun run start`

Starts a Next.js production server.

### `bun run lint`

Checks the codebase for linting errors and automatically fixes them.

### `bun run format`

Formats the entire codebase using Biome.

## Deployment

This application is optimized for deployment on [Vercel](https://vercel.com/), the creators of Next.js. You can deploy your own instance by connecting your Git repository to Vercel.


