import {IOrderList} from './interfaces/i-order-list';

export const CATEGORY_TYPES = ['Front_End', 'Back-End', 'Design'];
export const PRIORITY_TYPES = ['Low', 'Normal', 'High', 'Urgent'];
export const ORDER_LIST: IOrderList[] = [{name: 'SUBJECT_ASC',order: 'subject',},{name: 'SUBJECT_DESC',order: '-subject',},{name: 'DUE_ASC',order: 'due',},{name: 'DUE_DESC',order: '-due',},];