function processStudentScores(scores, callback) {
    let results = [];
    for (let i = 0; i < scores.length; i++) {
        results.push(callback(scores[i]));
    }
    return results;
}

let examScores = [75, 82, 90, 68, 88];

let gradedScores = processStudentScores(examScores, function(score) {
    if (score >= 85) {
        return `${score}: Grade A`;
    } else {
        return `${score}: Grade B`;
    }
});

console.log("Original Scores:", examScores);
console.log("Processed Grades:", gradedScores);