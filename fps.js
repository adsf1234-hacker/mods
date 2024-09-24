var pressedKeys = {};
window.onkeyup = function(e) {
    pressedKeys[e.keyCode] = false;
}
window.onkeydown = function(e) {
    pressedKeys[e.keyCode] = true;
}
ModAPI.addEventListener("update", () => {
    if (Boolean(pressedKeys[70] === true ? true : false)) {
        ModAPI.displayToChat({
            msg: ModAPI.getFPS()
        });
    };
});
