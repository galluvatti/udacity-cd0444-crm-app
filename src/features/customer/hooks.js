import {useDispatch, useSelector} from 'react-redux'
import * as actions from './reducers'
import {useEffect} from "react";

export const useUpdateFields = (customerID) => {
    const dispatch = useDispatch()
    let fields;
    console.log("useUpdateFields" + customerID)
    if (customerID) {
        fields = useSelector(state => state.customer.list.customers.find(c => c.id === customerID))
    }
    else {
        fields = useSelector(state => state.customer.form.fields)
    }
    return {
        fields,
        setFormField: (field, value) => {
            console.log(`Updating field ${field} to ${value}`)
            return dispatch(actions.setFormField({ field, value }))
        },
    }
}

export const useNewCustomer = () => {
    const dispatch = useDispatch()

    return {
        onSubmit: () => {
            console.log('Dispatching CREATE_CUSTOMER action')
            dispatch(actions.createCustomer())
        }
    }
}

export const useEditCustomer = (customerID) => {
    const dispatch = useDispatch()

    return {
        onSubmit: () => {
            console.log('Dispatching EDIT_CUSTOMER action')
            dispatch(actions.editCustomer(customerID))
        }
    }
}

export const useListCustomers = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(actions.loadCustomers())
    }, [dispatch])

    return useSelector(state => state.customer.list.customers)
}