const supportedLanguages = ['romanian', 'russian', 'english'];
let isLanguageManuallySelected = false;
let language = 'romanian';
let localizations = new Map([
    ['slogan', new Map([
        ['romanian', 'Programul național privind învățarea limbii române de către minoritățile  naționale, inclusiv populația adultă'],
        ['russian', 'Национальная программа изучения румынского языка национальными меньшинствами, включая взрослое население'],
        ['english', 'National program for the study of the Romanian language by national minorities, including adults']])],
    ['index.html', new Map([['romanian', 'Acasă'], ['russian', 'На главную'], ['english', 'Home']])],
    ['registration.html', new Map([['romanian', 'Înregistrare'], ['russian', 'Регистрация'], ['english', 'Registration']])],
    ['students.html', new Map([['romanian', 'Elevii'], ['russian', 'Ученики'], ['english', 'Students']])],
    ['contacts.html', new Map([['romanian', 'Contacte'], ['russian', 'Контакты'], ['english', 'Contacts']])],
    ['name', new Map([['romanian', 'Nume'], ['russian', 'Имя'], ['english', 'Name']])],
    ['status', new Map([['romanian', 'Starea'], ['russian', 'Статус'], ['english', 'Status']])],
    ['group', new Map([['romanian', 'Grup'], ['russian', 'Группа'], ['english', 'Group']])],
    ['excludeInactive', new Map([['romanian', 'Excludeți inactiv'], ['russian', 'Исключить неактивных'], ['english', 'Exclude inactive']])],
    ['actualize', new Map([['romanian', 'Actualizare'], ['russian', 'Актуализировать'], ['english', 'Actualize']])],

    ['registration', new Map([['russian', 'Регистрация'], ['english', 'Registration']])],
    ['login', new Map([['russian', 'Войти'], ['english', 'Login']])],
    ['logout', new Map([['russian', 'Выйти'], ['english', 'Logout']])],
    ['signIn', new Map([['russian', 'Войдите в свой аккаунт'], ['english', 'Sign In']])],
    ['notRegistered', new Map([['russian', 'Нет аккаунта?'], ['english', 'Not Registered?']])],
    ['alreadyRegistered', new Map([['russian', 'Уже зарегистрированы?'], ['english', 'Already have an account?']])],
    ['register', new Map([['russian', 'Зарегистрироваться'], ['english', 'Register']])],
    ['username', new Map([['russian', 'Логин'], ['english', 'Username']])],
    ['password', new Map([['russian', 'Пароль'], ['english', 'Password']])],
    ['passwordConfirmation', new Map([['russian', 'Подтвердите пароль'], ['english', 'Confirm password']])],
    ['firstName', new Map([['russian', 'Имя'], ['english', 'Name']])],
    ['secondName', new Map([['russian', 'Фамилия'], ['english', 'Surname']])]
]);

function getLocalizedValue(key) {
    return localizations.get(key).get(language);
}

function getLocalizedNavbar() {
    if (!isLanguageManuallySelected) {
        let languageFromUrl = getUrlParam('language');
        if (languageFromUrl != null && supportedLanguages.includes(languageFromUrl)) {
            localStorage.setItem('language', languageFromUrl);
        }
        language = localStorage.getItem('language') || language;
    }
    return `<ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <a class="nav-link" href="/">${getLocalizedValue('index.html')}</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/registration.html">${getLocalizedValue('registration.html')}</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/students.html">${getLocalizedValue('students.html')}</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="https://t.me/media_aggregated_reviews" target="_blank">${getLocalizedValue('contacts.html')}</a>
                </li>
            </ul>`;
}

function onLanguageChange() {
    isLanguageManuallySelected = true;
    language = document.getElementById('languageSelector').value;
    localStorage.setItem('language', language);
    loadNavbar();
    changeLanguage();
}

function loadNavbar() {
    document.getElementById('navbarCollapse').innerHTML = getLocalizedNavbar();
    let userData = document.getElementById('userData');
    userData.innerHTML = '';
    fetch('/api/user/me')
        .then(response => response.json())
        .then(data => userData.appendChild(data.username ? getLoggedUserDiv(data) : getNotLoggedUserDiv()))
        .catch(error => console.error('Error fetching data:', error))
        .finally(() => userData.appendChild(getLanguageSelector()));
}

function getLanguageSelector() {
    const select = document.createElement('select');
    select.id = 'languageSelector';
    select.className = 'form-control header-element';
    select.style.maxWidth = '70px';
    select.style.display = 'inline';
    select.style.width = 'auto';
    select.onchange = onLanguageChange;
    select.appendChild(createLanguageOption('romanian', 'RO'));
    select.appendChild(createLanguageOption('russian', 'RU'));
    select.appendChild(createLanguageOption('english', 'EN'));
    return select;
}

function createLanguageOption(value, text) {
    const option = document.createElement('option');
    option.value = value;
    option.textContent = text;
    option.selected = language === value;
    return option;
}

function getLoggedUserDiv(data) {
    currentUser = data.username;
    return getTextWithButton(data.username + ' ', getLocalizedValue('logout'), () => fetch('/logout')
        .then(ignored => loadNavbar())
        .then(() => alert(getLocalizedValue('logoutSuccessfully')))
        .catch(error => console.error('Logout error', error)));
}

function getNotLoggedUserDiv() {
    return getTextWithButton(getLocalizedValue('notLogged'), getLocalizedValue('login'),
        () => onclickWithConfirmation(() => window.location.href = getHrefWithRedirect('/login.html')));
}

function getTextWithButton(textContent, buttonText, onclick) {
    let div = document.createElement('div');
    div.textContent = textContent;
    let button = document.createElement('button');
    button.type = 'button';
    button.classList.add('btn', 'btn-danger');
    button.textContent = buttonText;
    button.onclick = onclick;
    div.appendChild(button);
    return div;
}

function getHrefWithRedirect(href) {
    return href + '?redirect=' + encodeURIComponent(window.location.pathname + window.location.search);
}

function onclickWithConfirmation(onclick) {
    if (confirm(getLocalizedValue('unsavedDataWillBeLost'))) {
        onclick();
    }
}
