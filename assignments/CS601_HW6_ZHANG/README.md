# Inventory Management System

A React-based inventory management system for TechHub Electronics, showcasing technology products including laptops, smartphones, audio equipment, and accessories. Features include a dynamic product catalog with detailed views for each item.


## Setup

1. Install dependencies:
```bash
npm install
```
2. Run the development server:
```bash
npm start
```

## Project Structure

- `src/`
  - `components/` - React components
    - `Header.js` - Store header component
    - `InventoryList.js` - Product listing component
    - `InventoryItem.js` - Individual product card component
    - `ProductDetail.js` - Detailed product view component
    - `Footer.js` - Footer component
  - `data/` - JSON data files
    - `inventory.json` - Product database
  - `public/img/` - Product images
  - `App.css` - Global styles


## Technologies Used

- React
- React Router (v7)
- JavaScript/JSX
- CSS
- JSON for data storage

## Component Hierarchy

- App
  - Header (Logo & Store Name)
  - Router
    - InventoryList (Home Page)
      - InventoryItem
    - ProductDetail (Individual Product Pages)
  - Footer


## Routes

- `/` - Home page with product listing
- `/product/:sku` - Individual product detail pages

## Data Structure

Each product in the inventory contains:
- SKU (unique identifier)
- Name
- Quantity
- Price
- Description
- Image URL
