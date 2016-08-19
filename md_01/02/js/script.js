var names = [];
var access = false;
    
for (var i = 0; i < 5; i++) {
  names.push( prompt('Введите имя') );
};
    
var login = prompt('Введите свой логин для входа');
    
for (var j = 0; j < names.length; j++) {
  if (login == names[j]) {
    alert(login + ', вы успешно вошли!');
    access = true;
    break;
  }
}
    
  if (!access) {
   alert('Неверный логин!');
}