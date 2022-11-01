import { useState, useEffect } from 'react'
import Pet from './Pet'


const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];


const SearchParams = () => {
    // const location = "Ghar, Bettiah";
    const [location, setLocation] = useState("");
    const [animal, setAnimal] = useState("");

    const [breed, setBreed] = useState("");
    const breeds = [];

    const [pets, setPets] = useState([]);

    useEffect(() => {
        requestPets();
    }, []);

    async function requestPets() {
        const res = await fetch(
            `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
        )
        const json = await res.json();
        setPets(json.pets);
    }
    return (
        <div className="search-params">
            <form >
                <label htmlFor="location">
                    Location
                    <input id="location" value={location} placeholder="Location"
                        onChange={(e) => setLocation(e.target.value)}
                    />
                </label>
                <label htmlFor="animal">
                    Animal
                    <select id="animal" value={animal}
                        onChange={(e) => {
                            setAnimal(e.target.value);
                            setBreed("");
                        }}
                        onBlur={(e) => {
                            setAnimal(e.target.value);
                            setBreed("");
                        }
                        }
                    >
                        <option />
                        {ANIMALS.map((animal) => (
                            <option value={animal} key={animal}>
                                {animal}
                            </option>
                        ))}

                    </select>
                </label>
                <label htmlFor="breed">
                    Breed
                    <select id="breed" value={breed}
                        onChange={(e) => {
                            setBreed(e.target.value);
                        }}
                        onBlur={(e) => {
                            setBreed(e.target.value);
                        }
                        }
                    >
                        <option />
                        {breeds.map((breed) => (
                            <option value={breed} key={breed}>
                                {breed}
                            </option>
                        ))}

                    </select>
                </label>
                <button>Submit</button>
            </form>
            {
                pets.map(pet => (
                    <Pet name={pet.name} animal={pet.animal} breed={pet.breed} key={pet.id} />
                ))
            }
        </div>
    );
};

export default SearchParams;