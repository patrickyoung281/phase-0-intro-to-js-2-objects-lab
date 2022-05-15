

const employee = {
    name: "Patrick",
    streetAddress: "554 W 148th Street",
};

function updateEmployeeWithKeyAndValue (employee, key, value) {
    let newObj = {...employee}
    newObj[key] = value;
    return newObj;
};

function destructivelyUpdateEmployeeWithKeyAndValue (employee, key, value) {
    employee[key] = value;
    return employee;
};

function deleteFromEmployeeByKey (employee, key) {
    let newObj = {...employee}
    delete newObj[key];
    return newObj;
};

function destructivelyDeleteFromEmployeeByKey (employee, key) {
    delete employee[key];
    return employee;
};


























/*

const employee = {
    name: "Patrick",
    streetAddress: "554 W 148th Street",
};

function updateEmployeeWithKeyAndValue (employee, key, value) {
    let copyEmployee = {...employee};
    copyEmployee[key] = value;
    return copyEmployee;
};

function destructivelyUpdateEmployeeWithKeyAndValue (employee, key, value) {
    employee[key] = value;
    return employee;
};

function deleteFromEmployeeByKey (employee, key, value) {
    let copyEmployee = {...employee};
    delete copyEmployee[key];
    return copyEmployee;
};

function destructivelyDeleteFromEmployeeByKey (employee, key, value) {
    delete employee[key];
    return employee;
};

*/













/*

const employee = {
    name: "Patrick",
    streetAddress: "554 W 148th Street", 
};


function updateEmployeeWithKeyAndValue (employee, key, value) {
    let copyOfEmployee = {...employee};
    copyOfEmployee[key] = value;
    return copyOfEmployee;
};


function destructivelyUpdateEmployeeWithKeyAndValue (employee, key, value) {
    employee[key] = value;
    return employee;
};

function deleteFromEmployeeByKey (employee, key, value) {
    let copyOfEmployee = {...employee};
    delete copyOfEmployee[key];
    return copyOfEmployee;
};

function destructivelyDeleteFromEmployeeByKey (employee, key, value) {
    delete employee[key];
    return employee;
};


*/

























