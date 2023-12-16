(
    function () {
        document.addEventListener("DOMContentLoaded", function () {
            var header = document.querySelector(".header")
            var marginTop = header.getBoundingClientRect().bottom + 15;
            document.querySelector(".main").style.marginTop = String(marginTop) + "px";
        });
    }
)();