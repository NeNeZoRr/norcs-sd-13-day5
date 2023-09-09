class Vehicle{

    constructor(style, make, model, color, miles){
        this.make = make;
        this.model = model;
        this.color = color
        this.miles = miles;
        this.style= style;
        
    }
    drive(){
        console.log("drive")
    }
}


let newJag = new Car("Jaguar", "Turbo XE", "Black",60000)
console.log(newJag)

let newEvo = new Car("Mitsubishi", "Evo Lancer", "Hunter Green",0)
console.log(newEvo)

let newTesla = new Car("Tesla", "Model S", "Blue",87000)
console.log(newTesla)

