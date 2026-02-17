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
        const pokemonDiv = document.getElementById("pokemon-block");

        


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


        const data = await response.json();

        for (const type of data.types) {
            console.log(type.type.name);
        }


        // stat list
        const statHp = document.getElementById("pokemon-hp");
        const statAtk = document.getElementById("pokemon-atk");
        const statDef = document.getElementById("pokemon-def");
        const statSAtk = document.getElementById("pokemon-special-atk");
        const statSDef = document.getElementById("pokemon-special-def");
        const statSpd = document.getElementById("pokemon-spd");

        // stat data

        
        for (stats of data.stats) {
    
            console.log(stats.stat.name)
            console.log(stats.base_stat);
        }
        const hp = await data.stats[0].base_stat;
        const atk = await data.stats[1].base_stat;
        const def = await data.stats[2].base_stat;
        const specAtk = await data.stats[3].base_stat;
        const specDef = await data.stats[4].base_stat;
        const spd = await data.stats[5].base_stat;

        const sprite = await data.sprites.front_default;
        console.log(data);

         if (await sprite) {

            document.getElementById("pokemon-name-holder").innerHTML = data.name;

            // statHp.innerHTML = hp;
            // statAtk.innerHTML = atk;
            // statDef.innerHTML = def;
            // statSAtk.innerHTML = specAtk;
            // statSDef.innerHTML = specDef;
            // statSpd.innerHTML = spd;

            pokemonDiv.style.display = "block";
            imgSprite.src = sprite;
            imgSprite.style.display = "block";


        }






       
    } catch(error){
        console.log(error);
    }
        
    }

async function savePokemon() {

}

async function hide_show() {

    

    if (pokemonDiv.style.display === "none") {
        pokemonDiv.style.display = "block";
    } else {
        pokemonDiv.style.display = "none";
    }

}