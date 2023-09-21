let score = 0;

function checkAnswers() {
    // assign 0 to varaibles score and result
    let score = 0;
    let result = 0;
    let unanswered = 0;
    
    //assign the quiz elements to the quiz variable
    let quiz = document.forms.quiz.elements;
    console.log(quiz)

    //assign the answer to the question to the answer1
    answer1 = quiz.hold.value;

    //check the answer to the first question:
    if (answer1 == "jug") {
        score = score + 1;
    }
    else if (answer1 == "crimp") {
        score = score + 4;
    }
    else if (answer1 == "sloper") {
        score = score + 2;
    }
    else if (answer1 == "pocket") {
        score = score + 3;
    }
    else {
        score = score - 1;
        unanswered = unanswered + 1;
    }

    // second question:

    answer2 = quiz.climbing.value;

    if (answer2 == "bouldering") {
        score = score + 4;
    }
    else if (answer2 == "sport") {
        score = score + 1;
    }
    else if (answer2 == "trad") {
        score = score + 3;
    }
    else if (answer2 == "freeSolo") {
        score = score + 2;
    }
    else {
        score = score - 1;
        unanswered = unanswered + 1;
    }

    //     third question:

    answer3 = quiz.music.value;

    if (answer3 == "rock") {
        score = score + 3;
    }
    else if (answer3 == "funk") {
        score = score + 4;
    }
    else if (answer3 == "jazz") {
        score = score + 2;
    }
    else if (answer3 == "pop") {
        score = score + 1;
    }
    else {
        score = score - 1;
        unanswered = unanswered + 1;
    }

    // fourth question:

    let depot = document.querySelector('#depot');
    let bloc = document.querySelector('#bloc');
    let rockOver = document.querySelector('#rockOver');
    let parthian = document.querySelector('#parthian');
    let aw = document.querySelector('#aw');
    let rope = document.querySelector('#rope');

    if (depot.checked == true) {
        score = score + 1;        
    }
    if (bloc.checked == true) {
        score = score + 1;        
    }
    if (rockOver.checked == true) {
        score = score + 1;        
    }
    if (parthian.checked == true) {
        score = score + 1;        
    }
    if (aw.checked == true) {
        score = score + 1;        
    }
    if (rope.checked == true) {
        score = score + 1;        
    }
    if (depot.checked == false) {
        if (bloc.checked == false) {
            if (rockOver.checked == false) {
                if (parthian.checked == false) {
                    if (aw.checked == false) {
                        if (rope.checked == false) {
                            score = score - 1;
                            unanswered = unanswered + 1;
                        }
                        
                    }
                    
                }
                
            }

        }
    }


    // fifth question:

    let beta = document.getElementById("beta").value;
    console.log(beta);
    let slip = document.getElementById("slip").value;
    console.log(slip);
    let dyno = document.getElementById("dyno").value;
    console.log(dyno);
    let crack = document.getElementById("crack").value;
    console.log(crack);
        //beta
    if (beta == 100) {
        score = score + 2;
    }
    else if (beta > 50) {
        score = score + 1;
    }
    else if (beta < 50) {
        score = score - 1;
    }
        //slip
    if (slip == 0) {
        score = score + 2;
    }
    else if (slip < 50) {
        score = score + 1;
    }
    else if (slip > 50) {
        score = score - 1;
    }
        //dyno
    if (dyno == 100) {
        score = score + 2;
    }
    else if (dyno > 50) {
        score = score + 1;
    }
    else if (dyno < 50) {
        score = score - 1;
    }
        //crack
    if (crack == 100) {
        score = score + 2;
    }
    else if (crack > 50) {
        score = score + 1;
    }
    else if (crack < 50) {
        score = score - 1;
    }
        //unanswered
    if (beta == 50) {
        if (slip == 50) {
            if (dyno == 50) {
                if (crack == 50) {
                    unanswered = unanswered + 1;
                    score = score - 1;
                }
            }
        }
    }

        
    //assign results
    if (score < 8 ){
        result = "You got a BAD SCORE.";
    }
    else if (score < 12){
        result = "You got an OKAY SCORE.";
    }
    else if (score < 18){
        result = "You got a GOOD SCORE.";
    }
    else if (score == 26) {
        result = "You got a PERFECT SCORE!! Adam Ondra eat your heart out.";
    }
    else {
        result = "You got a GREAT SCORE.";
    }

    
    if (unanswered >= 1) {
        alert (result +"     " + score + " points.     You left " + unanswered + " question(s) unanswered you lemon.");
    }
    else {
        alert (result +"     " + score + "/26 points.");
    }
}