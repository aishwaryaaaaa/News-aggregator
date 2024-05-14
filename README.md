# News Agregator API

This is a simple Node.js project that provides news .

## API Endpoints

The application provides the following endpoints:

- `POST /users/signup`    : Signup to create your user.
- `POST /users/login`     : Login using email and password .
- `GET /users/preferences`: Fetches preferences set by logged in user.
- `PUT /users/preferences`: Change you preference of news category.
- `GET /news`             : Get the news of your desired preference.


## Built With

-  Node.js       - The runtime environment
-  express       - The web framework
-  npm           - Dependency Management
- https://newsdata.io/ - News API to fetch latest news
