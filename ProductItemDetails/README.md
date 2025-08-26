# Nxt Trendz - Specific Product Details

A React application that allows users to view detailed information about a selected product along with a list of similar products. The app handles API errors gracefully and supports secure authentication with route protection.

## Features

- Authenticated route for accessing product details
- Fetches product data and similar products using product ID
- Quantity adjustment with plus/minus buttons
- Loader while fetching data
- Failure view on unsuccessful API request
- Responsive UI for all screen sizes

## Functionality

- When an authenticated user clicks on a product in the Products route, it navigates to the Product Details route
- Product details are fetched using the product ID and displayed along with similar products
- Quantity starts at 1 and can be incremented or decremented
- If the user is unauthenticated, they are redirected to the Login route
- If the API request fails, a failure view is shown with a button to continue shopping (redirect to `/products`)

## API

**Base URL:** `https://apis.ccbp.in/products/:id`

### Example:

```bash
https://apis.ccbp.in/products/16
```

## Cloning This Project

```bash
git clone https://github.com/Karthikanegouni/NxtWave_React_practice.git
cd NxtWave_React_practice/ProductItemDetails
```

## Installation & Running

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm start
   ```

3. Visit:
   ```
   http://localhost:3000
   ```

## Technologies Used

- React
- JavaScript
- CSS
- REST API
- Cookies (JWT authentication)
- React Router
- React Icons

## User Credentials

```text
username: rahul
password: rahul@2021
```

## License

This project is licensed under the MIT License.
