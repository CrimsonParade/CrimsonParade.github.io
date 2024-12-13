function buildStudentsHead(table) {
    let thead = table.querySelector('thead');
    thead.innerHTML = '';
    let tr = document.createElement('tr');
    tr.innerHTML = `<th>№</th>
                    <th onclick="sortTable('name')">${getLocalizedValue('name')}</th>
                    <th onclick="sortTable('status')">${getLocalizedValue('status')}</th>
                    <th onclick="sortTable('level')">${getLocalizedValue('level')}</th>
                    <th onclick="sortTable('group')">${getLocalizedValue('group')}</th>`;
    thead.appendChild(tr);
}

function addStudent(index, item, tbody) {
    let tr = document.createElement('tr');
    tr.innerHTML = `<td>${index}</td>
                    <td>${item.name}</td>
                    <td>${item.status}</td>
                    <td>${item.level}</td>
                    <td>${item.group}</td>`;
    tbody.appendChild(tr);
}

function buildTeachersHead(table) {
    let thead = table.querySelector('thead');
    thead.innerHTML = '';
    let tr = document.createElement('tr');
    tr.innerHTML = `<th>№</th>
                    <th onclick="sortTable('name')">${getLocalizedValue('name')}</th>
                    <th onclick="sortTable('status')">${getLocalizedValue('status')}</th>
                    <th onclick="sortTable('level')">${getLocalizedValue('level')}</th>
                    <th onclick="sortTable('group')">${getLocalizedValue('group')}</th>`;
    thead.appendChild(tr);
}

function addTeacher(index, item, tbody) {
    let tr = document.createElement('tr');
    tr.innerHTML = `<td>${index}</td>
                    <td>${item.name}</td>
                    <td>${item.status}</td>
                    <td>${item.level}</td>
                    <td>${item.group}</td>`;
    tbody.appendChild(tr);
}
