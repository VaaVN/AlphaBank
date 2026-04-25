document.addEventListener("DOMContentLoaded", () => {
  const bankOffers = [
    {
      category: "Для всех",
      description: "",
      cards: [
        {
          title: "Дебетовые карты",
          description: "Суперкэшбэк до 100%",
          image: "",
        },
        { title: "Кредитные карты", description: "Обслуживание 0₽", image: "" },
        { title: "Кредиты", description: "Оформление онлайн", image: "" },
        {
          title: "Накопления",
          description: "Доход с первого месяца",
          image: "",
        },
        { title: "Инвестиции", description: "Дарим до 10 000₽", image: "" },
        { title: "Ипотека", description: "Одобрим за 60 секунд", image: "" },
        {
          title: "Alfa Only",
          description: "Ваш премиальный сервис",
          image: "",
        },
        {
          title: "Для детей и семьи",
          description: "Карты с кэшбэком",
          image: "",
        },
      ],
    },
    {
      category: "Малому бизнесу",
      description: "Для компаний с оборотом до 500 млн ₽ в год",
      cards: [
        {
          title: "Регистрация бизнеса",
          description: "Онлайн за 0₽",
          image: "",
        },
        { title: "Счёт для бизнеса", description: "Бесплатно", image: "" },
        { title: "Кредиты", description: "На развитие бизнеса", image: "" },
        { title: "Эквайринг", description: "Комиссия от 1%", image: "" },
        { title: "Карты", description: "С кэшбэком до 10%", image: "" },
        { title: "Депозиты", description: "Онлайн от 1 дня", image: "" },
        {
          title: "Отраслевые решения",
          description: "Для любого бизнеса",
          image: "",
        },
        { title: "Всё для малого бизнеса", description: "", image: "" },
      ],
    },
    {
      category: "Крупному бизнесу",
      description: "Для компаний с оборотом от 500 млн ₽ в год",
      cards: [
        { title: "Расчётный счёт", description: "", image: "" },
        { title: "Кредиты", description: "", image: "" },
        { title: "Эквайринг", description: "", image: "" },
        { title: "Факторинг", description: "", image: "" },
        { title: "Зарплатный проект", description: "", image: "" },
        { title: "ВЭД", description: "", image: "" },
        { title: "Инвестбанк", description: "", image: "" },
        { title: "Всё для крупного бизнеса", description: "", image: "" },
      ],
    },
  ];

  let curCategory = 0;
  let cardHolder = document.querySelector("[data-js='cardHolder']");
  let catDisc = document.querySelector("[data-js='categoryDisc']");
  let allBut = document.querySelector("[data-js='forAll']");
  let littleBut = document.querySelector("[data-js='littleComp']");
  let hugeBut = document.querySelector("[data-js='hugeComp']");
  let buttons = [allBut, littleBut, hugeBut];
  let selectVis = document.querySelector("[data-js='selectVis']");
  function SetInfo() {
    let curCat = bankOffers[curCategory];
    catDisc.textContent = curCat.description;
    cardHolder.innerHTML = "";
    let btn = buttons[curCategory];
    selectVis.style.left = `${btn.offsetLeft}px`;
    btn.classList.add("selected");
    selectVis.style.width = `${btn.getBoundingClientRect().width}px`;
    selectVis.style.height = `${btn.getBoundingClientRect().height}px`;
    selectVis.style.left = `${btn.style.left}px`;
    for (let i = 0; i < curCat.cards.length; i++) {
      cardHolder.innerHTML += `<div class="card">
            <h2>${curCat.cards[i].title}</h2>
            <p>${curCat.cards[i].description}</p>
            <div class="img"></div>
          </div>`;
    }
  }
  SetInfo();
  allBut.addEventListener("pointerdown", () => {
    curCategory = 0;
    littleBut.classList.remove("selected");
    hugeBut.classList.remove("selected");
    SetInfo();
  });
  littleBut.addEventListener("pointerdown", () => {
    curCategory = 1;
    allBut.classList.remove("selected");
    hugeBut.classList.remove("selected");
    SetInfo();
  });
  hugeBut.addEventListener("pointerdown", () => {
    curCategory = 2;
    allBut.classList.remove("selected");
    littleBut.classList.remove("selected");
    SetInfo();
  });
});
