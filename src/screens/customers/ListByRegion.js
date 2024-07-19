import {SafeAreaView} from 'react-native';
import List from "../../features/customer/List";
import {useListCustomers} from "../../features/customer/hooks";

const ListCustomerByRegionScreen = ({route}) => {
    const {regionId} = route.params
    const customers = useListCustomers()
    const customerByRegion = customers.filter(c => c.region === regionId)
    return (
        <SafeAreaView>
            <List customers={customerByRegion}/>
        </SafeAreaView>
    );
}
export default ListCustomerByRegionScreen