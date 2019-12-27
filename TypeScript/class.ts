class Server {
    static VERS = '1.0.1'

    // protected name: string;
    // public ip: number;

    private status : string = 'Working';

    constructor(public name: string, protected ip: number) {
        // this.name = name;
        // this.ip = ip;
    }

    public turnOn() {
        this.status = 'working';
    }

    protected  urnOff() {
        this.status = 'offline';
    }

    getStatus():string {
        return this.status;
    }

}

const server: Server = new Server('AWS', 12121);
