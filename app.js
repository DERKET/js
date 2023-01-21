//выражение

'abc' // 'abc'
10 // 10
a + b // cумма a+b
'Good' + 'Evening' // 'Good Evening'
a <= b  || c!== d // true или false
myFunction(c,d) //результат функции

//выражения с побочными действиями

a= 5 // Не только вовращает значение но и выполняет другие действия

b++

myFunction(c, d)

// ОБЪЯВЛЕНИЕ ПЕРЕМЕННЫХ (при помощи let const) раньше разработчики использовали только var 
//сonst используется если значение не будет менятся
//let используется если можно поменять значение


let a  //объявления
const c = 10 //объявления и присваивание
a = true //присваевание


//ТИПЫ ДАННЫХ(примитивные типы string, boolean, number, null, undefined, symbol) и ссылочный тип (object)
//1)string 'Hello World'
//2)boolean true false
//3)number 10
//4)null задает тот кто пишет код 
//5)undefined появляется в консоли если значение не найдено 
//6)symbol
//7)object это ссылочный тип внутри переменныъ находятся только ссылки на объект
//(массив не является отдельным типом данных т.к массив это тоже объект)
// когда мы присваиваем в значение переменной какой то объект то значение будет хранить только ссылку на объект
//cам объект будет храниться в другом месте поэтомиу объект это ссылочный тип

//создадим константу с названием myMotherName присвоем ей значение 'natysia kakysia'

const myMotherName = 'natysia kakysia'
 console.log(myMotherName)

 let myMotherName = 'natysia kakysia'
 console.log(myMotherName)
 myMotherName = 'Chyrchella'

 const car = 'tesla'
 console.log(car)

 //практика объекты (примитивные: )

 const aboutMother = { 
    age: 52,
    money: 999,
    colorEyes: 'blue'
 }

 aboutMother.nature = 'kakysia' //добавляем пару ключ значения к ранее созданному объекту

 aboutMother.age = 30
 aboutMother.hairColor = 'brown'

 console.log(aboutMother)

 //доступ к тому или иному свойству объекта возможен через оператор точка(.) после точки пишется название свойтсва(ключ), далее после оператора присвоения пишется новое значение
 //Например , нам надо поменять возвраст, обратимся к свойству age 
 //aboutMother.age = 30


 //присвоем стрелочную функцию переменной a
 //внутри фигурных скобок будет тело функции

 const a = () => {
    console.log('Hey there')
 }

 a() 

 /*Динамическая типизация. Языки с динамической
типизацией допускают изменение типа во время 
рабочего цикла. Это значит, что запустив выполнение
кода, компилятор/интерпретатор, увидев переменную и
её значение, сам определит тип данных.
В этом случае, тип также принудительно задан, просто 
JS сам определяет его. */

let a =10

a = true 

a= 'Bogdan'

a = undefined


function a(){  
   console.log('Hey there')                //a-название функции, то что в скобке часть синтаксиса фнкции,
}                                          // то что в фигурных скобках тело функции                                          //внутри фигурных скобок будет тело функции это инструкция что именно должна делать данная функция

a() //hey there                            //так мы вызвали функцию  вызов фунции происходит с помощью () после названия  функции Dыведется hey there

a = 10                                     //теперь присвоем a значение 10. На этом этапе это уже не функция и если мы попробуем вызвать ее как функцию, то получим Unexpected eror

a()//выведет ошибку


const vidiNatys = {
   vid1: 'Kakysia',
   vid2: 'Chyrchella',
   vid3: 'Krasotysya'
}

console.log(vidiNatys.vid2)

const myAnymals = {
   Animal: 'dog'
}

myAnimals['popular'] = true

console.log(myAnimals)

const breedPropertyName = 'breed'

myAnimals[breedPropertyName] = 'shpic'

console.log(myAnimals)






const myCity= {
   city: 'New York'
}

myCity['popular'] = true

console.log(myCity)

const countryPropertyName = 'country'

myCity[countryPropertyName] = 'USA'

console.log(myCity)



//ОБЪЕКТЫ

const.myCity = {  //создаем константу с значение my City     МЕТОД
   city: 'New York', //делаем элемент константы myCity 
   cityGreeting(){     //используем метод (cityGreeting)
     console.log('Greetins!!') //Выводим в консоль ЭТО ВСЕ СОКРАЩЕННЫЙ О БЪЕКТ ЗАПИСИ МЕТОДОВ
   }
 }
 
 myCity.cityGreeting()   // ВЫЗОВ МЕТОДА
  'Greetings'
 
 
 myCity.city// доступ к значению свойства
 
 myCity.cityGreeting() //ВЫЗОВ МЕТОДА



 //JSON - JAVASCRIPT OBJECT NOTATION 

 {
   "userId": 1, //значение свойства userId 1
   "id": 1,
   "title": "Test title", //значение свойства title Test title
   "status": { //у свойства status значение это объект у которого так же есть свои свойства
      "completed": false
   }
 }

 //Конвертация из JSON в объект делается с помощью метода

 JSON.parse()

 //Наоборот из объекта в JSON с помощью метода

 JSON.stringify()


/**

1) JSON Java Object Notation

2) ОПРЕДЕЛЕНИЕ JSON - простой формат обмена данными, удобный для чтения и написания как человеком, так и компьютером. Он основан на подмножестве языка программирования Java











 */

//МУТАЦИЯ JS ПРИМЕР

const person ={
   name: 'bob',
   age: 25
}
/*Копирование ссылки (copy by reference
const person2 = person
   
const person2 = person  
*/

/*Мутаця объекта который ссылается "person2"
person2.age = 26
person2.isAdult = true
*/

/*Мутация также отразилась на переменной "person"
console.log(person.age) //26
console.log(person.isAdult) //true
*/


//Как избежать мутаций

const person ={
   name: 'bob',
   age: 25
}

const person2 = Object.assign({},person)//Если у оьъекта есть вложенные объекты,
                                        //  то ссылки на них сохраняются
person2.age = 26

console.log(person.age) //26
console.log(person.isAdult) //25


//МАССИВ

let cars = ["Mercedess", "Ferrari", "Lamorghini", "AstonMartin"];//cоздали массив

cars[2]

cars.push("bmw") //добавили в массив машину

let lastItem = groceries.pop//удаляет последний элемент

// Для поиска элементов в массиве  существет несколько методов
//indexOf, lastIndexOf, find, findIndex и filter 
//чтобы избежать усложнения сконцентрируемся на indexOf и last IndexOf

let cars = ["Mercedess", "Ferrari", "Lamorghini", "AstonMartin"]; //создаем массив

let resultIndex = cars.indexOf("Ferrari" 0); //метод IndexoF возвращает первый найденый индекс искомого элемента

console.log(resultIndex);































