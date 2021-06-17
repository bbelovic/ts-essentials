enum StatusExample {
    New,
    Unknown,
    Invalid
}

class StaticExample {
    
    static id: number = 0;

    constructor(status: StatusExample) {
        this.status = StatusExample.Unknown;
    }

    static getNextId() {
        return StaticExample.id += 1;
    }

    add() {
        const next = StaticExample.getNextId();
    }

    public get status(): StatusExample {
        return this.status;
    }
    public set status(value: StatusExample) {
        if (this.status == StatusExample.Unknown) {
            this.status = value;
        } else {
            throw `Invalid status: ${this.status}`;
            
        }
        
    }

}

const example = new StaticExample(StatusExample.New);

