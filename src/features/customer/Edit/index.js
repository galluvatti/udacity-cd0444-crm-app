import React from 'react'
import {useEditCustomer} from "../hooks";
import Form from "../common/Form";

const Edit = ({customerID}) => {
    const {status, onSubmit} = useEditCustomer(customerID)
    return (
        <Form onSubmit={onSubmit} customerID={customerID} status={status}></Form>
    )
}

export default Edit