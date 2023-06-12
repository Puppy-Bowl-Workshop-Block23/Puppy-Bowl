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

const cohortName = "2302-ACC-CT-WEB-PT-B"; // our cohort, assigned to variable

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
        const API_Player = "https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-CT-WEB-PT-B/player/20/";
        const response = await fetch (`${API_PLAYER}/${playerId}`);
        const player = await response.json();
        console.log("player:", single );
        return player;

    } catch (error) {
        console.log("error: ", $,{playerId},! err);
    }
}

const addNewPlayer = async (playerObj) => {
    try {

    } catch (err) {
        console.error('Oops, something went wrong with adding that player!',err);
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

const renderSinglePlayer = async (player) => {
    
    const newPlayer= document.createElement("div")
    newPlayer.id = player.id;
    newPlayer.className = "player card"
    playerContainer.appendChild(newPlayer);

    const newPlayerName = document.createElement("h2");
    newPlayer.appendChild(newPlayerName);
    newPlayerName.innerHTML = player.name
}
/**
 * It renders a form to the DOM, and when the form is submitted, it adds a new player to the database,
 * fetches all players from the database, and renders them to the DOM.
 */
const renderNewPlayerForm = () => {
    try {
        
    } catch (err) {
        console.error('Uh oh, trouble rendering the new player form!', err);
    }
}

const init = async () => {
    try {

       const player = await fetchSinglePlayer();
    renderSinglePlayer(player);

    renderSinglePlayer();

} catch (error) {
    console.log ("Error", error);
}

}


init();