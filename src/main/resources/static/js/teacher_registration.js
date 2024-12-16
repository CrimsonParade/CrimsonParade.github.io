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
        <label for="name" class="sr-only">${getLocalizedValue('firstName')}</label>
        <input type="text" class="form-control" id="name" name="name" placeholder="${getLocalizedValue('firstName')}" required>
        <label for="surname" class="sr-only">${getLocalizedValue('secondName')}</label>
        <input type="text" class="form-control" id="surname" name="surname" placeholder="${getLocalizedValue('secondName')}">
        <label for="id" class="sr-only">IDNP</label>
        <input type="number" class="form-control" id="id" name="id" placeholder="IDNP" required autofocus>
        <label for="email" class="sr-only">Email</label>
        <input type="email" class="form-control" id="email" name="email" placeholder="Email" required>
        <label for="password" class="sr-only">${getLocalizedValue('password')}</label>
        <input type="password" class="form-control" id="password" name="password" placeholder="${getLocalizedValue('password')}" required>
        <label for="passwordConfirmation" class="sr-only">${getLocalizedValue('passwordConfirmation')}</label>
        <input type="password" class="form-control" id="passwordConfirmation" name="passwordConfirmation" placeholder="${getLocalizedValue('passwordConfirmation')}" required>
        <select id="levelSelector" class="form-control">
            <option value="null" disabled hidden selected>${getLocalizedValue('selectConfirmedLevel')}</option>
            <option value="A1">A1</option>
            <option value="A2">A2</option>
            <option value="B1">B1</option>
            <option value="B2">B2</option>
            <option value="C1">C1</option>
        </select>
        <br>
        <button type="button" class="btn btn-danger btn-block" onclick="registerTeacher()">${getLocalizedValue('register')}</button>
        <br>
    </div>`;
}

function registerTeacher() {
    const name = `${document.getElementById('name').value} ${document.getElementById('surname').value}`;
    const id = document.getElementById('id').value;
    const email = document.getElementById('email').value;
    const level = document.getElementById('levelSelector').value;

    saveTeacher({id, email, name, status: 'WAITING', level: level, group: ''});
    document.getElementById('success').innerHTML = `${getLocalizedValue('handledSuccessfully')}:<br>${getTeacherLink(id)}`;
    document.getElementById('registrationForm').hidden = true;
}
