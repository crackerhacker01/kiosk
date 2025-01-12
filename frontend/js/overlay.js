var db_error_overlay_text = "<div>" +
    "<h1 style='color: red'> DB ODER API FUNKTIONIERT NICHT RICHTIG!</h1><br><br>" +
    "<p style='color:red'>Bitte prüfen Sie die backend konsole für mehr Informationen.<br>Überprüfen Sie zudem, ob Ihre Konfigurationen richtig sind</h1>" +
    "</div>"

function overlay_on(content) {
    document.getElementById("overlay").innerHTML = content;
    document.getElementById("overlay").style.display = "block";
    setTimeout(()=> {document.getElementById("overlay").style.opacity = "1";}, 0)
}

function overlay_off() {
    document.getElementById("overlay").style.opacity = "0";
    setTimeout(function() {document.getElementById("overlay").style.display = "none";}, 300);
}

function removeClassesOnObejects(class_name) {
    var matches = document.getElementsByClassName(class_name);
    while (matches.length > 0) {
        matches[0].classList.remove(class_name);
    }
}
