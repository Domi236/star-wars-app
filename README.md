# Star Wars PWA

WebAPP to get info about Star Wars using the SWAPI http://maxjf1.github.io/star-wars-app

## Used libraries/technologies

- **Create React App with custom boilerplate**: An stantard start project
  - Used for the base project and development environment
- Material UI: Material Design components implementation in react, to create beautiful UI
  - Used to create all project UI and some interactions
- React Router: Library to create React projects using the History API
  - Used to navigate between sections to an more app-like feel
  
  
  ## Task description
 
  https://docs.google.com/document/d/16y5Y5nAVFx8lr3EdDJEpaO5-RWl1JhxgQblbv9V_nqg/edit
 
 **In master branch**
 
- 1) The pagination is solved with jQuery in People.js, but it doesn't work everytime.
- 2) The CSS is all in Index.css. I let the list view for mobile as it was before, because i found it is good as it was.
- 3) In PeopleFilter.js I only add two new Arrays.
- 4) The search suggestions are solved in PeopleHeader.js, where only the names are shown while typing.
 
 
 **In refactored-tasks branch**
 
 - 1) Fix pagination with react-infinite-scroll-component in PeopleList.js and People.js.
 - 2) I add node-sass(scss), styled-components, global.styles.js and switch all stylings from index.css to global.styles.js and export           them to their components. Also add Global style tag to App.js.
 - 4) refactored in PeopleHeader.js by using the map() method and creating a ref instead of using id.
 - 5) Add pull to refresh to the lists with pulltorefreshjs and three @fortawesome packages. You can see it only with the mobile view in         the dev tools.
