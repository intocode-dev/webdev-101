import './style.css';
// Import getGradeByScore for calculation
import { getGradeByScore } from './lib/grader';

// This is for presentation
function renderGrade(strScore) {
    try {
        const grade = getGradeByScore(parseFloat(strScore));
        document.getElementById('txtGrade').innerText = grade;
    } catch(error) {
        alert(error);
    }
}

window.renderGrade = renderGrade;