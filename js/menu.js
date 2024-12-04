// store data about menu items in array
const menuData=[
    {
        "name": "The Crouching Tiger",
        "description": "seared salmon, shrimp tempura, cucumber, avocado, hot s....",
        "price": "$12.00",
        "image": "images/tiger.png"
    },
    {
        "name": "Toro Toro Poke",
        "description": "seared salmon, kanikama, avocado, cucumber, edamame, wa....",
        "price": "$17.00",
        "image": "images/toropoke.png"

    },
    {
        "name": "Miso Soup",
        "description": "shiro miso, tofu, wakame, green onion",
        "price": "$2.50",
        "image": "images/miso.png"

    },
    {
        "name": "Tasting Box for Two",
        "description": "6pc Salmon Sashimi 3pc Aburi Syake Oshi 3pc Aburi Magur....",
        "price": "$75.00",
        "image": "images/box2.png"

    },
    {
        "name": "Classic Poke",
        "description": "kanikama, avocado, cucumber, edamame, wakame, oshinko, ....",
        "price": "$17.00",
        "image": "images/classicpoke.png"


    },
    {
        "name": "Dragon Roll",
        "description": "shrimp tempura, avocado, cucumber, eel sauce, spicy mayo....",
        "price": "$15.00",
        "image": "images/dragon.png"

    },
    {
        "name": "Spicy Tuna Roll",
        "description": "spicy tuna, cucumber, avocado, spicy mayo, sesame seeds....",
        "price": "$13.00",
        "image": "images/spicytuna.png"

    },
    {
        "name": "Rainbow Roll",
        "description": "crab, avocado, cucumber, topped with assorted fish....",
        "price": "$18.00",
        "image": "images/rainbow.png"

    },
    {
        "name": "Salmon Nigiri",
        "description": "fresh salmon over sushi rice....",
        "price": "$10.00",
        "image": "images/salmonNigiri.png"

    },
    {
        "name": "Tuna Sashimi",
        "description": "thinly sliced fresh tuna....",
        "price": "$12.00",
        "image": "images/tunasashimi.png"

    },
    {
        "name": "Vegetable Tempura",
        "description": "assorted vegetables lightly battered and fried....",
        "price": "$8.00",
        "image": "images/vegetable.png"

    },
    {
        "name": "Chicken Teriyaki",
        "description": "grilled chicken with teriyaki sauce, served with rice and vegetables....",
        "price": "$14.00",
        "image": "images/chicken.png"


    },
    {
        "name": "Beef Udon",
        "description": "thick udon noodles with beef, vegetables, and broth....",
        "price": "$13.00",
        "image": "images/beefudon.png"

    },
    {
        "name": "Shrimp Tempura",
        "description": "lightly battered and fried shrimp....",
        "price": "$11.00",
        "image": "images/shirmp.png"

    },
    {
        "name": "Green Tea Ice Cream",
        "description": "creamy green tea flavored ice cream....",
        "price": "$5.00",
        "image": "images/ice.png"

    }
];

localStorage.setItem('menuData',JSON.stringify(menuData)); // save menu data into localStorage

const storedData=JSON.parse(localStorage.getItem('menuData')); // retrieved data from local storage

const menuContainer=document.getElementById("menu");

// use loop to to create new element div and showing each element
storedData.forEach(item => {
    const menuItem = document.createElement("div");
    menuItem.className="card";
    menuItem.innerHTML=`
    <img src="${item.image}" >
    <div>
    <h3 class="name-item">${item.name}</h3>
    <p>${item.description}</p>
    <p class="card price">${item.price}</p>
    </div>
        <button class="add-button" value="add">
        <i class="fas fa-plus add-icon"></i>
        </button>
    `;
    menuContainer.appendChild(menuItem);
    
});
// function for button when users click on it and it will show an announcement for them that they are successful adding them in order card
function addButton(event){
    const button=event.target;
    const card = button.closest('.card'); 

    // retrieve name and price 
    const name = card.querySelector('.name-item').textContent; 
    const price = card.querySelector('.price').textContent; 
    // retrieve array order from local storage
    let order = JSON.parse(localStorage.getItem('order')) || [];
    // add to order cart
    order.push({ name, price });
  
    //update again data to local storage
    localStorage.setItem('order', JSON.stringify(order));
  
    // show message for users that successfully
    alert(`${name} added successfully!`);
  }

// select all button and apply loop for each button when users click it 
document.querySelectorAll('.add-button').forEach(function(button){
    button.addEventListener("click",addButton);
})

function handleButton(){
window.location.href="order.html";
}
document.getElementById("button").addEventListener("click",handleButton);

