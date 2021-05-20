function beer()
{
    function bottleWord(input)
    {
        if(input === 1)
            return " bottle ";
        else
            return " bottles ";
    }

    for(var index = 99; index >= 1; index--)
    {
        console.log(index + bottleWord(index) + "of beer on the wall, " + index + bottleWord(index) + "of beer.");

        if(index - 1 === 0)
            console.log("Take one down, pass it around. No more bottles of beer on the wall.");
        else
           console.log("Take one down, pass it around. " + (index - 1) + bottleWord(index - 1) + "of beer on the wall.");
    }
}

