document.addEventListener("DOMContentLoaded", function () {
    var toggleButton = document.getElementById("toggleButton");
    var menu = document.getElementById("menu");

    toggleButton.addEventListener("click", function () {
        // Menü görünürlüğünü değiştir
        if (menu.style.display === "none" || menu.style.display === "") {
            menu.style.display = "block";
        } else {
            menu.style.display = "none";
        }
    });
});
