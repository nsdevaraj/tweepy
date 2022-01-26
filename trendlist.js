var json = require('./out.json');
trends = 5;
for(var i=0;i<trends;i++){
console.log(json.timeline.instructions[1].addEntries.entries[1].content.timelineModule.items[i].item.content.trend.name);
}