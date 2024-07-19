import { all, put, select, takeLatest, delay } from 'redux-saga/effects'
import * as actions from '../reducers'
import {save} from "../utilities/async_storage";

export function* watchEditCustomer() {
    yield takeLatest(actions.editCustomer.toString(), takeEditCustomer())
}

export function* takeEditCustomer(action) {
    console.log('Starting fetch request to API -- EDIT')
    const customerID = action.payload

    try {
        const fields = yield select(state => state.customer.form.fields)
        const customers = yield select(state => state.customer.list.customers)

        const result = customers.map(customer => {
            // if customer is not the one being updated, return it unchanged
            if (customer.id !== customerID) return customer

            // otherwise, customer is the one being updated
            // return the new fields instead of the old ones
            return fields
        })

        // pretend call to API
        yield delay(500)

        yield save(result)

        yield put(actions.editCustomerResult(result))
    } catch (error) {
        yield put(actions.editCustomerError(error.toString()))
    }
}
