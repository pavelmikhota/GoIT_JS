'use strict';
$(function() {

	recordTest();
	showTest();
	$('#btn').on('click', showResult);

	function recordTest(){
	    let test = {
	    	title: "Тест по програмированию",
	        buttonText: "Проверить мои результаты",
	        questionList: [
	        {question:"Какой командой выбрать елемент по id?",
	    	variants:["selectElementById();", "findElementById();", "getElementById();"]
	    	}, 
	        {question:"Как вставить элемент в конец списка дочерних элементов родителя?",
	    	variants:["insertAfter();", "Такой опции не существует;", "appendChild();"]
	    	},
	        {question:"Как вставить элемент перед указанным дочерним элементом родителя?",
	    	variants:["insertBefore();", "Такой опции не существует;", "appendChild();"]
	    	},
	        ],
	    };

	    let ansvers = ["getElementById()", "appendChild()", "insertBefore()"];
	    	

	    let str = JSON.stringify(test);
	    let str2 = JSON.stringify(ansvers);
	    localStorage.setItem('test', str);
	    localStorage.setItem('ansvers', str2);
	}

	function showTest(){
	    
    	let str = localStorage.getItem('test');
    	let obj = JSON.parse(str);

  		let content = `<form action="#" method="POST"><h1>${obj.title}</h1><ol>`;

        for(let question of obj.questionList) {
    content += `<li class="question">${question.question}<ul class="variants">`;

            for(let variants of question.variants) { 
        content += `<li><input type="checkbox" class="check" id=""><span>${variants}</span></li>`;
            }
            content +=`</ul></li>`;
        }
    	content += `</ol><button id="btn" class="btn">${obj.buttonText}</button></form>`;
    	$('#holder').append(content);
	}

	function showResult(e){

		e.preventDefault();
		let rightAnsvers = JSON.parse(localStorage.getItem('ansvers'));
		let ourAnsvers = $('.check:checked').next('span').text().split(';', rightAnsvers.length);
		
		let ansvers = compareAnsvers(ourAnsvers, rightAnsvers);
		
		var $modal = $(`<div class="result"> ${ansvers} <button id="okBtn" class="btn">--= Ok =--</button></div>`);
		var $overlay = $('<div class="overlay"></div>');
		$('body').append($overlay);
		$('body').append($modal);

		function hideResult(){
			$modal.remove();
			$overlay.remove();
			$('.check:checked').attr("checked", false);
		}

		$('#okBtn').one('click', hideResult);
	}
	
	function compareAnsvers(ourAnsvers, rightAnsvers) {
		let resultStr = '';
		for(let i = 0; i < ourAnsvers.length; i++) {
			
			if(ourAnsvers[i] === rightAnsvers[i]){
				resultStr += `<p class="rightAnsver"> ${ourAnsvers[i]} <span>   --- Right!!!</span></p>`;
			} else {
				resultStr += `<p class="wrongAnsver"> ${ourAnsvers[i]} <span>   --- Wrong!!!</span></p>`;
			}
		}

		return resultStr;
	}



});

	