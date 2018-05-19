const maxHarvesters = 2;

module.exports.loop = function () {

    //prevent memory overflow by deleting old creeps memory
    for(var name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
        }
    }

    var harvesters = _.filter(Game.creeps, (creep)=> creep.memory.role == "harvester" );
    if (harvesters.length < maxHarvesters){
        Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE], "Harvester" + Game.time, {memory: {role: "harvester"}});
        Game.spawns['Spawn1'].room.visual.text(
            '🛠️' + spawningCreep.memory.role,
            Game.spawns['Spawn1'].pos.x + 1, 
            Game.spawns['Spawn1'].pos.y, 
            {align: 'left', opacity: 0.8});
    }

    for(var i in harvesters){
        let creep = harvesters[i];
        const energySource = creep.room.find(FIND_SOURCES)[0];
        const spawn = creep.room.find(FIND_MY_SPAWNS)[0];

        //can still pick up more
        if (_.sum(creep.carry) < creep.carryCapacity){
            //harvest if close enough, otherwise move to it and show the path
            if(creep.harvest(energySource) == ERR_NOT_IN_RANGE){
                creep.moveTo(energySource, {visualizePathStyle: {}});
            }
        }
        //go drop at the spawn
        else{
            if(creep.transfer(spawn, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){
                creep.moveTo(spawn, {visualizePathStyle: {}});
            }
        }

    }
}