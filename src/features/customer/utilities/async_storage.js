import AsyncStorage from '@react-native-async-storage/async-storage'

const key = 'CUSTOMERS'

export const save = async (customers) => {
    console.log('SAVING TO ASYNC STORAGE ::: ', key, customers)
    const serialized = JSON.stringify(customers)
    return await AsyncStorage.setItem(key, serialized)
}

export const load = async () => {
    console.log('LOADING FROM ASYNC STORAGE ::: ', key)
    const raw = await AsyncStorage.getItem(key)
    return raw? JSON.parse(raw) : []
}

export const clear = async () => {
    return await AsyncStorage.clear()
}