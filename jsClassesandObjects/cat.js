

var Cat = function(tiredness, hunger, loneliness, happiness) {
    this.tiredness = tiredness;
    this.hunger = hunger;
    this.loneliness = loneliness;
    this.happiness = happiness;
    this.bodyCount = 0;

    this.sleep = function() {
        console.log("zzzzzzz");
        this.tiredness --;
    };

    this.feed = function() {
        this.hunger --;
        console.log("nomnomnom");
    };

    this.pet = function() {
        this.loneliness --;
        console.log("purrrrrrrrrrr");
    };

    this.hunt = function(animal) {
        this.bodyCount ++;
        this.happiness += (50/this.bodyCount);
        console.log("muahahaaa, the "+ animal +" is dead.");
    };

    this.getStatus = function() {
        console.log("Tiredness: " + this.tiredness);
        console.log("Hunger: " + this.hunger);
        console.log("Lonliness: " + this.loneliness);
        console.log("Happiness: " + this.happiness);
    };
};