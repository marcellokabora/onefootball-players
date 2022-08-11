# OneFootball Web assignment

The application is built in Angular 14 using some built-in components from the  [@angular/material](https://material.angular.io/components/categories) library like button, icon, input and card.

In order to run the application you need to install all the packages `npm install` and run the server `ng serve`

The application is defined by one autocomplete field with a select and one card with a header, image, and list of stats.

The structure of the folders is very simple I created one folder for component, service, interface, and pipe and every file has its own spec file for testing.
The test coverage is more than 60% of the lines code and can be test by running `ng test` in the terminal.

Another thing that I would like to do is to use another API in order to get all the players and filters by name and display asynchronous in the select option. We could use a debounce time for the input and request only the first 10 records of the database.
