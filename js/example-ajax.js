$(document).ready(function () {
    $("#get").click(function () {
        $.ajax({
            type: "GET", 
            dataType: "json", 
            url: "proba.json",
            async: false,
            contentType: "application/json; charset=utf-8",
            success: function (data) {
                var randomArrayElement = Math.floor(Math.random() * data.length);
                var text = "Your luck is: " + data[randomArrayElement].luck;
                alert(text);
            }
        });
    });
});
