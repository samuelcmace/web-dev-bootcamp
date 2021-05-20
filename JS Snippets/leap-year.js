function isLeap(year) {
    var result;

    if(year % 4 === 0)
      result = true;
    else if(year % 100 === 0)
    {
      result = false;
      if(year % 400 === 0)
        result = true;
    }

    return result;
}

/*
year % 4 === 0 yes
year % 100 === 0 no
year % 400 === 0 yes

*/

var year = prompt("Enter in the year:");
if(isLeap(year) === true)
    alert("The year you entered IS a leap year.");
else
    alert("The year you entered IS NOT a leap year.");
