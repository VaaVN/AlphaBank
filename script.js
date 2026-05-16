document.addEventListener("DOMContentLoaded", () => {
  const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbw7C1mSp8sTvrkVeDcrsTCkn7TgoYQw8oAnCnMOwMe9Y1gsvoAUphUnwEC_s_UFPwkawg/exec";

  const form = document.querySelector("form");
  const status = document.getElementById("status");
  const buttons = document.querySelectorAll(".timeBut");
  const hiddenInput = document.getElementById("timeData");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("selectTime"));
      btn.classList.add("selectTime");
      hiddenInput.value = btn.getAttribute("data-value");
      console.log(hiddenInput.value);
    });
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    status.textContent = "waiting";

    let formData = new FormData(form);
    formData.append("submittedAt", new Date().toISOString());

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });
      status.textContent = "success";
      form.reset();
    } catch (error) {
      status.textContent = "error";
      console.error(error);
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const bankOffers = [
    {
      category: "Для всех",
      description: "",
      cards: [
        {
          title: "Дебетовые карты",
          description: "Суперкэшбэк до 100%",
          image: "5bba33847ca895029f99fb072fd4b231.png",
        },
        {
          title: "Кредитные карты",
          description: "Обслуживание 0₽",
          image: "266fa9131cc8a8950561a08469be966e.png",
        },
        {
          title: "Кредиты",
          description: "Оформление онлайн",
          image: "cfc74bd62422a9b7369a26e80b0fc682.png",
        },
        {
          title: "Накопления",
          description: "Доход с первого месяца",
          image: "ed0a2f0d5af68effd7d5c324ae20e7cc.png",
        },
        {
          title: "Инвестиции",
          description: "Дарим до 10 000₽",
          image: "imagdfbfdbe.png",
        },
        {
          title: "Ипотека",
          description: "Одобрим за 60 секунд",
          image: "image.png",
        },
        {
          title: "Alfa Only",
          description: "Ваш премиальный сервис",
          image: "imbfdbdfbe.png",
        },
        {
          title: "Для детей и семьи",
          description: "Карты с кэшбэком",
          image:
            "K9JqV9zRqFuBqLWLospWZEj1lIVr0RASo3A5q8aakjAr1yBAdyRUkipnqAURCgDtTBU7l1irCIMx5Ofv3bpCcNwrr6JfGtAdOVzgvgijsv0JDkv9f0Wp9YKgRnly5Apo.jpeg.png",
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
          image: "5bba33847ca895029f99fb072fd4b231.png",
        },
        {
          title: "Счёт для бизнеса",
          description: "Бесплатно",
          image: "266fa9131cc8a8950561a08469be966e.png",
        },
        {
          title: "Кредиты",
          description: "На развитие бизнеса",
          image: "cfc74bd62422a9b7369a26e80b0fc682.png",
        },
        {
          title: "Эквайринг",
          description: "Комиссия от 1%",
          image: "ed0a2f0d5af68effd7d5c324ae20e7cc.png",
        },
        {
          title: "Карты",
          description: "С кэшбэком до 10%",
          image: "imagdfbfdbe.png",
        },
        {
          title: "Депозиты",
          description: "Онлайн от 1 дня",
          image: "image.png",
        },
        {
          title: "Отраслевые решения",
          description: "Для любого бизнеса",
          image: "images.png",
        },
        {
          title: "Всё для малого бизнеса",
          description: "",
          image: "imbfdbdfbe.png",
        },
      ],
    },
    {
      category: "Крупному бизнесу",
      description: "Для компаний с оборотом от 500 млн ₽ в год",
      cards: [
        {
          title: "Расчётный счёт",
          description: "",
          image: "5bba33847ca895029f99fb072fd4b231.png",
        },
        {
          title: "Кредиты",
          description: "",
          image: "266fa9131cc8a8950561a08469be966e.png",
        },
        {
          title: "Эквайринг",
          description: "",
          image: "cfc74bd62422a9b7369a26e80b0fc682.png",
        },
        {
          title: "Факторинг",
          description: "",
          image: "ed0a2f0d5af68effd7d5c324ae20e7cc.png",
        },
        {
          title: "Зарплатный проект",
          description: "",
          image: "imagdfbfdbe.png",
        },
        { title: "ВЭД", description: "", image: "image.png" },
        { title: "Инвестбанк", description: "", image: "images.png" },
        {
          title: "Всё для крупного бизнеса",
          description: "",
          image: "imbfdbdfbe.png",
        },
      ],
    },
  ];
  Cards();
  About();
  ServiceMenu();

  function Cards() {
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
          <img src='${curCat.cards[i].image}' />
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
  }
  function About() {
    let curCategory2 = 0;
    let workBut = document.querySelector("[data-js='work']");
    let achiveBut = document.querySelector("[data-js='achive']");
    let about = document.querySelector("[data-js='about']");
    let buttons2 = [achiveBut, workBut];
    let selectVis = document.querySelector("[data-js='selectVis2']");
    function SetInfo() {
      about.innerHTML = "";
      let btn = buttons2[curCategory2];
      selectVis.style.left = `${btn.offsetLeft}px`;
      btn.classList.add("selected");
      selectVis.style.width = `${btn.getBoundingClientRect().width}px`;
      selectVis.style.height = `${btn.getBoundingClientRect().height}px`;
      selectVis.style.left = `${btn.style.left}px`;
      if (curCategory2 == 0) {
        about.innerHTML = `<div class="infoFrame selected" 
        style="grid-row: span 2; background-color:  rgb(17, 11, 11);  ">
              <h2>МЫ ЛУЧШИЕ</h2>
              <p>третий год подряд по версии Forbse</p>
            </div>
            <div
              class="infoFrame"
            >
              <h2>Крупнейший частный банк</h2>
              <p>40 миллионов клиентов выбрали нас <br/> 
              800+ офисов и доствка в 2500 городов</p>
            </div>
            <div
              class="infoFrame"
            >
              <h2>Отзывы</h2>
              <p>Мы их читаем и становимся лучше</p>
            </div>`;
      } else {
        about.innerHTML = `<div class="infoFrame selected" style="grid-row: span 2; background-color:  red;">
              <h2>Альфа будущее</h2>
              <p>Стажировки для всех</p>
            </div>
            <div
              class="infoFrame"
            >
              <h2>Вакансии в Альфа-Банке</h2>
              <p>ждём вас в нашей команде</p>
            </div>
            <div
              class="infoFrame"
            >
              <h2>Свой в Альфе</h2>
              <p>Делитесь выгодой и зарабатывайте</p>
            </div>`;
      }
    }
    SetInfo();
    achiveBut.addEventListener("pointerdown", () => {
      curCategory2 = 0;
      workBut.classList.remove("selected");
      SetInfo();
    });
    workBut.addEventListener("pointerdown", () => {
      curCategory2 = 1;
      achiveBut.classList.remove("selected");
      SetInfo();
    });
  }
  function ServiceMenu() {
    let curCategory1 = 0;
    let amobileBut = document.querySelector("[data-js='a-mobile']");
    let atravelBut = document.querySelector("[data-js='a-travel']");
    let afishaBut = document.querySelector("[data-js='afisha']");
    let fuelBut = document.querySelector("[data-js='fuel']");
    let splitBut = document.querySelector("[data-js='split']");
    let insureBut = document.querySelector("[data-js='insure']");
    let serviceMenu = document.querySelector("[data-js='serviceMenu']");
    let but1 = [
      amobileBut,
      atravelBut,
      afishaBut,
      fuelBut,
      splitBut,
      insureBut,
    ];
    let selectVis = document.querySelector("[data-js='selectVis1']");
    function SetInfo() {
      serviceMenu.innerHTML = "";
      let btn = but1[curCategory1];
      selectVis.style.left = `${btn.offsetLeft}px`;
      selectVis.style.top = `${btn.offsetTop}px`;
      btn.classList.add("selected");
      selectVis.style.width = `${btn.getBoundingClientRect().width}px`;
      selectVis.style.height = `${btn.getBoundingClientRect().height}px`;
      switch (curCategory1) {
        case 0:
          serviceMenu.innerHTML = `
          <div
              class="infoFrame"
              style="grid-row: span 6; grid-column: span 2"
            >
              <h2>МЫ ЛУЧШИЕ</h2>
              <p>третий год подряд по версии Forbse</p>
            </div>
            <div
              class="infoFrame"
              style="grid-row: span 5; grid-column: span 4"
            >
              <h2>МЫ ЛУЧШИЕ</h2>
              <p>третий год подряд по версии Forbse</p>
            </div>
            <div
              class="infoFrame"
              style="grid-row: span 1; grid-column: span 4"
            >
              <h2>МЫ ЛУЧШИЕ</h2>
              <p>третий год подряд по версии Forbse</p>
            </div>`;
          break;
        case 1:
          serviceMenu.innerHTML = `
          <div
              class="infoFrame"
              style="grid-row: span 3; grid-column: span 1"
            >
              <h2>МЫ ЛУЧШИЕ</h2>
              <p>третий год подряд по версии Forbse</p>
            </div>
            <div
              class="infoFrame"
              style="grid-row: span 5; grid-column: span 4"
            >
              <h2>МЫ ЛУЧШИЕ</h2>
              <p>третий год подряд по версии Forbse</p>
            </div>
            <div
              class="infoFrame"
              style="grid-row: span 3; grid-column: span 1"
            >
              <h2>МЫ ЛУЧШИЕ</h2>
              <p>третий год подряд по версии Forbse</p>
            </div>
            <div
              class="infoFrame"
              style="grid-row: span 3; grid-column: span 1"
            >
              <h2>МЫ ЛУЧШИЕ</h2>
              <p>третий год подряд по версии Forbse</p>
            </div>
            <div
              class="infoFrame"
              style="grid-row: span 1; grid-column: span 4"
            >
              <h2>МЫ ЛУЧШИЕ</h2>
              <p>третий год подряд по версии Forbse</p>
            </div>
            <div
              class="infoFrame"
              style="grid-row: span 3; grid-column: span 1"
            >
              <h2>МЫ ЛУЧШИЕ</h2>
              <p>третий год подряд по версии Forbse</p>
            </div>`;
          break;
        case 2:
          serviceMenu.innerHTML = `
          <div
              class="infoFrame"
              style="grid-row: span 5; grid-column: span 3"
            >
              <h2>МЫ ЛУЧШИЕ</h2>
              <p>третий год подряд по версии Forbse</p>
            </div>
            <div
              class="infoFrame"
              style="grid-row: span 6; grid-column: span 3"
            >
              <h2>МЫ ЛУЧШИЕ</h2>
              <p>третий год подряд по версии Forbse</p>
            </div>
            <div
              class="infoFrame"
              style="grid-row: span 1; grid-column: span 3"
            >
              <h2>МЫ ЛУЧШИЕ</h2>
              <p>третий год подряд по версии Forbse</p>
            </div>`;
          break;
        case 3:
          serviceMenu.innerHTML = `
          <div
              class="infoFrame"
              style="grid-row: span 5; grid-column: span 3"
            >
              <h2>МЫ ЛУЧШИЕ</h2>
              <p>третий год подряд по версии Forbse</p>
            </div>
            <div
              class="infoFrame"
              style="grid-row: span 6; grid-column: span 3"
            >
              <h2>МЫ ЛУЧШИЕ</h2>
              <p>третий год подряд по версии Forbse</p>
            </div>
            <div
              class="infoFrame"
              style="grid-row: span 1; grid-column: span 3"
            >
              <h2>МЫ ЛУЧШИЕ</h2>
              <p>третий год подряд по версии Forbse</p>
            </div>`;
          break;
        case 4:
          serviceMenu.innerHTML = `
          <div
              class="infoFrame"
              style="grid-row: span 6; grid-column: span 2"
            >
              <h2>МЫ ЛУЧШИЕ</h2>
              <p>третий год подряд по версии Forbse</p>
            </div>
            <div
              class="infoFrame"
              style="grid-row: span 5; grid-column: span 2"
            >
              <h2>МЫ ЛУЧШИЕ</h2>
              <p>третий год подряд по версии Forbse</p>
            </div>
            <div
              class="infoFrame"
              style="grid-row: span 6; grid-column: span 2"
            >
              <h2>МЫ ЛУЧШИЕ</h2>
              <p>третий год подряд по версии Forbse</p>
            </div>
            <div
              class="infoFrame"
              style="grid-row: span 1; grid-column: span 2"
            >
              <h2>МЫ ЛУЧШИЕ</h2>
              <p>третий год подряд по версии Forbse</p>
            </div>`;
          break;
        case 5:
          serviceMenu.innerHTML = `
          <div
              class="infoFrame"
              style="grid-row: span 6; grid-column: span 2"
            >
              <h2>МЫ ЛУЧШИЕ</h2>
              <p>третий год подряд по версии Forbse</p>
            </div>
            <div
              class="infoFrame"
              style="grid-row: span 5; grid-column: span 4"
            >
              <h2>МЫ ЛУЧШИЕ</h2>
              <p>третий год подряд по версии Forbse</p>
            </div>
            <div
              class="infoFrame"
              style="grid-row: span 1; grid-column: span 4"
            >
              <h2>МЫ ЛУЧШИЕ</h2>
              <p>третий год подряд по версии Forbse</p>
            </div>`;
          break;
      }
    }
    SetInfo();
    but1[0].addEventListener("pointerdown", () => {
      curCategory1 = 0;
      for (let i = 0; i < but1.length; i++) {
        if (i != curCategory1) but1[i].classList.remove("selected");
      }
      SetInfo();
    });
    but1[1].addEventListener("pointerdown", () => {
      curCategory1 = 1;
      for (let i = 0; i < but1.length; i++) {
        if (i != curCategory1) but1[i].classList.remove("selected");
      }
      SetInfo();
    });
    but1[2].addEventListener("pointerdown", () => {
      curCategory1 = 2;
      for (let i = 0; i < but1.length; i++) {
        if (i != curCategory1) but1[i].classList.remove("selected");
      }
      SetInfo();
    });
    but1[3].addEventListener("pointerdown", () => {
      curCategory1 = 3;
      for (let i = 0; i < but1.length; i++) {
        if (i != curCategory1) but1[i].classList.remove("selected");
      }
      SetInfo();
    });
    but1[4].addEventListener("pointerdown", () => {
      curCategory1 = 4;
      for (let i = 0; i < but1.length; i++) {
        if (i != curCategory1) but1[i].classList.remove("selected");
      }
      SetInfo();
    });
    but1[5].addEventListener("pointerdown", () => {
      curCategory1 = 5;
      for (let i = 0; i < but1.length; i++) {
        if (i != curCategory1) but1[i].classList.remove("selected");
      }
      SetInfo();
    });
  }
});
