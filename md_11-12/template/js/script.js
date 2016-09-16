$(function() {
	var html = $('#person-page').html();

	var data = {
		name: 'Mikhota Pavel',
		status: 'Студент Харьковского авиационного университета',
		avatar: 'images/photo.jpg',
		why: 'Хочу учить фронтенд, потому что:',
		reasons: ['Ремонтировать телевизоры не модно', 'Перспективно', 'Интересно'],
		phoneTitle: 'Мой контактный телефон',
		phoneNumber: '+380508647494',
		profileTitle: 'Мой профиль вконтакте',
		profileHref: 'https://vk.com/p.mikhota',
		networkName: 'vk.com',
		feedbackTitle: 'Мой фидбек:',
		feedback: 'Если нужно, могу отремантировать телевизор'
	};

	var content = tmpl(html, data);

	$('body').append(content);
});