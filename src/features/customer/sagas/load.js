import {delay, put, takeLatest} from 'redux-saga/effects'
import * as actions from '../reducers'
import {load} from "../utilities/async_storage";

export function* watchLoadCustomer() {
    yield takeLatest(actions.loadCustomers.toString(), takeLoadCustomer)
}

export function* takeLoadCustomer() {
    console.log('Starting fetch request to API')
    try {
        const customers = yield load()

        yield put(actions.loadCustomersResult(customers))
    } catch (error) {
        yield put(actions.loadCustomersError(error.toString()))
    }
}
