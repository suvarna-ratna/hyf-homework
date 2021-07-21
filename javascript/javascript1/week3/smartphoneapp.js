const activities = []
function addActivity(activity, duration){
    const today = new Date();
today = today.toLocaleDateString("en-US");
activities.push({
        date: today,
        activity: activity,
        duration: duration,
})
}
addActivity("Youtube", 30);
function showStatus(activities){
    if(activities.length===0){
        return "Add some activities before calling showStatus"
    }
    let totalDuration = 0
    for(let i=0;i<activities.length;i++)
    {
        totalDuration += activities[i].duration
    }
    const limit = 120
    if(totalDuration>=limit){alert('You have reached your limit, no more smartphoning for you!')}
return `You have added ${activities.length} activities. You have ${totalDuration}  min. of usage`
}
showStatus(activities); // will log out this "You have added 3 activities. They amount to 78 min. of usage"
addActivity("Youtube", 70);
addActivity("Faceb00k", 10);
addActivity("Whatsapp", 20);
addActivity("Instagram", 90);
addActivity("News", 10)
console.log(activities)
showStatus(activities);
function showStatusOnDate(activities,date){
    if(activities.length===0){
        return "Add some activities before calling showStatus"
    }
    let totalDuration = 0
    let count = 0
    for(let i=0;i<activities.length;i++)
    {
        if(activities.Date===date){
            totalDuration += activities[i].duration
            count++
        }
    }
    const limit = 120
    if(totalDuration>=limit){alert('You have reached your limit, no more smartphoning for you!')}
console.log (`You have ${count} activities for this day ${date}. You have ${totalDuration}  min. of usage`)
}
showStatusOnDate(activities,"7/17/2021")

//Create a function for calculating the activity a user has spent the most time on.
function spentMostTimeOn(activities){
let time = 0
for(let i=0;i>activities.length;i++){
if (time<activities[i].duration){
    time=activities[i].duration
    mostSpentActivity=activities[i].activity
}
}
return mostSpentActivity
}

spentMostTimeOn(activities)


// let mostSpentActivity
// let sortedActivities=[]
// let obj={}
// for(let i=0;i>activities.length;i++){
//     for(let j=0;j>activities.length;j++){
//         if(!i===j){
//             if(activities[i].activity===activities[j].activity){
//                 obj[activity]=activities[i].activity
//                 obj[duration]+=activities[i].duration+activities[j].duration
//                 sortedActivities.push(obj)
//             }
//         }
//     }
// }
