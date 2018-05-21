var generator = {
    
    run: function(){
        const maxHarvesters = 7;
        const maxUpgraders = 1;
        const maxBuilders = 4;
        const maxWarriors = 3;
        const maxHealers = 2;

        var warriors = _.filter(Game.creeps, (creep)=> creep.memory.role == "warrior");
        if (warriors.length < maxWarriors){
            Game.spawns['Spawn1'].spawnCreep([MOVE, ATTACK, ATTACK, ATTACK, TOUGH], "Warrior" + Game.time, {memory: {role: "warrior"}});
            this.displaySpawnInfo();
        }

        var harvesters = _.filter(Game.creeps, (creep)=> creep.memory.role == "harvester" );
        if (harvesters.length < maxHarvesters){
            Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE], "Harvester" + Game.time, {memory: {role: "harvester"}});
            this.displaySpawnInfo();
        }

        var upgraders = _.filter(Game.creeps, (creep)=> creep.memory.role == "upgrader");
        if (upgraders.length < maxUpgraders){
            Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE], "Upgrader" + Game.time, {memory: {role: "upgrader"}});
            this.displaySpawnInfo();
        }

        var builders = _.filter(Game.creeps, (creep)=> creep.memory.role == "builder");
        if (builders.length < maxBuilders){
            Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE], "Builder" + Game.time, {memory: {role: "builder"}});
            this.displaySpawnInfo();
        }

        var healers = _.filter(Game.creeps, (creep)=> creep.memory.role == "healer");
        if (healers.length < maxHealers){
            Game.spawns['Spawn1'].spawnCreep([MOVE, HEAL], "Healer" + Game.time, {memory: {role: "healer"}});
            this.displaySpawnInfo();
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
            console.log(`Generating: ${spawningCreep.memory.role}`);
        }
    }
}

module.exports = generator;
