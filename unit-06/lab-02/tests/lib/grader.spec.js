const { getGradeByScore, ZeroToHundredError, NotNumberError } = require('../../src/lib/grader');

describe('getGradeByScore', () => {
    it('should throw NotNumberError if score is string', () => {
        expect(() => getGradeByScore('a')).toThrowError(NotNumberError);
        expect(() => getGradeByScore('1')).toThrowError(NotNumberError);
        expect(() => getGradeByScore(1)).not.toThrowError(NotNumberError);
        expect(() => getGradeByScore(1.1)).not.toThrowError(NotNumberError);
    });
    it('should throw NotNumberError if score is special types', () => {
        expect(() => getGradeByScore(NaN)).toThrowError(NotNumberError);
        expect(() => getGradeByScore(null)).toThrowError(NotNumberError);
        expect(() => getGradeByScore(undefined)).toThrowError(NotNumberError);
    });
    it('should throw ZeroToHundredError if score less than 0', () => {
        expect(() => getGradeByScore(-1)).toThrowError(ZeroToHundredError);
    });
    it('should throw ZeroToHundredError if score more than 100', () => {
        expect(() => getGradeByScore(101)).toThrowError(ZeroToHundredError);
    });
    it('should return F if score is 0', () => {
        expect(getGradeByScore(0)).toEqual('F');
    });
    it('should return F if score is 49.99', () => {
        expect(getGradeByScore(49.99)).toEqual('F');
    });
    it('should return D if score is 50', () => {
        expect(getGradeByScore(50)).toEqual('D');
    });
    it('should return D if score is 59.99', () => {
        expect(getGradeByScore(59.99)).toEqual('D');
    });
    it('should return C if score is 60', () => {
        expect(getGradeByScore(60)).toEqual('C');
    });
    it('should return C if score is 69.99', () => {
        expect(getGradeByScore(69.99)).toEqual('C');
    });
    it('should return B if score is 70', () => {
        expect(getGradeByScore(70)).toEqual('B');
    });
    it('should return B if score is 79.99', () => {
        expect(getGradeByScore(79.99)).toEqual('B');
    });
    it('should return A if score is 80', () => {
        expect(getGradeByScore(80)).toEqual('A');
    });
    it('should return A if score is 100', () => {
        expect(getGradeByScore(100)).toEqual('A');
    });
});