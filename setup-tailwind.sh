#!/bin/bash

# Step 1: Install Tailwind CSS and its dependencies
pnpm install -D tailwindcss postcss autoprefixer

# Step 2: Create the Tailwind configuration file
npx tailwindcss init

# Step 3: Create the PostCSS configuration file
echo "module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}" > postcss.config.js

# Step 4: Create the Tailwind CSS input file
mkdir -p src/styles
echo "@tailwind base;
@tailwind components;
@tailwind utilities;" > src/styles/tailwind.css


# Step 6: Import Tailwind CSS in the main CSS file (e.g., index.css)
echo "@import 'src/styles/tailwind.css';" >> src/index.css

echo "Tailwind CSS setup completed successfully."
