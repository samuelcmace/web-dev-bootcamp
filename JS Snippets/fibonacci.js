function fibonacciGenerator(n) {
    if(n === 1)
        return [0];
    else if(n === 2)
        return [0, 1];
    else
    {
        var fibonacciArray = [0, 1];
        
        for(var index = 2; index >= n; index++)
        {
            fibonacciArray.push(fibonacciArray[fibonacciArray.length + 1]);
        }
    }
}