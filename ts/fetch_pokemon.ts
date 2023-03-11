import { listPokemon, pokemon } from "./interface/interface"

export default function fetchPokemon(): void {
    const URL_POKEMON: string = "https://pokeapi.co/api/v2/pokemon/",
        $POKE_BOX: HTMLElement = <HTMLElement> document.getElementById("poke-box"),
        FRAGMENT: Node = document.createDocumentFragment();

    fetch(URL_POKEMON)
        .then(res => res.json())
        .then((res: listPokemon) => {
            res.results.forEach((pokemon) => {
                const $FIGURE: HTMLElement = document.createElement("figure"),
                    $IMG: HTMLElement = document.createElement("img"),
                    $FIG_CAPTION: HTMLElement = document.createElement("figcaption"),
                    $NAME_POKEMON: Node = document.createTextNode(pokemon.name);

                $IMG.setAttribute("alt", pokemon.name);
                $IMG.setAttribute("title", pokemon.name);

                fetch(pokemon.url)
                    .then((res) => res.json())
                    .then((res: pokemon) => {
                        $IMG.setAttribute("src", res.sprites.front_default);
                        console.log(res)
                    });

                $FIG_CAPTION.appendChild($NAME_POKEMON);
                $FIGURE.appendChild($IMG);
                $FIGURE.appendChild($FIG_CAPTION);
                FRAGMENT.appendChild($FIGURE)
            });
            
            $POKE_BOX.appendChild(FRAGMENT);
        });
}
