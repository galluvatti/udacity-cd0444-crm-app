import {Keyboard, Text, View} from "react-native";
import Button from "../../../component/Button";
import * as Notifications from "expo-notifications";
import {useEffect} from "react";
import {useNavigation} from "@react-navigation/native";


const ContactCustomer = () => {
    const {navigate} = useNavigation()

    const onSubmit = (seconds) => {
        Keyboard.dismiss()
        const schedulingOptions = {
            content: {
                title: 'Time to contact a customer!',
                body: 'Open the app to look for a customer to contact',
                sound: true,
                priority: Notifications.AndroidNotificationPriority.HIGH,
                color: 'blue'
            },
            trigger: {
                seconds: seconds,
            },
        }
        // Notifications show only when app is not active.
        // (ie. another app being used or device's screen is locked)
        Notifications.scheduleNotificationAsync(
            schedulingOptions,
        )
    }

    const askNotification = async () => {
        // We need to ask for Notification permissions for ios devices
        const {status} = await Notifications.requestPermissionsAsync()
        if (status === 'granted')
            console.log('Notification permissions granted.')
    }

    const handleNotification = () => {
        console.warn('Your notification ran, but won`t show up in the app!')
    }

    useEffect(() => {
        askNotification()
        const listener = Notifications.addNotificationReceivedListener(handleNotification)
        return () => listener.remove()
    }, []);

    return (
        <View>
            <Text>Press the button to schedule a reminder to contact a customer</Text>
            <Button onPress={() => onSubmit(5)} text='Schedule'/>
        </View>
    )
}

export default ContactCustomer