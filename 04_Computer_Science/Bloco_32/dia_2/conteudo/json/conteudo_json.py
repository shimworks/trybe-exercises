import json


with open("pokemons.json") as file:
    pokemons = json.load(file)["results"]


grass_type_pokemmons = [
    pokemon for pokemon in pokemons if "Grass" in pokemon["type"]
]

with open("grass_pokemons.json", "w") as file:
    json_to_write = json.dumps(grass_type_pokemmons)
    file.write(json_to_write)
