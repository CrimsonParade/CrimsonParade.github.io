let currentList = [];

function sortAndBuildTable() {
    sortListDesc(currentList, sortFieldName);
    buildTable(currentList);
}

function buildTable(items) {
    let table = document.getElementById('items');
    buildHead(table);
    buildBody(table, items);
}

function buildBody(table, movies) {
    let tbody = table.querySelector('tbody');
    tbody.innerHTML = '';
    if (sortDesc) {
        for (let i = 0; i < movies.length; i++) {
            addItem(i + 1, movies[i], tbody);
        }
    } else {
        for (let i = movies.length - 1; i >= 0; i--) {
            addItem(i + 1, movies[i], tbody);
        }
    }
}

function sortTable(fieldName) {
    sortDesc = sortFieldName !== fieldName || !sortDesc;
    sortFieldName = fieldName;
    sortAndBuildTable();
}

function sortListDesc(list, fieldName) {
    return list.sort((m1, m2) => m2[fieldName] < m1[fieldName] ? 1 : m2[fieldName] > m1[fieldName] ? -1 : 0);
}

function getBooleanControlButton(id, label, value) {
    let input = document.createElement('input');
    input.classList.add('form-control');
    input.type = 'checkbox';
    input.id = id;
    input.checked = value;
    return getInputWithLabel(id, label, input);
}

function getInputWithLabel(id, labelText, input) {
    let label = document.createElement('label');
    label.setAttribute('for', id);
    label.textContent = labelText + ':';

    let colDiv = document.createElement('div');
    colDiv.classList.add('col-12', 'col-md-4', 'col-xl-2');
    colDiv.appendChild(label);
    colDiv.appendChild(input);
    return colDiv;
}

function getEmptyLabel() {
    let label = document.createElement('label');
    label.innerHTML = '&nbsp;';
    return label;
}

function getButton(textContent, onclick) {
    let button = document.createElement('button');
    button.type = 'button';
    button.classList.add('btn', 'btn-danger', 'btn-block');
    button.textContent = textContent;
    button.onclick = onclick;

    let buttonDiv = document.createElement('div');
    buttonDiv.classList.add('col-12', 'col-md-4', 'col-xl-2');
    buttonDiv.appendChild(getEmptyLabel());
    buttonDiv.appendChild(button);
    return buttonDiv;
}

function createOption(value, text, selected) {
    let option = document.createElement('option');
    option.value = value;
    option.text = text;
    option.selected = selected;
    return option;
}

function getUrlParam(param) {
    let regexResult = new RegExp(`${param}=([^&]*)`).exec(decodeURI(window.location.href));
    return regexResult != null ? regexResult[1] : null;
}

function getGroupLink(name) {
    return `<a href="/group.html?id=${name}">${name}</a>`;
}

function getTeacherLink(id) {
    return `<a href="/teacher.html?id=${id}">${getTeachers().filter(t => t.id === id)[0].name}</a>`;
}

function getStudentLink(id) {
    return `<a href="/student.html?id=${id}">${getStudents().filter(t => t.id === id)[0].name}</a>`;
}

function getLevelOptions() {
    return `<option value="A1">A1</option>
            <option value="A2">A2</option>
            <option value="B1">B1</option>
            <option value="B2">B2</option>
            <option value="C1">C1</option>`;
}
