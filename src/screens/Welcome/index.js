import {useNavigation} from '@react-navigation/native';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import welcomeStyles from './styles';
import Title from "../../component/Title";
import Button from "../../component/Button";

export default function Welcome() {
    const styles = StyleSheet.create(welcomeStyles())
    const {navigate} = useNavigation()

    function clearStorage() {

    }

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <Title text='Welcome to Customer Management Plus'/>
                    <Button
                        onPress={() => navigate('Welcome')}//FIXME
                        text='Click to continue'
                        disabled={false}
                    />
                    <Button
                        onPress={() => clearStorage()}
                        text='Clear Storage...'
                        disabled={false}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}