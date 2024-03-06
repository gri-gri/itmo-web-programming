(
    function () {
        document.addEventListener("DOMContentLoaded", function () {
            node = document.createElement("p")
            node.textContent = "Page load time = " + (performance.mark('pageEnd').startTime / 1000).toFixed(3) + " sec";
            document.querySelector(".footer").appendChild(node)
        });
    }
)();
