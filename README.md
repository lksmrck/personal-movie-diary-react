# 📽 My Movie Diary App

Simple personal app that

## ⚡️ Motivation

Main purpose of this app was to practice the gained knowledge in ReactJS framework.

Additionally I recently started to watch more movies in specific genres with my GF and decided it would be nice to have simple personal movie diary, where we could see all movies we watched and come back to them eventually to see if we though the were worth it back then.

## 👇 Demo

You can try the demo [HERE](https://lukasthevicious.github.io/personal-MyMovieDiary-react/)

## ⚙️ Basic functionality

![App demo](./readMe/movieDiaryGIF.gif)

1. User is able to add watched movie collecting the three main information: Movie name, Date movie was filmed, Date movie was watched (and movie poster path).
   a. By searching through Movie Database API - User is requested to fill date watched in modal window.
   b. Manually adding the movie - User is requested to fill in the url of movie poster simply found on the internet.
2. Movie is then saved to the Local Storage and added to the section below including the 2 rows of 10 stars rating (me and GF), which are not filled yet and stars can be assigned/reassigned by simply clicking on them.
3. After adding the first movie, the Sort selection input and Statistics icon is showed.
   a. Movies can be sorted by specific conditions
   b. Statistics show few simple basic stats about the movies and can be displayed by hovering to the icon
4. Movies can be deleted by clicking the red cross icon in the top-right corner of the added movie
5. User is able to click on the added movie poster after which the modal window is displayed:
   a. When firstly clicked on particular movie, the modal window with request to fill the detail is displayed (detail = personal notes to the movie after watching it).
   b. If the display was added and movie poster is clicked again, the added detail is displayed instead. Detail can be changed by clicking the Edit button.

## ℹ️ Additional information

- Loading spinner is displayed while the data are being fetched
- Displays text “No movie was found”, when there is no movie according to the search term
- Fetch errors are handled by display error message.
- If the fetched movie has no poster image, the default image from Assets folder is assigned instead.

## Data

Data from [TMDB](https://www.themoviedb.org/?language=cs) API are used in this project.

## ⚒ Technologies used

- <b>ReactJS</b>
  - <b>Context API</b> (for state management)
- UI library - <b>Material UI</b> (for Inputs, Buttons and Rating elements.), React Icons for icons
- Styling - <b>Styled components</b>
- Hosting - <b>GitHub</b>

## ⏩ Future

In the future, app will be potentially extended by:

- Adding the second page, where will be for inspiration loaded actual popular movies from the API
- Adding the search button into added movies to see if the movie was already watched
- Adding the genres to movies and also possibility of filtering and searching movie by genres
