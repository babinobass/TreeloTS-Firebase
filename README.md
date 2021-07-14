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
