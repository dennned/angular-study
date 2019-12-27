var User = {
    name: 'userName',
    age: 30,
    logInfo: function () {
        console.log(this.name + '' + this.age);
    }
};
var MyCalss = /** @class */ (function () {
    function MyCalss(name, age) {
        this.name = name;
        this.age = age;
    }
    MyCalss.prototype.sayHello = function () {
        console.log(this.name + ' Hello');
    };
    return MyCalss;
}());
