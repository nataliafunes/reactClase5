const MILLIS=10000;
let previous_millis=0;
let current_millis=0;
let counter=1;


function validate_current_millis(){
    
    let current_max_millis=MILLIS/counter;

    document.getElementById('div_counter').innerHTML=counter;
    current_millis=Math.floor(new Date().getTime());
    
    console.log('MILLISEGUNDOS ACTUALES: ' + current_millis);
    console.log('MILISEGUNDOS PREVIOUS: ' + previous_millis);
    console.log('MAXIMO INTERVALO VALIDO: '+ current_max_millis);
    console.log('DIFERENCIA: ' + (parseFloat(current_millis) - parseFloat(previous_millis)));
    
    if(previous_millis==0 || 
        (parseFloat(current_millis) - parseFloat(previous_millis) <= current_max_millis)){
        previous_millis=current_millis;
        counter++;        
    } else{
        alert('EXCEDIO EL LIMITE, ejecutó ' + counter + ' DENTRO DEL LIMITE DE TIEMPO');
    }
}
