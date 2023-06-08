function sc()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    clas = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/JM-zu5BOR/model.json",modelReady);
}

function modelReady(){
    clas.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        r = Math.floor(Math.random() * 255) +1;
        g = Math.floor(Math.random() * 255) +1;
        b = Math.floor(Math.random() * 255) +1;

        document.getElementById("rl").innerHTML= "I can hear - " + results[0].label;
        document.getElementById("rc").innerHTML= "Accuracy - " + (results[0].confidence*100).toFixed(1)+" %";
        document.getElementById("rl").style.color = "rgb("+r+","+g+","+b+")";
        document.getElementById("rc").style.color = "rgb("+r+","+g+","+b+")";
        

        img1 = document.getElementById("ear");
    
        if (results[0].label =="Dog") {
            img1.src = "Dog.png";
        }
        else if (results[0].label =="Cat") {
            img1.src = "Cat.png";
        }
        else if (results[0].label =="bird") {
            img1.src = "bird.png";
        }
        else 
        {
            img1.src = "Lion.png";
        }

    }

}