(
    function () {
        document.addEventListener("DOMContentLoaded", function () {
            var points_amount = localStorage.getItem("points_amount")
            if (points_amount == null) {
                points_amount = 67
            }
            document.querySelector(".user-profile__points-amount").textContent = points_amount
        });
    }
)();