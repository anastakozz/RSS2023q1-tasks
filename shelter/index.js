console.log (
    "Сумма баллов: 100\n\n1. Вёрстка страницы Main соответствует макету при ширине экрана 1280px: +14\n2. Вёрстка страницы Main соответствует макету при ширине экрана 768px: +14\n3. Вёрстка страницы Main соответствует макету при ширине экрана 320px: +14\n4. Вёрстка страницы Pets соответствует макету при ширине экрана 1280px: +6\n5. Вёрстка страницы Pets соответствует макету при ширине экрана 768px: +6\n"
)
console.log (
    "6. Вёрстка страницы Pets соответствует макету при ширине экрана 320px: +6\n7. Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки, справа от отдельных блоков не появляются белые поля. Весь контент страницы при этом сохраняется: не обрезается и не удаляется: +20\n8. Верстка резиновая: +8\n9. При ширине экрана меньше 768px на обеих страницах меню в хедере скрывается, появляется иконка бургер-меню: +4\nОткрытие меню при клике на иконку на текущем этапе не проверяется\n10. Верстка обеих страниц валидная: +8 P.S. Есть INFO уведомления в валидаторе, но ошибкой это не считается (не Warning и не Error)"
)


const burger_icon = document.querySelector(".burger");
const blackOut = document.querySelector(".blackout");
const burger_nav = document.querySelector(".burger-nav");
const burger_menu = document.querySelector(".burger-menu");


const burgerToggleFunc = (event) => {
    burger_nav.classList.toggle("open");
    blackOut.classList.toggle("blackout-open");
    burger_icon.classList.toggle("icon-open");
    document.body.style.overflow = burger_nav.classList.contains("open") ? 'hidden' : '';

}

burger_icon.addEventListener("click", burgerToggleFunc);
burger_menu.addEventListener ("click", burgerToggleFunc);



