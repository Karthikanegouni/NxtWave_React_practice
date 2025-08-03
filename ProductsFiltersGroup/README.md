# Nxt Trendz - Products Filters Group

A React application where users can explore a list of products with filters for category, rating, and title. It supports live filtering using authenticated API requests and displays different views based on API responses.

## Features

- Secure API requests with JWT token authentication
- Search filter based on product title
- Category and rating filters
- Clear filters functionality
- Loader animation while data is being fetched
- Failure and empty views for unsuccessful or no-result searches
- Fully responsive UI

## Functionality

- On initial load, all products are fetched
- Users can filter products by:
  - Title (search input + enter)
  - Category (click)
  - Rating (click)
- Users can apply multiple filters at once
- Clear Filters resets all selected filters
- Displays failure view for API errors
- Displays "No Products Found" when filters return empty results

## API

**Base URL:** `https://apis.ccbp.in/products`

### Sample API Usage:
```bash
https://apis.ccbp.in/products?title_search=laptop&category=1&rating=4
```

### Request Method:
`GET`

### Headers:
JWT token stored in cookies is sent for authentication

## Cloning This Project

```bash
git clone https://github.com/Karthikanegouni/NxtWave_React_practice.git
cd NxtWave_React_practice/ProductsFiltersGroup
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
- JWT for Auth
- REST API
- Cookies for auth storage

## Folder Structure

- `AllProductsSection/` - Handles API logic and renders product list
- `FiltersGroup/` - Renders filters: category, rating, and search input
- `App.js` - Main routing
- `index.js` - Entry point with router

## User Credentials

```text
username: rahul
password: rahul@2021
```

## License

This project is licensed under the MIT License.
