# Phase 3 Frontend
- Welcome to my third Flatiron School project! This is the frontend for my Baseball App. Here is the link to the backend portion of this project :
- https://github.com/JoseFlores25/phase-3-sinatra-react-project

## Requirements
Requirements
- Use Active Record to interact with a database.
- Have at least two models with a one-to-many relationship.
- At a minimum, set up the following API routes in Sinatra:<br> create and read actions for both models <br> full CRUD capability for one of the models
- Build a separate React frontend application that interacts with the API to perform CRUD actions.
- Use good OO design patterns. You should have separate classes for each of your models, and create instance and class methods as necessary.

For example, build a todo list application with a React frontend interface and a Sinatra backend API, where a user can:

- Create a new todo
- Read a list of all todos
- Update an individual todo
- Delete a todo

A Todo can be tagged with a Category, so that each todo belongs to a category and each category has many todos.

## Getting Started

First, you will need to fork and clone this repository into a local directory. Once you navigate into the correct file, run:

### `npm start`
The app should open in http://localhost:3000/

# Description

- The navigation bar will allow you to switch between the home, players, add player, and teams page
- The `/players` page will render all of the baseball players in the database. All players are sorted based on the position they play.
  1. If a user clicks on the player card, they will be routed to `/players/:id` where they can view more information about the player.
- The `/players/:id` page will give the user additional options:
  1. If the player doesn't belong to a  team, the user will have the option of adding them to the team with a drop down list. Doing so will route the user to the '/teams/:id' page and show them on the  team they just joined.
  2. If the player already belongs to a  team, then the user will have the option of clicking on a button to drop them from their existing fantasy team. Doing so will route the user to the `/teams/:id` page of the team they were dropped from.
  3. Additionally, a user has the option of clicking on the button titled 'retire' which will delete the player from the database. Doing so will route the user to the `/players` page. This can be done whether the player belongs to a  team or not.
- The `/players/new` page allows the user to add their own player to the database.
- The `/teams` page will show a list of all the  teams in the league. Clicking on the team will route the user to the `/teams/:id` page where they will be able to see all the  players belonging to that team.
