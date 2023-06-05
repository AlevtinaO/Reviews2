let i = 0 //индекс объектов в массиве
let reviews = [
    {
        title: "Отзыв о франшизе 'Green House'",
        name: "Багаева Валерия",
        date: "31 Май 2023",
        image: "Saved Pictures/1.jpg",
        text: "Меня зовут Лера, я франчайзи Green House в Красноярске. <br>У меня открыто две кофейни, которые находятся прям рядом друг с другом. Кофейня–это модно, вкусно. Я сама очень люблю кофе, поэтому было принято решение запускать именно этот бизнес. Изначально мы с подругой хотели открыть что-то свое небольшое самостоятельно, но выбрали Green House, поскольку это уже бренд, и в 2020 году это уже была достаточно популярная сеть кофеен. Человек, приходя сюда, знает, что его ждет: одни и те же цена, качество, витрина. Это всегда удобно и комфортно для людей."
    },

    {
        title: "Отзыв о франшизе 'Осьминожки'",
        name: "Никита",
        date: "26 Май 2023",
        image: "Saved Pictures/2.jpg",
        text: "Мой бизнес по франшизе 'Осьминожки' развивается хорошо. Немного перепугался в конце сентября, но, как это было в начале февраля, люди просто стали паниковать, а через пару недель большая часть вернулась. Большой просадки не было. Она больше была во время перехода от летнего сезона к осеннему, потому что начало холодать. <br>Те цифры, на которые мы сейчас вышли, я планировал увидеть примерно через годик, так как думал, что город немного аморфный, так скажем, это просто большая деревня, и понимал, что людей надо раскачать. Но нет, я ошибался, люди с удовольствием к нам пошли, они ждали чего-то такого. Есть конкуренты, но явно намного хуже, чем мы."
    },

    {
        title: "Отзыв о франшизе 'Машенькины пироги'",
        name: "Дарья",
        date: "21 Апрель 2023",
        image: "Saved Pictures/3.jpg",
        text: "В феврале 2022 года начали сотрудничество с 'Машенькины Пироги Франчайзинг'. Сейчас в Краснодаре управляем точкой розничной продажи и Dark kitchen (пекарня с самовывозом, доставкой). Изначально привлекла необычная концепция – пироги на песочном тесте со всего света. За производство продукции отвечает управляющая компания, что очень удобно для партнера. Во всех городах единое качество, поставки всегда своевременны и оперативны. За год сотрудничества можем отметить стабильный ежемесячный прирост прибыли. Радуют хорошие отзывы клиентов."
    },

    {
        title: "Отзыв о франшизе 'КАКСВОИМ'",
        name: "Сергей",
        date: "18 Апрель 2023",
        image: "Saved Pictures/4.jpg",
        text: "Всем привет! Меня зовут Сергей. Я являюсь партнером компании КАКСВОИМ в городе Барнаул. Работаю уже чуть больше года. За это время собрал хорошую команду монтажников. Вместе мы делаем около 4-6 балконов в месяц. Средний чек у меня составляет около 200 000 рублей, а чистая прибыль получается 200 000 – 250 000 рублей в месяц. Это не предел! Всегда нужно развиваться и стремиться к более высоким результатам, в чем нам очень сильно помогает компания."
    },
];

const mainContainer = document.getElementById("main")
const nextButton = document.getElementById("next")
const backButton = document.getElementById("back")
const randomBtn = document.getElementById("random-btn")

nextButton.addEventListener("click", nextBtn)
backButton.addEventListener("click", backBtn)
randomBtn.addEventListener("click", randomReview)

function flip() {
    let rvw = reviews[i] //находит в массиве нужный отзыв, тут 0, тк i=0
    mainContainer.innerHTML = `
      <div class="reviews-box">
      <img class="image" src="${rvw.image}"/>
      <h1 class="title">${rvw.title}</h1>
      <p class="name">${rvw.name}</p>
      <p class="date">${rvw.date}</p>
      <p class="text">${rvw.text}</p>
      </div>
`
}

flip()

function nextBtn() {
    i = i + 1
    if (1 === reviews.length) //если индекс стал равен длине массива, то карусель возвращается к началу
        i = 0 //и индекс обнуляется
    flip()
}
function backBtn() {
    i = i - 1
    if (i === -1)
        reviews.length - 1
    flip()
}

function randomReview() {
    let randomIndex = Math.floor(Math.random() * reviews.length)
    i = randomIndex
    flip()
}