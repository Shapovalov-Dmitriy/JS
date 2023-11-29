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
