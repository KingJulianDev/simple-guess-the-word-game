const keyboardRus = [
  1081, 1094, 1091, 1082, 1077, 1085, 1075, 1096, 1097, 1079, 1093, 1098, 1092,
  1099, 1074, 1072, 1087, 1088, 1086, 1083, 1076, 1078, 1101, 1103, 1095, 1089,
  1084, 1080, 1090, 1100, 1073, 1102,
]

const keyboardEng = [
  113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 97, 115, 100, 102, 103, 104,
  106, 107, 108, 122, 120, 99, 118, 98, 110, 109,
]

const arraysRus = [
  (animals = [
    'лев',
    'зебра',
    'коала',
    'панда',
    'змея',
    'носорог',
    'слон',
    'антилопа',
    'гиена',
    'жираф',
    'сурикат',
    'кабан',
    'тигр',
    'бегемот',
    'лемур',
    'волк',
    'овца',
    'крокодил',
    'хомяк',
    'хамелеон',
    'буйвол',
    'лошадь',
    'олень',
    'ягуар',
    'зубр',
    'медведь',
    'кенгуру',
    'ленивец',
    'гепард',
    'рысь',
    'бизон',
    'горилла',
    'баран',
    'верблюд',
    'муравьед',
    'кашелот',
    'выдра',
    'корова',
    'лисица',
    'крыса',
    'бобер',
    'собака',
    'кошка',
    'бабак',
  ]),
  (geography = [
    'Австрия',
    'Вена',
    'Албания',
    'Тирана',
    'Белоруссия',
    'Минск',
    'Бельгия',
    'Брюссель',
    'Болгария',
    'София',
    'Великобритания',
    'Лондон',
    'Венгрия',
    'Будапешт',
    'Германия',
    'Берлин',
    'Греция',
    'Афины',
    'Дания',
    'Копенгаген',
    'Исландия',
    'Рейкьявик',
    'Испания',
    'Мадрид',
    'Италия',
    'Рим',
    'Латвия',
    'Рига',
    'Литва',
    'Вильнюс',
    'Лихтенштейн',
    'Вадуц',
    'Люксембург',
    'Македония',
    'Скопье',
    'Мальта',
    'Валлетта',
    'Молдавия',
    'Кишинев',
    'Монако',
    'Осло',
    'Нидерланды',
    'Амстердам',
    'Норвегия',
    'Польша',
    'Мадрид',
    'Варшава',
    'Португалия',
    'Лиссабон',
    'Россия',
    'Москва',
    'Румыния',
    'Бухарест',
    'Сербия',
    'Белград',
    'Словакия',
    'Братислава',
    'Словения',
    'Любляна',
    'Украина',
    'Киев',
    'Финляндия',
    'Хельсинки',
    'Франция',
    'Париж',
    'Хорватия',
    'Загреб',
    'Черногория',
    'Подгорица',
    'Чехия',
    'Прага',
    'Швейцария',
    'Берн',
    'Швеция',
    'Стокгольм',
    'Эстония',
    'Таллин',
    'Ирландия',
    'Дублин',
    'Рим',
    'Латвия',
    'Рига',
    'Литва',
    'Вильнюс',
  ]),
  (football = [
    'Милан',
    'Сассуоло',
    'Интер',
    'Наполи',
    'Аталанта',
    'Сампдория',
    'Ювентус',
    'Верона',
    'Рома',
    'Кальяри',
    'Лацио',
    'Специя',
    'Фиорентина',
    'Дженоа',
    'Парма',
    'Удинезе',
    'Болонья',
    'Торино',
    'Кротоне',
    'Эмполи',
    'Лейпциг',
    'Бавария',
    'Боруссия',
    'Штутгарт',
    'Айнтрахт',
    'Аугсбург',
    'Вердер',
    'Хоффенхайм',
    'Унион',
    'Байер',
    'Фрайбург',
    'Вольфсбург',
    'Арминия',
    'Герта',
    'Кельн',
    'Шальке',
    'Майнц',
  ]),
  (cars = [
    'акура',
    'ауди',
    'бентли',
    'бугатти',
    'кадиллак',
    'чери',
    'шевроле',
    'крайслер',
    'ситроен',
    'дачия',
    'вольво',
    'додж',
    'феррари',
    'фиат',
    'форд',
    'джили',
    'генезис',
    'хонда',
    'хаммер',
    'хюндай',
    'инфинити',
    'ивеко',
    'ягуар',
    'ламборджини',
    'лянча',
    'лексус',
    'линкольн',
    'мазерати',
    'мазда',
    'митсубиси',
    'ниссан',
    'опель',
    'пежо',
    'понтиак',
    'порше',
    'равон',
    'рено',
    'ровер',
    'скания',
    'сеат',
    'шкода',
    'смарт',
    'субару',
    'сузуки',
    'тесла',
    'тойота',
    'фольксваген',
  ]),
  (profession = [
    'авиадеспетчер',
    'авиаинженер',
    'автомеханик',
    'автослесарь',
    'агроном',
    'адвокат',
    'администратор',
    'актер',
    'актуарий',
    'аналитик',
    'аниматор',
    'архивариус',
    'архитектор',
    'астроном',
    'аудитор',
    'банкир',
    'бармен',
    'биоинженер',
    'биолог',
    'биотехнолог',
    'блогер',
    'брокер',
    'бухгалтер',
    'ветеринар',
    'визажист',
    'врач',
    'геолог',
    'геофизик',
    'гид',
    'дегустатор',
    'дизайнер',
    'дипломат',
    'директор',
    'журналист',
    'инженер',
    'картограф',
    'кинолог',
    'кинооператор',
    'кондитер',
    'корректор',
    'косметолог',
    'криминалист',
    'критик',
    'лингист',
    'логист',
    'логопед',
    'маркетолог',
    'масажист',
    'менеджер',
    'медсестра',
    'мерчендайзер',
    'модельер',
    'нотариус',
    'ортопед',
    'официант',
    'парикхмахер',
    'педагог',
    'переводчик',
    'пилот',
    'писатель',
    'повар',
    'пожарный',
    'политолог',
    'полицейский',
    'программист',
    'продавец',
    'прокурор',
    'прораб',
    'психолог',
    'редактор',
    'режиссер',
    'ресторатор',
    'риелтор',
    'сварщик',
    'секретарь',
    'следователь',
    'социолог',
    'стилист',
    'стоматолог',
    'стюардесса',
    'судья',
    'сценарист',
    'телеведущий',
    'технолог',
    'товаровед',
    'трейдер',
    'тренер',
    'учитель',
    'фармацевт',
    'флорист',
    'фотограф',
    'хореограф',
    'экономист',
    'энергетик',
    'этнограф',
    'ювелир',
    'хирург',
    'юрист',
  ]),
]

const arraysEng = [
  (animals = [
    'lion',
    'zebra',
    'koala',
    'panda',
    'snake',
    'rhinoceros',
    'elephant',
    'antelope',
    'hyena',
    'giraffe',
    'meerkat',
    'boar',
    'tiger',
    'hippo',
    'lemur',
    'wolf',
    'sheep',
    'crocodile',
    'hamster',
    'chameleon',
    'buffalo',
    'horse',
    'deer',
    'jaguar',
    'bison',
    'bear',
    'kangaroo',
    'sloth',
    'cheetah',
    'lynx',
    'bison',
    'gorilla',
    'ram',
    'camel',
    'anteater',
    'kashelot',
    'otter',
    'cow',
    'fox',
    'rat',
    'beaver',
    'dog',
    'cat',
    'babak',
  ]),
  (geography = [
    'Austria',
    'Vienna',
    'Albania',
    'Tirana',
    'Belarus',
    'Minsk',
    'Belgium',
    'Brussels',
    'Bulgaria',
    'Sofia',
    'London',
    'Hungary',
    'Budapest',
    'Germany',
    'Berlin',
    'Greece',
    'Athens',
    'Denmark',
    'Copenhagen',
    'Iceland',
    'Reykjavik',
    'Spain',
    'Madrid',
    'Italy',
    'Rome',
    'Latvia',
    'Riga',
    'Lithuania',
    'Vilnius',
    'Liechtenstein',
    'Vaduz',
    'Luxembourg',
    'Macedonia',
    'Skopje',
    'Malta',
    'Valletta',
    'Moldova',
    'Chisinau',
    'Monaco',
    'Oslo',
    'Netherlands',
    'Amsterdam',
    'Norway',
    'Poland',
    'Madrid',
    'Warsaw',
    'Portugal',
    'Lisbon',
    'Russia',
    'Moscow',
    'Romania',
    'Bucharest',
    'Serbia',
    'Belgrade',
    'Slovakia',
    'Bratislava',
    'Slovenia',
    'Ljubljana',
    'Ukraine',
    'Kiev',
    'Finland',
    'Helsinki',
    'France',
    'Paris',
    'Croatia',
    'Zagreb',
    'Montenegro',
    'Podgorica',
    'Prague',
    'Switzerland',
    'Bern',
    'Sweden',
    'Stockholm',
    'Estonia',
    'Tallinn',
    'Ireland',
    'Dublin',
    'Rome',
    'Latvia',
    'Riga',
    'Lithuania',
    'Vilnius',
  ]),
  (football = [
    'Milan',
    'Sassuolo',
    'Inter',
    'Napoli',
    'Atalanta',
    'Sampdoria',
    'Juventus',
    'Verona',
    'Roma',
    'Cagliari',
    'Lazio',
    'Spice',
    'Fiorentina',
    'Genoa',
    'Parma',
    'Udinese',
    'Bologna',
    'Torino',
    'Crotone',
    'Empoli',
    'Leipzig',
    'Bavaria',
    'Borussia',
    'Stuttgart',
    'Eintracht',
    'Augsburg',
    'Werder',
    'Hoffenheim',
    'Union',
    'Bayer',
    'Freiburg',
    'Wolfsburg',
    'Arminia',
    'Hertha',
    'Cologne',
    'Schalke',
    'Mainz',
  ]),
  (cars = [
    'acura',
    'audi',
    'bugatti',
    'buick',
    'cadillac',
    'chery',
    'citroen',
    'dacia',
    'daewoo',
    'ferrari',
    'fiat',
    'genesis',
    'honda',
    'hummer',
    'isuzu',
    'iveco',
    'jaguar',
    'jeep',
    'lamborghini',
    'lancia',
    'lexus',
    'maserati',
    'mazda',
    'mercury',
    'mitsubishi',
    'nissan',
    'opel',
    'peugeot',
    'porsche',
    'proton',
    'ravon',
    'renault',
    'rover',
    'saab',
    'saturn',
    'scania',
    'skoda',
    'smart',
    'ssangyong',
    'tesla',
    'toyota',
    'bentley',
    'chevrolet',
    'chrysler',
    'datsun',
    'dodge',
    'ford',
    'geely',
    'hyndai',
    'infiniti',
    'koenigsegg',
    'lincoln',
    'lotus',
    'mini',
    'piaggio',
    'pontiac',
    'roewe',
    'scion',
    'seat',
    'subaru',
    'suzuki',
    'volkswagen',
    'volvo',
  ]),
]

let word
let remainingLetters
const categories = ['Animals', 'Geography', 'Football teams', 'Cars'] //списпок категорий
let indexOfCategorie = 1 //индекс текущей категории
let currentCategorie = categories[indexOfCategorie] //имя текущей категории
//let selectedCategorie = document.querySelector('.categorie').textContent    //лычка категории на UI

////////////////////////////CATEGORIES////////////////////////////////////////////////
window.onclick = (event) => {
  if (event.target == modal) {
    modal.classList.remove('modal-active')
  }
}
const leftArrowCat = document.querySelector('.l-arrow-categories')
const rightArrowCat = document.querySelector('.r-arrow-categories')
const categoriesChanger = document.querySelector('.categories-changer')
leftArrowCat.onclick = () => {
  indexOfCategorie--
  if (indexOfCategorie < 0) {
    indexOfCategorie = categories.length - 1
  }
  addBackgroundImageCat()
}

rightArrowCat.onclick = () => {
  indexOfCategorie++
  if (indexOfCategorie > categories.length - 1) {
    indexOfCategorie = 0
  }
  addBackgroundImageCat()
}

categoriesChanger.style.backgroundImage = "url('img/a.png')"

function addBackgroundImageCat() {
  indexOfCategorie == 0
    ? (categoriesChanger.style.backgroundImage = "url('img/a.png')")
    : indexOfCategorie == 1
    ? (categoriesChanger.style.backgroundImage = "url('img/g.png')")
    : indexOfCategorie == 2
    ? (categoriesChanger.style.backgroundImage = "url('img/f.png')")
    : (categoriesChanger.style.backgroundImage = "url('img/cars.png')")
}
addBackgroundImageCat()

let categoriesForRandomMode = ['Animals', 'Geography', 'Football teams', 'Cars']
let randomNumber
let randomCategorie = arraysRus[getRandomNumber()]

function getRandomNumber() {
  randomNumber = Math.floor(Math.random() * categoriesForRandomMode.length)
}
getRandomNumber()
//////////////////////////////ATTEMPTS//////////////////////////////////////////////////////////
const leftArrAtt = document.querySelector('.l-arrow-attempts')
const rightArrAtt = document.querySelector('.r-arrow-attempts')
let quantityOfAttempts = parseInt(
  document.querySelector('.attempts-content').textContent.match(/\d{1,}/)
)
let attemptsLeft = quantityOfAttempts

leftArrAtt.onclick = () => {
  quantityOfAttempts--
  checkArrowStatus()
  document.querySelector(
    '.attempts-content'
  ).textContent = `Attempts: ${quantityOfAttempts}`
  attemptsLeft = quantityOfAttempts
}

rightArrAtt.onclick = () => {
  quantityOfAttempts++
  checkArrowStatus()
  document.querySelector(
    '.attempts-content'
  ).textContent = `Attempts: ${quantityOfAttempts}`
  attemptsLeft = quantityOfAttempts
}

function checkArrowStatus() {
  if (quantityOfAttempts == 1) {
    leftArrAtt.classList.add('blocked')
  } else if (quantityOfAttempts == 10) {
    rightArrAtt.classList.add('blocked')
  } else {
    leftArrAtt.classList.remove('blocked')
    rightArrAtt.classList.remove('blocked')
  }
}
//////////////////////////////OPTIONS//////////////////////////////////////////////////////////
const endlessModeButton = document.querySelector('.endless-mode')
const randomModeButton = document.querySelector('.random-mode')
let isEndlessMode = false
let isRandomMode = false
const modal = document.querySelector('.categories-options')

function checkOptionStatus(mode, element) {
  if (mode) {
    element.classList.remove('options-disabled')
    element.classList.add('options-active')
  } else {
    element.classList.remove('options-active')
    element.classList.add('options-disabled')
  }
}

endlessModeButton.onclick = () => {
  isEndlessMode = !isEndlessMode
  checkOptionStatus(isEndlessMode, endlessModeButton)
}

randomModeButton.onclick = () => {
  isRandomMode = !isRandomMode
  checkOptionStatus(isRandomMode, randomModeButton)
  if (isRandomMode) {
    modal.classList.add('modal-active')
  } else {
    modal.classList.remove('modal-active')
  }
}
//////////////////////////////LANGUAGES////////////////////////////////////////////////////////
const languages = ['english', 'russian']
let indexOfLanguages = 0
let currentLanguages = languages[indexOfLanguages]

const leftArrowLan = document.querySelector('.l-arrow-languages')
const rightArrowLan = document.querySelector('.r-arrow-languages')
const languagesChanger = document.querySelector('.languages-changer')

leftArrowLan.onclick = () => {
  indexOfLanguages--
  if (indexOfLanguages < 0) {
    indexOfLanguages = languages.length - 1
  }
  addBackgroundImageLan()
}

rightArrowLan.onclick = () => {
  indexOfLanguages++
  if (indexOfLanguages > languages.length - 1) {
    indexOfLanguages = 0
  }
  addBackgroundImageLan()
}

function addBackgroundImageLan() {
  if (indexOfLanguages == 0) {
    languagesChanger.style.backgroundImage = "url('img/gb.png')"
  } else {
    languagesChanger.style.backgroundImage = "url('img/r.png')"
  }
}
/////////////////////////OPTIONS///////////////////////////////////////////////////////////////////////
let hintScreen

function addHintImage(mode) {
  mode == 0
    ? (hintScreen.style.backgroundImage = "url('img/a.png')")
    : mode == 1
    ? (hintScreen.style.backgroundImage = "url('img/g.png')")
    : mode == 2
    ? (hintScreen.style.backgroundImage = "url('img/f.png')")
    : (hintScreen.style.backgroundImage = "url('img/cars.png')")
}
///////////////////////HINTS//////////////////////////////////////////////////////////////////////////////
let quessedLetters = []
let isActiveTargetHint = false
///////////////////////////////GAMELOOP////////////////////////////////////////////////////////////////
const start = document.querySelector('.play')
const startScreen = document.querySelector('.start-screen')
let randomHint
let targetHint
let homeButton
let refresh
let hiddenLetters = []
let hintedLetter
let letters
let arrayFromHiddenLetters
let keys

function whichWord(arr) {
  if (isRandomMode) {
    randomWord(arr[randomNumber]) //name of array
  } else {
    if (indexOfLanguages === 0) {
      randomWord(arraysEng[indexOfCategorie])
    } else if (indexOfLanguages === 1) {
      randomWord(arryasRus[indexOfCategorie])
    }
  }
}

function renderingHiddenLetters() {
  for (let letter of word) {
    setTimeout(function () {
      document
        .querySelector('.hiddenWord')
        .insertAdjacentHTML('afterbegin', `<div class='hiddenLetter'></div>`)
    }, letter * 150)
  }
}

start.onclick = function () {
  rendering()

  randomHint = document.querySelector('.first-hint')
  targetHint = document.querySelector('.second-hint')
  hintScreen = document.querySelector('.hint-image')
  refresh = document.querySelector('.refreshy')
  homeButton = document.querySelector('.home')

  gameLoop()

  indexOfLanguages === 0
    ? renderingKeyboard(keyboardEng)
    : renderingKeyboard(keyboardRus)

  targetHint.onclick = () => {
    letters = document.querySelectorAll('.hiddenLetter')
    arrayFromHiddenLetters = Array.from(letters)
    isActiveTargetHint = !isActiveTargetHint
    if (isActiveTargetHint == true) {
      targetHintActivate()
    } else {
      targetHint.style.backgroundColor = 'rgb(241, 209, 69, 0.7)'

      letters.forEach((el) => {
        el.onclick = null
      })
    }
  }

  randomHint.onclick = () => {
    randomHint.style.pointerEvents = 'none'
    randomHint.style.backgroundColor = 'rgb(241,209,69,0.1)'

    hiddenLetters = document.querySelectorAll('.hiddenLetter')

    test()

    function test() {
      let i = Math.floor(Math.random() * word.length)
      hintedLetter = word[i].toUpperCase()
    }

    if (quessedLetters.includes(hintedLetter)) {
      while (quessedLetters.includes(hintedLetter) == true) {
        test()
      }
    }

    hintedLetterF(hintedLetter)
  }

  homeButton.onclick = () => {
    document.querySelector('.hint-header').remove()
    document.querySelector('.hiddenWord').remove()
    document.querySelector('.keyboard').remove()
    startScreen.style.display = 'unset'
    attemptsLeft = quantityOfAttempts
    document.querySelector(
      '.attempts-content'
    ).textContent = `Attempts: ${attemptsLeft}`
    quessedLetters = []
    isRandomMode = false
    checkOptionStatus(isRandomMode, randomModeButton)
  }

  refresh.onclick = refreshFunction
}

function refreshFunction() {
  document.querySelector('.keyboard').remove()
  document.querySelectorAll('.hiddenLetter').forEach((el) => {
    el.remove()
  })
  attemptsLeft = quantityOfAttempts
  gameLoop()
  indexOfLanguages === 0
    ? renderingKeyboard(keyboardEng)
    : renderingKeyboard(keyboardRus)
}

function gameLoop() {
  if (isRandomMode === false) {
    indexOfLanguages === 0
      ? randomWord(arraysEng[indexOfCategorie])
      : randomWord(arraysRus[indexOfCategorie])
    renderingHiddenLetters()
    addHintImage(indexOfCategorie)
  } else {
    getRandomNumber()
    randomWord(categoriesForRandomMode[randomNumber])
    renderingHiddenLetters()
  }

  randomHint.style.pointerEvents = 'all'
  randomHint.style.backgroundColor = 'rgb(241,209,69,0.7)'
  quessedLetters = []
  isActiveTargetHint = false
  targetHint.style.backgroundColor = 'rgb(241,209,69,0.7)'
  targetHint.style.pointerEvents = 'all'
}

randomWord = (arr) => {
  if (isRandomMode) {
    let i
    ;(categoriesForRandomMode[randomNumber] === 'Animals'
      ? () => {
          if (indexOfLanguages === 0) {
            ;(i = arraysEng[0]),
              (hintScreen.style.backgroundImage = "url('img/a.png')")
          } else if (indexOfLanguages === 1) {
            ;(i = arryasRus[0]),
              (hintScreen.style.backgroungImage = "url('img/a.png')")
          }
        }
      : categoriesForRandomMode[randomNumber] === 'Geography'
      ? () => {
          if (indexOfLanguages === 0) {
            ;(i = arraysEng[1]),
              (hintScreen.style.backgroundImage = "url('img/g.png')")
          } else if (indexOfLanguages === 1) {
            ;(i = arraysRus[1]),
              (hintScreen.style.backgroundImage = "url('img/g.png')")
          }
        }
      : categoriesForRandomMode[randomNumber] === 'Football teams'
      ? () => {
          if (indexOfLanguages === 0) {
            ;(i = arraysEng[2]),
              (hintScreen.style.backgroundImage = "url('img/f.png')")
          } else if (indexOfLanguages === 1) {
            ;(i = arraysRus[2]),
              (hintScreen.style.backgroundImage = "url('img/f.png')")
          }
        }
      : () => {
          if (indexOfLanguages === 0) {
            ;(i = arraysEng[3]),
              (hintScreen.style.backgroundImage = "url('img/cars.png')")
          } else if (indexOfLanguages === 1) {
            ;(i = arraysRus[3]),
              (hintScreen.style.backgroundImage = "url('img/cars.png')")
          }
        })()

    word = [...i[Math.floor(Math.random() * i.length)]]
    remainingLetters = word.length
  } else {
    word = [...arr[Math.floor(Math.random() * arr.length)]]
    remainingLetters = word.length
  }
}

function rendering() {
  startScreen.style.display = 'none'
  document.querySelector('.root').insertAdjacentHTML(
    'afterbegin',
    `<div class='hint-header'>
            <div class ='hints'>
                <div class='first-hint'></div>
                <div class='second-hint'></div>
            </div>

            <div class='hint-image'></div>

            <div class='nav-panel'>
                <div class='home'></div>
                <div class='refreshy'></div>
            </div>
        </div>
        
        <div class='hiddenWord'></div>
        `
  )
}

let enteredLetter
let enteredLetterIndex

function endOfGame(label) {
  let arr = document.querySelectorAll('.hiddenLetter')
  arr.forEach((el) => {
    el.remove()
  })
  document.querySelector('.hiddenWord').insertAdjacentHTML(
    'afterbegin',
    `<div class="alerts">
                <div class="alert alert-text">${label}</div>
                <div class="alert">
                    <div class="key key-big show-answer">See the answer</div>
                    <div class="key key-big next-word">Next word</div>
                </div>
             </div>
            `
  )
  const showAnswer = document.querySelector('.show-answer')
  showAnswer.onclick = () => {
    document.querySelector('.show-answer').remove()
    document.querySelector('.alert-text').innerHTML = `The word was ${word}`
  }

  let nextWord = document.querySelector('.next-word')
  nextWord.onclick = () => {
    document.querySelector('.alerts').remove()
    refreshFunction()
  }
}

function checkLetter(letter) {
  if (word.toLowerCase().indexOf(letter) < 0) {
    enteredLetterIndex.classList.add('key-missed')
    enteredLetterIndex.classList.remove('key')
    if (isEndlessMode === false) {
      attemptsLeft--
    }
    if (attemptsLeft === 0) {
      //alert('Ты проиграл.Попробуй снова!')
      endOfGame('You lose, try again!', 'Do you wanna see the answer?') //'You lose,try again!')
      document.querySelector('.keyboard').classList.add('blocked')
    }
  }
}

function indexOfLetter() {
  for (let i = 0; i < word.length; i++) {
    if (word[i].toLowerCase() == enteredLetter) {
      document.querySelectorAll('.key')
      document.querySelectorAll('.hiddenLetter')[i].innerText =
        enteredLetter.toUpperCase()
      enteredLetterIndex.classList.add('key-guessed')
      enteredLetterIndex.classList.remove('key')
      quessedLetters.push(enteredLetter.toUpperCase())
      remainingLetters--
      if (remainingLetters === 0) {
        document.querySelector('.keyboard').classList.add('blocked')
        endOfGame('Congratulations!You won!')
      }
    }
  }
}

/* let keyboardEng = []
document.onkeypress = function(event){
    keyboardEng.push(event.charCode)
    console.log(keyboardEng)
} */

function renderingKeyboard(keyboardLang) {
  document.querySelector('.root').insertAdjacentHTML(
    'beforeend',
    `<div class ="keyboard unselectable">
            <div class="f-row"></div>
            <div class="s-row"></div>
            <div class="t-row"></div>
        </div>`
  )
  let out = ''
  for (let i = 0; i < keyboardLang.length; i++) {
    if (
      (indexOfLanguages === 1 && i < 12) ||
      (indexOfLanguages === 0 && i < 10)
    ) {
      out +=
        '<div class = "key">' +
        String.fromCharCode(keyboardLang[i]).toUpperCase() +
        '</div>'
      document.querySelector('.f-row').innerHTML = out
    } else if (
      (indexOfLanguages === 1 && i === 12) ||
      (indexOfLanguages === 0 && i === 10)
    ) {
      out =
        '<div class = "clear-fix key">' +
        String.fromCharCode(keyboardLang[i]).toUpperCase() +
        '</div>'
      document.querySelector('.s-row').innerText = out
    } else if (
      (indexOfLanguages === 1 && i < 23) ||
      (indexOfLanguages === 0 && i < 19)
    ) {
      out +=
        '<div class = "key">' +
        String.fromCharCode(keyboardLang[i]).toUpperCase() +
        '</div>'
      document.querySelector('.s-row').innerHTML = out
    } else if (
      (indexOfLanguages === 1 && i === 23) ||
      (indexOfLanguages === 0 && i === 19)
    ) {
      out =
        '<div class = "clear-fix key">' +
        String.fromCharCode(keyboardLang[i]).toUpperCase() +
        '</div>' //IMG
      document.querySelector('.t-row').innerHTML = out
    } else if (
      (indexOfLanguages === 1 && i < 33) ||
      (indexOfLanguages === 0 && i < 26)
    ) {
      out +=
        '<div class = "key">' +
        String.fromCharCode(keyboardLang[i]).toUpperCase() +
        '</div>'
      document.querySelector('.t-row').innerHTML = out
    }
  }
  addOnClick()
  keys = document.querySelectorAll('.key')
}

function addOnClick() {
  const buttons = document.querySelectorAll('.key')
  buttons.forEach((el) => {
    el.onclick = function () {
      enteredLetter = el.innerText.toLowerCase()
      enteredLetterIndex = el
      checkLetter(enteredLetter)
      indexOfLetter()
    }
  })
}
////////////////////////////////////////////////////////////////////////////////////////////////////

function targetHintActivate() {
  //targetHint.style.boxShadow='0 0 20px rgb(241, 209, 69)'
  targetHint.style.backgroundColor = 'rgb(241, 209, 69)'
  letters.forEach((el) => {
    el.onclick = () => {
      let targetHintedLetter =
        word[arrayFromHiddenLetters.indexOf(el)].toUpperCase()
      quessedLetters.push(targetHintedLetter)
      for (let i = 0; i < word.length; i++) {
        if (word[i].toUpperCase() == targetHintedLetter) {
          arrayFromHiddenLetters[i].textContent =
            targetHintedLetter.toUpperCase()
          remainingLetters--
          if (remainingLetters == 0) {
            alert('Ты победил!')
          }
        }
      }

      letters.forEach((el) => {
        el.onclick = null
      })

      keys.forEach((el) => {
        if (el.textContent === targetHintedLetter) {
          el.classList.add('key-guessed')
          el.classList.remove('key')
        }
      })

      targetHint.style.pointerEvents = 'none'
      targetHint.style.backgroundColor = 'rgb(241,209,69,0.1)'
    }
  })
}

function hintedLetterF(hintedLetter) {
  for (let i = 0; i < word.length; i++) {
    if (hintedLetter === word[i].toUpperCase()) {
      remainingLetters--
      if (remainingLetters == 0) {
        alert('Ты победил!')
      }
      hiddenLetters[i].textContent = hintedLetter
    }
  }

  keys.forEach((el) => {
    if (el.textContent === hintedLetter) {
      el.classList.add('key-guessed')
      el.classList.remove('key')
    }
  })
}
/////////////////////////////////////////////////////////////////////////////////////////////
let categoriesSelector = Array.from(document.querySelectorAll('.li'))
categoriesSelector.forEach((el) => {
  let isCategorieActive = true
  el.onclick = () => {
    isCategorieActive = !isCategorieActive

    isCategorieActive == true
      ? el.classList.add('li-active')
      : el.classList.remove('li-active')

    if (
      categoriesForRandomMode.includes(
        categories[categoriesSelector.indexOf(el)]
      )
    ) {
      categoriesForRandomMode.splice(
        categoriesForRandomMode.indexOf(
          categories[categoriesSelector.indexOf(el)]
        ),
        1
      )
    } else {
      categoriesForRandomMode.push(categories[categoriesSelector.indexOf(el)])
    }
  }
})
console.log('test')
