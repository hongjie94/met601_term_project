# Country Management System

A TypeScript assignment project demonstrating interfaces, classes, inheritance, type assertions, and type predicates to create a type-safe country management system.

## Assignment Overview

This project showcases:
- TypeScript implementation of country management
- Filtering and displaying different types of countries
- DOM manipulation with TypeScript
- Type-safe programming practices

## Prerequisites

- Node.js (Download from https://nodejs.org/en/download)
- TypeScript compiler
- Web browser


## Project Structure

- `/CS601_HW4_ZHANG` - Root directory

  - `/public`
    - `index.html` - Main HTML file
    - `app.js` - Compiled JavaScript file
    - `style.css` - Styling
  - `/src`
    - `app.ts` - Main TypeScript source file
  - `tsconfig.json` - TypeScript configuration
  - `package.json` - Project dependencies

## Key Components

1. **ICountry Interface**
   - Defines base structure for all country types
   - Properties: name (string)
   - Methods: getInfo(HTMLElement)

2. **Country Classes**
   - RainyCountry: Tracks annual rainfall
   - SnowyCountry: Tracks annual snowfall
   - IslandCountry: Tracks land size

3. **Country Manager Features**
   - Displays all countries
   - Filters and displays snowy countries
   - Calculates total snow levels
