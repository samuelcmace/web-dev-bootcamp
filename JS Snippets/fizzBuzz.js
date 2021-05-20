var output = [];

var index = 1;

function fizzBuzz() {
    if(index % 3 === 0)
    {
        if(index % 5 === 0)
            output.push("FizzBuzz");
        else
            output.push("Fizz");
    }
    else if(index % 5 === 0)
        output.push("Buzz");
    else
        output.push(index);

    index++;
    console.log(output);
}
