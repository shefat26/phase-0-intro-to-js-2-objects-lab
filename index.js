// Write your solution in this file!


let employee = {

    name:"John",

    streetAddress: "30 w 15 street",

}


function updateEmployeeWithKeyAndValue(employee, key, value){

         return {
            ...employee,

            [key]: value
         }
}

updateEmployeeWithKeyAndValue()





function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){

       
            employee[key] = value;

            return employee;
         
}

destructivelyUpdateEmployeeWithKeyAndValue()


//

function  deleteFromEmployeeByKey(employee, key){

       
           let {[key]: value, ...newEmployee} = employee;

           return newEmployee
         
}

deleteFromEmployeeByKey()




//

function  destructivelyDeleteFromEmployeeByKey(employee, key){

       
           delete employee[key];

           return employee
         
}

destructivelyDeleteFromEmployeeByKey()











