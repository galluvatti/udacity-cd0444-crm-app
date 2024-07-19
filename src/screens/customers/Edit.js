import {SafeAreaView, ScrollView} from 'react-native';
import Edit from "../../features/customer/Edit";

const EditScreen = ({route}) => {
    const {customerID} = route.params
    return (
        <SafeAreaView>
            <ScrollView>
                <Edit customerID={customerID}/>
            </ScrollView>
        </SafeAreaView>
    );
}
export default EditScreen