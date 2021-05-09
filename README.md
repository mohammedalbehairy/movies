# Wookie Movies
## _Vapulus Senior Front Assignment_


> `We have three main routes ` .
- movies/list
- movies/details/:slug
- ✨movies/bookmarks ✨

## Features

- List all movies from https://wookie.codesubmit.io/movies then group them by category.
- You can search using text input which exist in the header
- Get details of each movie through details button or clicking on the card image
- `You can bookmark any movie by clicking on the bookmark icon`
- View all bookmarked movies by clicking on `View Bookmarks` button exist in the header

## Project Structure
We have four basic module
> App Module : which contains the entry point of the app

> Core Module : which is designed for singleton services shared throughout the application and the main layout, `it also contains our state management logic`
- State 
- Actions
- Reducers
- Effects
- Sellectors

> Shared Module : which will contain the shared functionalities like components , pipes , or any custom functionality.  `We will use it later` as the project at the current state doesnot have more logic

> Movies Feature Module : a lazy loaded module that contains the logic & routes of our feature

## Tech Main Points

- Angular 11
- Sass
- MediaQuery
- FlexBox
- Angular Material
- NGRX


## Installation


Install the dependencies and devDependencies and start .

```sh
cd movies
npm i
npm run start
```

**Mohammed Ibrahim Al behairy!**
FullStack Developer