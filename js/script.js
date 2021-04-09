const questions = [
    {
      question: 'Кто виноват в том  что вся планета болеет коронавирусом',
      answer: 'Китайцы',
    },
    {
      question: 'Назовите фамилию создателя периодической системы химических элементов',
      answer: 'Менделеев',
    },
    {
      question: 'Назовите фамилию одного из авторов теории относительности',
      answer: 'Эйнштейн',
    },
    {
      question: 'Назовите столицу Германии',
      answer: 'Берлин',
    },
    {
      question: 'Сколько президентов было у Республики Беларусь',
      answer: '1',
    },
    {
      question: 'Назовите единственный спутник планеты Земля',
      answer: 'Луна',
    },
    {
      question: 'Сколько дней в високосном году',
      answer: '366',
    },
    {
      question: 'Фамилия автора картины "Утро в сосновом лесу"',
      answer: 'Шишкин',
    },
    {
      question: 'Как зовут знаменитого португальского футболиста Роналду',
      answer: 'Криштиану',
    },
    {
      question: 'Фамилия первого человека побывавшего на Луне',
      answer: 'Армстронг',
    },
   ]
const dataTypes = [
    false,
    's',
    0,
    null,
    undefined,
    {},
    [],
    10n,
    Symbol(),
    () => {},
]
function answerQuestions(questions){
    let userAnswers = ""
    let right = 0
    for (let i = 1; i - 1 !== questions.length; i++){
        if (questions[i-1].answer === prompt(questions[i-1].question)){
            userAnswers += `вопрос ${i} - верно\n`
            right++
        }else userAnswers += `вопрос ${i} - неверно\n`
    }
    alert(userAnswers)
    alert(`Итог: ${right} правильных ответов из 10`)
}
function countA(){
    let userStr = (prompt("Введите строку чтобы посчитать сколько в ней 'А'")).toLowerCase()
    let count = 0
    for (let i = 0; userStr.indexOf("а", i) !== -1; count++){
        i = userStr.indexOf("а", i) + 1
    }
    alert(count)
}
function getInfElem(){
    for (let i = 0; i !== dataTypes.length; i++ ){
        if (typeof(dataTypes[i]) === typeof(Symbol())){
            console.log("\n")
            console.log('значение: ', dataTypes[i])
            console.log('тип: ', typeof(dataTypes[i]))
            console.log('преобразование к числу: ', "can't convert symbol to number")
            console.log('преобразование к строке: ', String(dataTypes[i]))
            console.log('преобразование к булеву: ', Boolean(dataTypes[i]))
            continue
        }
        console.log("\n")
        console.log('значение: ', dataTypes[i])
        console.log('тип: ', typeof(dataTypes[i]))
        console.log('преобразование к числу: ', Number(dataTypes[i]))
        console.log('преобразование к строке: ', String(dataTypes[i]))
        console.log('преобразование к булеву: ', Boolean(dataTypes[i]))
    }
}
switch (+prompt("Введите номер задания")) {
    case 1:
        answerQuestions(questions)
        break
    case 2:
        countA()
        break
    case 3:
        getInfElem()
        break
    default:
        alert("Неверное значение")
}
