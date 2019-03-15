import React from 'react';
import 

function AdminItems (e) {
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
}

export default AdminItems;