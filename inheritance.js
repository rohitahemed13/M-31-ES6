class vehicle{

constructor(name,price){
    this.name = name;
    this.price = price;

}
move(){
    console.log('ami cholachol korta pari');
}

}
class Bus extends vehicle{
    constructor(name,price,seat){
        super(name,price);
        this.seat = seat;
    }
    route(){
        console.log('chittagong to Dhaka');
    }
}

const bus1 = new Bus ('soudi','200000', '50');
    console.log(bus1); 
    bus1.move();
    bus1.route();