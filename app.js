let letters = document.querySelectorAll('.letter')
function randRGB () {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

const ltrsInterval = setInterval(function loop () {
for (let letter of letters) {
    letter.style.color = randRGB();
}
}, 1500);
