import React from 'react'
import {Button, FlatList, Text, View} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import Row from './row'

const List = ({customers}) => {
    const { navigate } = useNavigation()
    return (
        <View>
            <Text>Customer List</Text>

            {(customers && customers.length > 0) ? (
                <FlatList
                    data={customers || []}
                    renderItem={(props) => <Row {...props} />}
                    keyExtractor={(item) => item.id}
                />
            ) : (
                <>
                    <Text>{'No Customers'}</Text>
                    <Button title={'Create Customer'} onPress={() => {
                        navigate('Create Customer')
                    }} />
                </>
            )}
        </View>
    )
}

export default List