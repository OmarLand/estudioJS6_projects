const notificarBtn = document.querySelector('#notificar');

notificarBtn.addEventListener('click', () =>{
    Notification
        .requestPermission()
        .then( res =>{
            console.log(`El resultado es: ${res}`);
            
        } )
})

const verNotificacion = document.querySelector('#verNotificacion');

verNotificacion.addEventListener('click', ()=>{
    if(Notification.permission === 'granted'){
        const notification = new Notification('Esta es la notificación',{
            icon : 'img/ccj.png',
            body : 'Aprendiendo notificaciones'
        })

        notification.onclick = function(){
            window.open('https://olandaeta.vercel.app/')
        }
    }
})