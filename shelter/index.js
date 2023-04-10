// console.log (
//     "Сумма баллов: 100\n\n1. Вёрстка страницы Main соответствует макету при ширине экрана 1280px: +14\n2. Вёрстка страницы Main соответствует макету при ширине экрана 768px: +14\n3. Вёрстка страницы Main соответствует макету при ширине экрана 320px: +14\n4. Вёрстка страницы Pets соответствует макету при ширине экрана 1280px: +6\n5. Вёрстка страницы Pets соответствует макету при ширине экрана 768px: +6\n"
// )
// console.log (
//     "6. Вёрстка страницы Pets соответствует макету при ширине экрана 320px: +6\n7. Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки, справа от отдельных блоков не появляются белые поля. Весь контент страницы при этом сохраняется: не обрезается и не удаляется: +20\n8. Верстка резиновая: +8\n9. При ширине экрана меньше 768px на обеих страницах меню в хедере скрывается, появляется иконка бургер-меню: +4\nОткрытие меню при клике на иконку на текущем этапе не проверяется\n10. Верстка обеих страниц валидная: +8 P.S. Есть INFO уведомления в валидаторе, но ошибкой это не считается (не Warning и не Error)"
// )

//burger constants

const burger_icon = document.querySelector(".burger");
const blackOut = document.querySelector(".blackout");
const burger_nav = document.querySelector(".burger-nav");
const burger_menu = document.querySelector(".burger-menu");
const burger_link = document.querySelector(".burger-link");

//modal constants

const cards = document.querySelectorAll(".card");
const popup = document.querySelector(".popup");
const popup_name = document.querySelector(".popup-name");
const popup_type = document.querySelector(".type");
const popup_description = document.querySelector(".description");
const popup_age = document.querySelector(".age");
const popup_inoculations = document.querySelector(".inoculations");
const popup_diseases = document.querySelector(".diseases");
const popup_parasites = document.querySelector(".parasites");
const popup_img = document.querySelector(".popup-img");

//slider constants

const arrow_left = document.querySelector(".main-arrow-left");
const arrow_right = document.querySelector(".main-arrow-right");
const cards_wrapper = document.querySelector(".cards-wrapper");
const left_container = document.querySelector(".left-container");
const center_container = document.querySelector(".center-container");
const right_container = document.querySelector(".right-container");




//burger menu

const burgerToggleFunc = (event) => {
    burger_nav.classList.toggle("open");
    blackOut.classList.toggle("blackout-open");
    burger_icon.classList.toggle("icon-open");
    document.body.style.overflow = burger_nav.classList.contains("open") ? 'hidden' : '';
    
}

burger_icon.addEventListener("click", burgerToggleFunc);
burger_nav.addEventListener("click", burgerToggleFunc);
blackOut.addEventListener("click", burgerToggleFunc);
burger_link.addEventListener("click", burgerToggleFunc);




//modal windows

const modalOpen = (event) => {
    let i = event.currentTarget.id;

    if (popup.classList.contains("hidden")) {
        const pets = 'pets.json';
        fetch(pets)
            .then(res => res.json())
            .then(data => { 
                popup_name.textContent = data[i].name;
                popup_type.textContent = `${data[i].type}` + ' - ' + `${data[i].breed}`;
                popup_description.textContent = data[i].description;
                popup_age.textContent = data[i].age;
                popup_inoculations.textContent = data[i].inoculations;
                popup_diseases.textContent = data[i].diseases;
                popup_parasites.textContent = data[i].parasites;
                popup_img.src = data[i].modal;
            });
        
    }

    popup.classList.toggle("hidden");
    document.body.style.overflow = popup.classList.contains("hidden") ? '' : 'hidden';
}


cards.forEach(card => {
    card.addEventListener("click", modalOpen);
})
popup.addEventListener("click", modalOpen)


//slider
const pastArr = [0,1,2];
const currArr = [3,4,5];
const nextArr = [6,7,0];

const generateCards = (container, arr) => {
    
    for (let i=0; i<container.children.length; i++) {
        console.log(container.children[i]);
        const pets = 'pets.json';
        fetch(pets)
            .then(res => res.json())
            .then(data => { 
                container.children[i].id = arr[i];
                container.children[i].children[0].src = data[arr[i]].img;
                container.children[i].children[0].alt = data[arr[i]].name;
                container.children[i].children[1].children[0].textContent = data[arr[i]].name;
            });
    }  
}

generateCards(left_container, nextArr);
generateCards(center_container, nextArr);
generateCards(right_container, nextArr);

const moveLeft = () => {
    cards_wrapper.classList.add("transition-left");
}

const moveRight = () => {
    cards_wrapper.classList.add("transition-right");
}

arrow_left.addEventListener("click", moveLeft);
arrow_right.addEventListener("click", moveRight);

cards_wrapper.addEventListener("animationend", () => {
    cards_wrapper.classList.remove("transition-left");
    cards_wrapper.classList.remove("transition-right");
})

