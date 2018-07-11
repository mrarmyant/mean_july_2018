// Challenge 1******************************************************************
let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];
for (student of students){
    console.log('Name: ' + student.name + '  Cohort: ' + student.cohort)
}
console.log('------------------------------------------------------------------')
// Challenge 2******************************************************************
let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };
for(key in users){
    console.log(key);
    for(i = 0; i < users[key].length; i++){
        num = i + 1;
        firstName = users[key][i].first_name;
        lastName = users[key][i].last_name;
        NLength = firstName.length + lastName.length;
        console.log(`${num} - ${lastName} ${firstName}, ${NLength}`)
    }
}
