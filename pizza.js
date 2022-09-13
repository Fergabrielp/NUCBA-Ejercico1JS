const Pizzas = [
    {
        id: 1,
        nombre: "Mozzarella",
        ingredientes: ["Salsa de tomate", "Queso mozzarella", "Aceitunas"],
        precio: 500
    },
    {
        id: 2,
        nombre: "Fugazzetta",
        ingredientes: ["Cebolla", "Queso mozzarella"],
        precio: 650
    },
    {
        id: 3,
        nombre: "Napolitana",
        ingredientes: ["Salsa de tomate", "Queso mozzarella", "Tomate", "ajo"],
        precio: 800
    },
    {
        id: 4,
        nombre: "Margarita",
        ingredientes: ["Salsa de tomate", "Queso mozzarella", "Albahaca"],
        precio: 800
    },
    {
        id: 5,
        nombre: "Calabresa",
        ingredientes: ["Salsa de tomate", "Queso mozzarella", "Calabresa"],
        precio: 900
    },
    {
        id: 6,
        nombre: "Rúcula",
        ingredientes: ["Queso mozzarella", "Rúcula", "Tomates cherry", "Olivas negras", "Jamón crudo",],
        precio: 1100
    }
]

//------------------- Pizzas con id impar ----------------------//

const PizzasIdImpar = Pizzas.filter(pizza => pizza.id % 2 !== 0)

PizzasIdImpar.forEach(pizza => console.log(`La pizza ${pizza.nombre} tiene un id impar.`))

//------------------- Pizza menor a $600 ----------------------//

const PizzaMenorA600 = Pizzas.some((pizza) => pizza.precio < 600)

PizzaMenorA600 ? console.log("Si hay alguna pizza que valga menos de $600") : console.log("No hay ninguna pizza que valga menos de $600")

//------------------- Nombre con su precio ----------------------//

Pizzas.forEach((pizza) => console.log(`Pizza ${pizza.nombre} a $${pizza.precio}`))

//------------------- Ingredientes ----------------------//

Pizzas.forEach((pizza) => {
    console.log(`La pizza ${pizza.nombre} lleva los siguientes ingredientes:`)
    pizza.ingredientes.forEach((ingrediente) => {
        console.log(ingrediente)
    })
    console.log("------------------------------------------------")
})

//------------------- Ingredientes tambien se podria hacer de esta forma ----------------------//

Pizzas.forEach((pizza) => console.log(`Pizza: ${pizza.nombre}. Ingredientes: ${pizza.ingredientes}`))


