
const calculateScore = (frames) => {
    let score = 0;
    let currentFrame = 0;
    let i = 0;
    let nextThrow=0;
    while (i < frames.length) {

        nextThrow = (!frames[i + 1]) ? 0 : frames[i + 1];
        currentFrame = frames[i] + nextThrow;
        if (frames[i] === 10) {

             nextThrow = (!frames[i + 1]) ? 0 : frames[i + 1];
            const nextToNextThrow = (!frames[i + 2]) ? 0 : frames[i + 2];

            if (frames[i + 1] === undefined || frames[i + 2] === undefined) {
                break;
            }
            score += frames[i] + nextThrow + nextToNextThrow;
            i += 1;
        }
        else if (currentFrame === 10) {
             nextThrow = (!frames[i + 2]) ? 0 : frames[i + 2];
            
            score += (10 + nextThrow);
            i += 2;
        }
        else {
            score += currentFrame;
            i += 2;
        }
        currentFrame = 0;

    }
    return score; 
}

const getBestGame = (games) => {
    let best = 0;
    games.forEach(game => {
        best = (calculateScore(game) > best) ? calculateScore(game) : best;
    });
    return best;
}
// console.log(getBestGame([[10, 5, 5, 2, 3], [10, 5, 5, 10, 10, 3]]));
// console.log(calculateScore([10, 5, 5, 10, 10, 3]));
module.exports = { calculateScore, getBestGame }