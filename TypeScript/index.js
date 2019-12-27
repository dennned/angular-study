var str = 'Hello TS';
var nb = 44;
var isAct = false;
var strArray = ['A', 'B', 'C'];
var numArray = [1, 2, 3];
/// function
function loginfo(name, age) {
    console.log('info:  ${name}, ${age}');
}
loginfo('Username', 25);
function calc(a, b) {
    if (typeof b === 'string') {
        return b += b;
    }
    return a + b;
}
calc(5, 5);
