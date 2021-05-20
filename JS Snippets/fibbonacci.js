function fibonacciGenerator (n) {

    if(n === 1)
        return [0];
    
    else if(n === 2)
        return [0, 1];
    
    else
    {
        var numbers = [0, 1];
    
        var i;
        for(i = 2; i < n; i++)
        {
            numbers[i] = (numbers[i-1])+(numbers[i-2]);
        }

        return numbers;
    }
        
}