let excludeInactive = (localStorage.getItem('excludeInactive') || 'false') === 'true';
let sortFieldName = "status";
let sortDesc = true;
let buildHead = table => buildGroupsHead(table);
let addItem = (index, item, body) => addGroup(index, item, body);

window.onload = function () {
    loadNavbar();
    data = getStudents().filter(s => s.id === getUrlParam('id'))[0];
    currentList = [...getGroups().values()].filter(g => g.students.filter(s => s.id === getUrlParam('id')).length > 0);
    changeLanguage();
}

function changeLanguage() {
    document.getElementById('form').innerHTML = `<h3>${data.name}</h3><br>
        <p align="left">
            Email: ${data.email}<br>
            ${getLocalizedValue('status')}: ${data.status}<br>
            ${getLocalizedValue('level')}: ${data.level}<br>
            ${getLocalizedValue('group')}: ${getGroupLink(data.group)}
        </p>
        <h3>${getLocalizedValue('groups.html')}</h3>`;
    sortAndBuildTable();
}
