window.onload = function () {
    loadNavbar();
    changeLanguage();
}

function changeLanguage() {
    addData();
    updateCoefficients();
}

function addData() {
    document.getElementById('slogan').innerHTML = getLocalizedValue('slogan');
    document.getElementById('description').innerHTML = getDescription();
    document.getElementById('form').innerHTML = `
        <div id="searchParametersRow" class="row flex-column flex-md-row justify-content-center"></div>
        <div id="controlsRow" class="row flex-column flex-md-row justify-content-center"></div>
        <div id="buttonsRow" class="row flex-column flex-md-row justify-content-center"></div>`;
    let formRow = document.getElementById('searchParametersRow');
    formRow.appendChild(getStringControl('nameSearch', 'name'));
    formRow.appendChild(getStringControl('directorSearch', 'director', language === 'russian' ? 'Кристофер Нолан' : 'Christopher Nolan'));
    formRow.appendChild(getStringControl('actorSearch', 'actor'));
    formRow.appendChild(getIntRangeControl('yearSearch', 'year', 2000, 2024));
    addControls();
    let buttons = document.getElementById('buttonsRow');
    addAggregatorSelector(buttons);
    buttons.appendChild(getButton(getLocalizedValue('actualize'), () => updateData()));
    addAggregationTypeSelector(buttons);
}

function getDescription() {
    if (language === 'russian') {
        return `<p><b>MAR</b> - проект, цель которого - предоставить доступ к максимальному количеству оценок
        и простому способу выбора ценности каждой из них.<br>
        Например, если кому-то ближе принципы оценивания критиков, этот кто-то повышает коэффициенты оценок критиков,<br>
        а если мнение зрителей ему вовсе не интересно, он может не включать их оценки в итоговый рейтинг.
        </p><p><b>Способы взаимодействия с данными</b>:<br>
        <a href="/media.html">Поиск по фильтрам</a> - поиск по заданным параметрам (от участвующих в создании людей до количества оценок на агрегаторах),<br>
        упрощенный интерактивный пример доступен ниже (при нажатии на "Актуализировать" произойдет поиск по заданным параметрам)<br>
        <a href="/list.html">Поиск по спискам</a> - поиск либо по спискам, созданным пользователями сайта,<br>
        либо по списку, который ты создаешь сам и в который ты можешь добавлять элементы по одному (поиск происходит только по названию)<br>
        <a href="/info.html">Более подробная документация</a></p>`;
    }
    return `<p><b>MAR</b> - project whose goal is to provide access to the maximum number of ratings and a simple way to choose the value of each of them.
        </p><p><b>Ways to interact with data</b>:<br>
        <a href="/media.html">Search by filter</a> - search by parameters (from the people involved to the number of ratings on aggregators),<br>
        a simplified interactive example is available below (click on “Actualize” to retrieve data using provided parameters)<br>
        <a href="/list.html">Search by list</a> - search either by lists created by users,<br>
        or by list that you create yourself and to which you can add elements one by one (using search by name)</p>`;
}
