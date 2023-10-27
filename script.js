const empleados = [
    { name: "Luis", email: "Luis@gmail.com" },
    { name: "Ana", email: "Ana@gmail.com" },
    { name: "Andrea", email: "Andrea@gmail.com" },
  ];
  
const empleadaAna = empleados[1]
  

console.log(empleadaAna);
  

const correoLuis = empleados[0];

console.log(`mail: ${correoLuis.email}`);



const pokemon = {
    name: "Bulbasaur",
    type: "grass",
    ability: {
        "primary": "Overgrow",
        "hidden": "Chlorophyll"
    },
    stats: {
        hp: 45,
        attack: 49,
        deffense: 59,
        speed: 45
    },
    moves: [
        "Growl", "Tackle", "Vine Whip", "Razor Leaf"
    ]
}

pokemon.nombre = pokemon.name;


const nombrePoke = pokemon.nombre;
console.log(nombrePoke);


const tipoPoke = pokemon.type;
console.log(tipoPoke);

const movimientoPlacaje = pokemon.moves[1];
console.log(movimientoPlacaje);




const pikachu = {
    name: "Pikachu",
    type: "electric",
    ability: {
        "primary": "Static",
        "hidden": "Lightning rod"
    },
    stats: {
        hp: 35,
        attack: 55,
        deffense: 40,
        speed: 90
    },
    moves: [
        "Quick Attack", "Volt Tackle", "Iron Tail", "Thunderbolt"
    ],
}



const pokemonFusionado = {...bulbasaur,...pikachu};



sumAllNumbers(6, 8, 2, 3, 1); //20
sumAllNumbers(11, 3, 12); //26 

function sumAllNumbers(...allNumbers) {
    let result = 0;
    for (let i = 0; i < allNumbers.length; i++) {
        result += allNumbers[i];
        console.log(allNumbers[i]);
    }
    console.log("Resultado de la suma" + result);
}


addOnlyNums(1, 'perro', 2, 4); //7

function addOnlyNums(...allArray) {
    const allArrayTemp = [...allArray];
    let filtered;
    let result = 0;
    filtered = allArrayTemp.filter(Number.isInteger);
    console.log(filtered);
    for (let i = 0; i < filtered.length; i++) {
        console.log(filtered[i]);
        result += filtered[i];
    }
    console.log(result)
}


countTheArgs('gato', 'perro'); 
countTheArgs('gato', 'perro', 'pollo', 'oso'); 


function countTheArgs(...args) {
    return args.length;
}


console.log(countTheArgs('gato', 'perro')); 
console.log(countTheArgs('gato', 'perro', 'pollo', 'oso')); 

