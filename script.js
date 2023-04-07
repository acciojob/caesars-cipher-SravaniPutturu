// Your Script here.
var newString = "";
function rot13(s){
	for (let i = 0; i < s.length; i++) {
		var char = s[i] + 13;
		newString += char + 13;
	}
	return newString;
}
module.exports = rot13;