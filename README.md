# MVC
## Model
* Data related logic
* Interactions with db (SELECT, INSERT, UPDATE, DELETE)
* Communicates with controller
* Can sometimes update the view (depends on framework)
## View
* What the end user sees (UI)
* Usually consists of HTML/CSS
* Communicates with the controller
* Can be passed dynamic data / values from the controller
* Template Engines
## Controller
* Receives input (from view, url)
* Processes requests (GET, POST, PUT, DELETE)
* Gets data from the model
* Passes data to the view
* Serves as middle-man between the model and the view
* Controller asks the model to get data from a db
* Contoller then takes that data, loads a view, and passes that data into it
* Finally the template engine takes over and runs logic to display data