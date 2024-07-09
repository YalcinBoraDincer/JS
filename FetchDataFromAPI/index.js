




async function fetchData(){
   

    try {
        const pokemonName=document.getElementById("pokemonName").value.toLowerCase();
        const reponse=await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if (!reponse.ok) {
            throw new Error("Could not fetch resource");
        }
        const data =await reponse.json();
        const pokemonSprite=data.sprites.front_default;
        const imageElement=document.getElementById("pokemonSprite");
        imageElement.src=pokemonSprite;
        imageElement.style.display="block";
        
        
    } catch (error) {
        console.log(error);
        
    }

}