const freelancers = [
    {name: "Bob", occupation: "Landscaper", price: 30},
    {name: "Sara", occupation: "Tuitor", price: 50},
    {name: "John", occupation: "Chef", price: 80}
]

const initial = (arr) => {
    for (let i = 0; i < arr.length; i++){
        const name = document.createElement('p');
        name.innerHTML= freelancers[i].name;
        document.getElementById("name").appendChild(name)
    }
    for (let i = 0; i < arr.length; i++){
        const occupation = document.createElement('p');
        occupation.innerHTML= freelancers[i].occupation;
        document.getElementById("occupation").appendChild(occupation)
    }
    for (let i = 0; i < arr.length; i++){
        const price = document.createElement('p');
        price.innerHTML= freelancers[i].price;
        document.getElementById("price").appendChild(price)
    }
    let total = 0;
    let output;
    for (let i = 0; i < arr.length; i++){
        total += arr[i].price
    }
    output = `The average starting price is $${(total / arr.length).toFixed(2)}`
    const avgPrice = document.createElement('p');
    avgPrice.innerHTML = output;
    document.getElementById('averagePrice').appendChild(avgPrice)
}

initial(freelancers)

// New Freelancer
const newFreelancer = () => {
    const newFreeName = prompt("Enter a name");
    const newFreeOccupation = prompt("Enter an occupation");
    const newFreePrice = Number(prompt("Enter a starting price"))
    const free = {
        name: newFreeName,
        occupation: newFreeOccupation,
        price: newFreePrice
    }
    freelancers.push(free)
}
// NAMES

const displayNames = (arr) => {
    removeChildren(document.getElementById("name"))
    for (let i = 0; i < arr.length; i++){
        nameGenerator(arr[i])
    }
}

const nameGenerator = (obj) => {
    const newName = document.createElement('p');
    newName.innerHTML = obj.name;
    document.getElementById("name").appendChild(newName)
}

// displayNames(freelancers)

// Occupations

const displayOccupation = (arr) => {
    removeChildren(document.getElementById("occupation"))
    for (let i = 0; i < arr.length; i++){
        occupationGenerator(arr[i])
    }
}

const occupationGenerator = (obj) => {
    const newOccupation = document.createElement('p');
    newOccupation.innerHTML = obj.occupation;
    document.getElementById('occupation').appendChild(newOccupation)
}


// displayOccupation(freelancers)

// Prices

const displayPrice = (arr) => {
    removeChildren(document.getElementById("price"))
    for (let i = 0; i < arr.length; i++){
        priceGenerator(arr[i])
    }
}

const priceGenerator = (obj) => {
    const newPrice = document.createElement('p');
    newPrice.innerHTML = obj.price;
    document.getElementById('price').appendChild(newPrice)
}

// displayPrice(freelancers)

// Average Price

const calculateAveragePrice = (arr) => {
    removeChildren(document.getElementById("averagePrice"))
    let total = 0;
    let output;
    for (let i = 0; i < arr.length; i++){
        total += arr[i].price
    }
    output = `The average starting price is $${(total / arr.length).toFixed(2)}`
    const avgPrice = document.createElement('p');
    avgPrice.innerHTML = output;
    document.getElementById('averagePrice').appendChild(avgPrice)
}

// const avgPrice = document.createElement('p');
// avgPrice.innerHTML = calculateAveragePrice(freelancers);
// document.getElementById('averagePrice').appendChild(avgPrice)

const removeChildren = (parent) => {
    while (parent.firstChild){
        parent.removeChild(parent.firstChild)
    }
}

const runCode = () => {
    newFreelancer();
    displayNames(freelancers);
    displayOccupation(freelancers);
    displayPrice(freelancers)
    calculateAveragePrice(freelancers)
}

document.getElementById('submit').addEventListener('click', runCode)