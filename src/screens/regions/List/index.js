import {useNavigation} from '@react-navigation/native';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import regionListStyles from './styles';
import Button from "../../../component/Button";
import {regions} from "../../../utils/common";

export default function Regions() {
    const styles = StyleSheet.create(regionListStyles())
    const {navigate} = useNavigation()

    const renderRegionButton = (region) => {
        return (
            <Button
                onPress={() => navigate('List Customers by Region', {regionId: region.item.id})}
                text={region.item.name}
                disabled={false}/>
        )
    }

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Button
                    onPress={() => navigate('Create Customer')}
                    text="Create Customer"
                    disabled={false}/>
                <Text>
                    OR
                </Text>
                <Text>
                    Select a Region:
                </Text>
                <FlatList data={regions} renderItem={renderRegionButton} keyExtractor={(region) => region.id}/>
            </View>
        </SafeAreaView>
    );
}