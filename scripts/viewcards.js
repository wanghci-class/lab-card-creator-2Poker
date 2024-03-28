let cardList = document.getElementById('card-list');
let template = document.getElementById('card-template');

let cards = JSON.parse(localStorage.getItem('cards'));

cards.forEach(card => {
    
    let clone = template.content.cloneNode(true);
    let toText = clone.querySelector('.to-text');
    toText.textContent = card.to;
    let fromText = clone.querySelector('.from-text');
    fromText.textContent = card.from;
    let titleText = clone.querySelector('.title-text');
    titleText.textContent = card.title;
    let subtitleText = clone.querySelector('.subtitle-text');
    subtitleText.textContent = card.subtitle;
    let messagetext = clone.querySelector('.message-text');
    messagetext.textContent = card.message;

    let deleteButton = clone.querySelector('.delete-btn');
    deleteButton.addEventListener('click', () => {
        let index = cards.indexOf(card);
        cards.splice(index, 1);
        localStorage.setItem('cards', JSON.stringify(cards));
        location.reload();
    });

    let updateCard = function updateCard() {
        card.to = toText.textContent;
        card.from = fromText.textContent;
        card.title = titleText.textContent;
        card.subtitle = subtitleText.textContent;
        card.message = messagetext.textContent;
        localStorage.setItem('cards', JSON.stringify(cards));
    }
    
    clone.querySelector('.to-text').addEventListener('input', updateCard);
    clone.querySelector('.from-text').addEventListener('input', updateCard);
    clone.querySelector('.title-text').addEventListener('input', updateCard);
    clone.querySelector('.subtitle-text').addEventListener('input', updateCard);
    clone.querySelector('.message-text').addEventListener('input', updateCard); 

    cardList.appendChild(clone);

});

