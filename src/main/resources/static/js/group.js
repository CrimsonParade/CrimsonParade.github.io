let sortFieldName = "name";
let sortDesc = true;
let id;
let data;
let buildHead = table => buildStudentsHead(table);
let addItem = (index, item, body) => addStudent(index, item, body);

window.onload = function () {
    loadNavbar();
    id = getUrlParam('id');
    data = getGroups().get(id);
    currentList = data.students;
    changeLanguage();
}

function changeLanguage() {
    document.getElementById('form').innerHTML = `<h3>${getLocalizedValue('informationAboutGroup')} '${id}'</h3><br>
        <p>${data.description}</p><br>
        <h3>${getLocalizedValue('teachers.html')}</h3>
        <p>${data.teacher.name}</p>
        <h3>${getLocalizedValue('students.html')}</h3>`;
    sortAndBuildTable();
}
