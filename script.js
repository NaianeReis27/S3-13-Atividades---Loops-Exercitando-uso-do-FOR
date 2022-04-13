const arr = [5, 4, 7, 30, 16, 89]
let arrPar=[];

for (let i=0; i<arr.length; i++){
    if(arr[i]%2==0){
        arrPar.push(arr[i]);
    }
    
}
console.log(arrPar);

// resultado esperado = 32
let numbers = []
const array = [1, '4', 9, 18]
let soma = 0

for (let i= 0; i<array.length; i++){
    numbers.push(parseInt(array[i]))
    soma = soma + numbers[i];   
}
console.log(numbers);
console.log(soma);