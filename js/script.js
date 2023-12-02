const searchBtn = document.getElementById('searchBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const resetBtn = document.getElementById('resetBtn');
const app = document.getElementById('app')


let paginaActual = 10

function irPagina (pagina) {
  console.log(pagina)
    const direccion = `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${pagina}`
    getPokemon(direccion)
}

prevBtn.addEventListener ("click", () => { 
  if (paginaActual >= 0) {    
    paginaActual= paginaActual - 10 
    irPagina(paginaActual)}
  })
  nextBtn.addEventListener ("click", () => {
    paginaActual= paginaActual + 10 
    irPagina(paginaActual)})

  resetBtn.addEventListener("click", ()=>irPagina(0))


async function getPokemon (direccion) {
    try {
      const response = await fetch(direccion);
      if (!response.ok) {
        throw new Error('Ha surgido un error');
      }
      const data = await response.json();
      console.log(data)
      const pokemons= data.results
      app.innerHTML= ""
      pokemons.forEach (pokemon => {
        const pintar = `<div class="pokemon"> <p> ${pokemon.name}</p>
        <img src=https://img.pokemondb.net/sprites/home/normal/${pokemon.name}.png> <div>`
        app.innerHTML += pintar
      })
      console.log(pokemons)

      
    } catch (error) {
      console.log('Error al obtener los datos', error);
    }}

console.log(getPokemon("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0"))