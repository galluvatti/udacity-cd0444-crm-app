import Form from "../common/Form";
import {useNewCustomer} from "../hooks";

const New = () => {
   const {onSubmit} = useNewCustomer()
   return (
       <Form onSubmit={onSubmit} customerID={null}></Form>
   )
}

export default New