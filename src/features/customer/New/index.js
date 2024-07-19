import Form from "../common/Form";
import {useCreateCustomerStatus, useCreateCustomer} from "../hooks";

const New = () => {
   const {onSubmit} = useCreateCustomer()
   const status = useCreateCustomerStatus()
   return (
       <Form onSubmit={onSubmit} customerID={null} status={status}></Form>
   )
}

export default New