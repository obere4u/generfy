
# Genrefy

## Overview

**Genrefy** is a Movie Recommendation App that lets users discover movie recommendations based on their favorite genres. It fetches movie data from The Movie Database (TMDB) API and uses Redux for state management and Local Storage for data persistence.

### Live Demo

Visit [https://generfy.vercel.app/](https://generfy.vercel.app/) to try it out!

## Features

- **Personalized Movie Recommendations**: Get movie recommendations tailored to your preferred genres.
- **Select Multiple Genres**: Choose from multiple movie genres to customize your recommendations.
- **Movie Details**: View detailed information about a selected movie, including the plot, cast, and more.
- **Persist Data**: User preferences and movie data are saved using Local Storage, ensuring your selections are available even after refreshing the page.

## Local Running of Project

### The Movie Database API

#### Create a TMDB Account

1. **Go to themoviedb.org**.
2. Click on "Sign Up" at the top right corner of the homepage.
3. Provide your name, email, password, and other required details.
4. After signing up, you'll receive a verification email. Click the link in the email to verify your account.

#### Generate an API Key

1. Once your account is verified, log in to your TMDB account.
2. Navigate to the API Section:
   - Click on your profile icon at the top right corner of the page.
   - From the dropdown menu, select "Settings."
   - On the left sidebar, select "API" under the "Developer" section.
3. **Request an API Key**:
   - Scroll down to the "Request an API Key" section.
   - Choose the appropriate API key type (usually "Developer" for personal projects).
   - Fill out the required information, including your application name and a brief description of how you'll be using the API.
   - Review and accept the terms of use for the TMDB API.
   - Once you submit the request, your API key will be generated and displayed on the same page.

### Code Editor

1. **Clone the Repository**
   ```bash
   git clone https://github.com/obere4u/generfy.git
   ```

2. **Install Dependencies**
   Navigate to the project directory:
   ```bash
   cd generfy
   ```
   ```bash
   npm install
   ```

3. At the root folder, you will see a `.env.example` file, rename it to `.env`.

4. Copy your API key and paste it inside the `.env` file, replacing `your TMDB API here` with your API.

5. **Start the Development Server** by running:
   ```bash
   npm run dev
   ```

6. **Visit the App**
   Open your web browser and visit [http://localhost:5173/](http://localhost:5173/) to start using Genrefy!

## Technologies Used

- **The Movie Database (TMDB) API** for movie data
- **Redux ToolKit** for state management
- **Local Storage** for data persistence
- **Reactjs** for building components
- **Tailwind CSS** for styling

## Contact

If you have any questions, comments, or concerns, please don't hesitate to reach out to us at [obere4u@gmail.com](mailto:obere4u@gmail.com). You can also find us on GitHub at `@obere4u`.