ASSIGNMENT 2 UPDATES__________
+ Changed code image to just text.
+ Implemented JS function to move navbar out of view upon scroll down but bring it back upon scroll up to combat the navbar eating page content. This also required adding a padding to the page because position: sticky 'lifts' the element from the DOM.
+ As for seeing content behind the navbar that was intentional and I mimicked Apple's transform: blur and backdrop-filter: saturate CSS properties and have kept it. 
+ Added 'card' class styles to main content wrappers on each page to eat up some white space to make the left-centered content less off putting and removed the max-width attribute on those elements to take up more space.
+ Added an HR tag in-between subsections of each assignment to space things out. Each assignment will be within it's own 'card' element to add further separation. 
+ Removed any front-end mention of "assignment" and simply replaced with the subcategory name.
+ Changed 'GitHub' to 'My GitHub' on Contact page so user knows that 'My GitHub' is another source to learn more about me. 
+ Added dynamic indexing element on the Tutorial page for better navigation. Decided against using scroll-behavior: smooth so that when you click a subcategory link and it scrolls back up it doesn't trigger bringing the navbar back into view. 
+ I'm going to try to implement a dropdown div when a user hovers over the Tutorials page to go to individual pages of assignments while still only using one page to dynamically display the corresponding assignment data, may not get to it in time before the deadline. *Didn't happen


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
