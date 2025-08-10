// const jack = require('./jack');
// const apex = require('./apex');
// const amanada = require('./amanada');

// const allEmployee = [jack, apex, amanada];
// // console.log(allEmployee);
// console.log(apex);

// console.log(__filename);
// console.log(__dirname);

const jack = require('./jack');
const amanada = require('./amanada');
const apex = require('./apex');
const fs = require('./fs');

const employeeDetail = [jack, amanada, apex, fs]

for (employee of employeeDetail){
    console.log(employee);    
}

console.log(amanada);

// console.log(employeeDetail);
