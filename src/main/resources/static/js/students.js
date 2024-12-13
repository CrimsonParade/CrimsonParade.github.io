const constStudents = [
    {name:'Miron Costin', status: 'A2_LEARNING', group: 'A2_VANGHELI_1'},
    {name:'Ștefan cel Mare', status: 'A1_FINISHED', group: ''},
    {name:'Ion Creangă', status: 'B1_WAITING', group: ''}];
let excludeInactive = (localStorage.getItem('excludeInactive') || 'false') === 'true';
let sortFieldName = "status";
let sortDesc = true;

window.onload = function () {
    loadNavbar();
    changeLanguage();
}

function changeLanguage() {
    let row = document.getElementById('controlsRow');
    row.innerHTML = '';
    row.appendChild(getBooleanControlButton('excludeInactive', getLocalizedValue('excludeInactive'), excludeInactive));
    row.appendChild(getButton(getLocalizedValue('actualize'), () => updateData()));
    updateData();
}

function buildHead(table) {
    let thead = table.querySelector('thead');
    thead.innerHTML = '';
    let tr = document.createElement('tr');
    tr.innerHTML = `<th>№</th>
                    <th onclick="sortTable('name')">${getLocalizedValue('name')}</th>
                    <th onclick="sortTable('status')">${getLocalizedValue('status')}</th>
                    <th onclick="sortTable('group')">${getLocalizedValue('group')}</th>`;
    thead.appendChild(tr);
}

function addItem(index, item, tbody) {
    let tr = document.createElement('tr');
    tr.innerHTML = `<td>${index}</td>
                    <td>${item.name}</td>
                    <td>${item.status}</td>
                    <td>${item.group}</td>`;
    tbody.appendChild(tr);
}

function updateData() {
    excludeInactive = document.getElementById('excludeInactive').checked;
    localStorage.setItem('excludeInactive', excludeInactive);
    if (excludeInactive) {
        currentList = constStudents.filter(v => !v.status.includes('FINISHED'));
    } else {
        currentList = constStudents;
    }
    sortAndBuildTable();
}