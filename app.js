const number = document.querySelector('.random_number');
const btn = document.querySelector('.btn')

function randomnumber() {
    return Math.floor(Math.random() * 101)
}

btn.addEventListener("click", function () {
    number.textContent = randomnumber()
})
