function getGradeByScore(score) {
    if (typeof score === 'number') {
        if (score < 0 || score > 100) {
            throw new Error('Parameter score must be between 0 to 100');
        } else if (score < 50) {
            return 'F';
        } else if (score < 60) {
            return 'D';
        } else if (score < 70) {
            return 'C';
        } else if (score < 80) {
            return 'B';
        } else {
            return 'A';
        }
    } else {
        throw new Error('Parameter score must be number');
    }
}

module.exports = { getGradeByScore };