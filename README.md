# MY PORTFOLIO

This project is a personal portfolio displaying personal achievements using tailwind for css styling.
It also use Strava API to get personal statistics related to my runs
Finally the contact form is calling an endpoint to getform.io to store all contacts

# ENV

- Create a '.env' file with below variables:

```
VITE_REACT_APP_CLIENT_ID = your_strava_client_id
VITE_REACT_APP_CLIENT_SECRET = your_strava_client_secret
VITE_REACT_APP_REFRESH_TOKEN = your_strava_refresh_token
VITE_REACT_APP_CONTACT_FORM= your_getform.io_endpoint_url
```

# RUN

- run "npm install" to install all dependencies
- run "npm run dev" to start the application on localhost
