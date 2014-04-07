console.log ("Hello Boulder!")
var name=prompt ('Enter your name!', 'name');

while (name.length === 0){
	alert('Please enter a name');
	name=prompt ('Enter your name!', 'name');
}

alert('Hello '+name+'!')
