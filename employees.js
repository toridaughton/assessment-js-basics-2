////////////////////////////////////////////////////
///////////////////EMPLOYEES.JS/////////////////////
////////////////////////////////////////////////////
/*
    In this file, you'll be writing classes to 
    store information about restaurant employees.
*/

//////////////////PROBLEM 1////////////////////
/*  
    Create a new class called `Employee`.
    Make sure to call your constructor, and 
    require these 2 parameters: name, shifts.

    Create a method on the class called 
    `getSchedule` that prints a string:
    [NAME] works on [SHIFTS]
    Where NAME and SHIFTS reference the values
    stored on the object.
*/

class Employee {
   constructor(name1, shifts){
    this.name1 = name1;
    this.shifts = shifts;
   }
   getsSchedule(){
       console.log(`${this.name1} works on ${this.shifts}`)
   }
}

// my code (the *method* should have been in the class):
//  const getsSchedule = (name, shift) =>{
//  return `${name1} works on ${shifts}`
// }


/*
    Create a new instance of your class.
    Save it to a variable called `empOne`.

    You can use this sample data or make
    up your own:
    name: Jess
    shifts: weekday mornings, weekday afternoons
*/

const empOne = new Employee ("Jess", [`weekday mornings`, `weekday afternoons`])
console.log(empOne)
// shifts could just be a string but an array would be easier to edit in the future

/*
    Call the `getSchedule` method on the
    `empOne` object.
*/

// in class:
empOne.getsSchedule()


// getsSchedule(empOne)


/*
    Make a copy of the empOne object
    using the spread operator.
    Save it to a variable called `empTwo`.

    Change the name of `empTwo` to 'Nick'.

    Hint: you can do this inline with the 
    spread operator or reassign it using 
    dot or bracket notation.
*/

const empTwo = {...empOne, name2: "Nick"}

console.log(empTwo)

// empTwo.name = "Nick"

//////////////////PROBLEM 2////////////////////
/*  
    Write a class called Manager that *extends* 
    the Employee class. In the constructor, 
    make sure you require all of the parameters 
    from the Employee class as well as 1 
    new one: employees, which will be an array of 
    employees that report to this manager. 
    (Hint: don't forget to call the super function)

    Create a method called `getEmployees` that
    console.logs a string:
    [NAME] manages [EMPLOYEES]
    Where NAME and EMPLOYEES reference the values
    stored on the object.

    Create a second method called `addEmployee`
    that takes in one argument, `emp`, which
    should be a string of an employee name.
    The function should push the name into 
    the employees array. 
*/

// did not do... class review:
class Manager extends Employee {
    constructor(name1, shifts, employees) {
        super(name1, shifts)
        this.employees = employees
    }
    getEmployees(){
      console.log(`${this.name1} manages ${this.employees}`)
    }
    addEmployee(emp){
        this.employees.push(emp)
    }
}



/*
    Create a new instance of your class.
    Save it to a variable called `manager`.

    You can use this sample data or make
    up your own:
    name: Winston
    shifts: weekday mornings, weekday afternoons
    employees: Cece and Schmidt
*/
// did not do... class review:
const manager = new Manager(`Winston`, [`weekday mornings`, `weekday afternoons`], [`Cece`, `Schmidt`])


/*
    Call the `getEmployees` method on the
    `manager` object.  
*/

// did not do... class review:
manager.getEmployees()

/*
    Call the `addEmployee` method on the 
    `manager` object passing in the string 
    'Coach' or whatever name you'd like.
*/

// did not do... class review:
manager.addEmployee(`Coach`)

/*
    Call the `getEmployees` method on the
    `manager` object again to confirm 
    that an employee was added.
*/

// did not do... class review:
manager.getEmployees()