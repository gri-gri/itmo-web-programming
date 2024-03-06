(
    function () {
        document.addEventListener("DOMContentLoaded", function () {
            document.querySelector(".current-match__betray-button").addEventListener("click", function () {
                var points_amount_block = document.querySelector(".user-profile__points-amount")
                var new_points_amount = Math.max(Number(points_amount_block.textContent) - 1, 0)
                points_amount_block.textContent = new_points_amount
                localStorage.setItem("points_amount", new_points_amount)
            })}
        );
    }
)();
