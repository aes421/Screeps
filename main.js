const harvester = require("harvester");
const generator = require("generator");
const upgrader = require("upgrader");
const builder = require("builder");
const warrior = require("warrior");
const healer = require("healer");

module.exports.loop = function () {

    //prevent memory overflow by deleting old creeps memory
    for(var name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
        }
    }

    //generate new creeps
    generator.run();
    
    for(var name in Game.creeps){
        let creep = Game.creeps[name]
        if (creep.memory.role == "harvester"){
            harvester.run(creep);
        }
        else if (creep.memory.role == "upgrader"){
            upgrader.run(creep);
        }
        else if (creep.memory.role == "builder"){
            builder.run(creep);
        }
        else if (creep.memory.role == "warrior"){
            warrior.run(creep);
        }
        else if (creep.memory.role == "healer"){
            healer.run(creep);
        }
        
    }
}