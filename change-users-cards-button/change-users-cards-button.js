(
    function () {
        document.addEventListener("DOMContentLoaded", function () {
            document.querySelector(".change-users-cards-button").addEventListener("click", changeUsers);
        });
    }
)();

function random(mn, mx) {
    return Math.floor(Math.random() * (mx - mn) + mn);
}

async function changeUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    var users_holder = document.querySelector(".users-cards-holder");
    while (users_holder.firstChild) {
        users_holder.removeChild(users_holder.lastChild)
    }
    for (var index = 0; index < random(1, 11); index++) {
        var user_index = random(0, users.length)
        var user = document.createElement("div");
        var user_name = document.createElement("p");
        user_name.textContent = users[user_index].name;
        var user_email = document.createElement("p");
        user_email.textContent = users[user_index].email;
        user.appendChild(user_name);
        user.appendChild(user_email);
        user.classList.add("user-card", "user-card_background_white", "users-cards-holder__user-card", "text");
        users_holder.appendChild(user);
    }
}