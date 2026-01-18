document.addEventListener('DOMContentLoaded', () => {
    
});


function submitQuiz() {
    const answers = {
        q1: 'a', // HTML
        q2: 'b', // CSS
        q3: 'c', // JS
        q4: 'a', // Responsive
        q5: 'b', // API
        q6: 'a', // DOM
        q7: 'c', // Git
        q8: 'b', // SQL
        q9: 'a', // HTTP
        q10: 'b', // JSON
        q11: 'b', // AI
        q12: 'c', // TensorFlow
        q13: 'b'  // GenAI
    };

    let score = 0;
    let total = Object.keys(answers).length;
    let feedback = "";

    const form = document.getElementById('quizForm');
    if (!form) return;

    const formData = new FormData(form);
    
    
    for (let key in answers) {
        const userAnswer = formData.get(key);
        const questionDiv = document.getElementById(`box-${key}`);
        
        if(questionDiv) {
            questionDiv.style.border = "1px solid rgba(255,255,255,0.1)";
        }

        if (userAnswer === answers[key]) {
            score++;
            if(questionDiv) questionDiv.style.border = "1px solid #4ade80"; 
        } else {
            if(questionDiv) questionDiv.style.border = "1px solid #f87171"; 
        }
    }

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<h3>Your Score: ${score} / ${total}</h3>`;
    
    if (score >= total * 0.7) {
        resultDiv.className = 'success';
        resultDiv.innerHTML += `<p>Congratulations! You have very good knowledge.</p>`;
    } else if (score >= total * 0.5) {
        resultDiv.className = 'warning';
        resultDiv.style.color = '#facc15';
        resultDiv.innerHTML += `<p>Not bad, but you can still improve.</p>`;
    } else {
        resultDiv.className = 'fail';
        resultDiv.innerHTML += `<p>You need to review your Web I lessons!</p>`;
    }

    // Show corrections
    let correctionHTML = "<h4>Correct Answers:</h4><ul>";
    correctionHTML += "<li>Q1: HyperText Markup Language</li>";
    correctionHTML += "<li>Q2: Cascading Style Sheets</li>";
    correctionHTML += "<li>Q3: Rendre la page interactive</li>";
    correctionHTML += "<li>Q4: @media</li>";
    correctionHTML += "<li>Q5: Application Programming Interface</li>";
    correctionHTML += "<li>Q6: Document Object Model</li>";
    correctionHTML += "<li>Q7: Un système de contrôle de version</li>";
    correctionHTML += "<li>Q8: Structured Query Language</li>";
    correctionHTML += "<li>Q9: HyperText Transfer Protocol</li>";
    correctionHTML += "<li>Q10: JavaScript Object Notation</li>";
    correctionHTML += "<li>Q11: Artificial Intelligence</li>";
    correctionHTML += "<li>Q12: TensorFlow</li>";
    correctionHTML += "<li>Q13: To create new content</li>";
    correctionHTML += "</ul>";
    
    resultDiv.innerHTML += `<div style="margin-top:20px; text-align:left; font-size:0.9rem">${correctionHTML}</div>`;
    
    // result
    resultDiv.scrollIntoView({ behavior: 'smooth' });
}
