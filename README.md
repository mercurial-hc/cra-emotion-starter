This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Features

- Bootstrapped with CRA
- customize-cra and react-app-rewired to configure babel and webpack without ejecting
- Opinionated project folder structure
- TypeScript
  - _basePath_ set to _**src/**_ to allow easier imports
- Reduxjs
  - _@reduxjs/toolkit_ for reducing Reduxjs boilerplate code
- Emotion (CSS-in-JS)
  - Babel Presets and Plugin for easier development
  - optional emotion-theming
- Tailwindcss (Utility CSS Classes)
  - directly import _**styled**_ or _**css**_ from emotion through twin.macro module
  - _tailwind.config.js_ with the default configuration
  - _twin.macro_ for easier development
  - TypeScript support and IntelliSense on Tailwindcss utility classes
- @testing-library/react used for unit and integration testing
- lint-staged for pre-commit hooks
  - build and verify
  - run tests and verify
  - static analysis
  - consistent formatting ensured with prettier

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test:watch`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
