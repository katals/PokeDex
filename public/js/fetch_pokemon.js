export default function fetchPokemon() {
    const URL_POKEMON = "https://pokeapi.co/api/v2/pokemon/", $POKE_BOX = document.getElementById("poke-box"), FRAGMENT = document.createDocumentFragment();
    fetch(URL_POKEMON)
        .then(res => res.json())
        .then((res) => {
        res.results.forEach((pokemon) => {
            const $FIGURE = document.createElement("figure"), $IMG = document.createElement("img"), $FIG_CAPTION = document.createElement("figcaption"), $NAME_POKEMON = document.createTextNode(pokemon.name);
            $IMG.setAttribute("alt", pokemon.name);
            $IMG.setAttribute("title", pokemon.name);
            fetch(pokemon.url)
                .then((res) => res.json())
                .then((res) => {
                $IMG.setAttribute("src", res.sprites.front_default);
                console.log(res);
            });
            $FIG_CAPTION.appendChild($NAME_POKEMON);
            $FIGURE.appendChild($IMG);
            $FIGURE.appendChild($FIG_CAPTION);
            FRAGMENT.appendChild($FIGURE);
        });
        $POKE_BOX.appendChild(FRAGMENT);
    });
}
