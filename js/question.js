// const questions = [
//     '<p class="form__question"> Pensez-vous avoir ou avoir eu de la fièvre ces 10 derniers jours (frissons, sueurs) ? </p><div class="answer-inputs"><div class="margine"><input type="radio" name="Q1" id="Oui" value ="Oui"><label for="Oui"><span>Oui</span> </label></div><div><input type="radio" name="Q1" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div></div>',
//     '<p class="form__question--c">Quelle est votre température corporelle ?</p> <div class="answer-inputs"><input type="number" name="Q2" id="degrés" min="34" max="42" placeholder="34 - 42"><span class="input-span">degrés</span></div>',
//     '<p class="form__question"> Ces derniers jours, avez-vous une toux ou une augmentation de votre toux habituelle ?</p><div class="answer-inputs"><div class="margine"><input type="radio" name="Q1" id="Oui" value ="Oui"><label for="Oui"><span>Oui</span> </label></div><div><input type="radio" name="Q1" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div></div>',
//     '<p class="form__question"> Avez-vous eu des courbatures inhabituelles au cours des derniers jours ? </p><div class="answer-inputs"><div class="margine"><input type="radio" name="Q1" id="Oui" value ="Oui"><label for="Oui"><span>Oui</span> </label></div><div><input type="radio" name="Q1" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div></div>',
//     '<p class="form__question"> Ces derniers jours, avez-vous un mal de gorge ? </p><div class="answer-inputs"><div class="margine"><input type="radio" name="Q1" id="Oui" value ="Oui"><label for="Oui"><span>Oui</span> </label></div><div><input type="radio" name="Q1" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div></div>',
//     '<p class="form__question"> Ces dernières 24 heures, avez-vous de la diarrhée ? Avec au moins 3 selles molles. </p><div class="answer-inputs"><div class="margine"><input type="radio" name="Q1" id="Oui" value ="Oui"><label for="Oui"><span>Oui</span> </label></div><div><input type="radio" name="Q1" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div></div>',
//     '<p class="form__question">Ces derniers jours, avez-vous une fatigue inhabituelle qui vous a obligé à vous reposer plus de la moitié de la journée ? </p><div class="answer-inputs"><div class="margine"><input type="radio" name="Q1" id="Oui" value ="Oui"><label for="Oui"><span>Oui</span> </label></div><div><input type="radio" name="Q1" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div></div>',
//     '<p class="form__question">Avez-vous des difficultés importantes pour vous alimenter ou boire depuis plus de 24h ? </p><div class="answer-inputs"><div class="margine"><input type="radio" name="Q1" id="Oui" value ="Oui"><label for="Oui"><span>Oui</span> </label></div><div><input type="radio" name="Q1" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div></div>',
//     '<p class="form__question"> Dans les dernières 24 heures, avez-vous noté un manque de souffle inhabituel lorsque vous parlez ou faites un petit effort ? </p><div class="answer-inputs"><div class="margine"><input type="radio" name="Q1" id="Oui" value ="Oui"><label for="Oui"><span>Oui</span> </label></div><div><input type="radio" name="Q1" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div></div>',
//     '<p class="form__question--quatre">Actuellement, comment vous vous sentez ? </p><div class="answer-inputs"><div class="margine"> <input type="radio" name="Q10" id="Bien"><label for="Bien"><span>Bien</span> </label> </div><div><input type="radio" name="Q10" id="Assez bien"><label for="Assez bien"><span>Assez bien</span> </label> </div> <div> <input type="radio" name="Q10" id="Fatigué(e)">  <label for="Fatigué(e)">  <span>Fatigué(e)</span> </label>    </div>    <div>        <input type="radio" name="Q10" id="Très fatigué">      <label for="Très fatigué">      <span>Très fatigué</span> </label>  </div></div>',
//     '<p class="form__question--age">Quel est votre âge ? Ceci, afin de calculer un facteur de risque spécifique.</p><div  class="answer-inputs"> <input type="number" id="reponce1" placeholder="17 - 120" min="17" max="120"><span class="input-span">Age</span></div><br><br></br>',
//     '<p class="form__question--poids">Quel est votre poids ? Afin de calculer l'indice de masse corporelle qui est un facteur influençant le risque de complications de l'infection.</p><div  class="answer-inputs"><input type="number" id="reponce1"  min="30" max= "200" placeholder="30 - 200"><span class="input-span">Kg</span></div><br><br></br>',
//     '<p class="form__question--taille">Quelle est votre taille ? Afin de calculer l'indice de masse corporelle qui est un facteur influençant le risque de complications de l'infection.</p> <div  class="answer-inputs"><input type="number" id="reponce1" min="100" max="260" placeholder="100 - 260"><span class="input-span">Cm</span></div><br><br></br>',
//     '<p class="form__question"> Avez-vous de l'hypertension artérielle mal équilibrée ? Ou avez-vous une maladie cardiaque ou vasculaire ? Ou prenez-vous un traitement à visée cardiologique ? </p><div class="answer-inputs"><div class="margine"><input type="radio" name="Q1" id="Oui" value ="Oui"><label for="Oui"><span>Oui</span> </label></div><div><input type="radio" name="Q1" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div></div>',
//     '<p class="form__question">Êtes-vous diabétique ?</p><div class="answer-inputs"><div class="margine"><input type="radio" name="Q1" id="Oui" value ="Oui"><label for="Oui"><span>Oui</span> </label></div><div><input type="radio" name="Q1" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div></div>',
//     '<p class="form__question">Avez-vous ou avez-vous eu un cancer ?</p><div class="answer-inputs"><div class="margine"><input type="radio" name="Q1" id="Oui" value ="Oui"><label for="Oui"><span>Oui</span> </label></div><div><input type="radio" name="Q1" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div></div>',
//     '<p class="form__question">Avez-vous une maladie respiratoire ? Ou êtes-vous suivi par un pneumologue ?</p><div class="answer-inputs"><div class="margine"><input type="radio" name="Q1" id="Oui" value ="Oui"><label for="Oui"><span>Oui</span> </label></div><div><input type="radio" name="Q1" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div></div>',
//     '<p class="form__question">Avez-vous une insuffisance rénale chronique dialysée ?</p><div class="answer-inputs"><div class="margine"><input type="radio" name="Q1" id="Oui" value ="Oui"><label for="Oui"><span>Oui</span> </label></div><div><input type="radio" name="Q1" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div></div>',
//     '<p class="form__question">Avez-vous une maladie chronique du foie ?</p><div class="answer-inputs"><div class="margine"><input type="radio" name="Q1" id="Oui" value ="Oui"><label for="Oui"><span>Oui</span> </label></div><div><input type="radio" name="Q1" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div></div>',
//     '<p class="form__question--trois">Êtes-vous enceinte ?</p><div class="answer-inputs"><div class="margine"><input type="radio" name="Q1" id="Oui" value ="Oui"><label for="Oui"><span>Oui</span> </label></div><div><input type="radio" name="Q1" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div><div><input type="radio" name="Q1" id="Homme" value ="Homme"><label for="Homme"><span>Homme</span> </label></div></div>',
//     '<p class="form__question">Avez-vous une maladie connue pour diminuer vos défenses immunitaires ?</p><div class="answer-inputs"><div class="margine"><input type="radio" name="Q1" id="Oui" value ="Oui"><label for="Oui"><span>Oui</span> </label></div><div><input type="radio" name="Q1" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div></div>',
//     '<p class="form__question">Prenez-vous un traitement immunosuppresseur ? C'est un traitement qui diminue vos défenses contre les infections. Voici quelques exemples : corticoïdes, méthotrexate, ciclosporine, tacrolimus, azathioprine, cyclophosphamide (liste non exhaustive).</p><div class="answer-inputs"><div class="margine"><input type="radio" name="Q1" id="Oui" value ="Oui"><label for="Oui"><span>Oui</span> </label></div><div><input type="radio" name="Q1" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div></div>',
// ];
const quiz = [
    {
        // 0
        question: "Pensez-vous avoir ou avoir eu de la fièvre ces 10 derniers jours (frissons, sueurs)?",
        typeQuestion : "choix",
        type:"radio",
        choix: ["oui","non"],
        icon : ['<i class="bi bi-check2"></i>','<i class="bi bi-x-lg"></i>'],
        reponse: null
    },

    {
        // 1
        question: "Quelle est votre température corporelle ?",
        typeQuestion : "text",
        type : "number",
        min:"34",
        max:"41",
        reponse: null
    },
    
    {
        // 2
        question: "Ces derniers jours, avez-vous une toux ou une augmentation de votre toux habituelle ?",
        typeQuestion : "choix",
        choix: ["oui","non"],
        icon : ['<i class="bi bi-check2"></i>','<i class="bi bi-x-lg"></i>'],
        type: "radio",
        reponse: null
    },
    
    {
        // 3
        question: "Avez-vous eu des courbatures inhabituelles au cours des derniers jours ?",
        typeQuestion : "choix",
        choix: ["oui","non"],
        icon : ['<i class="bi bi-check2"></i>','<i class="bi bi-x-lg"></i>'],
        type: "radio",
        reponse: null
    },
    
    {
        // 4
        question: "Ces derniers jours, avez-vous un mal de gorge ?",
        typeQuestion : "choix",
        choix: ["oui","non"],
        icon : ['<i class="bi bi-check2"></i>','<i class="bi bi-x-lg"></i>'],
        type: "radio",
        reponse: null
    },
    
    {
        // 5
        question: "Ces dernières 24 heures, avez-vous de la diarrhée ? Avec au moins 3 selles molles.",
        typeQuestion : "choix",
        choix: ["oui","non"],
        icon : ['<i class="bi bi-check2"></i>','<i class="bi bi-x-lg"></i>'],
        type: "radio",
        reponse: null
    },
    
    {
        // 6
        question: "Ces derniers jours, avez-vous une fatigue inhabituelle qui vous a obligé à vous reposer plus de la moitié de la journée ?",
        typeQuestion : "choix",
        choix: ["oui","non"],
        icon : ['<i class="bi bi-check2"></i>','<i class="bi bi-x-lg"></i>'],
        type: "radio",
        reponse: null
    },
    
    {
        // 7
        question: "Avez-vous des difficultés importantes pour vous alimenter ou boire depuis plus de 24h ?",
        typeQuestion : "choix",
        choix: ["oui","non"],
        icon : ['<i class="bi bi-check2"></i>','<i class="bi bi-x-lg"></i>'],
        type: "radio",
        reponse: null
    },
    
    {
        // 8
        question: "Dans les dernières 24 heures, avez-vous noté un manque de souffle inhabituel lorsque vous parlez ou faites un petit effort ?",
        typeQuestion : "choix",
        choix: ["oui","non"],
        icon : ['<i class="bi bi-check2"></i>','<i class="bi bi-x-lg"></i>'],
        type: "radio",
        reponse: null
    },
    
    {
        //9
        question: "Actuellement, comment vous vous sentez ?",
        typeQuestion : "choix",
        choix: ["Bien", "Assez Bien", "Fatigué(e)", "Trés fatigué(e)"],
        icon : ['<i class="bi bi-emoji-sunglasses"></i>','<i class="bi bi-emoji-smile"></i>','<i class="bi bi-emoji-frown"></i>','<i class="bi bi-emoji-dizzy"></i>'],
        type: "radio",
        reponse: null
    },
    
    {
        // 10
        question: "Quel est votre âge ? Ceci, afin de calculer un facteur de risque spécifique",
        typeQuestion : "text",
        type : "number",
        min:"15",
        max:"115",
        reponse: null
    },
    
    {
        // 11
        question: "Quel est votre poids ? Afin de calculer l'indice de masse corporelle qui est un facteur influençant le risque de complications de l'infection.",
        typeQuestion : "text",
        type : "number",
        min:"20",
        max:"250",
        reponse: null
    },
    
    {
        //12
        question: "Quelle est votre taille ? Afin de calculer l'indice de masse corporelle qui est un facteur influençant le risque de complications de l'infection.",
        typeQuestion : "text",
        type : "number",
        min:"80",
        max:"255",
        reponse: null
    },
    
    {
        //13
        question: "Avez-vous de l'hypertension artérielle mal équilibrée ? Ou avez-vous une maladie cardiaque ou vasculaire ? Ou prenez-vous un traitement à visée cardiologique ?",
        typeQuestion : "choix",
        choix: ["oui","Non"],
        icon : ['<i class="bi bi-check2"></i>','<i class="bi bi-x-lg"></i>'],
        type: "radio",
        reponse: null
    },
    
    {
        // 14
        question: "Êtes-vous diabétique ?",
        typeQuestion : "choix",
        choix: ["oui","Non"],
        icon : ['<i class="bi bi-check2"></i>','<i class="bi bi-x-lg"></i>'],
        type: "radio",
        reponse: null
    },
    
    {
        // 15
        question: "Avez-vous ou avez-vous eu un cancer ?",
        typeQuestion : "choix",
        choix: ["oui","Non"],
        icon : ['<i class="bi bi-check2"></i>','<i class="bi bi-x-lg"></i>'],
        type: "radio",
        reponse: null
    },
    
    {
        //16
        question: "Avez-vous une maladie respiratoire ? Ou êtes-vous suivi par un pneumologue ?",
        typeQuestion : "choix",
        choix: ["Oui","Non"],
        icon : ['<i class="bi bi-check2"></i>','<i class="bi bi-x-lg"></i>'],
        type: "radio",
        reponse: null
    },
    
    {
        question: "Avez-vous une insuffisance rénale chronique dialysée ?",
        typeQuestion : "choix",
        choix: ["Oui","Non"],
        icon : ['<i class="bi bi-check2"></i>','<i class="bi bi-x-lg"></i>'],
        type: "radio",
        reponse: null
    },
    
    {
        question: "Avez-vous une maladie chronique du foie ?",
        typeQuestion : "choix",
        choix: ["Oui","Non"],
        icon : ['<i class="bi bi-check2"></i>','<i class="bi bi-x-lg"></i>'],
        type: "radio",
        reponse: null
    },
    
    {
        question: "Êtes-vous enceinte ?",
        typeQuestion : "choix",
        choix: ["Oui","Non","Homme"],
        icon : ['<i class="bi bi-check2"></i>','<i class="bi bi-x-lg"></i>','<i class="bi bi-gender-male"></i>'],
        type: "radio",
        reponse: null
    },
    
    {
        question: "Avez-vous une maladie connue pour diminuer vos défenses immunitaires ?",
        typeQuestion : "choix",
        choix: ["Oui","Non"],
        icon : ['<i class="bi bi-check2"></i>','<i class="bi bi-x-lg"></i>'],
        type: "radio",
        reponse: null
    },
    
    {
        question: "Prenez-vous un traitement immunosuppresseur ? C'est un traitement qui diminue vos défenses contre les infections. Voici quelques exemples : corticoïdes, méthotrexate, ciclosporine, tacrolimus, azathioprine, cyclophosphamide (liste non exhaustive).",
        typeQuestion : "choix",
        choix: ["Oui","Non"],
        icon : ['<i class="bi bi-check2"></i>','<i class="bi bi-x-lg"></i>'],
        type: "radio",
        reponse: null
    },

];
const progress = document.querySelector('.progress');
const numberQuestion =document.getElementById('numberQuestion');
const question = document.getElementById('question');
const answer = document.getElementById('answer');
const input = document.createElement('input');
const label = document.createElement('label');
const next  = document.getElementById('next');
const precedent = document.getElementById('precedent');
const radios = document.getElementsByName('choix');
let countQuestion = quiz.length;
let i = 0;  
let j =1;
function getRadioValue(){
    for (let i = 0; i < radios.length; i++) {
        radios[i].addEventListener('change',function(){
            for (let i = 0, length = radios.length; i < length; i++) {
                if (radios[i].checked) {
                    console.log(radios[i].value);
                    break;
                }
            }
        })
    }
    return radios[i].value;
}
// if(i == 0){
//     console.log('yess')
//     precedent.style.cursor = "not-allowed";
//     precedent.disabled = true; 
// }
function getInputValue(){
input.addEventListener('mouseup' , function(){
    input.setAttribute("value", input.value);
    return input.value;
})
}
function afficheAnswer(){
    numberQuestion.textContent = i+1;
    question.textContent = quiz[i].question;
    if(i==0){
        precedent.style.visibility = "hidden"
    }else{
        precedent.style.visibility = "visible"

    }
    if(quiz[i].typeQuestion === "text"){
        answer.innerHTML = "";
        answer.appendChild(input);
        input.id = quiz[i].typeQuestion;
        input.className = "form-control shadow-none w-100" ;
        input.style.width ="500px"
        input.name = quiz[i].typeQuestion;
        input.type = quiz[i].type;
        input.min = quiz[i].min;
        input.max = quiz[i].max;
        input.placeholder = quiz[i].min + " - " + quiz[i].max;
        
    }
    if(quiz[i].typeQuestion === "choix" ){
        answer.innerHTML = "";
        for(let k = 0; k < quiz[i].choix.length; k++){
            let input = document.createElement('input');
            let label = document.createElement('label');
            input.id = quiz[i].typeQuestion + k ;
            input.type = quiz[i].type;
            input.value = quiz[i].choix[k];
            input.name = quiz[i].typeQuestion;
            input.className = "btn-check shadow-none ";
            input.removeAttribute("min");
            input.removeAttribute("max");
            input.removeAttribute("placeholder");
            answer.append(input );
            label.setAttribute("for" ,quiz[i].typeQuestion + k);
            label.className = "btn btn-outline-info1 px-5 py-3 fs-3 fw-bolder mx-5" ;
            label.name = quiz[i].typeQuestion;
            label.textContent = quiz[i].choix[k].toUpperCase();
            label.innerHTML += " "+quiz[i].icon[k];
            answer.append( label );
        }
    }
}

afficheAnswer()
next.addEventListener('click' , function(){

    if(i < countQuestion-1){
        i++;
    }
    if(i <= countQuestion-1){
        afficheAnswer()
    }
})

precedent.addEventListener('click' , function(){
    if(i > 0){
        i--;
    }
        afficheAnswer()

})