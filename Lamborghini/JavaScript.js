        // Получить элементы DOM
        var scrollDown1 = document.getElementById('scroll-down1');
        var scrollDown2 = document.getElementById('scroll-down2');
        var anchor_characteristics = document.getElementById('anchor_characteristics');
        var anchor_color = document.getElementById('anchor_color');

        // Добавить обработчик события для элемента прокрутки вниз
        scrollDown1.addEventListener('click', function() {
            // Использовать метод scrollIntoView для прокрутки до якоря
            anchor_characteristics.scrollIntoView({ behavior: 'smooth' });
        });
        scrollDown2.addEventListener('click', function() {
            // Использовать метод scrollIntoView для прокрутки до якоря
            anchor_color.scrollIntoView({ behavior: 'smooth' });
        }); 