
// Created a Data Structure that hold details  Name of the team, points they have
//earned and result of last 5 matches as per above image

const Team=[
    {teamName:"GT",
        points:20,
     pastPerformance:[1,1,0,0,1]
       },
    { teamName:"LSG",points:18,
         pastPerformance:[1,0,0,1,1]
        },
    { teamName:"RR",points:16,
         pastPerformance:[1,0,1,0,0]
        },
    {teamName:"DC",points:14,
         pastPerformance:[1,1,0,1,0]
        },
    {teamName:"RCB",points:14,
         pastPerformance:[0,1,1,0,0]
        },
    {teamName:"KKR",points:12,
         pastPerformance:[0,1,1,0,1]
        },
    {teamName:"PBKS",points:12,
         pastPerformance:[0,1,0,1,0]
        },
    {teamName:"SRH",
         points:12,
         pastPerformance:[1,0,0,0,0]
        },
    {teamName:"CSK",
    points:8,
    pastPerformance:[0,0,1,0,1]
        },
    {teamName:"MI",
    points:6,
     pastPerformance:[0,1,0,1,1]
        }
    ]

 /**      
  * 
  * Programmatically retrieved the teams that have 2 consecutive losses.
 */

let teamsLostTwice=[]//the teams that have 2 consecutive losses
 Team.map((team)=>{
    
    let teamPerformance=team.pastPerformance // retereving past performance data from the created data structure

     for(let i= 0;i<teamPerformance.length;i++){ // initiazing a for loop to loop through array
       if(teamPerformance[i]===0 &&teamPerformance[i+1]===0){ // checking the condition of consecutive win or loss
          //  console.log(team.teamName);
           teamsLostTwice.push(team.teamName) // pushing filterd teams to the array
           break;
       }
     } 
}
)
// console.log( "teams with 2 consecutive losses",teamsLostTwice) // 

  let lossWinCount = prompt("Please enter Number of Consecutive loss / win to find");
  let lossWin =prompt("please enter 1 to find win 0 to loss")
  let sum =0;
//Teams having n consecutive win or loss 
let teamLostWinNtimes=[]
Team.map((team)=>{
    let teamPerformance=team.pastPerformance
    if(getnconsecutive(teamPerformance,Number(lossWinCount),Number(lossWin))){
      teamLostWinNtimes.push(team.teamName);
      sum += team.points //  filtered  team points sum
      console.log(team.teamName)
    }
})
console.log("Result of the entered data",teamLostWinNtimes);

console.log("Average point 0f filtered data" , sum/(teamLostWinNtimes.length))






// function to find if the entered n consecutive win loss exists or not if exist it returns true else false
    function getnconsecutive( arr ,n ,winloss)
    {
        let count = 0; 
        for ( let i = 0 ; i < arr.length ; i++ )
        {
            
            if ( arr[i] != winloss ){
              count = 0;
            }
               
            else
            {
                count++;
                if ( count===n )
                { 
                    return true;
                }
            }
        }
     
        return false;
    }















       // [1,0,0,1,1,1]
    // let count = 0;
    // let max = 0;
    // for (let i=0; i<arr.lenght;i++){
    //   for (let j= i+1; j<arr.lenght;j++)
    //   {
    //     if(arr[j]=== winLoss&&arr[i]===winLoss){
    //       count++
    //       if(max<count){ max=count}
    //     }
    //     else{
    //       break
    //     }
    //   }
      
    // }
    // return max
    // }

    


  // function findConsecutiveMaxNumber(arr,winLoss,){
  //   let count =1;
  //   let maxCount =1;
  //   for(let i = 0 ; i<arr.length;i++){
  //       for(let j = i+1;j<arr.length-1 ;j++){
  //         if(arr[j]=== winLoss&&arr[i]===winLoss){
  //             count++;
  //             i++
  //         }else{
              
  //         }
  //       }     
  //       } 
  //       return maxCount
  //     }