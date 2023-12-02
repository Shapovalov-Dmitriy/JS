// JavaScript для верстальщика

// =========================================================================
// Тип данных number (число).

//  Переменная
// let num = 10;
// console.log(num);

// num = 20;
// console.log(typeof num);
// console.log(num);

// Тип данных 'string' (строка)
//  Для трок используются одинарные и двойные кавычки ('', "")
// 'string'
// "string"
// Так же используются обратные кавычки (``)
// В обратных кавычках можно использовать значения переменных ${let}

/*
let num = 39;

let someString = `Мне ${num} лет.`;
console.log(someString); // Вернет результат " Мне 39 лет ".
*/

// let str = "10";
// console.log(typeof str);
// console.log(str);

// Константа
// const num = 25;
// console.log(typeof num);
// console.log(num);

// Тип данных Object (обьект).
/*
const user = {
    name: "Dmitriy",
    age: 39,
};
// Посмотреть тип данных
console.log(typeof user);
// Поменять значение  ключа name и присвоить ему новое значение.
// Присвоить можно любой тип данных
user.name = "Diman";
user.age = "money"; //был тип данных число, стал "строка".
// В объект можно присвоить новый объект
user.friends = {
    "first friend": "Michael", // Если ключ состоит из двух и более слов, то его заключают в кавычки ( "" ).
    "last friend": "Alex",
};
// Посмотреть что содержит объект
console.log(user);

// Получить доступ к вложенному объекту и изменить значение ключа состоящее из двух и более слов
user.friends["last friend"] = "Irina";
// Посмотреть что содержит ключ в объекте
console.log(user.friends);

// Посмотреть что содержит ключ во вложенном объекте
console.log(user.friends["first friend"]);
console.log(user.friends["last friend"]);
*/

// Математические Операторы

// сложение (+)
// Вычитание (-)
// Деление(/)
//Умножение(*)

// Оператор сложения может складывать числа, строки, числа и строки
// 100 + 50 вернет 150 (число)
// 100 + "50" вернет "10050" (строка)
// 100 + "Привет" вернет "100Привет" (строка)

// Преобразование типов данных
// Преобразование в число Number() или "+"
// Преобразование в строку string()

// let age = "39"; // Тип данных строка

// console.log(typeof age);
// console.log(age);
// console.log(Number(age)); // Тип данных число

// let age2 = 40;
// console.log(typeof age2);
// console.log(age2);
// сложение значений переменных с преобразованием в число
// let num = +age + age2; // вариант №1
// let num = Number(age) + age2; // вариант №2

// console.log(typeof num);
// console.log(num);

// Если пытаться преобразовать в число строку состоящую из букв (например "Привет"),
// то результатом будет NaN - Это означает (не число) или операция не может быть выполнена.
// Потому что нельзя преобразовать в число строку состоящую из букв.

// console.log(Number("Привет")); // результат NaN.

// Все поераторы "- / *" кроме оператора "+", будут переводить строку в число автоматически.
// но если в строке будут буквы, то результаттом тоже будет NaN.

// Конкатинация строк
// С помощьюпоератора "+" можно складывать переменные содержащие строки и числа в предложения
// let hello = "Привет",
//     world = " Мир",
//     im = " Я",
//     happy = " Счастлив ",
//     num = 24;

// let result = hello + world + im + happy + num;
// console.log(result); // Результат "Привет Мир Я Счастлив 24"

// Операторы сравнения
// Все операторы сравнения возвращают Булевый (Boolean) тип данных
// Значения
// true - истина
// false - ложь

// Оператор отрицания "!" меняет значение на обратное true на false и на оборот.

// Больше, больше или равно >, >=
// Меньше, меньше или равно  <, <=
// Не строгое равенство == Не делает сравнение по типу данных
// Строгое равенство === Делает сравнение по типу данных
// Не строгое не равенство !=
// Строгое не равенство !==

// Примеры

// let num1 = 10,
//     num2 = 20;
// console.log(num1);
// let result = num1 !== num2;
// console.log(result);

// Условные ветвления

// Операторы if(){}, else{}

// let num1 = 10;
// let num2 = 30;
// if (num1 < num2) {
//     // если условие выполнено (вернуло "true"), выполняем программу
//     console.log("Yes");
// } else {
//     console.log("No");
// }
// if (num1 > num2) {
//     // если условие выполнено (вернуло "true"), выполняем программу
//     console.log("Yes");
// } else if (num2 === 30) {
//     console.log("Yes = 30");
// } else {
//     console.log("No");
// }

/*
// проверка на наличие объекта

const page = document.querySelector(".page");

//проверяем существует ли объект.

if (page) {
    // Если существует, то выполняем код. Если не существует, не выполняем.
    console.log(page);
}
*/
/*
// проверка на наличие коллекции
const listItem = document.querySelectorAll(".list__item");

if (listItem.length) {
    // Если существует, то выполняем код. Если не существует, не выполняем.
    console.log(listItem);
}
*/

// Логические поераторы ||(или) &&(и) !(не, оператор отрицания).
// let numOne = 50,
//     numTwo = 30;
/*
// Если numOne больше numTwo или numOne равно 50.
if (numOne > numTwo || numOne === 50) {
    // Если хоть одно из значений вернет true, выполняем код.
    // выполняем код
    console.log("выполняем код");
}
*/

// Если numOne больше numTwo и numOne равно 50.
// if (numOne > numTwo && numOne === 50) {
//     // Если хоть одно из значений вернет false, не выполняем код.
//     // выполняем код
//     console.log("выполняем код");
// }

/*
// contains('.class') Проверяет наличие или отсутствие класса у блока или элемента
// classList получить доступ к атрибуту класс у блока.

// Находим блок
const blockElement = document.querySelector(".block");
// Проверяем: Если блок не содержит класс active, то добавляем.
if (!blockElement.classList.contains("active")) {
    blockElement.classList.add("active"); // когда пишем classList, точку не ставим!!!
}
*/

//Область видимости переменных
//Облавть видимости работает по принципу "Снаружи внутрь". С наружи внутрь видим переменную, из нутри наружу нет.
/*
let someNum = 10; //Видна на глобальном уровне
if (10 > 5) {
    let someNum = 20;
    console.log(someNum);
}
//  Переменная объявленная глобально и переменная объявленная внутри фигурных скобок (например внутри условного ветвления или фнутри функции),
// Это разные переменные, даже если у них одинаковые нахвания.
//
console.log(someNum);
*/
/*
// если нужно объявить переменную снаружи, а использовать внутри, то можно делать так.
let someNum;
if (10 > 5) {
    someNum = 20;
    console.log(someNum);
}
*/

//  Функции
/*
// Создание функции
function setConsole(someData) {
    // переменная someData объявлена внутри функции
    // Выполняемый код
    console.log(someData);
}
//  Вызов функции
setConsole("привет"); // передаем значение в переменную someData
*/
// return возвращает результат выполнения функции.
/*
function getSum(numOne, numTwo) {
    return numOne + numTwo; //выполнится сложение значений переменных.
}
// Вызов функции и передача переметров в переменные.
getSum(5, 6);
console.log(getSum(5, 6));
// Вызов функции можно назначить в переменную и потом уже ее вызвать.

let result = getSum(5, 6);
console.log(result);
*/

/*
// переменным в функции можно задавать значение по умолчанию
function getSum(numOne, numTwo = 10) {
    return numOne + numTwo; //выполнится сложение значений переменных.
}
// Вызов функции и передача переметров в переменные.
// если параметр не будет передан, то будет использовано значение по умолчанию.
getSum(5);
let result = getSum(5);
console.log(result);
*/
/*
// Замена текста при нажатии кнопки
let text = document.querySelector(".block__text");
let btn = document.querySelector(".block__button");

btn.addEventListener("click", function () {
    text.textContent = "hello";
});
*/
/*
// Массивы

// Массив это некий список чего-то. В массиве иогут быть другие массивы, объекты, булевые и примитивные данные.

let someArray = [];

// Массив состоит из пары индекс: значение. Индекс всегда начинается с 0!!!

someArray.push(24);
someArray.push("Привет"); // Оператор push() позволяет добавлять в массив данные всегда добавляет данные в конец массива
console.log(someArray.length); // Метод length позволяет узнать длинну массива

console.log(someArray[1]); //Обращаемся к значению через индекс.(как-бы говорим "возьми с полки [1] содержимое и дай мне")

console.log(typeof someArray);
console.log(someArray);
*/

// Работа с DOM

// Коллекции
//  Коллекция это список одинаковых элементов с одинаковым классом.

// получить коллекцию в переменную
// Коллекция получается в переменную через querySelectorAll
/*
const itemLists = document.querySelectorAll(".list__item");

console.log(typeof itemLists);
console.log(itemLists);

console.log(itemLists.length); /* // Получить длину коллекции
*/
/*
// Метод перебора массива (коллекции)
array.foreEach((element) => {
    // какой-то код
});
*/
/*
// Перебираю коллекцию и вывожу в консоль каждый пункт
// Переменная itemList создается ТОЛЬКО внутри этого цикла и в нее записывается результат перебора
itemLists.forEach((itemList, index, array) => {
    console.log(itemList); // Значение
    console.log(index); // Индекс (если нужно)
    console.log(array); // сам массив(коллекция) (если нужно)
});
*/
/* 
itemLists.forEach((itemList, index) => {
    
    // console.log(itemList); // Значение
    // console.log(index); // Индекс (если нужно)
    
    console.log(`Объект ${itemList} с индексом ${index}`);
});
*/
/*
// получить первый попавшийся элемент с таким классом или параметром (НЕ КОЛЛЕКЦИЯ), не нужно использовать цикл
const itemLists = document.querySelector(".list__item");
console.log(itemLists);
*/
/*
// проверка на существование одного объекта, элемента.
const list = document.querySelector(".list");
console.log(list);
// Проверяем. Если объект существыет, то выполняем код.
if (list) {
    console.log("Есть!");
    // выполняем код
}
*/
/*
// проверка на существование коллекции объектов, элементов.
const itemLists = document.querySelectorAll(".list__item");
console.log(itemLists);
//  Проверяем коллекцию на заполненость (что коллекция не пустая).
if (itemLists.length) {
    console.log("Есть коллекция");
}
*/

// Работа с классами
/*
const list = document.querySelector(".list");
list //Обращаемся к элементу через переменную
list.classList //получаем доступ к селектору "class" объекта. 
list.classList.add();// Добавить класс. внутри скобок ставим кавычки ('').ТОЧКУ НЕ СТАВИМ; 
list.classList.remove(); // Удалить Класс. внутри скобок ставим кавычки ('').ТОЧКУ НЕ СТАВИМ;
list.classList.toggle(); // Переключаем Класс. Если есть класс, то уберет. Если нет класса, то добавит. Внутри скобок ставим кавычки ('').ТОЧКУ НЕ СТАВИМ;
*/
/*
const list = document.querySelector(".list");
list.classList.add("active"); // Добавить класс active элементу с классом list

// Проверка "Есть ли класс у объекта?"

// contains() // проверяет есть ли класс у объекта
// Проверка. Если элемент  существует и у него есть нужный класс, то выполняем код.
if (list && list.classList.contains("active")) {
    console.log("Класс есть!");
} else {
    console.log("Класса нет(");
}
*/

// Проверка "Есть ли класс у элементов коллекции?"
// Получаем коллекцию
// const itemLists = document.querySelectorAll(".list__item");
/*
//  Проверка на существование объектов в коллекции
if (itemLists.length) {
    // Перебор объектов коллекции
    itemLists.forEach((item) => {
        //  Проверка на существование класса в каждом элеметне коллекции
        if (item.classList.contains("active")) {
            // Если класс есть, то удаляем класс
            item.classList.remove("active");
            // Вывод в консоль (не обязательно)
            console.log("Класс есть!");
        } else {
            console.log("Класса нет(");
        }
    });
}
*/
/*
//  Проверка на существование объектов в коллекции
if (itemLists.length) {
    // Перебор объектов коллекции
    itemLists.forEach((item) => {
        //  Проверка на существование класса в каждом элеметне коллекции
        if (!item.classList.contains("active")) {
            // Если класса нет, то добавляем класс
            item.classList.add("active");
            // Вывод в консоль (не обязательно)
            console.log("Класс есть!");
        } else {
            console.log("Класса нет(");
        }
    });
}
*/
/*
// =========== home work ============
const list = document.querySelector(".list");
const btn = document.querySelector(".block__button");
const blockText = document.querySelector(".block__text");

// console.log(list);
if (list && !list.classList.contains("green")) {
    list.classList.add("green");
}
if (btn) {
    btn.addEventListener("click", () => {
        list.classList.toggle("green");
    });
}

blockText.addEventListener("mouseover", () => {
    list.classList.remove("green");
});
blockText.addEventListener("mouseout", () => {
    list.classList.add("green");
});

const collectionsLinks = document.querySelectorAll(".list__link");
const collectionsLists = document.querySelectorAll(".list__item");
if (collectionsLinks.length) {
    collectionsLinks.forEach((e) => {
        if (e.classList.contains("red")) {
            e.addEventListener("click", () => {
                e.classList.toggle("yellow");
            });
        }
    });
}

// =========== home work-2 ============
// dark theme
const themeBtn = document.querySelector(".theme__btn"),
    page = document.querySelector("body");
if (themeBtn) {
    themeBtn.addEventListener("click", () => {
        page.classList.toggle("dark-theme");
    });
}
// Переключение вида карточек

const itemCard = document.querySelectorAll(".cards");
const btnLine = document.querySelector(".btn-line");
const btnCube = document.querySelector(".btn-cube");

if (btnLine) {
    btnLine.addEventListener("click", function () {
        if (itemCard.length) {
            itemCard.forEach((e) => {
                e.classList.add("line");
            });
        }
    });
}
if (btnCube) {
    btnCube.addEventListener("click", () => {
        if (itemCard.length) {
            itemCard.forEach((e) => {
                e.classList.remove("line");
            });
        }
    });
}
*/
/*
// =========== burger menu логика №1 =============
1) Получае объект бургер 
2) Получаем объект меню который нужно открыть
3) Вешаем обработчик событий click на бургер (п.1)
4) Добавляем класс к бургеру (п.1)
5) Добавляем класс к меню (п.2)
*/
/*
const burger = document.querySelector(".some-menu__icon");
const menu = document.querySelector(".some-menu__body");

if (burger) {
    burger.addEventListener("click", () => {
        menu.classList.toggle("menu-active");
        burger.classList.toggle("menu-active");
    });
}
*/
/*///////////// Наследование //////////////// */
/*
Принцип наследования это: взять блок, с помощью closest добавить в переменную.
Повешать событие на элемент внутри этого блока и если у этого элемента есть нужный класс, выполнить действие.
*/
/*
// =========== burger menu логика №2 =============
1) Получае объект бургер 
2) Получаем объект меню родительский
3) Вешаем обработчик событий click на бургер (п.1)
4) Добавляем класс к меню (п.2)
*/
/*
const burger = document.querySelector(".some-menu__icon");
// Получаем родительский элемент burger с классом ".some-menu"
const menu = burger.closest(".some-menu");

if (burger) {
    burger.addEventListener("click", () => {
        menu.classList.toggle("menu-active");
        burger.classList.toggle("menu-active");
    });
}
*/
/*
=========== HTML ==========
// Получили одительский блок у кнопки с классом class="some-menu" 
<div class="some-menu">
          <nav class="some-menu__body">
            <ul class="some-menu__list">
              <li class="some-menu__item">
                <a href="#" class="some-menu__link">пункт</a>
              </li>
              <li class="some-menu__item">
                <a href="#" class="some-menu__link">пункт</a>
              </li>
              <li class="some-menu__item">
                <a href="#" class="some-menu__link">пункт</a>
              </li>
              <li class="some-menu__item">
                <a href="#" class="some-menu__link">пункт</a>
              </li>
              <li class="some-menu__item">
                <a href="#" class="some-menu__link">пункт</a>
              </li>
            </ul>
          </nav>
// Кнопка для которой получаем родительский блок
          <button class="some-menu__icon">
            <span></span>
          </button>
        </div>

================= SCSS ================
// В стилях знак (&) нужно поставить после имени класса что будет означать искать выше а не внутри
.menu-active &

*/
/*
////////////  Наследование пример //////////////
1) Есть два списка с элементами
2) Нужно добавить фоновый цвет списку только если у него в родителях есть класс ".block-list"
*/
/*
// Получаем коллекцию  всехорбъектов с классом list
const listItems = document.querySelectorAll(".list");
// Проверяем на существование коллекции
if (listItems.length) {
    // Бегаем по каждому из них
    // item рождается в нутри функции и в нее передается каждый из перебираемых объектов
    // вместо item можно задать любое имя
    listItems.forEach((item) => {
        // Проверяем, если у коллекции в родителях есть блок с классом block-list, выполняем код
        if (item.closest(".block-list")) {
            // Если в родителях (предках) есть  блок с классом block-list, добавляем класс green
            item.classList.add("green");
        }
    });
}
*/
/*
const linkItems = document.querySelectorAll(".list__link");
if (linkItems.length) {
    linkItems.forEach((linkItem) => {
        linkItem.addEventListener("click", (e) => {
            linkItem.classList.add("link-active");
            // Отменяет действие по умолчанию. (необходимо когда нужно отменить действие попумолчанию и\ или назначить потом свое действие или поведение.)
            e.preventDefault();
        });
    });
}
*/
// \\\\\\\\\\\\\\\\\\делегирование событий\\\\\\\\\\\\\\\\\\

// Смысл делегирования: Повесить обработчик события на родителя или сразу на весь документ (страницу) и добавлять нужные события нужным елементам не навешивая каждый раз одно и тоже событие.
/*
document.addEventListener("click", (e) => {
    // target это именно тот элемент на который кликаем
    const targetElement = e.target;
    /*
    // проверяем не наш ли элемент кликнут
    // вариант №1
    // пишем класс нужного элемента
    if (targetElement.classList.contains("list__link")) {
        // вешаем класс на объект
        targetElement.classList.add("link-active");
        // Отменяем действие по умолчанию (если нужно).
        e.preventDefault();
    }
    */
    /*
    // вариант №2
    // проверяем не наш ли элемент кликнут? Ищем предка с нужным классом ".list__link"
    // CLOSEST ИЩЕТ НУЖНЫЙ КЛАСС И У ПРЕДКОВ И У САМОГО СЕБЯ (У ЭЛЕМЕНТА)
    // пишем класс нужного элемента
    if (targetElement.closest(".list__link")) {
        // вешаем класс на объект
        targetElement.closest(".list__link").classList.add("link-active");
        // Отменяем действие по умолчанию (если нужно).
        e.preventDefault();
    }
*/
    /*
Задача: 
1) При клике на ссылку, добавить\убрать класс
2) При клике не на ссылку убрать все классы link-active с объектов .list__link
*/
    /*
    if (targetElement.closest(".list__link")) {
        targetElement.closest(".list__link").classList.add("link-active");
        e.preventDefault();
    } else {
        const listLinks = document.querySelectorAll(".list__link");
        listLinks.forEach((linkList) => {
            linkList.classList.remove("link-active");
        });
    }
*/
    // ......... дальше можно навешивать другие проверки и что-то делать с другими элементами на странице в данном случае по событию КЛИК.
});
*/