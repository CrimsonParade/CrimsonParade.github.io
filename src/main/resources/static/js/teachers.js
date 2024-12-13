let excludeBusy = (localStorage.getItem('excludeBusy') || 'false') === 'true';
let sortFieldName = "status";
let sortDesc = true;
let buildHead = table => buildTeachersHead(table);
let addItem = (index, item, body) => addTeacher(index, item, body);

window.onload = function () {
    loadNavbar();
    changeLanguage();
}

function changeLanguage() {
    let row = document.getElementById('controlsRow');
    row.innerHTML = '';
    row.appendChild(getBooleanControlButton('excludeBusy', getLocalizedValue('excludeBusy'), excludeBusy));
    row.appendChild(getButton(getLocalizedValue('actualize'), () => updateData()));
    updateData();
}

function updateData() {
    excludeBusy = document.getElementById('excludeBusy').checked;
    localStorage.setItem('excludeBusy', excludeBusy);
    if (excludeBusy) {
        currentList = getTeachers().filter(v => !v.status.includes('IN_PROGRESS'));
    } else {
        currentList = getTeachers();
    }
    sortAndBuildTable();
}
