import {useNavigation} from '@react-navigation/native';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import welcomeStyles from './styles';
import Title from "../../component/Title";
import Button from "../../component/Button";
import {clear} from "../../features/customer/utilities/async_storage";

export default function Welcome() {
    const styles = StyleSheet.create(welcomeStyles())
    const {navigate} = useNavigation()

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Title text='Welcome to Customer Management Plus'/>

                <View style={styles.actions}>
                    <Button
                        onPress={() => navigate('List of Regions')}
                        text='Click to continue'
                        disabled={false}
                    />
                    <Button
                        onPress={() => clear()}
                        text='Clear Storage...'
                        disabled={false}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}