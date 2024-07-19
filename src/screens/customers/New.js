import {SafeAreaView, ScrollView} from 'react-native';
import New from "../../features/customer/New";

export default function NewScreen() {
    return (
        <SafeAreaView>
            <ScrollView>
                <New/>
            </ScrollView>
        </SafeAreaView>
    );
}