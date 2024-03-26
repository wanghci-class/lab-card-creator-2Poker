
let preview = document.getElementById('preview');
let save = document.getElementById('save');

preview.addEventListener('click', () => {

    document.getElementsByClassName('to-text')[0].textContent = document.getElementById('to').value;
    document.getElementsByClassName('from-text')[0].textContent = document.getElementById('from').value;
    document.getElementsByClassName('title-text')[0].textContent = document.getElementById('title').value;
    document.getElementsByClassName('subtitle-text')[0].textContent = document.getElementById('subtitle').value;
    document.getElementsByClassName('message-text')[0].textContent = document.getElementById('message').value;

});

save.addEventListener('click', (ev) => {
    ev.preventDefault();

    let cards = localStorage.getItem('cards');
    if (cards == null) {
        cards = [];
    } else {
        cards = JSON.parse(cards);
    }

    let card = {
        to: document.getElementById('to').value,
        from: document.getElementById('from').value,
        title: document.getElementById('title').value,
        subtitle: document.getElementById('subtitle').value,
        message: document.getElementById('message').value,
    };

    cards.push(card);

    localStorage.setItem('cards', JSON.stringify(cards));
});
