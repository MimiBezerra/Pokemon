const pokemonName = document.querySelector(".pokemon__name");
const pokemonNumber = document.querySelector(".pokemon__number");
const pokemonImage = document.querySelector(".pokemon__image");
const form = document.querySelector(".form");
const input = document.querySelector(".input__search");
const buttonPrev = document.querySelector(".btn-prev");
const buttonNext = document.querySelector(".btn-next");
let contadora;



  
    







//conectar com a API
const fetchPokemon = async (pokemon) => {

    const APIResponse = await fetch(` https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    if (APIResponse.status === 200){
       const data = await APIResponse.json();
       return data;

   }   
    
}; 

//renderizar os dados da API

const renderPokemon = async (pokemon)=>{
     
      pokemonName.textContent = "...carregando";
      pokemonNumber.textContent = "";
      pokemonImage.src= "https://media1.giphy.com/media/QxqCnqU5vnZSjgvXxJ/200w.gif?cid=6c09b952411nx3tfbdo57cihxbmcwealee3qzgd12qojw0nb&ep=v1_gifs_search&rid=200w.gif&ct=g";
      
     const data = await fetchPokemon(pokemon);length

     if (data) {
      pokemonNumber.innerHTML = data.id;
      pokemonName.innerHTML = data.name
      pokemonImage.src = data['sprites']['versions']['generation-v']
      ['black-white']['animated']['front_default'];
      input.value = "";

      contadora = data.id;
    
    
    
       console.log(data);
    } else {
      
      pokemonName.textContent = "Não encontrado";
      pokemonImage.src = "https://media.tenor.com/vjufSsUepeoAAAAM/isso-n%C3%A3o-existe-cinthia-ferreira.gif"
      
     }

 

};










    form.addEventListener("submit", (event)=>{
     event.preventDefault();

     renderPokemon(input.value.toLowerCase());
    });
       buttonPrev.addEventListener("click",() => {
      
        if( contadora > 1) {
            contadora += 1;
            renderPokemon(contadora)    
        }
    });

    buttonNext.addEventListener("click", () => {
      contadora += 1;
      renderPokemon(contadora)
    });

renderPokemon(1)