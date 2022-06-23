/*
1) Создайте массив длинною в 15 елементов, заполните его случайными числами от 0 - 20.
ВАЖНО, ЭТОТ МАССИВИ БУДЕТ УЧАВСТВОВАТЬ ВО ВСЕХ ЗАДАНИЯХ НИЖЕ. И НЕ ДОЛЖЕН БЫТЬ ИЗМЕНЕН!
ВСЕ ОПЕРАЦИИ БУДУТ НАД ЭТИМ МАССИВОМ.
*/

const startArray = [...Array(15)].map( el => Math.floor(Math.random() * 20) );


/*
2) Выведите все элементы которые делятся на 3 в консоль
*/

startArray.forEach((el, index) => {
    if (el % 3 === 0 ) {
        console.log(`Элемент массива № ${index} -- ${el} === делится на 3`);
    }
});

// Либо можно получить новый массив с исходного в котором будут все нужние элементы

const twoArray = startArray.filter(el=>!(el % 3));

console.log(twoArray);


/*
3) Выведите первый элемент, который больше 7, если такого нет, напишите что все элементы меньше 7и
*/

const searchElement = startArray.find( el=>el > 7 );

console.log(searchElement ? searchElement : 'все элементы меньше 7и');


/*
4) Выведете массив. в котором каждый элемент умножен на 2. (ИСХОДНЫЙ МАССИВ ИПОЛЬЗУЕМ ИЗ ПУНКТА 1)
*/

const fourArray = startArray.map(el=>el*2);

console.log(fourArray);


/*
5) Сложить все четные элементы массива.
*/

const countElements = startArray.reduce((count, element)=>(element % 2) ? count + element : count);

console.log(countElements);


/*
6) ЗАДАЧА НА ПОИСКАТЬ.
Удалите из массива первый элемент и выведете резаультат, затем удалите последний элемент и выведите результат
*/

const sixArray = [...startArray];

const firstElem = sixArray.shift();
const lastElement = sixArray.pop();

console.log(`удалён первый элемент массива со значением ${firstElem}`);
console.log(`удалён последний элемент массива со значением ${lastElement}`);


/*
ДАНО:

const arrayOne = ['dog', 'cat', 'bird', 'rabbit', 'horse'];

const arrayTwo = ['apple', 'car', 'cat', 'ball', 'horse'];

Определить какие элементы массива arrayTwo есть в arrayOne.

вывести массив с этими элеентами
*/

const arrayOne = ['dog', 'cat', 'bird', 'rabbit', 'horse'];
const arrayTwo = ['apple', 'car', 'cat', 'ball', 'horse'];

const diffArray = [];

arrayTwo.forEach(el => arrayOne.includes(el) ? diffArray.push(el) : null);

console.log(diffArray);

