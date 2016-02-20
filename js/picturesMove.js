var myPix = new Array("maths1.jpg", "maths2.jpg", "maths3.jpg","maths4.jpg","maths5.jpg","maths6.jpg");
var thisPic = 0;

function processPrevious() {
    if (document.images && thisPic > 0) {
        thisPic--;
        document.myPicture.src = myPix[thisPic];
    }
}

function processNext() {
    if (document.images && thisPic < 5) {
        thisPic++;
        document.myPicture.src = myPix[thisPic];
    } else {
            alert("Look how easy it is!")
    }
}
