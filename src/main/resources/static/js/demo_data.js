const constGroups = new Map();
constGroups.set('A2_VANGHELI_1', {
    description: 'Bună ziuă, dragi studenți!<br>' +
        'Avem cursuri în fiecare marți, miercuri și joi de la 19.00 la 20.30.<br>' +
        'Cursurile se țin pe Skype, linkul de înscriere - www.skype.com/example',
    teacher: {name:'Spiridon Vangheli', status: 'IN_PROGRESS', level: 'A2', group: 'A2_VANGHELI_1'},
    students: [{name:'Miron Costin', status: 'IN_PROGRESS', level: 'A2', group: 'A2_VANGHELI_1'}]});
const constTeachers = [
    {name:'Spiridon Vangheli', status: 'IN_PROGRESS', level: 'A2', group: 'A2_VANGHELI_1'},
    {name:'Ion Druță', status: 'WAITING', level: '', group: ''}];
const constStudents = [
    {name:'Miron Costin', status: 'IN_PROGRESS', level: 'A2', group: 'A2_VANGHELI_1'},
    {name:'Ștefan cel Mare', status: 'FINISHED', level: 'A1', group: ''},
    {name:'Ion Creangă', status: 'WAITING', level: 'B1', group: ''}];

function getGroups() {
    return constGroups;
}

function getTeachers() {
    return constTeachers;
}

function getStudents() {
    return constStudents;
}
