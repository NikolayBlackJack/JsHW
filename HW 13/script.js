window.onload = function () {
    function getId(a) {
        return document.getElementById(a);
    }
    function creatE(b) {
        return document.createElement(b);
    }
    function txt(c) {
        return document.createTextNode(c);
   }
    function creatBlock(){
        let divBlock1 = creatE('div');
        divBlock1.id = 'block1';
        let hDiv1 = creatE('h2');
        let pDiv1 = creatE('p');
        let buttonDiv1 = creatE('input');
        let txtD1h = txt('Лошадь');
        let txtD1p = txt('Домашняя лошадь — животное семейства непарнокопытных,\n' +
            '        одомашненный и единственный сохранившийся подвид дикой лошади,\n' +
            '        вымершей в дикой природе, за исключением небольшой популяции лошади Пржевальского.');
        buttonDiv1.type = 'button';
        buttonDiv1.id = 'buttonDiv1';
        buttonDiv1.class = 'buttonHid';
        buttonDiv1.value = '[x]';
        document.body.appendChild(divBlock1);
        divBlock1.appendChild(hDiv1);
        divBlock1.appendChild(pDiv1);
        divBlock1.appendChild(buttonDiv1);
        hDiv1.appendChild(txtD1h);
        pDiv1.appendChild(txtD1p);
        let divBlock2 = creatE('div');
        divBlock2.id = 'block2';
        let hDiv2 = creatE('h2');
        let pDiv2 = creatE('p');
        let buttonDiv2 = creatE('input');
        let txtD2h = txt('Осёл');
        let txtD2p = txt('Домашний осёл или ишак — одомашненный подвид дикого осла,сыгравший важную историческую роль в развитии хозяйства и культуры человека.Все одомашненные ослы относятся к африканским ослам.');
        buttonDiv2.type = 'button';
        buttonDiv2.id = 'buttonDiv2';
        buttonDiv2.class = 'buttonHid';
        buttonDiv2.value = '[x]';
        divBlock2.appendChild(hDiv2);
        divBlock2.appendChild(pDiv2);
        divBlock2.appendChild(buttonDiv2);
        hDiv2.appendChild(txtD2h);
        pDiv2.appendChild(txtD2p);
        document.body.appendChild(divBlock2);
        let divBlock3 = creatE('div');
        divBlock3.id = 'block3';
        let hDiv3 = creatE('h2');
        let pDiv3 = creatE('p');
        let buttonDiv3 = creatE('input');
        let txtD3h = txt('Корова, а также пара слов о диком быке, о волах и о тёлках.');
        let txtD3p = txt('Коро́ва — самка домашнего быка, одомашненного подвида дикого быка,\n' +
            '        парнокопытного жвачного животного семейства полорогих. Самцы вида называются быками, молодняк — телятами,\n' +
            '        кастрированные самцы — волами. Молодых (до первой стельности) самок называют тёлками.');
        buttonDiv3.type = 'button';
        buttonDiv3.id = 'buttonDiv3';
        buttonDiv3.class = 'buttonHid';
        buttonDiv3.value = '[x]';
        divBlock3.appendChild(hDiv3);
        divBlock3.appendChild(pDiv3);
        divBlock3.appendChild(buttonDiv3);
        hDiv3.appendChild(txtD3h);
        pDiv3.appendChild(txtD3p);
        document.body.appendChild(divBlock3);
        function buttonHiden(){
            getId('buttonDiv1').onclick = function () {
                getId('block1').hidden = 'true';
            }
            getId('buttonDiv2').onclick = function () {
                getId('block2').hidden = 'true';
            }
            getId('buttonDiv3').onclick = function () {
                getId('block3').hidden = 'true';
            }
        }
        buttonHiden();
    }
    creatBlock();
    function roundabout() {
        function creatImgList() {
            let divContainer = creatE('div');
            divContainer.id = 'container';
            let arrow1 = creatE('input');
            arrow1.type = 'button';
            arrow1.value = '⇦';
            arrow1.id = 'arrow1';
            let arrow2 = creatE('input');
            arrow2.type = 'button';
            arrow2.value = '⇨';
            arrow2.id = 'arrow2';
            let divImg = creatE('div');
            divImg.id = 'divimg';
            let ul = creatE('ul');
            ul.id = 'ulLis';
            let li1 = creatE('li');
            let li2 = creatE('li');
            let li3 = creatE('li');
            let li4 = creatE('li');
            let li5 = creatE('li');
            let li6 = creatE('li');
            let li7 = creatE('li');
            let img1 = creatE('img');
            let img2 = creatE('img');
            let img3 = creatE('img');
            let img4 = creatE('img');
            let img5 = creatE('img');
            let img6 = creatE('img');
            let img7 = creatE('img');
            img1.src = 'img/img1.jpg';
            img2.src = 'img/img2.jpg';
            img3.src = 'img/img3.jpg';
            img4.src = 'img/img4.jpg';
            img5.src = 'img/img5.jpg';
            img6.src = 'img/img6.jpg';
            img7.src = 'img/img7.jpg';
            divContainer.appendChild(divImg);
            divContainer.appendChild(arrow1);
            divContainer.appendChild(arrow2);
            divImg.appendChild(ul);
            li1.appendChild(img1);
            li2.appendChild(img2);
            li3.appendChild(img3);
            li4.appendChild(img4);
            li5.appendChild(img5);
            li6.appendChild(img6);
            li7.appendChild(img7);
            ul.appendChild(li1);
            ul.appendChild(li2);
            ul.appendChild(li3);
            ul.appendChild(li4);
            ul.appendChild(li5);
            ul.appendChild(li6);
            document.body.appendChild(divContainer);
        }
        creatImgList();
        function arrow() {
            let lis = document.getElementsByTagName('li');
            for (let i = 0; i < lis.length; i++) {
                lis[i].style.position = 'relative';
                let span = document.createElement('span');
                span.style.cssText = 'position:absolute;left:0;top:0';
                span.innerHTML = i + 1;
                lis[i].appendChild(span);
            }
            let width = 130;
            let count = 3;
            let container = getId('container');
            let listElems = container.querySelectorAll('li');
            let position = 0;
            getId('arrow1').onclick = function () {
                position = Math.min(position + width * count, 0)
                getId('ulLis').style.marginLeft = position + 'px';
            }
            getId('arrow2').onclick = function () {
                position = Math.max(position - width * count, -width * (listElems.length - count));
                getId('ulLis').style.marginLeft = position + 'px';
            }
        }
        arrow();
    }
    roundabout();
}
