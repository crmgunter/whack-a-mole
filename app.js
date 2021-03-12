const squares = document.querySelectorAll(".square");
const moles = document.querySelectorAll(".mole");
let score = 0;

setInterval(() => {
    const num = Math.floor(Math.random() * Math.floor(squares.length));

    squares.forEach(square => square.classList.remove("mole"));

    squares[num].classList.add("mole")
}, 1000)

squares.forEach((square) => {
    square.addEventListener('click', () => {
        if (square.classList.contains("mole")) {
            score += 1
            document.querySelector(".score").innerHTML = score;
            square.classList.remove("mole")
        }
    })
})