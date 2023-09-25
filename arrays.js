/* 
    ToDo -- Solve a problem!
    Problem Statement --> Shopping cart system that adds a new merchandise to the cart.
        - Have a list of merch categories
        - Have a list of merch i.e. properties of the merch
        - Find a merch from the catalogue i.e. serch by name
        - Add a new merch to the catalogue
        - Like a merch
        - Add the merch to cart

        ...

    Use; Arrays, Objects, Functions, loops, conditions
*/

let catalogue = [], categories = [], cart = [], likes = [];

const createNewCategory = (name, description) => {
    let lastIndexOfCategoryArray = categories.length;
    let newCategory = {
        id: lastIndexOfCategoryArray,
        name: name,
        description: description
    };

    //This helps to add the new category into the category list.. read more on Array methods called push();
    // read more on https://javascript.info/array#methods-pop-push-shift-unshift
    categories.push(newCategory);
}

createNewCategory('Hats', 'Bucket hats for ladies');

const createNewMerch = (name, price, extras, category) => {

    //This helps to iterate through an array, and other array functions. e.g. filter, find, forEach, some etc.
    // Readmore here. https://javascript.info/array-methods#searching-in-array
    let ifCategoryExists = categories.find(each => each.id === category);
    if (!ifCategoryExists) alert('The category selected cannot be found!')
    else {
        let newMerch = {name, price, extras, category};
        catalogue.unshift(newMerch)
    }
}

createNewCategory('MK strap bag', 20000, {size: 'small', colour: 'red'}, 3);

const searchForMerchByName = name => catalogue.filter(each => each.name.toLowercase() === name.toLowercase());

// const searchForMerchByName = name => {
//     return catalogue.filter(each => each.name.toLowercase() === name.toLowercase());
// }

// const searchForMerchByName = name => {
//     let existingMerch = catalogue.filter(each => each.name.toLowercase() === name.toLowercase());
//     return existingMerch
// }

const likeMerch = (slug, username) => {
    let foundMerch = searchForMerchByName(slug);
    if (!foundMerch) alert('Mechandise not found!')
    else likes.push({slug, username});
}

likeMerch('mk-strap-bag', 'Mike');


categories = [
    {id: 0, name: 'Bags', description: "Bags for ladies"},
    {id: 1, name: 'Shorts', description: "Shorts for men"},
    {id: 2, name: "TShirts", description: "Tshirts for unisex"},
    {id: 3, name: "Hats", description: 'Bucket hats for ladies'}
]


/* 

    -- Assignments 04/08/2023 --
    1a. 10 differences between an array find and an array filter
    1b. What is a slug
    1c. Write a function to create a slug
    1d. Make sure the function in 1c. accepts a unique slug as a property
    1e. On the createNewMerch function, call the function in 1c. to add a slug to the merch object.

    2a. Write a function to add merch to cart
        2ai. You first want to search for the merch by slug;
        2aii. You want to add the found slug, and your username to the cart list.
        cart = [
                {'username': 'Mike', slug: 'mk-strap-bag'},
                {'username': 'Mike', slug: 'mk-watch-strap'},
                {'username': 'Solomon', slug: ''},
                {'username': 'Oge', slug: ''},
                {'username': 'Dan', slug: ''},
                {'username': 'Eugene', slug: ''},
                ...
            ]
        2aiii. You can be dynamic enough to create a new array per username (Username must be unique). i.e.
            cart = [
                {'username': 'Mike', cartList: ['mk-strap-bag', 'mk-watch-strap']},
                {'username': 'Solomon', cartList: []},
                {'username': 'Oge', cartList: []},
                {'username': 'Dan', cartList: []},
                {'username': 'Eugene', cartList: []},
                ...
            ]
    
    2b.
        i. Write a function to search for an item in a user's cart (based of 2aii);
        ii. Write a fucntion to search for an item by the user's cart (based of 2aiii)

*/
