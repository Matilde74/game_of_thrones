import React, {useState} from 'react';
//import CharactersTable from "../../components/PokemonTable/PokemonTable";//
import CharactersCardsGrid from "../../components/CharactersCardsGrid/CharactersCardsGrid";
import CharacterTable from "../../components/CharacterTable/CharacterTable";
import FilterButton from "../../components/FilterButton/FilterButton";
import CharactersListData from "../../assets/data/characters.json";

function Characters() {
    const [displayGrid, setDisplayGrid] = useState("true");
    const [filter, setFilter] = useState('Tutti');

    const filteringMap = {
        Tutti: () => true,
        Stark: characters => characters.family === "House Stark",
        Targaryen: characters => characters.family === "House Targaryen",
        Lannister: characters => characters.family === "House Lannister",
        Baratheon: characters => characters.family === "House Baratheon",
        Greyjoy: characters => characters.family === "House Greyjoy",
        Martell: characters => characters.family === "House Martell",
        Tyrell: characters => characters.family === "House Tyrell"
    }

    const filterName = Object.keys(filteringMap);
    const filteredCharacters = CharactersListData.filter(filteringMap[filter]);


    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col">

                    <div >

                        <div
                             onClick={() => setDisplayGrid(true)}>
                            Grid
                        </div>

                        <div
                             onClick={() => setDisplayGrid(false)}>
                            Table
                        </div>

                    </div> {/*l'importante è che i due elementi che contiene abbiano valori di stile opposti*/}


                </div>
            </div>
            <div className="row">
                <div className="Button-wrapper">
                    {filterName.map (filterName => {
                            return (
                                <FilterButton
                                    key={filterName}
                                    name={filterName}
                                    pressed={filterName === filter}
                                    setFilter={setFilter}
                                />
                            )
                        }
                    )}
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col">
                    {displayGrid ?
                        <CharactersCardsGrid
                            CharactersList={filteredCharacters}
                            col={{xs:1, sm:2, md:3, lg:4, xl:5}}
                        /> :
                        <CharacterTable
                            CharactersList = {filteredCharacters}
                        />

                    }
                </div>
            </div>

        </div>

    )

}

export default Characters;