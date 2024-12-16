let sortFieldName = "name";
let sortDesc = true;
let data;
let buildHead = table => buildStudentsHead(table);
let addItem = (index, item, body) => addStudent(index, item, body);

window.onload = function () {
    loadNavbar();
    data = getGroups().filter(t => t.name === getUrlParam('id'))[0];
    let students = data.students.map(s => s.id);
    currentList = getStudents().filter(s => students.includes(s.id));
    changeLanguage();
}

function changeLanguage() {
    document.getElementById('form').innerHTML = `<h3>${getLocalizedValue('informationAboutGroup')} '${data.name}'</h3><br>
        <p align="left">
            ${getLocalizedValue('teacher')}: ${getTeacherLink(data.teacher.id)}<br>
            ${getLocalizedValue('level')}: ${data.level}<br>
            ${getLocalizedValue('status')}: ${getLocalizedValue(data.status)}
        </p>
        <p>${data.description}</p>
        <h3>${getLocalizedValue('students.html')}</h3>`;
    sortAndBuildTable();
}
