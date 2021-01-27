// let options = {
//     width: 1366,
//     height: 768,
//     background: 'red',
//     font:{
//         size:'16px',
//         color: '#fff'

//     }
// };
// console.log(JSON.stringify(options));// метод для перевода js формат в json формат
// console.log(JSON.parse(options));// перевод обратно

let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

    inputRub.addEventListener('input', () => {
        let request = new XMLHttpRequest(); // главный объект для работы с реакт запросами

        // request.open(method, url, async, login, password);// настройка AJAX запроса, метод принимает 5и различных аргументов
        request.open('GET', 'current.json');
        request.setRequestHeader('Content-type', 'application/json; charset=UTF-8');//метод настройки http запросов
        request.send();// запускает запрос

        // status содержит код ответа с сервера (404), код отвечает в каком состоянии находиться сервер
        // statusText ok not found
        //responseText содержит текст ответа сервера / response
        // readyState содержит текущее состояние запроса

        request.addEventListener('readystatechange', function(){
            if (request.readyState ===4 && request.status ==200){
                let data = JSON.parse(request.response);

                inputUsd.value = inputRub.value/data.usd;
            } else {
                inputUsd.value = 'Что-то пошло не так';
            }
        });

    });


    // 5 видов аргументов
    // 1. Method метод кот общается клиент с сервером
    //     get получаем данные с сервера
    //     post позволяет отправлять данные на сервер
    // 2.URL путь к серверу
    // 3. async по умолчанию стоит true, если false, то сервер не сможет взаимодействовать со страницей
    // 4. login
    // 5. password