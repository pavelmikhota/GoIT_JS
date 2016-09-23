'use strict';

$(function() {

	var questObj = {
		testTitle: 'Тест',
		questions: [
			{
			quest: 'Столица Украины?',
			answers: [
					  {answer: 'Киев', check: true}, 
					  {answer:'Харьков', check: false},
					  {answer:'Днепр', check: false}
					 ]
			}, 
			{
			quest: 'Сколько хромосом у человека?',
			answers: [
					  {answer: '21', check: false}, 
					  {answer:'23', check: true},
					  {answer:'очень сложно', check: false}
					 ]
			}, 
			{
			quest: 'Сколько станций метро в Харькове на состояние 23.09.2016?',
			answers: [
					  {answer: '56', check: false}, 
					  {answer:'35', check: false},
					  {answer:'30', check: true}
					 ]
			}
		]
	};


	var questObjStr = JSON.stringify(questObj);
	localStorage.setItem('hardtest', questObjStr);
	var testObj = localStorage.getItem('hardtest');
	testObj = JSON.parse(testObj);


	var html = $('#hardest_test').html();

	var content = tmpl(html, testObj);

	$('body').append(content);
});

$(function() {
	function showBadResult() {
		$('.modal_bckgr').css('display', 'block').click(function() {
			$('.modal_content').css('display', 'none');
			$('.modal_bckgr').css('display', 'none');
			$('#form-test input:checked').removeAttr('checked');
		});
		$('.modal_result').html('Тест не пройден').css('color', 'red');
		$('.modal_content').fadeIn(1500);
	}

	function showGoodResult() {
		$('.modal_bckgr').css('display', 'block').click(function() {
			$('.modal_content').css('display', 'none');
			$('.modal_bckgr').css('display', 'none');
			$('#form-test input:checked').removeAttr('checked');
		});
		$('.modal_result').html('Тест пройден, поздравляем!').css('color', 'green');
		$('.modal_content').fadeIn(1500);
	}

	$('#check_result').click(function(){
		var checkedAnswers = $('#form-test input:checked');
		var correctAnswers = $('.correct');
		if (checkedAnswers.length == correctAnswers.length) {
			var correctNum = 0;
			
			for(var k =0; k < checkedAnswers.length; k++) {
				if(checkedAnswers[k].getAttribute('class') == 'correct') {
					correctNum++;
					continue;
				}
				break;
			}

			if(correctNum == correctAnswers.length) {
				showGoodResult();
			} else {
				showBadResult();
			}
		} else {
			showBadResult();
		}
	});
});
