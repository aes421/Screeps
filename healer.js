var healer= {
    
    run: function(creep){
        //find closest damaged creep - should probably take into account which ones are fighting a battle
        //which one's need it most, which ones are in more vital positions etc.
        //TODO improve this
        let damagedCreep = creep.pos.findClosestByRange(FIND_MY_CREEPS, {filter: (creep)=>{
            return creep.hits < creep.hitsMax;
        }});
        if (damagedCreep){
            damagedCreep = damagedCreep[0];
            if (creep.heal(damagedCreep) == ERR_NOT_IN_RANGE){
                creep.moveTo(damagedCreep, {visualizePathStyle: {}});
            }
        }
        else{
            //get out of the way
            creep.moveTo(Game.flags['Flag1']);
        }
        
    }
}

module.exports = healer;
