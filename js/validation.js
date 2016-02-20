function validateForm() {
    var a = document.forms["regform"]["username"].value;
    var b = document.forms["regform"]["password"].value;
    var c = document.forms["regform"]["email"].value;
    var d = document.forms["regform"]["firstname"].value;
    var e = document.forms["regform"]["lastname"].value;
    var f = document.forms["regform"]["tel"].value;


    if (a === null || a === "" || b === null || b === "" || c === null || c === "" || d === null || d === "" || e === null
        || e === "" || f === null || f === "") {
        alert("Every field must be filled out");
        return false;
    } else {
        alert("Everything is OK!");
        confirm('Are you ready to send your information')
    }
}

function refuse() {
    confirm('Are you sure you want to reset the page?');
}

/*
function validateForm() {
    var x = [document.forms["regform"]["username"].value, document.forms["regform"]["firstname"].value];
    for (var i = 0; i <= x.length; i++) {
        if (x[i] == null || x[i] == "") {
            alert(" filled out");
            return false;
        } else {
            alert("Everything is OK!")
        }
    }
}
    */