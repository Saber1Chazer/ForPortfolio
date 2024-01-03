document.addEventListener("DOMContentLoaded", function () {
    // Ждем загрузки контента страницы, затем скрываем preloader
    setTimeout(function () {
        var preloader = document.getElementById("preloader_container");
        preloader.style.visibility = "hidden";
        preloader.style.opacity = "0";
    }, 2000); // 3000 миллисекунд = 3 секунды
});
