const playerContainer = document.getElementById('all-players-container');
const newPlayerFormContainer = document.getElementById('new-player-form');

// Add your cohort name to the cohortName variable below, replacing the 'COHORT-NAME' placeholder

//const cohortName = '2302-ACC-CT-WEB-PT-B';

// Use the APIURL variable for fetch requests

//const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;

/**
 * It fetches all players from the API and returns them
 * @returns An array of objects.
 */
const fetchAllPlayers = async () => {
    try {
        //fetch all participants
        const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-CT-WEB-PT/players");
        const result = await response.json();
        return result.data.players;

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

const addNewPlayer = async (playerObj) => {
    try {

    } catch (err) {
        console.error('Oops, something went wrong with adding that player!', err);
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

//RENDER ALL CODE PLUS BUTTONS 

const renderAllPlayers = (playerList) => {
    try {
        const players = fetchAllPlayers();
        players.innerHTML = '';
        playerList.forEach((player) => {

            const puppyElement = document.createElement('div')
            puppyElement.classList.add('player');
            puppyElement.innerHTML = `
            <h2>${player.name}</h2>
            <p> Breed: ${player.breed}</p>
            <p> Status: ${player.status}</p>
            <img src= ${player.imageUrl} width="300" height="600">
            <p> Created on: ${player.createdAt}</p>
            <p> Updated on: ${player.updatedAt}</p>
            <p> Team ID: ${player.teamId}</p>
            <p> Cohort ID: ${player.cohortId}</p>
            <button class="details-button" data-id="${player.id}">See Details</button>
            <button class="delete-button" data-id="${player.id}">Remove from roster</button>
            `;

            playerContainer.appendChild(puppyElement);
        });
    }
    

// IN PROGRESS

            // const detailsButton = puppyElement.querySelector('.details-button');
            // detailsButton.addEventListener('click', async (event) => {

            //   //  const details = document.getElementsByTagName(partyDetailsElement);
            // });



            // const deleteButton = puppyElement.querySelector('.delete-button');
            // deleteButton.addEventListener('click', async (event) => {
            //     await removePlayer(event.player.id);
            //     const deleted = document.getElementById(player.id)
            //     deleted.remove();

            // });




    //     })

    // }

    catch (err) {
        console.error('Uh oh, trouble rendering players!', err);
    }
};

// const renderNewPlayerForm = () => {
//     try {

//     } catch (err) {
//         console.error('Uh oh, trouble rendering the new player form!', err);
//     }
// }

const init = async () => {
    const players = await fetchAllPlayers();
    renderAllPlayers(players);

    renderNewPlayerForm();
}

init();