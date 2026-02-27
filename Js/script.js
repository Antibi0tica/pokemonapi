let isSearching = false;

function searchresult() {


    // checks voor Leegstaande input en zorgen dat het een string i

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
    
    // Clear types and stats immediately
    while(typeDisplay.firstChild) {
        typeDisplay.removeChild(typeDisplay.lastChild);
    }

    while(statDisplay.firstChild) {
        statDisplay.removeChild(statDisplay.lastChild);
    }
    
    try{


        
        // Setting up const vars for the input and for fetching data from the API website.
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        var imgSprite = document.getElementById("pokemonSprite");
        const pokemonDiv = document.getElementById("pokemon-block");
        const data = await response.json();
        

        if (!response.ok){
            pokemonDiv.style.display = "none";
            imgSprite.src = "";
            imgSprite.style.display = "none";
            throw new Error("Fout in het ophalen van URL");
        }

        if (!pokemonName) {
            pokemonDiv.style.display = "none";
            imgSprite.src = "";
            imgSprite.style.display = "none";
            throw new Error("Geen naam opgegeven");
        }


        

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

        const sprite = await data.sprites.front_default;
        console.log(data);

         if (await sprite) {
            document.getElementById("pokemon-name-holder").innerHTML = data.name;

            pokemonDiv.style.display = "block";
            imgSprite.src = sprite;
            imgSprite.style.display = "block";

        }
       
    } catch(error){
        console.log(error);
        isSearching = false;
        document.getElementById("pokemon-block").style.display = "none";
        throw new Error("Fout in het ophalen van URL");
        
    }

    isSearching = false;
        
    }


async function savePokemon() {

    const localStorage = JSON.parse(data);
    console.log(localStorage);
    }


async function hide_show() {

    

    if (pokemonDiv.style.display === "none") {
        pokemonDiv.style.display = "block";
    } else {
        pokemonDiv.style.display = "none";
    }

}