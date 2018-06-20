class ZeroToHundredError extends Error {
    constructor() {
        super('Parameter score must be between 0 to 100');
    }
}
class NotNumberError extends Error {
    constructor() {
        super('Parameter score must be number');
    }
}

function getGradeByScore(score) {
    if (typeof score !== 'number' || isNaN(score)) {
        throw new NotNumberError();
    }

    if (score < 0 || score > 100) {
        throw new ZeroToHundredError();
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
}

module.exports = { getGradeByScore, ZeroToHundredError, NotNumberError };