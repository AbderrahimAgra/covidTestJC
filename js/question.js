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
//     '<p class="form__question--poids">Quel est votre poids ? Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.</p><div  class="answer-inputs"><input type="number" id="reponce1"  min="30" max= "200" placeholder="30 - 200"><span class="input-span">Kg</span></div><br><br></br>',
//     '<p class="form__question--taille">Quelle est votre taille ? Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.</p> <div  class="answer-inputs"><input type="number" id="reponce1" min="100" max="260" placeholder="100 - 260"><span class="input-span">Cm</span></div><br><br></br>',
//     '<p class="form__question"> Avez-vous de l’hypertension artérielle mal équilibrée ? Ou avez-vous une maladie cardiaque ou vasculaire ? Ou prenez-vous un traitement à visée cardiologique ? </p><div class="answer-inputs"><div class="margine"><input type="radio" name="Q1" id="Oui" value ="Oui"><label for="Oui"><span>Oui</span> </label></div><div><input type="radio" name="Q1" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div></div>',
//     '<p class="form__question">Êtes-vous diabétique ?</p><div class="answer-inputs"><div class="margine"><input type="radio" name="Q1" id="Oui" value ="Oui"><label for="Oui"><span>Oui</span> </label></div><div><input type="radio" name="Q1" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div></div>',
//     '<p class="form__question">Avez-vous ou avez-vous eu un cancer ?</p><div class="answer-inputs"><div class="margine"><input type="radio" name="Q1" id="Oui" value ="Oui"><label for="Oui"><span>Oui</span> </label></div><div><input type="radio" name="Q1" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div></div>',
//     '<p class="form__question">Avez-vous une maladie respiratoire ? Ou êtes-vous suivi par un pneumologue ?</p><div class="answer-inputs"><div class="margine"><input type="radio" name="Q1" id="Oui" value ="Oui"><label for="Oui"><span>Oui</span> </label></div><div><input type="radio" name="Q1" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div></div>',
//     '<p class="form__question">Avez-vous une insuffisance rénale chronique dialysée ?</p><div class="answer-inputs"><div class="margine"><input type="radio" name="Q1" id="Oui" value ="Oui"><label for="Oui"><span>Oui</span> </label></div><div><input type="radio" name="Q1" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div></div>',
//     '<p class="form__question">Avez-vous une maladie chronique du foie ?</p><div class="answer-inputs"><div class="margine"><input type="radio" name="Q1" id="Oui" value ="Oui"><label for="Oui"><span>Oui</span> </label></div><div><input type="radio" name="Q1" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div></div>',
//     '<p class="form__question--trois">Êtes-vous enceinte ?</p><div class="answer-inputs"><div class="margine"><input type="radio" name="Q1" id="Oui" value ="Oui"><label for="Oui"><span>Oui</span> </label></div><div><input type="radio" name="Q1" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div><div><input type="radio" name="Q1" id="Homme" value ="Homme"><label for="Homme"><span>Homme</span> </label></div></div>',
//     '<p class="form__question">Avez-vous une maladie connue pour diminuer vos défenses immunitaires ?</p><div class="answer-inputs"><div class="margine"><input type="radio" name="Q1" id="Oui" value ="Oui"><label for="Oui"><span>Oui</span> </label></div><div><input type="radio" name="Q1" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div></div>',
//     '<p class="form__question">Prenez-vous un traitement immunosuppresseur ? C’est un traitement qui diminue vos défenses contre les infections. Voici quelques exemples : corticoïdes, méthotrexate, ciclosporine, tacrolimus, azathioprine, cyclophosphamide (liste non exhaustive).</p><div class="answer-inputs"><div class="margine"><input type="radio" name="Q1" id="Oui" value ="Oui"><label for="Oui"><span>Oui</span> </label></div><div><input type="radio" name="Q1" id="Non" value="Non"><label for="Non"><span>Non</span> </label></div></div>',
// ];
const quiz = [
    {
        question: "Pensez-vous avoir ou avoir eu de la fièvre ces 10 derniers jours (frissons, sueurs)?",
        typeQuestion : "choix",
        reponse: null
    },

    {
        question: "Quelle est votre température corporelle ?",
        typeQuestion : "text",
        type: "number",
        min:"34",
        max:"41",
        reponse: null
    },
    
    {
        question: "Ces derniers jours, avez-vous une toux ou une augmentation de votre toux habituelle ?",
        choix: ["oui","non"],
        type: "radio",
        reponse: null
    },
    
    {
        question: "Avez-vous eu des courbatures inhabituelles au cours des derniers jours ?",
        choix: ["oui","non"],
        type: "radio",
        reponse: null
    },
    
    {
        question: "Ces derniers jours, avez-vous un mal de gorge ?",
        choix: ["oui","non"],
        type: "radio",
        reponse: null
    },
    
    {
        question: "Ces dernières 24 heures, avez-vous de la diarrhée ? Avec au moins 3 selles molles.",
        choix: ["oui","non"],
        type: "radio",
        reponse: null
    },
    
    {
        question: "Ces derniers jours, avez-vous une fatigue inhabituelle qui vous a obligé à vous reposer plus de la moitié de la journée ?",
        choix: ["oui","non"],
        type: "radio",
        reponse: null
    },
    
    {
        question: "Avez-vous des difficultés importantes pour vous alimenter ou boire depuis plus de 24h ?",
        choix: ["oui","non"],
        type: "radio",
        reponse: null
    },
    
    {
        question: "Dans les dernières 24 heures, avez-vous noté un manque de souffle inhabituel lorsque vous parlez ou faites un petit effort ?",
        choix: ["oui","non"],
        type: "radio",
        reponse: null
    },
    
    {
        question: "Actuellement, comment vous vous sentez ?",
        choix: ["Bien", "Assez Bien", "Fatigué(e)", "Trés fatigué(e)"],
        type: "radio",
        reponse: null
    },
    
    {
        question: "Quel est votre âge ? Ceci, afin de calculer un facteur de risque spécifique",
        choix: ["15","115"],
        type: "text",
        reponse: null
    },
    
    {
        question: "Quel est votre poids ? Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.",
        choix: ["20","250"],
        type: "text",
        reponse: null
    },
    
    {
        question: "Quelle est votre taille ? Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.",
        choix: ["80","250"],
        type: "text",
        reponse: null
    },
    
    {
        question: "Avez-vous de l’hypertension artérielle mal équilibrée ? Ou avez-vous une maladie cardiaque ou vasculaire ? Ou prenez-vous un traitement à visée cardiologique ?",
        choix: ["Oui","Non"],
        type: "radio",
        reponse: null
    },
    
    {
        question: "Êtes-vous diabétique ?",
        choix: ["Oui","Non"],
        type: "radio",
        reponse: null
    },
    
    {
        question: "Avez-vous ou avez-vous eu un cancer ?",
        choix: ["Oui","Non"],
        type: "radio",
        reponse: null
    },
    
    {
        question: "Avez-vous une maladie respiratoire ? Ou êtes-vous suivi par un pneumologue ?",
        choix: ["Oui","Non"],
        type: "radio",
        reponse: null
    },
    
    {
        question: "Avez-vous une insuffisance rénale chronique dialysée ?",
        choix: ["Oui","Non"],
        type: "radio",
        reponse: null
    },
    
    {
        question: "Avez-vous une maladie chronique du foie ?",
        choix: ["Oui","Non"],
        type: "radio",
        reponse: null
    },
    
    {
        question: "Êtes-vous enceinte ?",
        choix: ["Oui","Non","Homme"],
        type: "radio",
        reponse: null
    },
    
    {
        question: "Avez-vous une maladie connue pour diminuer vos défenses immunitaires ?",
        choix: ["Oui","Non"],
        type: "radio",
        reponse: null
    },
    
    {
        question: "Prenez-vous un traitement immunosuppresseur ? C’est un traitement qui diminue vos défenses contre les infections. Voici quelques exemples : corticoïdes, méthotrexate, ciclosporine, tacrolimus, azathioprine, cyclophosphamide (liste non exhaustive).",
        choix: ["Oui","Non"],
        type: "radio",
        reponse: null
    },

];
let numberQuestion =document.getElementById('numberQuestion');
let question = document.getElementById('question');
let suivant = document.getElementById('suivant');
let precedent = document.getElementById('precedent');
let choix = document.getElementById('choix');
let input = document.getElementById('input');


let countQuestion = quiz.length;
let i = 0;  
let j =1;

/*

const setProgress=function(nbr,text){
    document.querySelector('.progress-area .progress').style.width=nbr+"%";
    
    document.querySelector('.progress-label').textContent=text;
}

*/

numberQuestion.textContent = j;
question.textContent = quiz[i].question;



suivant.addEventListener('click' , function(){
    console.log(quiz[i].type)
    if(i < countQuestion+1){
        i++;
        question.textContent = quiz[i].question
    }
    if(j < countQuestion){
        j++;
        numberQuestion.textContent = j;
    }
    if(quiz[i].type === "input" || quiz[i].type === "number"){
        choix.style.display = "none";
        input.style.display = "flex";

    }
    if(quiz[i].type === "radio" ){
        choix.style.display = "none";
        input.style.display = "flex";

    }
    document.getElementById("progressBar").value += i;
    LabelOfprogress.innerHTML='i';
    document.getElementById("LabelOfprogress").innerHTML=i+1+"/22";

})

precedent.addEventListener('click' , function(){
    if(i>0){
        i--;
        question.textContent = quiz[i].question;
    }
    if(j>1){
        j--;
        numberQuestion.textContent = j;
    }
    document.getElementById("progressBar").value -= i;
    LabelOfprogress.innerHTML='i';
    document.getElementById("LabelOfprogress").innerHTML=i+1+"/22";

})
///////start testing results 
const getFactGravMin=(symptomps)=>{
    let fact=0;
    if(symptomps.feverDeg>=39) fact++;
    if(symptomps.anorexia) fact++;
    if(symptomps.disconfort) fact ++;
    return fact;
}
const getFactGravMaj=(symptomps)=>{
    let fact=0;
    if(symptomps.dyspanea) fact++;
    if(symptomps.anorexia) fact++;
    if(symptomps.feverDeg<=35.4) fact++;
    return fact;

};
const getPronoFact=(poorPronoFact)=>{
    if (poorPronoFact.age >= 70 || poorPronoFact.imc >= 30 || poorPronoFact.pregnancy || poorPronoFact.breathingIllness || poorPronoFact.cancer || poorPronoFact.chronicLiverDisease
        || poorPronoFact.chronicRenalFailure || poorPronoFact.diabetes || poorPronoFact.heartDisease || poorPronoFact.immuneSystemDisease || poorPronoFact.immunosuppressiveTherapy) {
        return true;
      } else {
        return false;
      }

};

/**
 * 
 * @param data :object 
 * @returns string : text representing the messag eto show to the user based on the given data 
 */
const getResult=(data)=>{
    data =data.map((q)=>{
        q.reponse=q.reponse.toLowerCase();
        return q;
    })
    const OUI='oui';
    let symptoms={
        fever:data[0].response==OUI,
        feverDeg:data[1].response,
        cough:data[2].response==OUI,
        muscularPain:data[3].response==OUI,
        soreThroat:data[4].response==OUI,
        diarrhea:data[5].response==OUI,
        tiredness:data[6].response==OUI,
        dyspanea:data[16].response==OUI ||data[8].response==OUI,
        anorexia:data[7].response==OUI,
        disconfort:data[9].response==data[9].choix[2] || data[9].response==data[9].choix[3],
    };

    let poorPronoFact={
        imc: data[11].reponse/Math.pow(data[12].reponse,2), // poids(kg)/taille^2
        heartDisease: data[13].reponse==OUI,
        diabetes: data[14].reponse==OUI,
        cancer: data[15].reponse==OUI,
        breathingIllness: data[16].reponse==OUI,
        chronicRenalFailure: data[17].reponse==OUI,
        chronicLiverDisease: data[18].reponse==OUI,
        pregnancy: data[19].reponse==OUI,
        immuneSystemDisease: data[20].reponse==OUI,
        immunosuppressiveTherapy: data[21].reponse==OUI,
    }
    
    const factGravMin=getFactGravMin(symptomps);
    const factGravMaj=getFactGravMaj(symptomps);
    const hasfFactProno=getPronoFact(poorPronoFact);


    if (symptoms.fever || (symptoms.cough && symptoms.soreThroat) || (symptoms.cough && symptoms.muscularPain) || (symptoms.fever && symptoms.diarrhea)) {
        if (factGravMaj > 0) {
          return 'خصك تعيط ل 141';
        } else if (!hasfFactProno) {
          if (poorPronoFact.age < 50 && factGravMin === 0) {
            return 'تنوصيوك باش تبقى فدارك و تتصل بطبيبك إذا بانت شي أعراض أخرى . وتقد فاي وقت تعاود الإختبار باش طمن على راسك';
          }
          if (((poorPronoFact.age > 50 && poorPronoFact.age < 70) && factGravMin === 0) || factGravMin > 0) {
            return 'تقد تشاور مع طبيب فالتيليفون او يزورك طبيب فالدار' +
              '\nإذا كان عندك صعوبة فالتنفس او مقديتيش تاكل مزيان او تشرب لكثر من 24 ساعة ضروري اتصل ب 141';
          }
        } else {
          if (factGravMin <= 1) {
            return 'تقد تشاور مع طبيب فالتيليفون او يزورك طبيب فالدار' +
              '\nإذا كان عندك صعوبة فالتنفس او مقديتيش تاكل مزيان او تشرب لكثر من 24 ساعة ضروري اتصل ب 141';
          } else {
            return 'خصك تعيط ل 141';
          }
        }
      } else if (symptoms.fever && symptoms.cough) {
        if (factGravMaj > 0) {
          return 'خصك تعيط ل 141';
        } else if (!hasfFactProno) {
          return 'تقد تشاور مع طبيب فالتيليفون او يزورك طبيب فالدار' +
              '\nإذا كان عندك صعوبة فالتنفس او مقديتيش تاكل مزيان او تشرب لكثر من 24 ساعة ضروري اتصل ب 141';
        } else {
          if (factGravMin <= 1) {
            return 'تقد تشاور مع طبيب فالتيليفون او يزورك طبيب فالدار' +
              '\nإذا كان عندك صعوبة فالتنفس او مقديتيش تاكل مزيان او تشرب لكثر من 24 ساعة ضروري اتصل ب 141';
          } else {
            return 'خصك تعيط ل 141';
          }
        }
      } else if (symptoms.fever || symptoms.cough || symptoms.soreThroat || symptoms.muscularPain) {
        if (factGravMaj === 0 && factGravMin === 0) {
          return 'موحال واش فيك فيروس كورونا، ولكن إلى شكيتي ممكن تتصل بطبيب ديالك';
        } else if (factGravMin > 0 || factGravMaj > 0 || hasfFactProno) {
          return 'موحال واش فيك فيروس كورونا ؛ تنصحوك تشاور مع طبيب. وإلى شكيتي اتصل ب 141';
        }
      } else {
        return 'موحال واش فيك فيروس كورونا، إذا عندك شك اتصل بالطبيب ديالك. تقد تعاود الإختبار لكانوا عندك اعراض اخرى. لبغيتي تعرف اكثر على الڤيروس ممكن تشوف صفحة النصائح';
      }
    }
  

