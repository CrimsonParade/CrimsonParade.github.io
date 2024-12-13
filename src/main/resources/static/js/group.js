const constGroups = new Map();
constGroups.set('A2_VANGHELI_1', {
    description: 'Bună ziuă, dragi studenți!<br>' +
        'Avem cursuri în fiecare marți, miercuri și joi de la 19.00 la 20.30.<br>' +
        'Cursurile se țin pe Skype, linkul de înscriere - www.skype.com/example',
    students: [{name: 'Miron Costin', status: 'A2_LEARNING'}]});
let sortFieldName = "name";
let sortDesc = true;
let id;
let description;

window.onload = function () {
    loadNavbar();
    id = getUrlParam('id');
    let groupData = constGroups.get(id);
    description = groupData.description;
    currentList = groupData.students;
    changeLanguage();
}

function changeLanguage() {
    document.getElementById('form').innerHTML = `<h3>Information about group ${id}</h3><br>
        <p>${description}</p><br>
        <h3>${getLocalizedValue('students.html')}</h3>`;
    sortAndBuildTable();
}

function buildHead(table) {
    let thead = table.querySelector('thead');
    thead.innerHTML = '';
    let tr = document.createElement('tr');
    tr.innerHTML = `<th>№</th>
                    <th onclick="sortTable('name')">${getLocalizedValue('name')}</th>
                    <th onclick="sortTable('status')">${getLocalizedValue('status')}</th>`;
    thead.appendChild(tr);
}

function addItem(index, item, tbody) {
    let tr = document.createElement('tr');
    tr.innerHTML = `<td>${index}</td>
                    <td>${item.name}</td>
                    <td>${item.status}</td>`;
    tbody.appendChild(tr);
}