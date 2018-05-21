var warrior= {
    
    run: function(creep){
        //find closest hostile to the room controller (don't really know if this is right?)
        let hostileCreep = creep.room.controller.pos.findClosestByPath(FIND_HOSTILE_CREEPS);
        if (hostileCreep){
            if (creep.attack(hostileCreep) == ERR_NOT_IN_RANGE){
                creep.moveTo(hostileCreep, {visualizePathStyle: {}});
            }
        }
        else{
            //get out of the way
            creep.moveTo(Game.flags['Flag1']);
        }
    }
}

module.exports = warrior;
