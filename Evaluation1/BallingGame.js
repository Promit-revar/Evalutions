
const CalculateScore=(frames)=>{
    let score=0;
    let currFrame=0;
    let i=0;
    while(i<frames.length){
        
        let nxtThrow=(!frames[i+1])?0:frames[i+1];
        currFrame=frames[i]+nxtThrow;
        //console.log(score,frames[i],currFrame);
        if(frames[i]===10){
        
        let nxtFrame=(!frames[i+1])?0:frames[i+1];
        let nxtToNxtFrame=(!frames[i+2])?0:frames[i+2];
        console.log(frames[i]+nxtFrame+nxtToNxtFrame,score);
        score+=frames[i]+nxtFrame+nxtToNxtFrame;
        i+=3;
        }
        else if(currFrame===10){
            let nxtBall=(!frames[i+1])?0:frames[i+1];
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
console.log(CalculateScore([10,5,5,9,0]));
module.exports={CalculateScore}