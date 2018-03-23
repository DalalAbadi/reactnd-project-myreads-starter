# MyReads App

This is the first project for the Udacity React Nanodegree programm. This application allows you to search for books and place the selected books on to shelf. There are two pages: The Homepage shows the three bookshelfs, currently reading, want to read, and read.
The search page will allow the user to search for books.

## Getting Started
After downloading or cloning the repository run `<npm install>`. Once installed use `<npm start>` to launch the project.


## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.


## Main Page

Does the main page show three categories (or “bookshelves”) for books (currently reading, want to read, and read)?

The main page shows 3 shelves for books.

Does the main page allow users to move books between shelves?

The main page shows a control that allows users to move books between shelves. The control should be tied to each book instance.

Does information persist between page refreshes?

When the browser is refreshed, the same information is displayed on the page.

## Search Page


Search results on the search page allow the user to select “currently reading”, “want to read”, or “read” to place the book in a certain shelf.

When an item is categorized on the search page, and the user navigates to the main page, it appears on that shelf in the main page.

## Routing


The main page contains a link to the search page. When the link is clicked, the search page is displayed and the URL in the browser’s address bar is /search.

The search page contains a link to the main page. When the link is clicked, the main page is displayed and the URL in the browser’s address bar is /.

## Code Functionality

Component state is passed down from parent components to child components. The state variable is not modified directly - setState() function is used correctly.

Books have the same state on both the search page and the main application page: If a book is on a bookshelf, that is reflected in both locations.


## Code Structure

Every component grouped into Component directory and called when needed



## create-react-app

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

