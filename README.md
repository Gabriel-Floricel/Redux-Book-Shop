# React Redux Book Shop

## What do I use in this project?

- react Redux
- API calls
- login/logout feature
- localStorage cookies
- react routing
- installing and working with 3rd party libraries

## Tasks

1. Navbar has 5 links: `Books Shop`, `Biography`, `Finance`, `Business`, `Login` a shopping cart, and a search bar with Search button.

   - When the user clicks on the `Books Shop` link the browser url is changed to `localhost:3000/` and goes on home page.
   - When the user clicks on the `Biography` link the browser url is changed to `localhost:3000/category/biography` and books with this category are filtered.
   - When the user clicks on the `Finance` link the browser url is changed to `localhost:3000/category/finance` and books with this category are filtered.
   - When the user clicks on the `Business` link the browser url is changed to `localhost:3000/#/category/business` and books with this category are filtered.

2. When the user presses the `Login` button the login component is displayed which asks for a user and password.

   - Logging in as the Administrator with the correct credentials will grant access to Edit, Add, Remove books from the server.
   - Admin details are saved on local storage and status will remain `Logged in` until the `Logout` button is pressed.

3. When pressing the `My Cart`, the shopping cart will appear on the top of the screen (regardless if empty or not).

   - Pressing the cart button will toggle it on/off on screen.

4. As a visitor/customer, you may add books to the cart and change their number.

   - Pressing `Order` will mimic a mock loading by showing the spinner.

## Live Application URL

The Application is deployed in https://redux-book-shop.pages.dev/

Click on the link to see the application

## Cloning and Running the Application in local

Clone the project into local

Install all the npm packages. Go into the project folder and type the following command to install all npm packages

```bash
npm install
```

In order to run the application type the following command:

```bash
npm start
```

The Application Runs on **localhost:3000**
