window.onload = function () {
    loadNavbar();
    changeLanguage();
}

function changeLanguage() {
    document.getElementById('form').innerHTML = `
    <h2>${getLocalizedValue('registration.html')}</h2>
    <h3 id="error" style="color: red;"></h3>
    <h3 id="success" style="color: green;"></h3>
    <div id="registrationForm">
        <label for="name" class="sr-only">${getLocalizedValue('name')}</label>
        <input type="text" class="form-control" id="name" name="name" placeholder="${getLocalizedValue('name')}" required>
        <label for="description" class="sr-only">${getLocalizedValue('description')}</label>
        <textarea class="form-control" id="description" name="description" placeholder="${getLocalizedValue('description')}"></textarea>
        <select id="teacherSelector" class="form-control">
            <option value="null" disabled hidden selected>${getLocalizedValue('selectTeacher')}</option>
        </select>
        <select id="studentSelector" class="form-control" multiple>
            <option value="null" disabled>${getLocalizedValue('selectStudents')}</option>
        </select>
        <select id="levelSelector" class="form-control">
            <option value="null" disabled hidden selected>${getLocalizedValue('selectLevel')}</option>
            <option value="A1">A1</option>
            <option value="A2">A2</option>
            <option value="B1">B1</option>
            <option value="B2">B2</option>
            <option value="C1">C1</option>
        </select>
        <br>
        <button type="button" class="btn btn-danger btn-block" onclick="registerGroup()">${getLocalizedValue('register')}</button>
        <br>
    </div>`;
    let teachers = document.getElementById('teacherSelector').options;
    getTeachers().filter(t => t.status !== 'STUDYING').forEach(t => teachers.add(createOption(t.id, t.name)));
    let students = document.getElementById('studentSelector').options;
    getStudents().filter(s => s.status !== 'STUDYING').forEach(s => students.add(createOption(s.id, s.name)));
}

function registerGroup() {
    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;
    const teacher = document.getElementById('teacherSelector').value;
    const students = Array.from(document.getElementById('studentSelector').selectedOptions)
        .filter(v => v.value !== '').map(v => ({id: v.value}));
    const level = document.getElementById('levelSelector').value;

    saveGroup({name, description, level, status: 'WAITING', teacher: {id: teacher}, students});
    document.getElementById('success').innerHTML = `${getLocalizedValue('handledSuccessfully')}:<br>${getGroupLink(name)}`;
    document.getElementById('registrationForm').hidden = true;
}
