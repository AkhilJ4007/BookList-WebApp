export const TOGGLE_POPUP = 'TOGGLE_POPUP';
export const ITEM_SELECTED = 'ITEM_SELECTED';

export function togglePopup() {

    return { type: TOGGLE_POPUP };
}

export function itemSelected(key) {
    return { type: ITEM_SELECTED, payload : key};
}
