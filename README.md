# movieCatgeoryApp# Movie Category App

A responsive web application that allows users to browse and explore movies by categories. Live demo available at [https://phynnoex.github.io/movieCatgeoryApp](https://phynnoex.github.io/movieCatgeoryApp)


## Features

- **Category-based Movie Browsing**: Easily filter movies by genres and categories
- **Responsive Design**: Optimized for both desktop and mobile viewing experiences
- **Movie Details**: View comprehensive information about each movie including synopsis, cast, and ratings
- **Search Functionality**: Quickly find specific movies across the entire database
- **User-friendly Interface**: Clean and intuitive UI for seamless navigation
- **WatchList**:  store movies that you'd like to watch later
- **user-Authentication**: sign up or sign in to an account to save to watchlists

## Technologies Used

- **React.js**: Frontend library for building the user interface
- **React Router**: For handling navigation between different views
- **SASS**: For styling and responsive design
- **GitHub Pages**: For hosting the application
- **Firebase Auth**: For Authentication
- **Firebase Firestore**: for saving movies to be added to watchlists
- **TMDB Movie Database API**: For fetching movie data and information

## Installation and Setup

```bash
# Clone the repository
git clone https://github.com/phynnoex/movieCatgeoryApp.git

# Navigate to the project directory
cd moviVideo

# Install dependencies
npm install

# Start the development server
npm start
```

## Project Structure

```
movieCatgeoryApp/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── CategoryList.js
│   │   ├── MovieCard.js
│   │   ├── MovieDetail.js
│   │   └── SearchBar.js
│   ├── pages/
│   │   ├── Home.js
│   │   ├── CategoryPage.js
│   │   └── MoviePage.js
│   ├── services/
│   │   └── api.js
│   ├── App.js
│   └── index.js
└── package.json
```

## Future Enhancements

- Integration with streaming services to show availability
- Advanced filtering options (by year, rating, etc.)
- User reviews and ratings

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/phynnoex/movieCatgeoryApp/issues).

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

- GitHub: [@phynnoex](https://github.com/phynnoex)
- Project Link: [https://github.com/phynnoex/movieCatgeoryApp](https://github.com/phynnoex/movieCatgeoryApp)

---

### About This Project

This Movie Category App was developed as a way to demonstrate my frontend development skills using React. The project focuses on creating an intuitive user experience while implementing modern web development practices.