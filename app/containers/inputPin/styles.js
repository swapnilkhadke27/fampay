import { StyleSheet, Platform, Dimensions } from 'react-native'

export default StyleSheet.create({
    container: {
      flex: 1,
      padding : 16,
      backgroundColor: 'white'
    },
    header_image : {
      height : 300,
      width : Dimensions.get('window').width * 0.94,
      resizeMode: 'contain',
    },
    header_container:{
      flex: 1,
      backgroundColor: 'red'
    },
    header_text:{
      fontSize: 30,
      fontWeight: '600'
    },
    body_container:{
      flex: 2
    }
})