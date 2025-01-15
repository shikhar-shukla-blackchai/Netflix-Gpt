# Netflix GPT

- Create React App
- Configured TailwindCss
- Header
- Login Form
- Sign UP form
- Form validation
- useRef Hook
- Firebase Setup
- Deploying our app to production
- Creae SingUp User Account
- Implement Sign In user Api
- Created Redux Store with userSlice
- Implemented Sign out
- Update Profile
- BugFix: Sign up user displayName
- BugFix: if the use is not logged in Redirect/browse to Login Page and vise-versa
- Add hardcoded values to the constants file
- Register TMDB API & create an app & get access token
- Get Data from TMDB now playing movies list API
- custom Hook for Now Playing movies
- Create movieSlice
- Update Store with movies Data
- Planning for mainContauiner & secondary container
- Fetch Data for Trailer Video
- Embedded the youtube video and make it autoplay and mute
- Tailwind Classes to make Main Container Look awesome
- Build Secondary Component
- Build Movie List
- Build Movie Card
- TMDB Image CDN URL
- Made the Browse page amazing with Tailwind CSS
- usePopularMovies Custom hook
- GPT Search page
- GPT Search Bar
- (BONUS) Multi-language Feature in our App

# Features

- Login/Sign Up
  - Sign In/Sign up Form
- Browse (after authentication)
  - Header
  - Main Movie
    - Trailer in Background
    - Title & Description
    - MovieSuggestions
      - MovieLists \* N
- NetflixGPT
  - Search Bar
  - Movie Suggestions

# plateform Openai

- Api key: generate for new project
- npm openai / github-openai

# json

- json file is coveret in the curley bracess {}
  {
  ...
  }

# .env : secutati

- key & other imp things should to stroed in .env file

-SYNTEX
./src/.env - file:
REACT_APP_KEY_NAME:".....'

use Key
const PLACE_VAR= REACT_APP_KEY_NAME

NOTE: reStart the server localhost:3000 after adding key in the .env file

- defination - A .env file is a simple text file used to store environment variables for an application. These variables often include sensitive data like API keys, database credentials, or configuration settings. The .env file helps separate code from configuration, making the application more secure and easier to manage across environments (e.g., development, testing, production).

How it Works:
Content: The file contains key-value pairs in the format KEY=VALUE.
plaintext
Copy code
API_KEY=your-api-key
DB_PASSWORD=your-password
Usage: Applications use libraries like dotenv to load these variables into the process's environment (process.env in Node.js) at runtime.
Access: The variables can then be accessed in the code:
javascript
Copy code
const apiKey = process.env.API_KEY;
Security: The .env file is typically excluded from version control (e.g., by adding it to .gitignore) to prevent sensitive information from being exposed.

# memorazation

- If you have data in redux store then dont make api call when we swith the page

SYNTX-
const getTheDataRedux = ((store)=>store.slice.var)

!getTheDataRedux && callApiCallingFun() // is getTheDataRedux is null then make the api call
