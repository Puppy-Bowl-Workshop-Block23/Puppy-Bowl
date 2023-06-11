//Block 23: Puppy Bowl 

/*

    Requirements:
    
    * GitHub Project
        - Detailed planning tickets with task descriptions for each one
        - Demonstration that each team member made some contribution on the planning of tickets.
        - Each student in the pair must have at least one commit towards the final result, in separate branches

        - A Github repository containing all relevant code for the project
        - Updated Github repository with new commits


    * HTML Front-end Requirements   
        - A full HTML document with two div's in which to dynamically render content
        - One div as a new Puppy Bowl player form input
        - One div in which to render all current Puppy Bowl participants 


    * CSS Front-end Requirements
        - Form is styled and easy to use
        - All Puppy Bowl players are rendered on card elements with their information

    * JavaScript Requirements
        - Use the DOM to generate and manipulate HTML and styles according to the requirements
        - Use functions to isolate and re-use code
        - Use ES6 modules to export and import methods and properties
        - Demonstrates the use of fetch, async, and await to leverage CRUD against a REST API to perform common functions of a website

    * Functionality Requirements
        - Fetching and rendering all puppy players in the browser
        - Viewing a single puppy player and their details
        - Remove a puppy from the roster

*/

//get div's from html, assigning them a variable
const playerContainer = document.getElementById("all-players-container");

const cohortName = "2302-ACC-CT-WEB-PT-B";  //our cohort, assigned to a variable

//assign the api to a variable
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;
/**
 * It fetches all players from the API and returns them
 * @returns An array of objects.
 */
const fetchAllPlayers = async () => {
    try {

    } catch (err) {
        console.error('Uh oh, trouble fetching players!', err);
    }
};

const fetchSinglePlayer = async (playerId) => {
    try {

    } catch (err) {
        console.error(`Oh no, trouble fetching player #${playerId}!`, err);
    }
};

//add new player
const addNewPlayer = async () =>{
    try {
        const response = await fetch ("https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-CT-WEB-PT/player" , {  //maybe this is wrong
            method: "POST", //creating a post to the server
            headers: {
                "Content-Type": "application/json",  //This tells the server that the request body will be in JSON format
            },
            body: JSON.stringify({
                name: "Roxy",
                breed: "Pit Terrier",
                cohortId: 856,
                id: 8520,
                status: "field",
                teamId: 20,
                updatedAt: "2023-06-10T00:53:59.684Z"
            }), //stringify converts json() to string

        }); //last curly of the fetch api 

       const result = await response.json();
       console.log(result);
    } catch (error) {
        console.log("Error", error);
    }
};

const removePlayer = async (playerId) => {
    try {

    } catch (err) {
        console.error(
            `Whoops, trouble removing player #${playerId} from the roster!`,
            err
        );
    }
};

/**
 * It takes an array of player objects, loops through them, and creates a string of HTML for each
 * player, then adds that string to a larger string of HTML that represents all the players. 
 * 
 * Then it takes that larger string of HTML and adds it to the DOM. 
 * 
 * It also adds event listeners to the buttons in each player card. 
 * 
 * The event listeners are for the "See details" and "Remove from roster" buttons. 
 * 
 * The "See details" button calls the `fetchSinglePlayer` function, which makes a fetch request to the
 * API to get the details for a single player. 
 * 
 * The "Remove from roster" button calls the `removePlayer` function, which makes a fetch request to
 * the API to remove a player from the roster. 
 * 
 * The `fetchSinglePlayer` and `removePlayer` functions are defined in the
 * @param playerList - an array of player objects
 * @returns the playerContainerHTML variable.
 */
const renderAllPlayers = (playerList) => {
    try {
        
    } catch (err) {
        console.error('Uh oh, trouble rendering players!', err);
    }
};


/**
 * It renders a form to the DOM, and when the form is submitted, it adds a new player to the database,
 * fetches all players from the database, and renders them to the DOM.
 */

//Create a Form, and Render a Player, when form is filled out


//Fixing bugs to get POST Request to work and add new player
const playerInfoContainer = document.createElement("div");
playerInfoContainer.classList.add("player-info");

const renderNewPlayerForm = () => {
  try {
    const newPlayerForm = document.getElementById("new-player-form");
    newPlayerForm.innerHTML = `
      <form class="newFormEntry" autocomplete="on">
        <label for="name">Name:</label>
        <input type="text" name="name" id="name" />
        <label for="breed">Breed:</label>
        <input type="text" name="breed" id="breed" />
        <label for="cohortId">Cohort ID:</label>
        <input type="text" name="cohortId" id="cohortId" />
        <label for="createdAt">Created At:</label>
        <input type="text" name="createdAt" id="createdAt" />
        <label for="id">ID:</label>
        <input type="text" name="id" id="id" />
        <label for="imageUrl">Image URL:</label>
        <input type="text" name="imageUrl" id="imageUrl" />
        <label for="status">Status:</label>
        <input type="text" name="status" id="status" />
        <label for="teamId">Team ID:</label>
        <input type="text" name="teamId" id="teamId" />
        <label for="updatedAt">Updated At:</label>
        <input type="text" name="updatedAt" id="updatedAt" />
        <button type="submit" id="submitButton">Submit</button>
      </form>   
    `;

    newPlayerForm.addEventListener("submit", async (event) => {
      event.preventDefault();

      const name = document.getElementById("name").value;
      const breed = document.getElementById("breed").value;
      const cohortId = document.getElementById("cohortId").value;
      const createdAt = document.getElementById("createdAt").value;
      const id = document.getElementById("id").value;
      const imageUrl = document.getElementById("imageUrl").value;
      const status = document.getElementById("status").value;
      const teamId = document.getElementById("teamId").value;
      const updatedAt = document.getElementById("updatedAt").value;

      const player = {
        name,
        breed,
        cohortId,
        createdAt,
        id,
        imageUrl,
        status,
        teamId,
        updatedAt,
      };

      try {
        await addNewPlayer(player);
        console.log("New Player Has Been Added");

        newPlayerForm.reset();

        playerInfoContainer.innerHTML = `
          <p>New Player Has Been Added To The Roster</p>
          <p>Name: ${player.name}</p>
          <p>Breed: ${player.breed}</p>
          <p>CohortId: ${player.cohortId}</p>
          <p>Created At: ${player.createdAt}</p>
          <p>Player Id: ${player.id}</p>
          <p>Image Url: ${player.imageUrl}</p>
          <p>Team Id: ${player.teamId}</p>
          <p>Updated at: ${player.updatedAt}</p>
        `;
      } catch (error) {
        console.log("Error", error);
      }
    });
  } catch (error) {
    console.log("Error", error);
  }
};
 
//initiate the function
const init = async () => {
    try {
       renderNewPlayerForm();
       
    } catch (error) {
        console.log("Error", error);
    }
}

init();





