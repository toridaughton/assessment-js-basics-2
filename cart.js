///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]





const summedPrice = cart.reduce((acc, curr) => {
    return (curr.price + acc)
},0)

console.log(summedPrice)
//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/


const calcFinalPrice = (cartTotal, couponValue, tax) => {
    return (cartTotal * (1 + tax)) - couponValue
}

console.log(calcFinalPrice(10, 2, .06))
// arguments are what are passed into the parameters 


// my answer during exam (was definitely making it more difficult than it needed to be)
// const cartWithTax = [
//     {
//         name: 'pizza', 
//         price: 9.99,
//         tax: 0.06,
//     }, 
//     {
//         name: 'pasta', 
//         price: 8.99,
//         tax: 0.06
//     }, 
//     {
//         name: 'salad', 
//         price: 7.99,
//         tax: 0.06,
//     }
// ]

// const FoodCoupon = 

// calcFinalPrice = cart.reduce((cartTotal, couponValue, tax) => {
//     return cb(cartTotal= ((summedPrice * tax.tax) - couponValue))
// })

// finalCost = (cartWithTax, FoodCoupon, cb){
    
// }
// console.log(finalCost)

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

// name string
// address string
// phone number string
// notes string
// allergies Array
// hasCreditCard Boolean
// regularCustomer Boolean
// discount array


// my answer during exams:
// const Customers = {address, payment, rating, favorite}

/*
    Now, create a customer object following your own
    guidelines.
*/
// class review:
const customer = {
    name: `Tori Daughton`,
    address: `somewhere`,
    phone: `000000000`,
    notes: `very nice`,
    allergies: [`gluten`],
    hasCreditCard: true,
    regularCustomer: true,
    discounts: [`military`, `student`]
}

// // My answer
// customers = {
//     address: "Grantsville",
//     payment: "credit card",
//     rating: 5,
//     favorite: "pasta",
// }
