This is a Marvel Hero searcher build as a skill assesment for Capitol Consulting.

## Getting Started

First of all, you should provide a .env file with your keys to connect to marvel API. The structure of the file should be like

```bash
NEXT_PUBLIC_MARVEL_API_PRIVATE_KEY= # here goes your private key
NEXT_PUBLIC_MARVEL_API_PUBLIC_KEY= # here goes your public key
```

## Important note

The marvel API is experiencing some issues with its use, so the performance of these resources is extremely slow, and some calls could be interrupted by the browser. For testing purposes, we suggest to change the number of heroes loaded in the `CHARACTERS_PER_PAGE` constant in the `page.tsx` file, line 10.

## First Steps

### Development Mode

You can start the project in development mode using:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. The port may change, check the terminal you can see if the port is changed

### Production Mode

To start this project on production mode, you should first create a build and then launch it:

```bash
npm run build # creates a production build

npm start # starts the production build

```

### Testing

To view testing information, you can use the following commands

```bash
npm run test # runs the tests once

npm run test:watch # runs the tests every time you save a file in the project

npm run test:coverage # runs the tests and provides information about the coverage achieved for each tested component
```

## How to Use the Application

This application has several views that you can use:

### Heroes Searcher

The main page is a hero searcher. If you search nothing, you will see all the heroes Marvel has created so far. If you perform a search, simply type and you will get the results of the heroes whose names start with your query. You can mark a hero as a favorite by clicking the heart icon. Clicking elsewhere within their cards will take you to the hero detail page.

### Hero Detail

When you click on a hero, you will see its information on a new page. In adittion, you can view the first 20 comics which this character appears! You can mark this hero favorite by clicking the heart icon.

### Favorite heroes

If you click on the heart icon on the top right corner, you will go to the favorites section. Here, you can see all the heroes you marked as favorite and you can search by name between them. If you click the heart inside their cards, they will dissapear from this view because their are no longer favorites.

## Returning to the first Page

You can always return to the home page (the hero list) by clicking the Marvel logo in the top left corner.

## Stack

This project is developed with React 18 and nextJS 14.

Styles are made with CSS modules ans SCSS modules.

For data fetching and state management we use TanStack Query 5.51 and the React Context API.

Testing is with Jest and React Testing Library.
