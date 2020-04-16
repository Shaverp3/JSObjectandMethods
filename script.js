// const charlotteTheDog = {
//     name: "Charlotte",
//     species: "Dachshund/Bichon",
//     nicknames: ["Princess Shit Head", "PSH", "Westside Weiner", "the Ween", "Poop head"],
//     age: 5,
//     bark: function () {
//         window.alert("RUFF")
//     },
//     beg: function () {

//     },
//     quarrel: function () {
//         console.log("Listen Linda!!!")
//     },
//     favoriteToys: [],
//     play: function (toy) {
//         if (toy === "moosey") {
//            this.favoriteToys.push(toy)
//         } else {
//             if (toy === "coffee no-man"){
//                 this.favoriteToys.push(toy)
//             }
//         }
//     }
// }

// charlotteTheDog.quarrel()
// charlotteTheDog.bark()
// charlotteTheDog.play("moosey")
// charlotteTheDog.play("mousey")
// // console.log(charlotteTheDog.favoriteToys)
// charlotteTheDog.play("coffee no-man")
// console.log(charlotteTheDog.favoriteToys)

// Practice: Fast Food Ordering
// You need to write code to represent the process of ordering food at a fast food joint. Your restaurant is Bob's Burgers, and you have some starter code below. The object will have two behaviors that you must define.

// The object should have a property named orders that is an array. You will need to define this.

// Define a function to represent the behavior of placing an order. It should accept one argument named meal. This argument will be an object. There is starter code provided.


// Define a function to represent the behavior of getting all orders. It should return the order property (hint: this). You will need to define this.
// Each meal object should have three properties: sandwichType, fries (true or false), and drinkSize.

// const restaurant = {
//     name: "Bob's Burgers",
//     orders: [],
//     placeOrder: function (meal) {
//         this.orders.push(meal)
//     }
// }    
     
// const chickenComboMeal = {
//         sandwichType: "Chicken",
//         fries: true,
//         drinkSize: "Medium"
//     }

// const cheeseBurger = {
//         sandwichType: "Cheesburger",
//         fries: false,
//         drinkSize: "Small"
//     }

// const bigBurgerComboMeal = {
//         sandwichType: "Double Cheeseburger",
//         fries: true,
//         drinkSize: "Large"
//     }

// Place an order
// restaurant.placeOrder(bigBurgerComboMeal)
// restaurant.placeOrder(cheeseBurger)
// restaurant.placeOrder(chickenComboMeal)

// console.table(restaurant.orders)
// Invoke the function to return the list of all orders

// Output all orders to the console using console.table()



// You have volunteered your time to a local political candidate, Elizabeth Sanger, who wants to become a US representative in Congress for your district. Unfortunately, the team discovered that you're a software developer, so they have begged you to build an application that lets them track volunteers, and store information about Elizabeth and her campaign.

// Your job is to define the different objects and arrays, their structure, and the corresponding properties for each, to represent the following information about Elizabeth's campaign.

// Her congressional district (you can use yours here)
const congressionalDistrict = "Second"
// Her platform statements for the following issues.
// Taxes
// Jobs
// Infrastructure
// Health care
// Crime and enforcement

const platformStatements = {
    taxes: "Against raising taxes",
    jobs: "Has plan to create jobs",
    infrastructure: "Plan for road construction",
    healthCare: "Universal healthcare",
    crimeEnforcement: "Plan for crime reduction"
}

// URL for donation form
const donationURL = "sanger4congress.com"
// Calendar of events
const calendarOfEvents = {
    date: "mm/dd/yyyy",
    location: "Charleston",
    cost: "$10.00",
    type: "Campaign rally"
}

// Volunteer information
const volunteers = {
    name: " ",
    address: " ",
    email: " ",
    phoneNumber: " ",
    availability: true,
    activityInterest = ["answering phone calls", "taking polls", " going door to door"]
}

// Biography
const biography = {
    name: "Elizabeth Sanger",
    homeTown: "Charleston, WV",
    party: "Democrat",
    experience: "former mayor"
}

// Image gallery
const imageGallery = ["https://i2.wp.com/digital-photography-school.com/wp-content/uploads/2016/02/Headshot-Photography-London-1052.jpeg?fit=750%2C500&ssl=1", "https://fritzphoto.com/wp-content/uploads/2013/03/21-5642-pp_gallery/Family-Portrait-Photographer-Portland-8%28pp_w1200_h830%29.jpg", "https://www.chatelaine.com/wp-content/uploads/2018/11/Royal-family-portrait-Prince-Charles-70-1-e1542132917619.jpg"]

// Picture of family
// Picture of constituents


// Mission statement
const missionStatement = " "
// URL for registering to vote
const voteURL = "https://vote2020.com"

// Advanced Challenge
// Advanced challanges are intended to be difficult and the expectation is for you to use your imagination, and research skills to make your own decisions about which code should be written.

// After you have defined all the objects for representing the data about Elizabeth's campaign, write a corresponding function for each one whose purpose is to change the state of the object. Then use your functions to modify the existing data.

// Things to think about.

// Am I modifying an array? Then the function argument should be added to the target array with the push() method.
// Am I modifying an object? Then I should pass both the key name to be modified, and its corresponding value.
// This challenge is for you to practice writing functions, so the more you can write, the better. It helps make neural connections in your brain at this point since you're still building your software vocabulary.

// Example:

function addToImageGallery (newImage) {
    
}

function changeBiography (newBiography) {
    ...
}

function changePlatform (topic, newPlatformStatement) {
    ...
}

