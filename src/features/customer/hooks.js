import {useDispatch, useSelector} from 'react-redux'
import * as actions from './reducers'
import {useEffect} from "react";
import {INPROGRESS, PENDING} from "../../utils/common";

export const useUpdateFields = (customerID) => {
    const dispatch = useDispatch()
    const status = useSelector(state => state.customer.edit.status)
    const fields = useSelector(state => state.customer.form.fields)

    console.log("customer ID ::: ", customerID, status, customerID && status !== INPROGRESS)

    useEffect(() => {
        if (customerID && status === PENDING) {
            dispatch(actions.setForm(customerID))
        }
    }, [customerID, status])

    return {
        fields,
        setFormField: (field, value) => {
            console.log(`Updating field ${field} to ${value}`)

            dispatch(actions.setFormField({ field, value }))
        },
    }
}

export const useCreateCustomer = () => {
    const dispatch = useDispatch()

    return {
        onSubmit: () => {
            console.log('Dispatching CREATE_CUSTOMER action')
            dispatch(actions.createCustomer())
        }
    }
}

export const useCreateCustomerStatus = () => {
    return useSelector(state => state.customer.create.status)
}

export const useEditCustomer = (customerID) => {
    const dispatch = useDispatch()
    const status = useEditCustomerStatus()

    return {
        status,
        onSubmit: () => {
            console.log('Dispatching EDIT_CUSTOMER action')
            dispatch(actions.editCustomer(customerID))
        }
    }
}

export const useEditCustomerStatus = () => {
    return useSelector(state => state.customer.edit.status)
}

export const useListCustomers = () => {
    return useSelector(state => state.customer.list.customers)
}