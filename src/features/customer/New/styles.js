const welcomeStyles = () => {
    return {
        container: {
            backgroundColor: '#FFF',
            alignItems: 'center',
            height: '100%',
            width: '100%',
            padding: 30,
        },
        input: {
            width: 200,
            borderWidth: 1,
            borderColor: 'black',
            borderRadius: 4,
            padding: 15,
            marginTop: 15,
            marginBottom: 15
        },
        dropdown: {
           margin: 16,
           height: 50,
            width:200,
           borderBottomColor: 'gray',
           borderBottomWidth: 0.5,
           placeholderStyle: {
               fontSize: 16,
           },
            selectedTextStyle: {
                fontSize: 16,
            },
            inputSearchStyle: {
                height: 40,
                fontSize: 16,
            },
        },
        actions: {
            padding: 50
        }
    }
};

export default welcomeStyles