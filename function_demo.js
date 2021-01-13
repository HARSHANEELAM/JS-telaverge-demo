function powerFunction() 
    {
        let x,y;
        x = Number(prompt(`Enter first value`));
        y = Number(prompt(`Enter second value`));
        if (x >= 1 && y >= 1)
        {
            let z;
            z= x**y;
            return alert(z);
        }
        else
        {
            alert(`only positive integers are allowed`);
            powerFunction();
        }
    }
