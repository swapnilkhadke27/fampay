import { StyleSheet, Platform } from 'react-native'

export default StyleSheet.create({
    applicationView: {
      flex: 1,
      backgroundColor: 'white',
      paddingTop : Platform.OS == 'android' ? 30 : 0
    },
})