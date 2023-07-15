// Custom Scripts
// Мобильное меню бургер
function burgerMenu() {
    const burger = document.querySelector('.burger')
    const menu = document.querySelector('.menu')
    const body = document.querySelector('body')
    const logo = document.querySelector('.logo')
    burger.addEventListener('click', () => {
        if (!menu.classList.contains('active')) {
            menu.classList.add('active')
            burger.classList.add('active')
            logo.classList.add('active')
            body.classList.add('locked')
        } else {
            menu.classList.remove('active')
            burger.classList.remove('active')
            logo.classList.remove('active')
            body.classList.remove('locked')
        }
    })
    // Вот тут мы ставим брейкпоинт навбара
    window.addEventListener('resize', () => {
        if (window.innerWidth > 991.98) {
            menu.classList.remove('active')
            burger.classList.remove('active')
            logo.classList.remove('active')
            body.classList.remove('locked')
        }
    })
}
burgerMenu()


// PhoneMask
// const maskElement = document.querySelector('.phone__input')
// const maskElementById = document.getElementById('#phone_id')
document.querySelectorAll('.phone__input').forEach((e) => {
  const phoneMask = IMask( e, { mask: '+{7}(000)000-00-00' })
})
// const maskOptions = {
//     mask: '+{7}(000)000-00-00',
// }
// const mask = IMask(maskElement, maskOptions)

// Yandex Map 

    // Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [59.943543, 30.338928],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 16
        });
      //   var myPlacemark = new ymaps.GeoObject({
      //     geometry: {
      //         type: "Point",
      //         coordinates: [59.943543, 30.338928]
      //     }
      // });
      var myPlacemark = new ymaps.Placemark([59.943543, 30.338928], 
        {
          balloonContent: `<ul class="menu_footer">
          <li class="menu__item">
            <address>
              Адрес: Наб. реки Фонтанки 10-15
            </address></li>
          <li>
            <p class="phone"><a href="tel:+781212334567">Телефон: 8 (812) 123-45-67</a></p>
          </li>
          <li class="menu__item">
            Отдел продаж: 10:00 - 20:00</li>
          <li class="menu__item"><p class="email">
            <a href="mailto:vip@lofthouse.ru">E-mail: <span>vip@lofthouse.ru</span></a></p></li>
          `
          
        },
         {
        preset: 'islands#blueHomeCircleIcon'
    });
    myMap.geoObjects.add(myPlacemark); 
    myMap.controls.remove('geolocationControl');
    myMap.controls.remove('searchControl');
    myMap.controls.remove('routeButtonControl');
    myMap.controls.remove('rulerControl');
    myMap.controls.remove('trafficControl');
    // myMap.controls.remove('zoomControl');
    // myMap.behaviors.disable(['scrollZoom']);
    
    }


