var upgrader = {
    
    run: function(creep){
        const roomController = creep.room.controller;
        //Find the energy source closest to the controller
        const energySource = roomController.pos.findClosestByPath(FIND_SOURCES);

        //can still pick up more
        if (_.sum(creep.carry) < creep.carryCapacity){
            //harvest if close enough, otherwise move to it and show the path
            if(creep.harvest(energySource) == ERR_NOT_IN_RANGE){
                creep.moveTo(energySource, {visualizePathStyle: {}});
            }
        }
        
        else{
            if(creep.upgradeController(roomController) == ERR_NOT_IN_RANGE){
                creep.moveTo(roomController, {visualizePathStyle: {}});
            }
        }

    }
}

module.exports = upgrader;
