class persons {
    #status;   // private propertity
    constructor(name,age,status){
        this.name = name;
        this.age = age;
        this.#status = status;
    }
    sleep(){
        console.log('ami ${this.name} ghumacci at 10PM');
    }
    action(){
        //  console.log(this.#status);   // private property
    }
}

const Rohit = new persons('Rohit',21,'single')
console.log(Rohit);
Rohit.sleep();
Rohit.action();
