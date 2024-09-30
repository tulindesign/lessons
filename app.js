// Упражнение - функция разрбота URL

/* 
    Дан произвольный url
    'https://purpleschool.ru/course/javascript'

    Нужно сделать функция, которая будет выводить в консоль
    - Протокол
    - Доменное имя
    - Путь внутри сайта

*/


let getUrlPrompt = prompt('Вставьте ваш URL');
while (!getUrlPrompt.includes('http')) {
    getUrlPrompt = prompt('Не правильная ссылка. Вставьте другой URL');
}getPartsUrl(getUrlPrompt);


function getPartsUrl(url) {
    const [protocol, _1, domain, ...siteWay] = url.split('/');
    const getFullLink = [protocol,'/',domain,...siteWay];

    console.log(`Ваша ссылка 
        ${url}
        
        Протокол: 
        ${protocol}
        
        Домен: 
        ${domain}
        
        Путь на сайте: 
        /${siteWay.join('/')}
        
        И снова ваша ссылка:
        ${getFullLink.join('/')}
        `)
}








