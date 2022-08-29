// Your code here

function createEmployeeRecord(Array){
    const obj = {
        firstName : Array[0],
        familyName : Array[1],
        title : Array[2],
        payPerHour : Array[3],
        timeInEvents : [],
        timeOutEvents : []
}
return obj
}


function createEmployeeRecords(Arra){
    const newobj = []
    Arra.forEach( obj => {
      newobj.push(createEmployeeRecord(obj))
     
       });
       return  newobj
}

function createTimeInEvent(emloyeeRecord,dateStamp){
    const timeinseparate = dateStamp.split(` `)
    emloyeeRecord.timeInEvents.push({
        type : "TimeIn",
        hour : parseInt(timeinseparate[1]),
        date : timeinseparate[0]
    })
    return emloyeeRecord
}

function createTimeOutEvent(emloyeeRecord,dateStamp){
    const timeinseparate = dateStamp.split(` `)
    emloyeeRecord.timeOutEvents.push({
        type : "TimeOut",
        hour : parseInt(timeinseparate[1]),
        date : timeinseparate[0]
    })
    return emloyeeRecord
}

function hoursWorkedOnDate(employeerecord,dateofform){
    const walkedin = employeerecord.timeInEvents.find(element => element.date === dateofform);
    const walkout = employeerecord.timeOutEvents.find(element => element.date === dateofform);
    const final = (walkout.hour - walkedin.hour)/100
    return final;
}
function wagesEarnedOnDate(employeerecord,dateofform){
    const walkedin = employeerecord.timeInEvents.find(element => element.date === dateofform);
    const walkout = employeerecord.timeOutEvents.find(element => element.date === dateofform);
    const final = ((walkout.hour - walkedin.hour)/100)*employeerecord.payPerHour
    return final;
}
function allWagesFor(employeerecord){
    let thenoofdays = employeerecord.timeInEvents.length;
    let sum = 0;
    for (let i =0 ; i < thenoofdays; i ++){
        const thetotalhrs = (employeerecord.timeOutEvents[i].hour - employeerecord.timeInEvents[i].hour)/100
        sum = sum + (thetotalhrs*employeerecord.payPerHour)
    }
    return sum;
}

function calculatePayroll(arrayofemloyeeRecord){

    let sum = 0;
    for (let i =0 ; i < arrayofemloyeeRecord.length ; i++){
        sum = sum + allWagesFor(arrayofemloyeeRecord[i])
    }
    return sum;
}