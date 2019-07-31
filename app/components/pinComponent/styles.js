import { StyleSheet, Platform, Dimensions } from 'react-native'
import Fonts from '../../helpers/Fonts';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default StyleSheet.create({
    container: {
      flex: 1,
      padding : 16,
      backgroundColor: 'white'
    },
    header_container:{
        flex: 0.5
    },
    header_text:{
      fontSize: 30,
      fontWeight: '600',
    //   fontFamily: Fonts.regular
    },
    subheader_text:{
      fontSize: 22,
    //   fontFamily: Fonts.regular
    },
    welcome_text:{
        fontSize: 22,
        paddingTop: 8,
        fontWeight: '200',
    },
    desc_text:{
      fontSize: 16,
      marginTop : 30,
      fontWeight: '600',
    //   fontFamily: Fonts.regular
    },
    pin_desc_container:{
        marginTop : 24
    },
    pin_desc_text:{
        fontSize: 12,
        color: Colors.grey
    },
    body_container:{
      flexDirection: 'row',
      marginTop : 30,
    },
    input_container:{
        marginRight : 12
    },
    input_style:{
        width: 30,
        height: 40,
        fontSize: 24,
        justifyContent: 'center',
        textAlign: 'center',
        fontWeight: '800'
    },
    numeric_container:{
        margin: 12
    },
    cols_container_style:{
        margin: 12,
        paddingTop : 24,
        textAlign: 'left',
        flex: 1
    },
    col_style:{
        fontSize: 22,
        fontWeight: '800',
    },
    centerAlign:{
        textAlign: 'center'
    },
    leftAlign:{
        textAlign: 'left'
    },
    rightAlign: {
        textAlign: 'right'
    },
    row_style:{
        flexDirection: 'row'
    },
    mainContainer: {
        flex: 1
    },
    bodyContainer:{
        flex: 1
    },
    image_style:{
        height : 22,
        width : 22,
        alignSelf: 'flex-end'
    },
    button_container:{
        backgroundColor: Colors.light_grey,
        borderRadius : 8
    },
    text_container:{
        fontSize: 22,
        color: Colors.white,
        fontWeight: '600',
        padding : 8,
        textAlign: 'center'
    },
    flex_view:{
        flexDirection: 'row'
    },
    bottom_view:{
        height : 5,
        backgroundColor: Colors.grey
    }
})