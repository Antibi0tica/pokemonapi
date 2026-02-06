function searchresult() {
    fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(response => {
        if (!response.ok) {
            throw new Error("Error")
        } 

        return response.json();
    })
    .then(data => console.log(data.name))
    .catch(error => console.error(error));
}

