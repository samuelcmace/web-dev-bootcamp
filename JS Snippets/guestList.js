var guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];

var guestName = prompt("What is your name?");
if(guestList.includes(guestName))
    alert("Welcome to the party!");
else
    alert("I'm sorry, but you haven't been invited by the host.")