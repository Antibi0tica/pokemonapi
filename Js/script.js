function searchresult() {


    // checks voor Leegstaande input en zorgen dat het een string i

    fetchData();
}

async function fetchData() {
    
    try{


        // Setting up const vars for the input and for fetching data from the API website.
        const pokemonName = document.getElementById("pokemon-search").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        
        var imgSprite = document.getElementById("pokemonSprite");


        if (!response.ok){
            imgSprite.scr = "";
            imgSprite.style.display = "none";
            throw new Error("Fout in het ophalen van URL");
        }

        if (!pokemonName) {
            imgSprite.scr = "";
            imgSprite.style.display = "none";
            throw new Error("Geen naam opgegeven");
        }


        const data = await response.json();

        const sprite = await data.sprites.front_default
        console.log(data);

         if (await sprite) {
            imgSprite.scr = sprite;
            imgSprite.style.display = "block";
        }






       
    } catch(error){
        console.log(error);
    }
        
    }

async function savePokemon() {

}

async function hide_show() {

}