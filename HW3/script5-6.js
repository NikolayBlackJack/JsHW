    function factorial(n) {
        let fact = 1;
        for (let i = 1; i <= n; i++) {
        fact = fact * i;
        }
        return fact;
    }
    alert(factorial(5));

    function fib(f) {
        let a = 1,
            b = 1;
        for (let i = 3; i <= f; i++) {
            let c = a + b;
            a = b;
            b = c;
        }
        return b;
    }
    alert(fib(10));



    let v = +prompt('v?','');
    switch(v) {
         case 0 :
            alert(0);
            break;
         case 1 :
            alert(1);
            break;
         case 2 :
         case 3 :
            alert('2,3');
            break;
    }