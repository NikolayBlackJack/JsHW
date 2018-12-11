    function creatE(a) {
        return document.createElement(a);
    }

    function getId(b) {
        return document.getElementById(b);
    }
    function creatTop() {
        let header = creatE('header');
        header.id = 'Top';
        let h1 = creatE('h1');
        h1.style.textAlign = 'center';
        let text = document.createTextNode('TODO Cat List');
        let form = creatE('form');
        form.style.margin = '0 20%';
        form.style.width = '70%';
        form.name = 'action';
        let line = creatE('div');
        line.style.width = '80%';
        line.style.height = '5px';
        line.style.margin = '10px auto';
        line.style.backgroundColor = 'black';
        let input = creatE('input');
        input.type = 'text';
        input.placeholder = 'add new Action';
        input.style.width = '70%';
        input.style.margin = '0 auto';
        input.id = 'textAction';
        let add = creatE('input');
        add.style.margin = '0px 3%';
        add.type = 'button';
        add.style.width = '25px';
        add.value = 'add';
        add.style.fontSize = '24px';
        add.style.color = 'white';
        add.style.border = '1px solid black';
        add.style.backgroundColor = 'black';
        add.style.padding = '0';
        add.id = 'add';
        add.className = 'material-icons';
        add.disabled = 'disabled';
        add.addEventListener('click', function () {
            creatAction();
        });
        document.body.appendChild(header);
        header.appendChild(h1);
        h1.appendChild(text);
        header.appendChild(form);
        form.appendChild(input);
        form.appendChild(add);
        header.appendChild(line);
        form.addEventListener('change', function () {
            if (input.value === "") {
                add.disabled = true;
            } else {
                add.disabled = false;
            }
        });
        add.addEventListener('click', function () {
            if (getId('contAction').childElementCount === 10) {
                getId('add').disabled = true;
                creatErorDiv();
            } else {
                getId('add').disabled = false;
            }
        });
    }

    function creatMain() {
        let div = creatE('div');
        let ul = creatE('ul');
        ul.id = 'contAction';
        document.body.appendChild(div);
        div.appendChild(ul);
    }

    function creatBot() {
        let footer = creatE('footer');
        footer.style.width = '76px';
        footer.style.height = '79px';
        footer.style.margin = '0 auto';
        let img = creatE('img');
        img.src = 'img/1.png';
        document.body.appendChild(footer);
        footer.appendChild(img);
    }

    function creatAction() {
        let action = creatE('li'),
            checked = creatE('input'),
            remove = creatE('button');
        let txtRe = document.createTextNode('delete');
        getId('contAction').appendChild(action);
        action.appendChild(remove);
        action.appendChild(checked);
        remove.appendChild(txtRe);
        checked.type = 'checkbox';
        checked.style.width = '20px';
        checked.style.height = '30px';
        action.style.listStyle = 'none';
        action.style.width = '70%';
        action.style.height = '30px';
        action.style.margin = '10px auto';
        action.style.border = '2px solid black';
        action.style.padding = '5px';
		action.draggable = 'true';
		action.className = 'action';
        remove.style.width = '20px';
        remove.style.height = '28px';
        remove.style.padding = '0';
        remove.style.float = 'right';
        remove.style.fontSize = '30px';
        remove.style.backgroundColor = 'white';
        remove.style.color = 'black';
        remove.style.border = '1px solid white';
        remove.style.margin = '0px auto';
        remove.id = 'remov';
        remove.className = 'material-icons';
        remove.addEventListener('click', function () {
            action.parentNode.removeChild(action)
        });

        remove.addEventListener('click', function () {
            if (getId('contAction').childElementCount < 10){
                getId('err').parentNode.removeChild(getId('err'));
                getId('add').disabled = false;
            }else {
                getId('add').disabled = true;
            }
        });
        let text = creatE('span');
        let textIn = getId('textAction').value;
        text.style.position = 'relative';
        text.style.top = '-10px';
        text.style.left = '70px';
        text.innerHTML = textIn;
        action.appendChild(text);
        initEvent();
    }

    function creatErorDiv() {
        let err = creatE('div');
        let errText = document.createTextNode('Кількість 10!!!')
        let p = creatE('p');
        err.style.width = '32%';
        err.style.height = '41px';
        err.style.margin = '0 auto';
        err.style.backgroundColor = '#fd8282c2';
        err.style.textAlign = 'center';
        err.style.padding = '1px';
        err.id = 'err';
        getId('Top').appendChild(err);
        err.appendChild(p);
        p.appendChild(errText);
    }
    let dragSrcEl = null;
    function handleDragStart(e) {
        this.style.color = 'indigo';
        dragSrcEl = this;
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', this.innerHTML);
    }
    function handleDragOver(e) {
        if (e.preventDefault()) {
            e.preventDefault();
        }
        e.dataTransfer.dropEffect = 'move';
    }
    function handleDrop(e) {
        if (e.preventDefault()){
            e.preventDefault();
        }
        if (dragSrcEl !== this){
            dragSrcEl.innerHTML = this.innerHTML;
            this.innerHTML = e.dataTransfer.getData('text/html');
        }
		console.log(dragSrcEl);
        return false;
    }
    function initEvent() {
        let cols = document.querySelectorAll('#contAction .action');
            [].forEach.call(cols, (col) => {
                col.addEventListener('dragstart', handleDragStart, false);
                col.addEventListener('dragover', handleDragOver, false);
                col.addEventListener('drop', handleDrop, false);
            });
    }
    creatTop();
    creatMain();
    creatBot();


