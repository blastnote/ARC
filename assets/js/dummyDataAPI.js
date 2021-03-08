import data from '~/assets/js/dummyData';

export function getCards(cardsNum) {
    return data['cards'].slice(0, cardsNum)
}