import {delay, put, select, takeLatest} from 'redux-saga/effects'
import * as actions from '../reducers'
import {save} from "../utilities/async_storage";

export function* watchCreateCustomer() {
    yield takeLatest(actions.createCustomer.toString(), takeCreateCustomer)
}

export function* takeCreateCustomer() {
    console.log('Starting fetch request to API')
    try {
        const fields = yield select(state => state.customer.form.fields)
        const customers = yield select(state => state.customer.list.customers)

        const customer = {
            id: customers.length + 1,
            ...fields,
        }

        const result = [customer, ...customers]
        console.log(`result${result}`)
        yield save(result)

        yield put(actions.createCustomerResult(result))
    } catch (error) {
        console.log(error)
        yield put(actions.createCustomerError(error.toString()))
    }
}
