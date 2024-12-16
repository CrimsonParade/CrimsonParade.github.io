let excludeInactive = (localStorage.getItem('excludeInactive') || 'false') === 'true';
let sortFieldName = "status";
let sortDesc = true;
let buildHead = table => buildGroupsHead(table);
let addItem = (index, item, body) => addGroup(index, item, body);

window.onload = function () {
    loadNavbar();
    data = getTeachers().filter(t => t.id === getUrlParam('id'))[0];
    currentList = [...getGroups().values()].filter(g => g.teacher.id === getUrlParam('id'));
    changeLanguage();
}

function changeLanguage() {
    document.getElementById('form').innerHTML = `<h3>${data.name}</h3><br>
        <p align="left">
            Email: ${data.email}<br>
            ${getLocalizedValue('status')}: ${getLocalizedValue(data.status)}<br>
            ${getLocalizedValue('level')}: ${data.level}
            ${data.group ? `<br>${getLocalizedValue('group')}: ${getGroupLink(data.group)}` : ''}
        </p>
        <h3>${getLocalizedValue('groups.html')}</h3>`;
    sortAndBuildTable();
}
