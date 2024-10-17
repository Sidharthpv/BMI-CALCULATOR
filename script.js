function calculate(){
    var h = document.getElementById('height').value;
    var w = document.getElementById('weight').value;
    let bmi = (w / (Math.pow(h, 2))).toFixed(2);
    console.log(bmi);

    result.innerHTML = `${bmi}`;
    if(bmi<=18.5){
        range.innerHTML = `<h5>Underweight</h5>`;
        document.getElementById('range').style.color="yellow"
    }
    else if(bmi>18.5 && bmi<=24.9){
        range.innerHTML = `Normal`;
        document.getElementById('range').style.color="green"
    }
    else if(bmi>24.9 && bmi<=29.9){
        range.innerHTML = `Overweight`;
        document.getElementById('range').style.color="orange"
    }
    else{
        range.innerHTML = `Obese`
        document.getElementById('range').style.color="red"
    }
}