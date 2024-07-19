import {createSlice} from '@reduxjs/toolkit'
import {ERROR, PENDING, INPROGRESS, REQUESTING, SUCCESS} from "../../utils/common";

const name = 'customer'

const initialState = {
    form: {
        fields: {
            first_name: null,
            last_name: null,
            active: false,
            region: null
        },
    },
    create: {
        status: PENDING,
    },
    list: {
        status: PENDING,
        customers: []
    },
    edit: {
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
        state.form.fields = initialState.form.fields;
        state.create = initialState.create
    },
    createCustomerError: (state, {payload}) => {
        state.create.status = ERROR
        state.error.message = payload
        state.form.fields = initialState.form.fields;

    },
    loadCustomers: (state) => {
        state.load.status = REQUESTING
    },
    loadCustomersResult: (state, { payload }) => {
        state.load.status = SUCCESS
        state.list.customers = payload
    },
    loadCustomersError: (state, { payload }) => {
        state.load.status = ERROR
        state.error.message = payload
    },
    editCustomer: (state, { payload }) => {
        state.edit.status = REQUESTING
    },
    editCustomerResult: (state, { payload }) => {
        state.edit.status = SUCCESS
        state.list.customers = payload
        state.form.fields = initialState.form.fields;
        state.edit = initialState.edit
    },
    editCustomerError: (state, {payload}) => {
        state.edit.status = ERROR
        state.error.message = payload
        state.form.fields = initialState.form.fields
    },
    setForm: (state, { payload }) => {
        const customer = state.list.customers.find(c => c.id = payload)

        if (customer) {
            state.form.fields = customer
        } else {
            state.error.message = `could not find customer with id: ${payload}`
        }
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
    loadCustomers,
    loadCustomersResult,
    loadCustomersError,
    editCustomer,
    editCustomerResult,
    editCustomerError,
    setFormField,
    setForm
} = slice.actions

export default slice.reducer