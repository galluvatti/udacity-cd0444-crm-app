import {SafeAreaView} from 'react-native';
import List from "../../features/customer/List";
import {useListCustomers} from "../../features/customer/hooks";

const ListCustomerByRegionScreen = ({route}) => {
    const {regionId} = route.params
    const customers = useListCustomers()
    return (
        <SafeAreaView>
            <List customers={customers.filter(c => c.region === regionId)}/>
        </SafeAreaView>
    );
}
export default ListCustomerByRegionScreen