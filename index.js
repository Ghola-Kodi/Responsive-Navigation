const responsiveDisplay = document.querySelector ('slide-open')


function openSlide() {
    document.getElementById ("demo").style.display = "block"
    document.getElementById ('hide').style.display = "none"
    document.getElementById ("close").style.display = "block"
}

function Slideclose() {
    document.getElementById ("demo").style.display = "none"
    document.getElementById ('hide').style.display = "block"
}
