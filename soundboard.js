var Boo = new Audio("boo.wav")
var Boom = new Audio("boom_x.wav")
var Crash = new Audio("crash_x.wav")

document.getElementById('boo-button').onclick = function() {
    Boo.play()
}

document.getElementById('boom-button').onclick = function() {
    Boom.play()
}

document.getElementById('crash-button').onclick = function() {
    Crash.play()
}

document.getElementById('boo-button').onmouseenter = function() {
    Boo.play()
}

document.getElementById('boom-button').onmouseenter = function() {
    Boom.play()
}

document.getElementById('crash-button').onmouseenter = function() {
    Crash.play()
}
