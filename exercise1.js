let newArray = [];

newArray.push(1);

newArray.push(53);

newArray.push(12);

newArray[1]

typeof(123/12);
"number"

typeof("Things in quotes!");
"string"

typeof(undefined);
"undefined"

if (2+8 === 10){
	alert(true);
}
else{
	alert(false);
}

myArray = ['Thomas', 'Noel', 'Faraz'];

emptyArray = [];


for (let name = 0; name < myArray.length; name++){
    emptyArray.push(myArray[name]);
}

console.log(emptyArray);


//exercises #2

function name(firstname){
    return firstname;
}

name("Luca")

function write_your_name(firstname, lastname){
    return firstname +" "+ lastname
}
undefined

write_your_name("Luca", "Lobacher")


//exercise #3: this.variable is an instance variable, that doesn't change. In Ruby we use @variable.