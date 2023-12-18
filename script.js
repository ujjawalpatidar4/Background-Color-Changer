const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach(function (button) {
    button.addEventListener("click", function (e) {
        switch (e.target.id) {
            case "grey":
                body.style.backgroundColor = e.target.id;
            case "yellow":
                body.style.backgroundColor = e.target.id;
            case "white":
                body.style.backgroundColor = e.target.id;
            case "blue":
                body.style.backgroundColor = e.target.id;
        }
        console.log(e.target)
    });
});
