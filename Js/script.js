function searchresult() {


    // checks voor Leegstaande input en zorgen dat het een string i

    fetchData();
}

async function fetchData() {
    
    try{

        const pokemonName = document.getElementById("pokemon-search").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if (!response.ok){
            throw new Error("Fout in het ophalen van URL");
        }

        if (!pokemonName) {
            throw new Error("Geen naam opgegeven");
        }

        // if (pokemonName != String()) {
        //     throw new Error("is een string")
        // }
        const data = await response.json();
        console.log(data.height);
       
    } catch(error){
        console.log(error);
    }
        
    }