import {all} from 'redux-saga/effects'
import {watchCreateCustomer} from './create'
import {watchLoadCustomer} from "./load";
import {watchEditCustomer} from "./edit";

export default function* customer() {
    yield all([
        watchCreateCustomer(),
        watchEditCustomer(),
        watchLoadCustomer()
    ])
}