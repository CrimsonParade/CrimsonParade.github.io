let excludeInactive = (localStorage.getItem('excludeInactive') || 'false') === 'true';
let sortFieldName = "status";
let sortDesc = true;
let buildHead = table => buildGroupsHead(table);
let addItem = (index, item, body) => addGroup(index, item, body);

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

function updateData() {
    excludeInactive = document.getElementById('excludeInactive').checked;
    localStorage.setItem('excludeInactive', excludeInactive);
    if (excludeInactive) {
        currentList = [...getGroups().values()].filter(v => !v.status.includes('FINISHED'));
    } else {
        currentList = [...getGroups().values()];
    }
    sortAndBuildTable();
}
