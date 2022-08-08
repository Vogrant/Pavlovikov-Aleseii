// DeadLine: 11.08.2022
//
// 1) Задание на классы:
//     1.1) Создать абстрактный класс Human
// Обязательные свойства: рост, вес, имя, год рождения(использовать формат Date), пол, наличие инвалидности(boolean).
//     Обязательные методы: приветствие('Привет, меня зовут ИМЯ_ЧЕЛОВЕКА'), возможность смены имени, изменить инвалидность, получить все данные о человеке.

class AbstractHuman {
    constructor(height, weight, name, dOB, gender, isDisabledPerson = false) {
        this.height = height;
        this.weight = weight;
        this.name = name;
        this.dOB = dOB;
        this.gender = gender;
        this.isDisabledPerson = isDisabledPerson;
    }

    meetByName(){
    return `Привет, меня зовут ${this.name}`
    }

    set setNewName(name){
        this.name = name;
    }

    changeDP(){
       return  this.isDisabledPerson = !this.isDisabledPerson
    }

    get grtInfo(){
        return {
            height : this.height,
            weight : this.weight,
            name : this.name,
            dOB : this.dOB,
            gender : this.gender,
            isDisabledPerson : this.isDisabledPerson,
        }
    }

}

// 1.2) Создать два класса(которые должны зависеть от абстракции):
// - Фронтенд разработчик
// - Строитель

class FrontEndDevoloper extends AbstractHuman{
     constructor(startCarrier = new Date(), previousCompany = [], height, weight, name, dOB, gender, isDisabledPerson = false) {
         super(height, weight, name, dOB, gender, isDisabledPerson = false);
         this.startCarrier = startCarrier;
         this.previousCompany = previousCompany;

         this.previousCompany = [
             {
                 start: new Date('01-21-2021'),
                 end: new Date('03-23-2022'),
                 salaryPerMonth: 100,
                 position: 'middle',
                 companyName: 'Oracle',
             },
             {
                 start: new Date('01-04-2022'),
                 end: new Date('06-30-2022'),
                 salaryPerMonth: 200,
                 position: 'middle',
                 companyName: 'freelance',
             }
         ]
     }


     meetByName() {
         return super.meetByName() + `, я Фронтенд разработчик. Работаю с ${this.startCarrier}`;
     }

     salaryOfAllTime(){

         const sumSalaryInEachCompany = this.previousCompany.map((elem )=>{

             const  msToMonths = 2629800000;
             const first = new Date(elem.end - elem.start ).getTime();
             return  Math.round(first / msToMonths) * elem.salaryPerMonth ;


         });
         return  sumSalaryInEachCompany.reduce((acc , sum) =>  acc + sum, 0)
     }

     expAtPreviousCompany (company) {
       return   this.previousCompany.filter(ele => ele.companyName === company);
     }

     addPreviousCompany(start = new Date(), end = new Date(), salaryPerMonth  = Number, position = toString(), companyName = toString()){
         const newCompany ={
             start,
             end,
             salaryPerMonth,
             position,
             companyName,
         };
         this.previousCompany.push(newCompany)
     }
}

// 1.3) Класс Фронтенд разработчик:
//     Добавить доп. свойства:
// - начало карьеры(формат Date),
// - предыдущие компании(массив объектов
// {
//     start: new Date(),
//         end: new Date(),
//     salaryPerMonth: number,
//     position: 'middle' или 'junior' или 'senior',
//     companyName: 'Oracle',
// })
// Добавить доп. методы:
// - изменить приветствие на 'Привет, меня зовут ИМЯ_ЧЕЛОВЕКА, я Фронтенд разработчик. Работаю с 03.08.2022.(использовать начало карьеры)'.
// - добавить метод, который покажет сколько всего заработал за всю карьеру (использовать массив предыдущие компании,
//     высчитать количество отработанных ПОЛНЫХ месяцев в каждой компании умноженный на salaryPerMonth для получения дохода в одной компании,
//     в результате должна быть общая сумма со всех компаний(общий доход за всю историю))
// - добавить метод, который позволит используя имя компании показать историю моей работы в ней(вывести объект из массива предыдущие компании по ее имени)
// - возможность добавить компанию в массив предыдущих компаний по примеру объекта выше
//
// 1.4) Класс Строитель:
//     Добавить доп. свойства:
// - локация строительного объекта(строка)
// - набор инструментов (массив строк ['кирка', 'топор'])
// - скорость выполнения работы на один квадратный метр (количество минут - number)
// Добавить доп. методы:
// - метод построить дом (принимает в себя количество квадратных метров) - должен показать сколько дней займет постройка дома текущим мастером
// если меньше одного дня - показать количество часов
// если больше одного дня - показать количество дней и часов
// если больше недели - показать количество недель дней и часов
// если больше месяца - показать количество месяцев недель дней и часов
// если больше года - показать количество лет месяцев недель дней и часов

class Worker extends AbstractHuman {
    constructor(buildingLocation = '', tools =[], speedWork = Number ) {
        super();
        this.buildingLocation = buildingLocation;
        this.tools = tools;
        this.speedWork = speedWork; // minute

    }


    houseBuild ( squareMeter ) {

        const squareMetersToMinutes = squareMeter * this.speedWork;// all minutes
        const minToHours = 60;
        const minToHoursAll = Math.round (squareMetersToMinutes / minToHours);//all minutes -> hours
        const hourToDay = 24;
        const hourToWeek = 168;
        const hourToMonths = 730.5;
        const hourToYears = 8766;
        console.log(minToHoursAll, 'all hours');
        if (minToHoursAll >= hourToYears){

            let year =  (minToHoursAll/hourToYears)
            let ryear =  Math.floor(year)
            let months = (year - ryear) * 12;
            let rmonths = Math.floor(months)
            let week = (months - rmonths) * 4;
            let rweek = Math.floor(week);
            let days = (week - rweek) * 7;
            let rdays = Math.floor(days);
            let hours = (days - rdays) * 24;
            let rhous = Math.floor(hours)

            return `Постройка дома займет ${ryear} год/а ${rmonths} месяц/а ${rweek} неделя/и ${rdays} дня/й ${rhous} часа/ов`
        }else if (minToHoursAll >= hourToMonths){

            let months = minToHoursAll / hourToMonths;
            let rmonths = Math.floor(months);
            let week = (months - rmonths) * 4;
            let rweek = Math.floor(week);
            let days = (week - rweek) * 7;
            let rdays = Math.floor(days);
            let hours = (days - rdays) * 24;
            let rhous = Math.floor(hours)

            return `Постройка дома займет ${rmonths} месяц/а ${rweek} неделю/и ${rdays} дня/й ${rhous} часа/ов`
        } else if (minToHoursAll >= hourToWeek){

            let week = minToHoursAll / hourToWeek;
            let rweek = Math.floor(week);
            let days = (week - rweek) * 7;
            let rdays = Math.floor(days);
            let hours = (days - rdays) * 24;
            let rhous = Math.floor(hours)

            return `Постройка дома займет ${rweek} неделю/и ${rdays} дня/й ${rhous} часа/ов`
        }else if (minToHoursAll >= hourToDay){

            let days = minToHoursAll / hourToDay ;
            let rdays = Math.floor(days);
            let hours = (days - rdays) * 24;
            let rhous = Math.floor(hours)

            return `Постройка дома займет ${rdays} дня/й ${rhous} часа/ов`
        }else if (minToHoursAll >= minToHours ){

            let hours = minToHoursAll / minToHours;
            let rhous = Math.floor(hours)

            return `Постройка дома займет ${rhous} часа/ов`
        }



    }

}

