console.log ("Hello Boulder!")
var name=prompt ('Enter your name!', 'name');
if (name.length === 0){
	alert('Please enter a name');
	name=prompt ('Enter your name!', 'name');
}
else{
	alert('Hello '+name+'!')
}
