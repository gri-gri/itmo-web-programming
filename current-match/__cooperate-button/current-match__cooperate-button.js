(
    function () {
        document.addEventListener("DOMContentLoaded", function () {
            document.querySelector(".current-match__cooperate-button").addEventListener("click", function () {
                var points_amount_block = document.querySelector(".user-profile__points-amount")
                var new_points_amount = Math.min(Number(points_amount_block.textContent) + 2, 100)
                points_amount_block.textContent = new_points_amount
                localStorage.setItem("points_amount", new_points_amount)
            })}
        );
    }
)();
