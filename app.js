function getRandomNumber(min, max) {
    return Math.floor((Math.random() * (max - min)) + min)
    }
    function randomColor() {
        let r = prompt('Введите-R:')
        let g = prompt('Введите-G:')
        let b = prompt('Введите-B:')
        document.body.style.background = `rgb(${r}, ${g}, ${b})`
    }
    