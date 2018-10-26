let y = 5 ;
let rach = 0;
for (let j = 1; j <= y ; j++){
    let k = +prompt('Введіть число','');
    if (k < 0){
        rach++;
    }
}
alert(rach);




    let t = +prompt('Скільки вивести', '');
    let h = +prompt('Горизонтально чи вертикально (1,2)', '');
    if (h === 1) {
        for (let i = 0; i <= t; i++) {
            document.write("*")
        }
    }
    else if (h === 2) {
        for (let i = 0; i <= t; i++) {
            document.write("*" + "<br>")
        }
    }



    while (true){
        let put = prompt('Вивести зірку?','так');
        if (put.toLowerCase() === "так"){
            document.write("*");
        }
        else if (put.toLowerCase() === "ні"){
            break;
        }

    }
//

    let f;
    let rah = 0;
    while (true) {
        f = +prompt('Введіть числа','');
        if (f > 0) {
            rah++;
        }
        if (f < 0) {
            break;
        }
    }
    console.log(rah);

