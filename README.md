# Netflix GPT

Netflix GPT is a feature-rich React application that combines a Netflix-like experience with the power of GPT for movie suggestions. This app integrates Firebase for authentication, TMDB for movie data, and Tailwind CSS for responsive and visually appealing designs.

# 🚀 Features

# Authentication

- Login/Sign Up
  - User registration and authentication.
  - Secure form validation.
  - Persistent user sessions.
  - Update profile functionality.
  - Sign out and session management.

# Movie Browsing (Authenticated Users)

- Header
  - Intuitive navigation for easy browsing.
- Main Movie Section
  - Background trailer (autoplay and muted).
  - Title and description display.
- Movie Suggestions
  - Dynamic movie lists based on TMDB data.

# Netflix GPT

- Search Bar
  - AI-powered search powered by OpenAI's GPT.
- Movie Suggestions
  - Personalized movie recommendations.
  - Dynamic movie cards and lists.

# Multi-Language Support

- Translate the app into multiple languages.

# 🔧 Technologies Used

# Frontend

- React: Component-based user interface.
- Tailwind CSS: Responsive and modern styling.

# Backend

- Firebase: Authentication and hosting.
- TMDB API: Movie data and trailers.
- OpenAI GPT: Smart movie suggestions.

# State Management

- Redux Toolkit: Centralized state management with slices (`userSlice`, `movieSlice`, `gptSlice`).

# Other

- Custom Hooks: Reusable logic for fetching data.
- Environment Variables: Secure API keys in `.env`.

# 🛠️ Key Features Implemented

1. Setup
   - Create React App with Tailwind CSS configuration.
   - Firebase setup and deployment.
   - Registered TMDB API and integrated access tokens.
2. Authentication

   - Built and validated Login and Sign-Up forms.
   - Created a secure sign-up user account system.
   - Implemented API for user sign-in and session persistence.

3. Movie Features

   - Fetch data from the TMDB "Now Playing" movies list.
   - Built components for movie cards, lists, and trailers.
   - Embedded YouTube videos for trailers (autoplay and muted).

4. GPT Integration

   - Added a GPT-powered search bar for personalized movie suggestions.
   - Utilized OpenAI API for dynamic responses.
   - Reused movie list components to display GPT recommendations.

5. State Management

   - Created Redux slices (`userSlice`, `movieSlice`, `gptSlice`) for centralized state.
   - Added memoization for performance optimization.

6. Bug Fixes

   - Corrected sign-up user `displayName` issues.
   - Handled unauthorized navigation by redirecting to Login.

7. Responsive Design
   - Enhanced UI responsiveness using Tailwind CSS.
   - Ensured compatibility across devices.

# 🌐 How to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/netflix-gpt.git
   cd netflix-gpt
   ```
