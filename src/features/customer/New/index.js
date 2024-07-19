import formStyles from './styles';
import React, {useState} from 'react'
import {StyleSheet, Switch, Text, TextInput, View} from 'react-native';
import {useNewCustomer, useUpdateFields} from "../hooks";
import Title from "../../../component/Title";
import Button from "../../../component/Button";
import {Dropdown} from "react-native-element-dropdown";
import {regions} from "../../../utils/common";
import {useNavigation} from "@react-navigation/native";

const Form = () => {
    const navigation = useNavigation()
    const styles = StyleSheet.create(formStyles())
    const {fields, setFormField} = useUpdateFields()
    const {onSubmit} = useNewCustomer()
    const onSaveCustomer = ()=> {
        onSubmit()
        navigation.navigate("List of Regions")
    }
    const [regionValue, setRegionValue] = useState(null);

    const {
        first_name,
        last_name,
        active
    } = fields

    const onChange = (item) => {
        console.log(item)
        setRegionValue(item.id)
        setFormField('region', item.id)
    }

    return (
        <View style={styles.container}>
            <Title text={"New Customer"}></Title>
            <TextInput
                key={'first_name'}
                placeholder='First Name'
                value={first_name || ''}
                style={styles.input}
                onChangeText={v => setFormField('first_name', v)}
            />
            <TextInput
                key={'last_name'}
                placeholder='Last Name'
                value={last_name || ''}
                style={styles.input}
                onChangeText={v => setFormField('last_name', v)}
            />
            <Text>Active?</Text>
            <Switch
                trackColor={{ false: "grey", true: "blue" }}
                onValueChange={v => setFormField('active', v)}
                value={active}
            />
            <Text>Region:</Text>
            <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.dropdown.placeholderStyle}
                selectedTextStyle={styles.dropdown.selectedTextStyle}
                inputSearchStyle={styles.dropdown.inputSearchStyle}
                data={regions}
                placeholder={"Select a region..."}
                labelField={"name"}
                valueField={"id"}
                value={regionValue}
                onChange={onChange}
            />
            <Button text={"Save Customer"} onPress={onSaveCustomer}></Button>
        </View>
    )
}

export default Form