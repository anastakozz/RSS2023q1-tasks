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





const modalOpen = (event) => {
    let i = event.currentTarget.id;
    console.log(i);



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




