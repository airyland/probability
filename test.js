var list = ['javascript', 'php', 'ruby', 'python'];
var weight = [0.2, 0.2, 0.2, 0];

var random_check = {
    javascript: 0,
    php: 0,
    ruby: 0,
    python: 0
};
 
 
for (var i = 0; i < 10000; i++) {
}
 
console.log(random_check);

var getResult = require('./random');
var rs = getResult(list,weight);
console.log(rs);

for(var i= 0;i<10000;i++){
	var rs = getResult(list,weight);
        ++random_check[rs];
}

console.log(random_check);
