import { StyleSheet, Platform, Dimensions } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default StyleSheet.create({
    container: {
      flex: 1
    },
    welcome_text_header:{
      fontSize: 20,
      fontWeight: '600'
    },
    welcome_text_subheader:{
      fontSize: 16,
      paddingTop: 8
    },
    welcome_inner_container:{
      justifyContent: 'center'
    },
    welcome_style:{
      backgroundColor: 'white',
      flexDirection: 'row'
    },
    image_style:{
      height: 60,
      width: 60,
      borderRadius: 30,
      borderWidth: 0.5,
      marginRight: 20,
      borderColor: Colors.grey
    },
    app_card_style:{
      backgroundColor: Colors.skyblue,
      marginTop: 12,
    },
    card_style:{
      padding: 24,
      shadowColor: Colors.grey,
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 2,
      borderRadius: 8,
    },
    app_card_text_header:{
      fontSize: 20,
      fontWeight: '600',
      color: Colors.white
    },
    app_card_text_subheader:{
      fontSize: 16,
      color: Colors.white,
      marginTop: 12,
    },
    reset_style:{
      backgroundColor: Colors.black,
      padding: 12,
      alignItems: 'center',
      marginTop: 12,
    },
    reset_text:{
      color: Colors.white,
      fontWeight: '600',
      fontSize: 20,
    },
    lock_style:{
      backgroundColor: Colors.black,
      padding: 12,
      alignItems: 'center',
      alignSelf: 'center',
      marginTop: 24,
      width : '40%'
    },
    inner_container:{
      flex: 1.5,
      padding : 24,
    },
    remaining_container:{
      flex: 0.5,
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
      backgroundColor:Colors.white
    }
})