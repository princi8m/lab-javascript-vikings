// Soldier
class Soldier  {
    constructor(health, strength) { 
        this.health = health;
        this.strength = strength;    
    }   
    attack () {
       return this.strength;
    }

    receiveDamage (damage){
        this.health = this.health-damage;
    }
}


// Viking
class Viking extends Soldier{
       constructor(name,health, strength){
           super(health, strength);
           this.name=name;
       } 

       attack () {
        return this.strength;
       }

}

function receiveDamage (damage){
    console.log("${name} has received ${damage) points of damage");
}




// Saxon
class Saxon {}

// War
class War {}
