import {createSlice} from '@reduxjs/toolkit'
import {ERROR, PENDING, REQUESTING, SUCCESS} from "../../utils/common";

const name = 'customer'

const initialState = {
    list: {
        status: PENDING,
        customers: []
    },
    form: {
        fields: {
            first_name: null,
            last_name: null,
            active: false
        },
    },
    create: {
        status: PENDING,
    },
    edit: {
        status: PENDING,
    },
    delete: {
        status: PENDING,
    },
    load: {
        status: PENDING,
    },
    error: {
        message: ''
    }
}

const reducers = {
    createCustomer: (state) => {
        state.create.status = REQUESTING
    },
    createCustomerResult: (state, {payload}) => {
        state.create.status = SUCCESS
        state.list.customers = payload
    },
    createCustomerError: (state, {payload}) => {
        state.create.status = ERROR
        state.error.message = payload
    },
    createCustomerReset: (state) => {
        state.create = initialState.create
    },
    setFormField: (state, {payload}) => {
        const current = state.form.fields
        const {field, value} = payload

        const fields = {
            ...current,
            [field]: value,
        }

        state.form.fields = fields
    },
}

const slice = createSlice({
    name,
    initialState,
    reducers,
})

export const {
    createCustomer,
    createCustomerResult,
    createCustomerError,
    createCustomerReset,
    setFormField
} = slice.actions

export default slice.reducer