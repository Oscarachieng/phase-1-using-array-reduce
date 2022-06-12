const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here


const totalBatteries = batteryBatches.reduce((total, number)=>{
      return total += number   
},0)

console.log(totalBatteries)
