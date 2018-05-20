var generator = {
    
    run: function(){
        const maxHarvesters = 4;
        const maxUpgraders = 2;
        const maxBuilders = 4;

        var harvesters = _.filter(Game.creeps, (creep)=> creep.memory.role == "harvester" );
        if (harvesters.length < maxHarvesters){
            Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE], "Harvester" + Game.time, {memory: {role: "harvester"}});
            displaySpawnInfo();
        }

        var upgraders = _.filter(Game.creeps, (creep)=> creep.memory.role == "upgrader");
        if (upgraders.length < maxUpgraders){
            Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE], "Upgrader" + Game.time, {memory: {role: "upgrader"}});
            displaySpawnInfo();
        }

        var builders = _.filter(Game.creeps, (creep)=> creep.memory.role == "builder");
        if (builders.length < maxBuilders){
            Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE], "Builder" + Game.time, {memory: {role: "builder"}});
            displaySpawnInfo();
        }
    },

    displaySpawnInfo: function(){
        if(Game.spawns['Spawn1'].spawning) { 
            var spawningCreep = Game.creeps[Game.spawns['Spawn1'].spawning.name];
            Game.spawns['Spawn1'].room.visual.text(
                '🛠️' + spawningCreep.memory.role,
                Game.spawns['Spawn1'].pos.x + 1, 
                Game.spawns['Spawn1'].pos.y, 
                {align: 'left', opacity: 0.8});
        }
    }
}

module.exports = generator;
