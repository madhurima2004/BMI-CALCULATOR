const form=document.querySelector('form');

form.addEventListener('submit',function(e){
e.preventDefault();

const height =parseInt(document.querySelector("#height").value);
const weight = parseInt(document.querySelector("#weight").value);
const BMI=document.querySelector("#result");

if(height === '' || height <0 || isNaN(height) ){
result.innerHTML = `enter valid number ${height}`
}
else if(weight === '' || weight <0 || isNaN(weight)){
    result.innerHTML =`enter valid number ${weight}`
}
else{
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `<span>${bmi}<\span>`;
}

})
