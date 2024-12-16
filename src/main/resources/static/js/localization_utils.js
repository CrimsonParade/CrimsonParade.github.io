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
    ['students.html', new Map([['romanian', 'Elevi'], ['russian', 'Ученики'], ['english', 'Students']])],
    ['teachers.html', new Map([['romanian', 'Profesori'], ['russian', 'Преподаватели'], ['english', 'Teachers']])],
    ['groups.html', new Map([['romanian', 'Grupuri'], ['russian', 'Группы'], ['english', 'Groups']])],
    ['contacts.html', new Map([['romanian', 'Contacte'], ['russian', 'Контакты'], ['english', 'Contacts']])],
    ['name', new Map([['romanian', 'Nume'], ['russian', 'Имя'], ['english', 'Name']])],
    ['status', new Map([['romanian', 'Starea'], ['russian', 'Статус'], ['english', 'Status']])],
    ['level', new Map([['romanian', 'Nivel'], ['russian', 'Уровень'], ['english', 'Level']])],
    ['group', new Map([['romanian', 'Grup'], ['russian', 'Группа'], ['english', 'Group']])],
    ['teacher', new Map([['romanian', 'Profesor'], ['russian', 'Преподаватель'], ['english', 'Teacher']])],
    ['excludeInactive', new Map([['romanian', 'Excludeți inactiv'], ['russian', 'Исключить неактивных'], ['english', 'Exclude inactive']])],
    ['excludeBusy', new Map([['romanian', 'Excludeți ocupați'], ['russian', 'Исключить занятых'], ['english', 'Exclude busy']])],
    ['actualize', new Map([['romanian', 'Actualizare'], ['russian', 'Актуализировать'], ['english', 'Actualize']])],
    ['informationAboutGroup', new Map([['romanian', 'Informația de grupul'], ['russian', 'Информация о группе'], ['english', 'Information about group']])],
    ['registration', new Map([['russian', 'Регистрация'], ['english', 'Registration']])],
    ['firstName', new Map([['romanian', 'Prenumele'], ['russian', 'Имя'], ['english', 'Name']])],
    ['secondName', new Map([['romanian', 'Numele'], ['russian', 'Фамилия'], ['english', 'Surname']])],
    ['register', new Map([['romanian', 'Înregistrați-mă'], ['russian', 'Зарегистрироваться'], ['english', 'Register']])],
    ['password', new Map([['romanian', 'Parola'], ['russian', 'Пароль'], ['english', 'Password']])],
    ['passwordConfirmation', new Map([['romanian', 'Confirmați parola'], ['russian', 'Подтвердите пароль'], ['english', 'Confirm password']])],
    ['selectDesiredLevel', new Map([['romanian', 'Selectați nivelul dorit'], ['russian', 'Выберите желаемый уровень'], ['english', 'Select desired level']])],
    ['selectConfirmedLevel', new Map([['romanian', 'Selectați nivelul confirmat'], ['russian', 'Выберите подтвержденный уровень'], ['english', 'Select confirmed level']])],
    ['handledSuccessfully', new Map([['romanian', 'Cererea a fost acceptată și completată cu success'], ['russian', 'Запрос выполнен успешно'], ['english', 'Request handled successfully']])],
    ['WAITING', new Map([['romanian', 'Așteaptă'], ['russian', 'Ожидает'], ['english', 'Waiting']])],
    ['STUDYING', new Map([['romanian', 'Studiază'], ['russian', 'Изучает'], ['english', 'Studying']])],
    ['FINISHED', new Map([['romanian', 'Absolvit'], ['russian', 'Завершил'], ['english', 'Finished']])]
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
                    <a class="nav-link" href="/teachers.html">${getLocalizedValue('teachers.html')}</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/groups.html">${getLocalizedValue('groups.html')}</a>
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
    userData.appendChild(getLanguageSelector());
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
