function countdownToBirthday() {
    const dateOfBirthday = new Date ('July 20, 2023, 00:00:00')
    const nowDate = new Date()
    const diff = dateOfBirthday - nowDate

    const msInDay = 24 * 60 * 60 * 1000
    const msInHour = 60 * 60 * 1000
    const msInMinute = 60 * 1000
    const msInSecond = 1000

    const displayDay = Math.floor(diff / msInDay)
    document.querySelector('.days').textContent = displayDay

    const displayHour = Math.floor((diff%msInDay) / msInHour)
    document.querySelector('.hours').textContent = displayHour

    const displayMinute = Math.floor((diff%msInHour) / msInMinute)
    document.querySelector('.minutes').textContent = displayMinute

    const displaySecond = Math.floor((diff%msInMinute) / msInSecond)
    document.querySelector('.seconds').textContent = displaySecond

    if (diff <= 0) {
        document.querySelector('.days').textContent = 0
        document.querySelector('.hours').textContent = 0
        document.querySelector('.minutes').textContent = 0
        document.querySelector('.seconds').textContent = 0
        clearInterval(stopTimer)
        newHeader()  
    }
}
let stopTimer = setInterval (countdownToBirthday, 1000)

function newHeader() {
    const newText = document.querySelector('.header-text')
    newText.classList.remove('header-text')
    newText.textContent = ''
    newText.classList.add('new-Text')
    type() 

    const removeContainer = document.querySelector('.container').remove()

    const newBackground = document.querySelector('.header')
    newBackground.classList.remove('header')
    newBackground.classList.add('newHeader')
}

let text = 'congratulate me <3'
let i = 0
let speed = 100

function type() {
    if (i <= text.length) {
        document.querySelector('.new-Text').textContent += text.charAt(i)
        i++
        setTimeout (type, speed)
    }
}