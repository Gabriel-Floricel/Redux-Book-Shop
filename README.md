# React Redux Book Shop

## What do I use in this project?

- react Redux
- react routing
- UseEffect hook
- installing and working with 3rd party libraries

## Tasks

1. Create a navbar with 4 links: `Promotions`, `Winter Offer`, `Spring Offer`, `Autumn Offer`

   - When the user clicks on the `Promotions` link the browser url is changed to `localhost:3000/#/`
   - When the user clicks on the `Winter Offer` link the browser url is changed to `localhost:3000/#/category/1`
   - When the user clicks on the `Spring Offer` link the browser url is changed to `localhost:3000/#/category/2`
   - When the user clicks on the `Autumn Offer` link the browser url is changed to `localhost:3000/#/category/3`

2. When the user navigates to `category/1` or `category/2` or `category/3` the same component is used to display the products (only the ones from that category id are shown)

   - When the url in the browser is `category/1` the first product which is displayed is `Handcrafted Fresh Towels`
   - When the url in the browser is `category/1` the filter by category has `16` items
   - When the url in the browser is `category/2` the filter by category has `15` items
   - When the url in the browser is `category/3` the filter by category has `16` items

3. Move the random product of the day from the `Category` page to `Promotions` page.

   - When the url in the browser is `localhost:3000/#/` the `Promotions` page is displayed
   - Each time the user navigates to the `Promotions` page 3 random products are chosen from the 3 available categories

4. The promotion page has a carousel (React Responsive Carousel from https://www.npmjs.com/package/react-responsive-carousel)
   - The `Promotions` page has a carousel which displays the image of the 3 randomly chosen products.
   - Each slide also has a label which displays a text in the format `For the {xth} of {month_name} {product_name}: from {old_price} to {new_price}` (example `For the 24th of March Generic Frozen Shirt: from $303.00 to $152 !`)

## Live Application URL

The Application is deployed in https://eprozar-react.pages.dev/#/

Click on the link to see the application

## Cloning and Running the Application in local

Clone the project into local

Install all the npm packages. Go into the project folder and type the following command to install all npm packages

```bash
npm install
```

In order to run the application Type the following command

```bash
npm start
```

The Application Runs on **localhost:3000**
