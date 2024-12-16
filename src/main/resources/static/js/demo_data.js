const groups = JSON.parse(localStorage.getItem('groups')) || [
    {
        name: 'A2_VANGHELI',
        status: 'STUDYING',
        level: 'A2',
        description: 'Bună ziuă, dragi studenți!\n' +
            'Avem cursuri în fiecare marți, miercuri și joi de la 19.00 la 20.30.\n' +
            'Cursurile se țin pe Skype, linkul de înscriere - www.skype.com/example',
        teacher: {id: '1'},
        students: [{id: '2'}]
    }, {
        name: 'A1_DRUȚĂ',
        status: 'FINISHED',
        level: 'A1',
        description: 'Bună ziuă, dragi cursanți!\n' +
            'Avem cursuri în fiecare luni, miercuri și vineri, între orele 17.00 și 18.30.\n' +
            'Cursurile pe Zoom - www.zoom.com/example, grupul in Viber - www.viber.com/example',
        teacher: {id: '2'},
        students: [{id: '1'}]
    }];
const teachers = JSON.parse(localStorage.getItem('teachers')) || [
    {id: '1', email: 'vangheli@edu.md', name: 'Spiridon Vangheli', status: 'STUDYING', level: 'C1', group: 'A2_VANGHELI'},
    {id: '2', email: 'druta@scr.su', name: 'Ion Druță', status: 'WAITING', level: 'B2', group: ''}];
const students = JSON.parse(localStorage.getItem('students')) || [
    {id: '1', email: 'stefan@gov.md', name: 'Ștefan cel Mare', status: 'FINISHED', level: 'A1', group: 'A1_DRUȚĂ'},
    {id: '2', email: 'costin@gov.md', name: 'Miron Costin', status: 'STUDYING', level: 'A2', group: 'A2_VANGHELI'},
    {id: '3', email: 'creanga@scr.ro', name: 'Ion Creangă', status: 'WAITING', level: 'B1', group: ''}];

function getGroups() {
    return groups;
}

function saveGroup(group) {
    groups.push(group);
    localStorage.setItem('groups', JSON.stringify(groups));
    teachers.filter(t => t.id === group.teacher.id).forEach(t => {
        t.status = 'STUDYING';
        t.group = group.name;
    });
    localStorage.setItem('teachers', JSON.stringify(teachers));
    let studentIds = group.students.map(s => s.id);
    students.filter(s => studentIds.includes(s.id)).forEach(s => {
        s.status = 'STUDYING';
        s.group = group.name;
        s.level = group.level;
    });
    localStorage.setItem('students', JSON.stringify(students));
}

function getTeachers() {
    return teachers;
}

function saveTeacher(teacher) {
    teachers.push(teacher);
    localStorage.setItem('teachers', JSON.stringify(teachers));
}

function getStudents() {
    return students;
}

function saveStudent(student) {
    students.push(student);
    localStorage.setItem('students', JSON.stringify(students));
}
