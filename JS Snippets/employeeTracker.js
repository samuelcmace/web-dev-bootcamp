// Javascript program to manage employees at Culver's, a fast food joint in the midwestern United States

var employee1 = {
    name: "Jack",
    skillSet: ["Running Orders", "Organizing Orders", "Taking Orders", "Operating Register"],
    jobTitle: "Crew Team Member",
    yearEmployed: 2020,
    wage: 12.00
};

var employee2 = {
    name: "Jill",
    skillSet: ["Running Orders", "Organizing Orders", "Taking Orders", "Operating Register", "Making Custard", "Flipping Burgers", "Making Sandwiches", "Operating the Fryer"],
    jobTitle: "Shift Leader",
    yearEmployed: 2020,
    wage: 15.00
};

function hireEmployee(name, skillSet, jobTitle, yearEmployed, wage) {
    this.name = name;
    this.skillSet = skillSet;
    this.jobTitle = jobTitle;
    this.yearEmployed = yearEmployed;
    this.wage = wage;
}

var employee3 = new hireEmployee("Jane", ["Running Orders"], "Crew Team Member", 2021, 10.00);

console.log(employee3.name);

console.log(employee3.skillSet);

employee3.skillSet.push("Operating Register");

console.log(employee3.skillSet);
