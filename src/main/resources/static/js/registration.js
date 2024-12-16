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
        <input type="number" class="form-control" id="id" name="id" placeholder="IDNP" required>
        <label for="email" class="sr-only">Email</label>
        <input type="email" class="form-control" id="email" name="email" placeholder="Email" required>
        <label for="password" class="sr-only">${getLocalizedValue('password')}</label>
        <input type="password" class="form-control" id="password" name="password" placeholder="${getLocalizedValue('password')}" required>
        <label for="passwordConfirmation" class="sr-only">${getLocalizedValue('passwordConfirmation')}</label>
        <input type="password" class="form-control" id="passwordConfirmation" name="passwordConfirmation" placeholder="${getLocalizedValue('passwordConfirmation')}" required>
        <select id="levelSelector" class="form-control">
            <option value="null" disabled hidden selected>${getLocalizedValue('selectDesiredLevel')}</option>${getLevelOptions()}
        </select>
        <br>
        <button type="button" class="btn btn-danger btn-block" onclick="registerStudent()">${getLocalizedValue('register')}</button>
        <br>
    </div>`;
}

function registerStudent() {
    const name = `${document.getElementById('name').value} ${document.getElementById('surname').value}`;
    const id = document.getElementById('id').value;
    const email = document.getElementById('email').value;
    const level = document.getElementById('levelSelector').value;

    saveStudent({id, email, name, level, status: 'WAITING', group: ''});
    document.getElementById('success').innerHTML = `${getLocalizedValue('handledSuccessfully')}:<br>${getStudentLink(id)}`;
    document.getElementById('registrationForm').hidden = true;
}
