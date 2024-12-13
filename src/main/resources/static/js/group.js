let sortFieldName = "name";
let sortDesc = true;
let data;
let buildHead = table => buildStudentsHead(table);
let addItem = (index, item, body) => addStudent(index, item, body);

window.onload = function () {
    loadNavbar();
    data = getGroups().get(getUrlParam('id'));
    currentList = data.students;
    changeLanguage();
}

function changeLanguage() {
    document.getElementById('form').innerHTML = `<h3>${getLocalizedValue('informationAboutGroup')} '${data.name}'</h3><br>
        <p align="left">${getLocalizedValue('teacher')}: ${getTeacherLink(data.teacher.name)}<br>
           ${getLocalizedValue('level')}: ${data.level}<br>
           ${getLocalizedValue('status')}: ${data.status}</p>
        <p>${data.description}</p>
        <h3>${getLocalizedValue('students.html')}</h3>`;
    sortAndBuildTable();
}
