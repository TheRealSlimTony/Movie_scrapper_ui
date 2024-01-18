# movie-scrapper-ui

This project is a Vue.js-based frontend for a movie scraping application. It provides a user-friendly interface to interact with the backend movie scrapper API.

## Project setup
npm install

shell
Copy code

### Compiles and hot-reloads for development
npm run serve

shell
Copy code

### Compiles and minifies for production
npm run build

shell
Copy code

### Lints and fixes files
npm run lint

vbnet
Copy code

### UI Features and Functionalities

- **Dynamic Movie Listing**: The UI dynamically retrieves and displays a list of movies based on user-selected locations. It interacts with the backend API to fetch movie data which includes titles, durations, and showtimes.

- **Interactive Dropdown Menu**: Users can select a location from a dropdown menu, which triggers a request to the backend to fetch movies playing in the selected area.

- **Responsive Movie Display**: Each movie is displayed with its title, duration, and showtimes. The information is presented in a clear and concise format, making it easy for users to browse through different movie options.

- **Image Rendering**: For each movie, an image is dynamically rendered in the UI. This feature enhances the visual appeal of the application and provides a more engaging user experience.

- **Styling with CSS**: The application is styled using CSS, offering a clean and modern layout. The movie listings are aligned to the left, and images are appropriately sized and aligned, providing a neat and organized appearance.

### Customize Configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
