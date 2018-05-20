var warrior= {
    
    run: function(creep){
        //find closest hostile to the room controller (don't really know if this is right?)
        let hostileCreep = creep.room.controller.pos.findClosestByPath(FIND_HOSTILE_CREEPS);
        if (hostileCreep){
            hostileCreep = hostileCreep[0];
            if (creep.attack(hostileCreep) == ERR_NOT_IN_RANGE){
                creep.moveTo(hostileCreep);
            }
        }
    }
}

module.exports = warrior;