prompt("What is your name?");
prompt("What is their name?");

var loveScore = Math.floor(Math.random() * 100) + 1;

if(loveScore > 70) {
    alert("Your love score is " + loveScore + ". You will have to put virtually no effort to make this relationship work out.");

}

if (loveScore > 30 && loveScore <= 70) {
    alert("Your love score is " + loveScore + ".");
}

else {
    alert("Your love score is " + loveScore + ". You go together like oil and water.");
}
