//The Traveler class (blueprint) should set the following properties for each instance:

class Traveler{
    constructor (name){
        this.name = name
        this.food = 1
        this.isHealthy = true
    }

//The Traveler class should also have the following methods:


    hunt(){
        this.food += 2
        

    }
    eat(){
        if (this.food > 0){
            this.food -= 1
        } else {
            this.isHealthy = false
        }

    }
}
//The Wagon class should set the following properties for each instance:
// .a capacity, which must be provided to the constructor: this is the maximum number of passengers a wagon can hold.
// .a passengers list, which is initially an empty array.

class Wagon{
    constructor (capacity){
    this.capacity = (capacity)
    this.passengers = []
    }
//The Wagon class should have these methods:
    getAvailableSeatCount(){
        return (this.capacity - this.passengers.length)
    }
    join(traveler){
        if((this.capacity - this.passengers.length) > 0){
            this.passengers.push(traveler)
        }
    }
    shouldQuarantine(){
        let quarantineResult = false
        for(let counter = 0; counter<this.passengers.length; counter++){
            if (this.passengers[counter].isHealthy === false){
                quarantineResult = true
            }
        }
        return quarantineResult
    }
    totalFood(){
        let foodAmount = 0;
        for(let counter = 0; counter < this.passengers.length; counter++){
            foodAmount += this.passengers[counter].food
        }
        return foodAmount
    }


}
 
