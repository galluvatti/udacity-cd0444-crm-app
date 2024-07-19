import React from 'react'
import {useEditCustomer} from "../hooks";
import Form from "../common/Form";

const Edit = ({customerID}) => {
    const onSubmit = useEditCustomer(customerID)
    return (
        <Form onSubmit={onSubmit} customerID={customerID}></Form>
    )
}

export default Edit