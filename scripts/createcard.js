
let preview = document.getElementById('preview');


preview.addEventListener('click', () => {
    let to = document.getElementById('to').value;
    let from = document.getElementById('from').value;
    let title = document.getElementById('title').value;
    let subtitle = document.getElementById('subtitle').value;
    let message = document.getElementById('message').value;

    document.getElementsByClassName('to-text')[0].textContent = to;
    document.getElementsByClassName('from-text')[0].textContent = from;
    document.getElementsByClassName('title-text')[0].textContent = title;
    document.getElementsByClassName('subtitle-text')[0].textContent = subtitle;
    document.getElementsByClassName('message-text')[0].textContent = message;

});