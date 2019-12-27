var Server = /** @class */ (function () {
    function Server(name, ip) {
        this.name = name;
        this.ip = ip;
        // protected name: string;
        // public ip: number;
        this.status = 'Working';
        // this.name = name;
        // this.ip = ip;
    }
    Server.prototype.turnOn = function () {
        this.status = 'working';
    };
    Server.prototype.urnOff = function () {
        this.status = 'offline';
    };
    Server.prototype.getStatus = function () {
        return this.status;
    };
    Server.VERS = '1.0.1';
    return Server;
}());
var server = new Server('AWS', 12121);
