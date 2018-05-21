var builder = {
    
    run: function(creep){
        var energySource = creep.room.find(FIND_MY_STRUCTURES, {filter:
            (struct)=>{
                return struct.structureType == STRUCTURE_CONTAINER && struct.store[RESOURCE_ENERGY] > 0;
            }
        })[0];
        if (!energySource){ energySource = creep.room.find(FIND_SOURCES)[0]; }
        const constructionSite = creep.pos.findClosestByRange(FIND_MY_CONSTRUCTION_SITES);

        //can still pick up more
        if(creep.memory.building && creep.carry.energy == 0) {
            creep.memory.building = false;
            creep.say('🔄 harvest');
	    }
	    if(!creep.memory.building && creep.carry.energy == creep.carryCapacity) {
	        creep.memory.building = true;
	        creep.say('🚧 build');
	    }

	    if(creep.memory.building) {
            if(creep.build(constructionSite) == ERR_NOT_IN_RANGE) {
                creep.moveTo(constructionSite, {visualizePathStyle: {stroke: '#ffffff'}});
            }
        }
	    else {
            if(creep.harvest(energySource) == ERR_NOT_IN_RANGE) {
                creep.moveTo(energySource, {visualizePathStyle: {stroke: '#ffaa00'}});
            }
	    }

    }
}

module.exports = builder;
