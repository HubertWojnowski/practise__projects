const converter = document.querySelector('#converter')
const result = document.querySelector('.result')
const convBtn = document.querySelector('.conv')
const resetBtn = document.querySelector('.reset')
const changeBtn = document.querySelector('.change')
const one = document.querySelector('.one')
const two = document.querySelector('.two')

const swap = () => {
    if (one.textContent === '°C') {
        one.textContent = '°F'
        two.textContent = '°C'
        result.textContent = ' '
    } else {
        one.textContent = '°C'
        two.textContent = '°F'
        result.textContent = ' '
    }
}

const fahrToCel = () => {
    const fahrenheit = converter.value * 1.8 + 32;
    result.textContent = `${converter.value}°C to ${fahrenheit.toFixed(1)}°F`
    converter.value = ' '
}

const celToFahr = () => {
    const celsius = (converter.value - 32) / 1.8;
    result.textContent = `${converter.value}°F to ${celsius.toFixed(1)}°C`
    converter.value = ' '
}

const conversion = () => {
    if (converter.value !== '') {
        if (one.textContent === '°C') {
            fahrToCel()
        } else {
            celToFahr()
        }
    } else {
        result.textContent = 'Musisz podać jakąś wartość'
    }
}

const reset = () => {
    converter.textContent = ' '
    result.textContent = ' '
}

changeBtn.addEventListener('click', swap)
convBtn.addEventListener('click', conversion)
resetBtn.addEventListener('click', reset)



