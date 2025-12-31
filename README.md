# 🍕 Fast React Pizza Co. - Professional Menu Application

Welcome to the **Fast React Pizza Co.** project! This is a high-performance, dynamic web application built using **React.js**. It serves as a digital menu system that handles pizza data rendering, real-time availability, and a modular UI architecture.

---

## 📖 Project Description
This application was developed to demonstrate the power of **Component-Based UI**. Unlike traditional websites, this React app manages its own state and props, allowing for a seamless user experience. The menu is generated dynamically from data objects, ensuring that price updates or "Sold Out" statuses are reflected instantly across the interface.



[Image of React component-based architecture diagram]


## 🛠️ Technical Specifications (Tech Stack)

The project is built with the following modern web technologies:

* **Frontend Library:** `React.js (v18+)`
* **Logic:** `JavaScript (ES6+)` including Map methods and Destructuring.
* **Styling:** `CSS3 Modules` (Separate styling for each component to prevent global scope pollution).
* **Development Environment:** `Node.js` & `NPM`.
* **Build Tool:** `Create React App (CRA)`.

---

## 🚀 Key Architectural Features

### 1. Atomic Component Structure
The project is divided into several independent components located in the `src/` directory:
- **Header:** Contains the branding and stylized typography.
- **Menu:** The main logic container for rendering the list.
- **Pizza:** A reusable template for every individual food item.
- **Footer:** Handles operational hours and order buttons.

### 2. Data Flow (Props)
Data is passed from the parent component down to the children using **React Props**. This allows for a "Single Source of Truth," making the app easy to debug and scale.

### 3. Conditional Rendering
The app includes logic to check the `price` of pizzas. If an item is marked as "Sold Out", the UI automatically:
- Greys out the pizza image.
- Updates the price text to "SOLD OUT".
- Disables interaction.

---

## 📂 Detailed Directory Structure

```text
fast-react-pizza/
├── public/                 # Static assets (Pizza images)
├── src/                    # Main source code
│   ├── components/         # Sub-components
│   │   ├── Header.js       # Top branding
│   │   ├── Header.css      # Header styles
│   │   ├── Foods.js        # Main list logic
│   │   ├── Foods.css       # Layout grid styles
│   │   ├── Pizza.js        # Individual pizza template
│   │   └── Footer.js       # Bottom section & hours
│   ├── App.js              # Root component
│   ├── App.css             # Global layout styles
│   └── index.js            # Entry point
├── package.json            # Project dependencies & scripts
└── README.md               # Project documentation
```
## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
