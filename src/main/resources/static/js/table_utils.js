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
                    <td>${getStudentLink(item.name)}</td>
                    <td>${item.status}</td>
                    <td>${item.level}</td>
                    <td>${getGroupLink(item.group)}</td>`;
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
                    <td>${getTeacherLink(item.name)}</td>
                    <td>${item.status}</td>
                    <td>${item.level}</td>
                    <td>${getGroupLink(item.group)}</td>`;
    tbody.appendChild(tr);
}

function buildGroupsHead(table) {
    let thead = table.querySelector('thead');
    thead.innerHTML = '';
    let tr = document.createElement('tr');
    tr.innerHTML = `<th>№</th>
                    <th onclick="sortTable('name')">${getLocalizedValue('name')}</th>
                    <th onclick="sortTable('status')">${getLocalizedValue('status')}</th>
                    <th onclick="sortTable('level')">${getLocalizedValue('level')}</th>
                    <th onclick="sortTable('teacher.name')">${getLocalizedValue('teacher')}</th>
                    <th onclick="sortTable('students.length')">${getLocalizedValue('students.html')}</th>`;
    thead.appendChild(tr);
}

function addGroup(index, item, tbody) {
    let tr = document.createElement('tr');
    tr.innerHTML = `<td>${index}</td>
                    <td>${getGroupLink(item.name)}</td>
                    <td>${item.status}</td>
                    <td>${item.level}</td>
                    <td>${getTeacherLink(item.teacher.name)}</td>
                    <td>${item.students.length}</td>`;
    tbody.appendChild(tr);
}

function getGroupLink(group) {
    return `<a href="/group.html?id=${group}">${group}</a>`;
}

function getTeacherLink(teacher) {
    return `<a href="/teacher.html?id=${teacher}">${teacher}</a>`;
}

function getStudentLink(student) {
    return `<a href="/student.html?id=${student}">${student}</a>`;
}
