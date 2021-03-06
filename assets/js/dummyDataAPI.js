import data from '~/assets/js/dummyData';

export function getCards(cardsNum) {
    return {cards: data['cards'].slice(0, cardsNum)}
}