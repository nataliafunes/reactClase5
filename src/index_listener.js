import miStore from './store';

document.addEventListener('click', function(e){
    switch(e.target.id){
        case 'btn_add':
            miStore.dispatch({
                type: 'sumar',
                data: {}
            });
        break;
        case 'btn_resta':
            miStore.dispatch({
                type: 'restar',
                data: {}
            });
        break;        
    }
});

miStore.subscribe(function(){
    document.getElementById('cartel').innerHTML=miStore.getState().contador;
    console.log(miStore.getState());
});