# Vite React Country Data Project

This project is a React application bootstrapped with Vite. It fetches country data from the REST Countries API and includes several features such as a shimmer effect for loading states, searching by country name, filtering by region, and dark/light mode. The application is also responsive.

## Features

1. **Fetch Country Data**: Retrieves data from the REST Countries API.
2. **Shimmer Effect**: Displays a loading shimmer effect while data is being fetched.
3. **Search by Name**: Allows users to search for countries by their name.
4. **Filter by Region**: Enables filtering of countries based on regions (e.g., Africa, Americas, Asia, Europe, Oceania).
5. **Dark/Light Mode**: Users can toggle between dark and light themes.
6. **Responsive Design**: The application is fully responsive and works on various screen sizes.

## Getting Started

### Prerequisites

- Node.js (>= 14.x)
- npm (>= 6.x) or yarn (>= 1.x)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/sonukumar6116/country
   cd country
   ```

2. Install dependencies:

   ```sh
   npm install
   # or
   yarn install
   ```

### Running the Application

1. Start the development server:

   ```sh
   npm run dev
   # or
   yarn dev
   ```

2. Open your browser and go to `http://localhost:3000`.

### Building for Production

To build the project for production, run:

```sh
npm run build
# or
yarn build
```

The build output will be located in the `dist` directory.

## Available Scripts

In the project directory, you can run:

- `npm run dev` / `yarn dev`: Runs the app in the development mode.
- `npm run build` / `yarn build`: Builds the app for production.
- `npm run serve` / `yarn serve`: Serves the built app locally.

## Usage

### Fetching Country Data

The country data is fetched from the REST Countries API using the custom hook `useFetchCountries`. The hook manages the data fetching logic and state.

### Shimmer Effect

The `ShimmerEffect` component is used to display a loading shimmer effect while the data is being fetched. This enhances the user experience by providing a visual indication that data is being loaded.

### Searching by Name

The `SearchBar` component allows users to search for countries by their name. The search input updates the displayed country list in real-time.

### Filtering by Region

The `RegionFilter` component enables users to filter the countries by region. This is achieved by selecting a region from a dropdown menu, which then filters the displayed countries accordingly.

### Dark/Light Mode

The `ThemeToggle` component allows users to switch between dark and light modes. The theme preference is managed using the `ThemeContext` and stored in the local storage to persist between sessions.

### Responsive Design

The application is designed to be fully responsive, ensuring it works well on various screen sizes, from mobile devices to desktops.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Submit a PR with a detailed description of your changes.

## License

This project is licensed under the MIT License.

## Contact

If you have any questions or suggestions, feel free to reach out.

---

Enjoy using the Vite React Country Data Project! 🎉

