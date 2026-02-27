// bool to not let it run whenever you click search again and flood the screen.
let isSearching = false;

function searchresult() {




    if (!isSearching) {
        fetchData()
    }
    
}

async function fetchData() {

    isSearching = true;
    
    // References   
    const pokemonName = document.getElementById("pokemon-search").value.toLowerCase();
    const typeDisplay = document.getElementById("type-display");
    const statDisplay = document.getElementById("stats");
    const weightDisplay = document.getElementById("weight-display");
    const heightDisplay = document.getElementById("height-display");
    
    // Clear types and stats immediately
    while(typeDisplay.firstChild) {
        typeDisplay.removeChild(typeDisplay.lastChild);
    }

    while(statDisplay.firstChild) {
        statDisplay.removeChild(statDisplay.lastChild);
    }

    while(weightDisplay.firstChild) {
        weightDisplay.removeChild(weightDisplay.lastChild);
    }

    while(heightDisplay.firstChild) {
        heightDisplay.removeChild(heightDisplay.lastChild);
    }
    
    try{


        
        // Setting up const vars for the input and for fetching data from the API website.
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        var imgSprite = document.getElementById("pokemonSprite");
        const pokemonDiv = document.getElementById("pokemon-block");
        const data = await response.json();
        


        // Making error checks if there is any complications

        if (!response.ok){
            pokemonDiv.style.display = "none";
            imgSprite.src = "";
            imgSprite.style.display = "none";
            alert("Error in retrieving data from the API");
            throw new Error("Error in retrieving data from the API");
        }

        if (!pokemonName) {
            pokemonDiv.style.display = "none";
            imgSprite.src = "";
            imgSprite.style.display = "none";
            alert("No name was assigned");
            throw new Error("No name was assigned");
        }


        // For loops for the types and stats

        for (const type of data.types) {
            console.log(type.type.name);
            const paragraph = document.createElement("p");
            paragraph.textContent = type.type.name;
            typeDisplay.appendChild(paragraph)
        }
        
        for (stats of data.stats) {
            console.log(stats);
            const paragraph = document.createElement("p");
            paragraph.textContent = stats.stat.name + ": " + stats.base_stat;
            statDisplay.appendChild(paragraph); 
        }



        // assigning weight and height to variables and creating paragraphs to assign them to the div.

        const weight = await data.weight;

            if (await weight) {
                const paragraph = document.createElement("p");
                paragraph.textContent = weight;
                weightDisplay.appendChild(paragraph)
            }

        const height = await data.height;

            if (await weight) {
                const paragraph = document.createElement("p");
                paragraph.textContent = height;
                heightDisplay.appendChild(paragraph)
            }


        
        // sprite / photo of the pokemon 
        const sprite = await data.sprites.front_default;



        // Changing the holder to the img and making sure the display is block to show.
         if (await sprite) {
            document.getElementById("pokemon-name-holder").innerHTML = data.name;

            pokemonDiv.style.display = "block";
            imgSprite.src = sprite;
            imgSprite.style.display = "block";

        }

        // error catching and making sure you can immediately can search another pokemon again.
        // with this it also disables the pokemon div to make sure nothing is showing up
       
    } catch(error){
        console.log(error);
        isSearching = false;
        document.getElementById("pokemon-block").style.display = "none";
        throw new Error("Error in retrieving data from the API");
        
    }

    isSearching = false;
        
    }

    // function to show the whole DIV and hide whenever needed
async function hide_show() {

    

    if (pokemonDiv.style.display === "none") {
        pokemonDiv.style.display = "block";
    } else {
        pokemonDiv.style.display = "none";
    }

}


    // Favourite function | DROPPED
// async function savePokemon() {

//     const localStorage = JSON.parse(data);
//     console.log(localStorage);
//     }