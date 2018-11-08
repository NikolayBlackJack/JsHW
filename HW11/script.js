window.onload = function() {
    function creatTable() {
        let table = document.createElement('table');
        for (let i = 1; i <= 5; i++) {
            let tr = document.createElement('tr');
            let td1 = document.createElement('td');
            let td2 = document.createElement('td');
            let td3 = document.createElement('td');
            let td4 = document.createElement('td');
            let td5 = document.createElement('td');
            let text1 = document.createTextNode('1:' + i);
            let text2 = document.createTextNode('2:' + i);
            let text3 = document.createTextNode('3:' + i);
            let text4 = document.createTextNode('4:' + i);
            let text5 = document.createTextNode('5:' + i);
            td1.appendChild(text1);
            td2.appendChild(text2);
            td3.appendChild(text3);
            td4.appendChild(text4);
            td5.appendChild(text5);
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tr.appendChild(td5);
            table.appendChild(tr);
        }
        document.body.appendChild(table);
        function styleTable() {
            let table1 = document.body.children[0];
            for (let i = 0; i < table.rows.length; i++) {
                let row = table.rows[i];
                row.cells[i].style.backgroundColor = 'red';
            }
            return table1;
        }
        styleTable();
     return table;
    }
    creatTable();

    function creatList() {
        let list = document.createElement('ul');
        for (let i = 0; i <= 1; i++) {
            let li = document.createElement('li');
            let li1 = document.createElement('li');
            let li2 = document.createElement("li");
            let li3 = document.createElement('li');
            let li4 = document.createElement('li');
            let li5 = document.createElement('li');
            let txt1 = document.createTextNode('Опапа');
            let txt2 = document.createTextNode('щось цікаве');
            let txt3 = document.createTextNode('а може');
            let txt4 = document.createTextNode('ні');
            let txt5 = document.createTextNode('хихи');
            li1.appendChild(txt1);
            li2.appendChild(txt2);
            li3.appendChild(txt3);
            li4.appendChild(txt4);
            li5.appendChild(txt5);
            list.appendChild(li1);
            list.appendChild(li2);
            list.appendChild(li3);
            list.appendChild(li4);
            list.appendChild(li5);
        }
        document.body.appendChild(list);
        function bringOut() {
            let lis = document.getElementsByTagName('li');
            for (let j = 0; j < lis.length; j++) {
                let title = lis[j].firstChild.data;
                title = title.trim();
                let childCount = lis[j].getElementsByTagName('li').length;
                console.log(title + ': ' + childCount);
            }
            return lis;
        }
        bringOut();
        return list;
    }
    creatList();
}