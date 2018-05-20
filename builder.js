var builder = {
    
    run: function(creep){
        //TODO check containers or go to an energy source
        var energySource = creep.room.find(FIND_MY_STRUCTURES, {filter:
            (struct)=>{
                return struct.structureType == STRUCTURE_CONTAINER && struct.store[RESOURCE_ENERGY] > 0;
            }
        })[0];
        if (!energySource){ energySource = creep.room.find(FIND_SOURCES)[0]; }
        const constructionSite = creep.pos.findClosestByRange(FIND_MY_CONSTRUCTION_SITES);

        //can still pick up more
        if (_.sum(creep.carry) < creep.carryCapacity){
            //harvest if close enough, otherwise move to it and show the path
            if(creep.harvest(energySource) == ERR_NOT_IN_RANGE){
                creep.moveTo(energySource, {visualizePathStyle: {}});
            }
        }
        //build site
        else{
            if(creep.build(constructionSite) == ERR_NOT_IN_RANGE){
                creep.moveTo(constructionSite, {visualizePathStyle: {}});
            }
        }

    }
}

module.exports = builder;
