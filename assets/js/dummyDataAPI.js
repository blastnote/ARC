import data from '~/assets/js/dummyData';

export function getItems(itemsNum) {
    return data['items'].slice(0, itemsNum)
}

export function getItem(itemId) {
    for (let i = 0; i < data['items'].length; i++) {
        if (data['items'][i].id == itemId) { return data['items'][i]; }
    }
    return -1;
}