// ==UserScript==
// @match https://pe.szczecin.pl/*
// ==/UserScript==

window.onload = function() {
    document.onkeypress = function(key) {
        if (key.keyCode == "13") document.getElementById("bloguj1").click();
    };
};
