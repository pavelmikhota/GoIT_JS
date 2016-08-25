var generateHtml = {
	title: "Тест по программированию",
	questions: {
		"Вопрос №1": ["Вариант ответа №1", "Вариант ответа №2", "Вариант ответа №3"],
		"Вопрос №2": ["Вариант ответа №1", "Вариант ответа №2", "Вариант ответа №3"],
		"Вопрос №3": ["Вариант ответа №1", "Вариант ответа №2", "Вариант ответа №3"]
	},

	generate: function(){
		var container = this.createContainer();
		container.appendChild(this.createTitle());
		var boxes = this.createBoxes();
		boxes.appendChild(this.createButton());
		container.appendChild(boxes);
		document.querySelector("body").appendChild(container);
	},

	createContainer: function(){
		var container = document.createElement('div');
		container.classList.add('container');
		return container;
	},

	createTitle: function(){
		var title = document.createElement('h1');
		title.classList.add("text-center");
		title.innerHTML = this.title;
		return title;
	},

	createBoxes: function(){
		var keyId = 1;
		var col = document.createElement("div");
		col.classList.add("col-lg-6", "col-lg-offset-3");
		
		for (var key in this.questions){
			var questionBox = document.createElement('div');
			var questionElem = document.createElement('h3');
			questionElem.classList.add('question');
			questionElem.innerHTML = keyId + '. ' + key;
			questionBox.appendChild(questionElem);

			for (var i = 0; i < this.questions[key].length; i++){
				var box = document.createElement('div');
				box.classList.add("checkbox");

				var answer = this.questions[key][i];

				var checkbox = document.createElement('input');
				checkbox.type = 'checkbox';
				checkbox.setAttribute('id', 'checkbox_' + keyId + "_" + i);

				var label = document.createElement('label');
				label.setAttribute('for', 'checkbox_' + keyId + "_" + i);
				label.innerHTML = answer;

				label.insertBefore(checkbox, label.firstChild);

				box.appendChild(label);
				questionBox.appendChild(box);

			}
			
			keyId++;
			questionBox.appendChild(document.createElement("hr"));
			col.appendChild(questionBox);
			
		}
		return col;
	},

	createButton: function(){
		var button = document.createElement('button');
		button.classList.add("center-block", "btn", "btn-primary");
		button.innerHTML = "Проверить мои результаты";
		return button;
	}
};

generateHtml.generate();
