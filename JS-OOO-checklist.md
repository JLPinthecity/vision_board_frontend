# JS/Rails Order of Operations Guide (FRONTEND)

### PART 3: DOM Manipulation, Events, and Fetch using Rails API

- **JS MANTRA:** When _some event_ happens, I want to make _what kind of_ fetch and then manipulate the DOM _in what way_?

- Quick note on frontend JS project design can be found in PART 3 notes.

**Initial Setup**

- [x] 1. Create separate directory for frontend
- [x] 2. Create `index.html` file with script tag connecting your `index.js`. Ex: `<script type="text/javascript" src="index.js"></script>`
- [x] 3. Create `index.js`, `console.log("in index.js")`, and check for the logged message in your dev tools to confirm the `index.html` <> `index.js` connection was established.
- [x] 4. Initialize a `git` repo for frontend repository.

**Connect your API to your frontend!**

- [x] 5. Think about the **JS mantra** and answer this question: When the _DOM Content is Loaded_, I want to make a  _GET_ fetch and then manipulate the DOM _in what way_ (usually render the data)?
- [x] 6. Create `DOMContentLoaded` event listener and `console.log("loaded")` as the event handler to confirm we've properly set up the listener.
- [x] 7. We're eventually going to make a call to the `index` route of our API (ex: `localhost:3000/api/v1/syllabuses`). Run your `rails server` and visit that end point in the browser to confirm the expected JSON data is present.
- [x] 8. We can see the JSON data in the browser but in order to access it in our frontend, we'll need to setup Cross Origin Resource Sharing (CORS). In order to do this we'll need to do a couple things:
    - Navigate to your Gemfile and uncomment `gem 'rack-cors'` then `bundle install`. You can read more about CORS in the PART 3 notes and [here](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing).
    - Inside of `config/initializers/cors.rb` uncomment the CORS code and update `origins 'example.com'` to `origins '*'`
- [x] 9. Commit and push this code!

**Receive (GET) data _from_ the server**

- [x] 10. `GET` request
    - Create a new branch for `GET` implementation.
    - Create your `get____` function (ex: `function getToys()`) that will make a call to your `index` endPoint in your API, make your `GET` request inside the function and `console.log` the json data, then call your `get___` function in the `DOMContentLoaded` event listener.
    - Once you have confirmed your `GET` request is returning the `JSON` you were expecting, use that data to update the `DOM`.(see PART 3 notes for example)
    - Once working: Commit and push this code! Then merge branch to master.

**Submit (POST) data _to_ the server**

- [x] 11. `POST` request
    - Create a new branch for `POST` implementation.
    - Create form
    - Create submit event listener
    - Create submit event handler to handle form data
    - Create `post_____` function
    - Manipulate the DOM with "posted" JSON data
    - Once working: Commit and push this code! Then merge branch to master.
- [ ] 12. `git pull` on the master branch to get working `GET` and `POST` functionality.

**Refactor to make your code more DRY**

- [ ] 13. Make sure you're not repeating yourself unnecessarily in your code. Ex: Create a render function you can use in both your "read" and "create" functions.
- [ ] 14.  Build out any additional features using the JS Mantra: Event, Fetch, and DOM Manipulation flow as a guide.

### PART 4: OOJS Refactor
- [x] 1. _IMPORTANT:_ Create a separate branch for your OOJS Refactor
- [x] 2. Create a JS Class (ex: `class Syllabus`)
- [x] 3. Link to the new JS file in your `index.html` (ex: `<script type="text/javascript" src="src/syllabus.js"></script>`)
- [x] 4. Create a constructor that pushes all instances of `this` into an empty array (See part 4 notes for example)
- [x] 5. Refactor render functionality by creating a render function in your JS class
- [ ] 6. For future use, create a static method in your JS class that finds an object based on it's id. (In the PART 4 notes we see how this would be useful for 'update/`PATCH`' functionality)

### Bonus
- [ ] Leverage a CSS framework to improve the styling of your application
  - Easiest to implement: [Bulma](https://bulma.io/)
  - Most popular: [Bootstrap](https://getbootstrap.com/)
  - Also good: [Semantic UI](https://semantic-ui.com/)
  - Not bootstrap: [Materialize](https://materializecss.com/)

### Confirm
- [ ] You have a large number of small Git commits
- [ ] Your commit messages are meaningful
- [ ] You made the changes in a commit that relate to the commit message
- [ ] You don't include changes in a commit that aren't related to the commit message
