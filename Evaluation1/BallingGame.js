
const CalculateScore=(frames)=>{
    let score=0;
    let currFrame=0;
    let i=0;
    while(i<frames.length){
        
        let nxtThrow=(!frames[i+1])?0:frames[i+1];
        currFrame=frames[i]+nxtThrow;
        //console.log(score,frames[i],currFrame,i);
        if(frames[i]===10){
        
        let nxtFrame=(!frames[i+1])?0:frames[i+1];
        let nxtToNxtFrame=(!frames[i+2])?0:frames[i+2];
       // console.log(frames[i]+nxtFrame+nxtToNxtFrame,score);
        if(frames[i+1]===undefined || frames[i+2]===undefined)
        {
            break;
        }
        score+=frames[i]+nxtFrame+nxtToNxtFrame;
        i+=1;
        }
        else if(currFrame===10){
            let nxtBall=(!frames[i+2])?0:frames[i+2];
            //console.log(10+nxtBall);
            score+=(10+nxtBall);
            i+=2;
        }
        else{
            score+=currFrame;
            i+=2;
        }
        currFrame=0;
        
    }
    return score;
}

const getBestGame=(games)=>{
    let best=0;
    games.forEach(game => {
        //console.log(game);
        best=(CalculateScore(game)>best)?CalculateScore(game):best;
    });
    return best;
}
console.log(getBestGame([[10,5,5,2,3],[10,5,5,10,10,3]]));
console.log(CalculateScore([10,5,5,10,10,3]));
module.exports={CalculateScore,getBestGame}