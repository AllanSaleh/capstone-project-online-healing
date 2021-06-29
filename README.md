# Re:Coded Capstone Project's Template

## Overview
This is the template that will be used when creating Re:Coded's capstone projects that contain some, or all, of the package used in this project.

## Used dependencies
- Create-React-App with all it's dependencies `Front-end`
- Eslint using Airbnb guideliness `For linting`
- React Router `To handle routes`
- Firebase `Backend and API`
- i18next `for translation`
- Tailwindcss `Highly customizable CSS framework`
- Postcss `To handle compiling the tailwind configurations to css files`
- Jest `To handle testing`
- Concurrently `To enable running multiple commands simultaneously`
- Husky `To run pre-commit commands`
- Lint staged `To run linters on all staged files`

## CI/CD
- CircleCI is used to control the integration of this project. The integration happens by running the following jobs:
    1. `build-and-test`: In this job an Ubuntu image is mounted the following steps occur:
        1. `yarn` is installed
        2. If an old cache exists, then it is restored to reduce the build  time. The confirmation happens by checking if any changes happen to   the checksum of the package.json file.
        3. Run `yarn` to add all the dependencies. If the cache is restored from the previous step, then the time needed for this step might be  reduced.
        4. Run `yarn format` to format all the files to make sure they're   given correctly.
        5. Run `yarn test --passWithNoTests` to run the test but also pass  if no tests exist.
    2. `deploy-to-netlify`: In this job Ubuntu is mounted again to simply do a `POST` HTTP request to netlify on the specified API URL that comes from Environment Variables to force Netlify to make a preview build for ONLY the master and develop branch. Environment Variables can be created in Netlify by going to `Site Settings > Build & Deploy > Continues Deployment > Build Hooks` and then add that API URL to CircleCI as environment vaiables with the same keys mentioned in the config.yml file. There are two environment variables that are used here: 
        1. **`deploy_master`**: This is the variable that will point to the netlify url that corresponds to the master branch. 
        2. **`deploy_develop`**: This is the variable that will point to the netlify url that corresponds to the develop branch. 

- **It should be noted that in the case of branches other than master and develop the 2nd job, deploying to netlify, is not executed to minimize the build minutes**. 

## Available Scripts

In the project directory, you can run:

### `yarn start`


Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

This also runs postcss on watch mode to update any changes made to the css files immediately. 

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn test:coverage`

Launches the test runner in the interactive watch mode while showing coverage reports.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance. It also runs postcss to build the CSS files.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn build:css`

Builds the CSS using postcss and postcss-cli from the Tailwind configuration file.

### `yarn watch:css`

Keeps updating the CSS files using postcss and postcss-cli from the Tailwind configuration file.

### `yarn format`

Formats all the lives in the project using Prettier and Eslint

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

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

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
