"use strist";
$(function() {
    $('.search').keydown(function(e) {
        if (e.keyCode == 13) {
            formSubmit();
        }
    })
	
    $('#searchButton').click(function() {
        formSubmit();
    })

    function formSubmit() {
        var searchQuery = $('#searchQuery').val();
        if (searchQuery.length > 0) {
            searchQuery = encodeURIComponent($('#searchQuery').val());
        } else {
            return;
        }

        $('.search').removeClass('search--main');

        $.ajax({
            url: 'https://www.googleapis.com/customsearch/v1?key=AIzaSyD_yotJt04CJfQ4Ibc7wG7uMLP5fEy_zfY&cx=016795527241021289695:jljvvlrwqde&q=' + searchQuery,

            statusCode: {
                403: function() {
                    alert('Превышена квота по запросам!');
                }
            },
            success: function(response, msg) {
                var data = { 
                    data: response.items
                };
                
                var html = $('#content').html();
                var content = tmpl(html, data);
                $('.content').html('');
                $('.content').append(content);
            }
        })
    }
	
	//Второе задание
    function Human(name, age, gender, height, weight) {
      this.name = name;
      this.age = age;
      this.gender = gender;
      this.height = height;
      this.weight = weight;
    };
    function Worker(name, workPlace, sallary) {
      Human.call(this, name);
      this.workPlace = workPlace;
      this.sallary = sallary;
    }

    Worker.prototype = Object.create(Human.prototype);
    Worker.prototype.constructor = Worker;
    Worker.prototype.work = function() {
      console.log("Я, " + this.name + ", работаю в " + this.workPlace + "!");
    }

    function Student(name, studyPlace, scholarship) {
      Human.call(this, name);
      this.studyPlace = studyPlace;
      this.scholarship = scholarship;
    }
    Student.prototype = Object.create(Human.prototype);
    Student.prototype.constructor = Student;
    Student.prototype.watchSeries = function(seriesName) {
      if (seriesName) {
        console.log('Я, ' + this.name + ', смотрю сериал "' + seriesName + '"!');
      } else {
        console.log('Я, ' + this.name + ', смотрю сериалы!');
      }
    }
    var ivan = new Worker('Иван', 'ООО "Рога и копыта"', '1000$');
    console.dir(ivan);
    ivan.work();
    var oleg = new Worker('Олег', 'ЗАО "Банк"', '10000грн.');
    console.dir(oleg);
    oleg.work();
    var student1 = new Student('Женя', 'КПИ', '500грн');
    console.dir(student1);
    student1.watchSeries('X-files');
    var student2 = new Student('Вася', 'Донбасский государственный педагогический университет', '600грн');
    console.dir(student2);
    student2.watchSeries();
});
