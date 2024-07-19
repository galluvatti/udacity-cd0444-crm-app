import React from 'react'
import {Text, TouchableOpacity, View} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {regions} from "../../../utils/common";

const Row = ({item}) => {
    const {navigate} = useNavigation()

    return (
        <TouchableOpacity onPress={() => navigate('Edit Customer', {customerID: item.id})}>
            <View key={item.id} style={{borderWidth: 1, padding: 10, margin: 10}}>
                <Text key={'id'}>ID: {item.id}</Text>
                <Text key={'fn'}>First Name: {item.first_name}</Text>
                <Text key={'ln'}>Last Name: {item.last_name}</Text>
                <Text key={'ac'}>Active: {item.active ? "Yes" : "No"}</Text>
                <Text key={'rg'}>Region: {regions.find(r => r.id === item.region).name}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Row