window.onload = function () {
    loadNavbar();
    changeLanguage();
}

function changeLanguage() {
    document.getElementById('slogan').innerHTML = getLocalizedValue('slogan');
    document.getElementById('description').innerHTML = getDescription();
}

function getDescription() {
    if (language === 'romanian') {
        return `<b>Versiunea demonstrativă a unui sistem de gestionare pentru programul național de învățarea limbii române.</b><br>
        <p><b>Acțiunile disponibile</b>:<br>
        <a href="/registration.html">Înregistrare</a> - un analog al formularului Google completat de o persoană care dorește să se înscrie la un curs<br>
        <a href="/students.html">Elevi</a> - lista elevilor înregistrați în sistem<br>
        <a href="/teachers.html">Profesori</a> - lista profesorilor înregistrați în sistem<br>
        <a href="/groups.html">Grupuri</a> - lista grupurilor înregistrați în sistem<br>
        <a href="/teacher_registration.html">Înregistrarea profesorilor</a> - înregistrarea profesorilor în sistem<br>
        <a href="/group_registration.html">Înregistrarea grupului</a> - înregistrarea grupului în sistem cu selecție profesorilor și elevilor disponibili<br></p>`;
    }
    if (language === 'russian') {
        return `<b>Демонстративная версия системы управления для национальной программы изучения румынского языка.</b><br>
        <p><b>Доступные действия</b>:<br>
        <a href="/registration.html">Регистрация</a> - аналог Гугл формы, заполняемой человеком, желающим записаться на курсы<br>
        <a href="/students.html">Ученики</a> - список учеников, зарегистрированных в системе<br>
        <a href="/teachers.html">Преподаватели</a> - список преподавателей, зарегистрированных в системе<br>
        <a href="/groups.html">Группы</a> - список групп, зарегистрированных в системе<br>
        <a href="/teacher_registration.html">Регистрация преподавателя</a> - регистрация преподавателя в системе<br>
        <a href="/group_registration.html">Регистрация группы</a> - регистрация группы в системе с выбором из доступных преподавателей и студентов<br></p>`;
    }
    return `<b>Demo version of the management system for the national program of the study of the Romanian language.</b><br>
        <p><b>Available actions</b>:<br>
        <a href="/registration.html">Registration</a> - an analogue of a Google form that must be filled out by a person wishing to participate in the courses<br>
        <a href="/students.html">Students</a> - list of students registered in the system<br>
        <a href="/teachers.html">Teachers</a> - list of teachers registered in the system<br>
        <a href="/groups.html">Groups</a> - list of groups registered in the system<br>
        <a href="/teacher_registration.html">Teacher Registration</a> - registration of teacher in system<br>
        <a href="/group_registration.html">Group Registration</a> - registration of group in system with selection from available teachers and students<br></p>`;
}
