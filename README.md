# Gregor International - Project Documentation

## Project Overview
This is a premium corporate website for **Gregor International**, a holding company. It is built using:
- **React** (Framework)
- **Vite** (Build tool)
- **Tailwind CSS** (Styling)

## How to Edit the Website

### 1. Changing Images
Images are currently set as background images using CSS classes or direct `img` tags.

- **Hero Image:** Open `src/components/Hero.tsx`. Look for the `div` with `bg-[url('...')]`. Replace the URL inside the single quotes with your own image path or URL.
  ```tsx
  // Example in src/components/Hero.tsx
  <div className="absolute inset-0 bg-[url('/path/to/your/image.jpg')] ..."></div>
  ```
- **Business Cards:** Open `src/components/BusinessStructure.tsx`. Each card has a background image defined similarly.
- **Owner Image:** Open `src/components/Owner.tsx`.

**Using Local Images:**
1. Place your images in the `public/` folder (e.g., `public/hero-bg.jpg`).
2. Reference them as `/hero-bg.jpg` in the code.

### 2. Editing Text
All text content is directly inside the React components in the `src/components/` folder.

- **Company Info:** Edit `src/components/About.tsx`.
- **Contact Details:** Edit `src/components/Contact.tsx`.
- **Investment Reasons:** Edit `src/components/WhyInvest.tsx`.

### 3. Styling and Colors
The project uses Tailwind CSS. The primary theme colors (like the Gold/Amber accent) are using Tailwind's `amber-500` class.

- To change the accent color, you can do a Find & Replace for `amber-500` to another color (e.g., `blue-600`) across the project.
- Global font settings are in `src/index.css`.

### 4. Adding New Sections
1. Create a new component file in `src/components/` (e.g., `NewSection.tsx`).
2. Import it in `src/App.tsx`.
3. Add it to the `<main>` block in `App.tsx`.

## Commands
- `npm run dev`: Start the development server.
- `npm run build`: Build the project for production.
