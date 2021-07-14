# Trello Clone App
## Visit
##### https://trello-ts-firebase.vercel.app/

## About the application
A simple Trello clon that i build with the objetive of learning TypeScript and other technologies
This is built with React, TypeScript, Styled-components and connected to firebase
The first time that a visit is recieved, a new anonymous user is created using firebase (`you can know more here: https://firebase.google.com/docs/auth/web/anonymous-auth`)
After that, we can start to create information that will be saved in firestore, from there we will obtain the information that will be displayed on screen
After a time firebase anonymous user data will be deleted

## Technologies
| Tech | url |
| ------ | ------ |
| React | https://reactjs.org/ |
| TypeScript | https://www.typescriptlang.org/ |
| Styled-components | https://styled-components.com/ |
| Firebase | https://firebase.google.com/ |
| react-dnd-html5-backend | https://www.npmjs.com/package/react-dnd-html5-backend |
| Vercel | https://vercel.com/ |
| GitHub | https://github.com/ |

## Installation

Clone the repository and execute.
sh
npm i
`Make sure the firebase.js file has your firebase credentials`

after execute
sh
npm start
and it will deploy at `port:3000`
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
