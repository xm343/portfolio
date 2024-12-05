

function sendMail(){
    let parms = {
        name : document.getElementById('name-field').value,
        email : document.getElementById('email-field').value,
        subject : document.getElementById('subject-field').value,
        message : document.getElementById('message-field').value,
    }
    emailjs.send('service_y0jo0zg','template_k3rzhce',parms).then(alert('email sent'))
}
