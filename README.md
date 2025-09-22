**Product Listing Page**

A responsive product listing page built with React + Vite + Tailwind CSS.
It replicates the given Figma design with pixel-perfect UI,reusable components,filters, pagination, sorting.

Features

Reusable Components: Navbar, Sidebar,Header, FilterPanel, ProductCard, ProductList , Pagination, Footer, etc.

Pagination: Client-side pagination with mock data.

Responsive Design: Works on Desktop, Tablet, and Mobile.

Dynamic State: Sorting, filtering, and pagination states stay in sync.

** Project Structure**
```
product-listing-page/
├── public/  #images and logo
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Sidebar.jsx
│   │   ├── FilterPanel.jsx
│   │   ├── ProductCard.jsx
│   │   ├── Pagination.jsx
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── ProductList.jsx
│   ├── pages/
│   │   └── ProductListingPage.jsx
│   ├── data/
│   │   └── mockProducts.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── package-lock.json
├── index.html
└── vite.config.js

```


**Tech Stack**

React + Vite 
JavaScript(ES6+)
Tailwind CSS for styling
Mock Data for products
React icons for icons

 **Installation & Setup Section**

1. **Clone the repo**
 
   git clone https://github.com/your-username/product-listing-page.git
   cd product-listing-page

2. **Install dependencies**

   npm install

3. **Install Tailwind CSS (latest)**
   Tailwind is already added in this project, but if you set it up again:

    npm install tailwindcss @tailwindcss/vite

   Then add the following to **vite.config.js**:

     tailwindcss(),   #Add the Tailwind CSS plugin to your plugins array

   And in src/index.css add:

   @import "tailwindcss";

5. **Install React Icons (for icons)**

   npm install react-icons

6. **Start development server**

   npm run dev
 
7. **Build for production**

   npm run build
 
8. **Preview production build**

   npm run preview








