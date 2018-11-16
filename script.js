window.onload = function(){
	function getId(a) {
		return document.getElementById(a);
	}
	function creatE(b) {
		return document.createElement(b);
	}
    function showCover() {
		let coverDiv = creatE('div');
		coverDiv.id = 'cover_div';
		document.body.appendChild(coverDiv);
	}
  function hideCover() {
    document.body.removeChild(getId('cover_div'));
  }

  function showPrompt(text, callback) {
    showCover();
    let form = getId('form_prom');
    let container = getId('prom_form_cont');
    getId('text').innerHTML = text;
    form.elements.text.value = '';

  function complete(value) {
    hideCover();
    container.style.display = 'none';
    document.onkeydown = null;
    callback(value);
   }

  form.onsubmit = function() {
    let value = form.elements.text.value;
    if (value == '') return false; 

    complete(value);
    return false;
  };

  form.elements.cancel.onclick = function() {
    complete(null);
  };

  document.onkeydown = function(e) {
    if (e.keyCode == 27) { 
      complete(null);
    }
  };

  let lastElem = form.elements[form.elements.length - 1];
  let firstElem = form.elements[0];

  lastElem.onkeydown = function(e) {
    if (e.keyCode == 9 && !e.shiftKey) {
      firstElem.focus();
      return false;
    }
  };

  firstElem.onkeydown = function(e) {
    if (e.keyCode == 9 && e.shiftKey) {
      lastElem.focus();
      return false;
    }
  };
  container.style.display = 'block';
  form.elements.text.focus();
}

getId('show_button').onclick = function() {
  showPrompt("Введите что-нибудь<br>...умное :)", function(value) {
    alert("Вы ввели: " + value);
  });
}
}
