const builder = require('builder');

var harvester = {
    
    run: function(creep){
        const energySource = creep.room.find(FIND_SOURCES)[0];
        var dropPoint = creep.room.find(FIND_MY_SPAWNS)[0];
        if (dropPoint.energy === dropPoint.energyCapacity){
            console.log("Spawn is full");
            //spawn is full, work on some containers
            dropPoint = creep.room.find(FIND_STRUCTURES, {
                filter: (struct)=> struct.structureType == STRUCTURE_CONTAINER  && _.sum(struct.store) < struct.storeCapacity
            });
            if (dropPoint){
                dropPoint = dropPoint[0];
            }
            else{
                console.log("harvester->builder");
                builder.run(creep);
                 creep.moveTo(Game.flags['Flag1']);
            }
        }

        //can still pick up more
        if (_.sum(creep.carry) < creep.carryCapacity){
            //harvest if close enough, otherwise move to it and show the path
            if(creep.harvest(energySource) == ERR_NOT_IN_RANGE){
                creep.moveTo(energySource, {visualizePathStyle: {}});
            }
        }
        //go drop at the spawn
        else{
            console.log(`Dropping at: ${dropPoint.structureType} (${dropPoint.id})`);
            if(creep.transfer(dropPoint, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                //TODO look up noPathFinding Option
                creep.moveTo(dropPoint, {visualizePathStyle: {}});
            }
        }

    }
}

module.exports = harvester;
