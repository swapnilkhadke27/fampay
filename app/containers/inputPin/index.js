import React, {Component} from 'react';
import { View, Text, TextInput, Image, AsyncStorage, Alert } from 'react-native';
import styles from './styles'
import Images from '../../helpers/Images'
import PinComponent from '../../components/pinComponent';
import Constants from '../../helpers/Constants'
import { Actions } from 'react-native-router-flux';

export default class InputPin extends Component {

    constructor(props){
        super(props);
        this.state={
            header : "",
            subheader : "",
            description : "",
            pin_desc : "",
            welcome_text : "", 
            button_text : "", 
            isVerify : false,
            isExisting : false,
            pin : 0
        }
    }

    componentDidMount(){
        this._retrieveData()
    }

    _retrieveData = async() => {
        AsyncStorage.getItem(Constants.pin)
        .then((response) => {
            if(response){
                this.setState({
                    header : "FamPay",
                    subheader : "",
                    description : "Please enter the PIN to continue",
                    pin_desc : "",
                    button_text : "Unlock",
                    welcome_text : "welcomes you!",
                    isExisting: true,
                    pin : response
                })
            } else {
                this.setState({
                    header : "FamPay",
                    subheader : "SET PIN",
                    description : "Your Safety is the first priority",
                    pin_desc : "This PIN will be used to authenticate and login in the app",
                    button_text : "Proceed",
                    welcome_text : "",
                })
            }
        }).catch(error => {
            console.log(error)
        })
    }

    storeData = async(value) => {
        AsyncStorage.setItem(Constants.pin, String(value))
        .then(() => {
            this.setState({
                header : "FamPay",
                subheader : "VERIFY PIN",
                description : "Your Safety is the first priority",
                pin_desc : "This PIN will be used to authenticate and login in the app",
                button_text : "Proceed",
                welcome_text : "",
                pin : value,
                isVerify: true
            })
        }).catch(error => {
            console.log(error)
        })
    }

    showAlert = () => {
        Alert.alert(
            'Wrong pin',
            'Please enter correct pin',
        [
            {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        {cancelable: false},
        );
    }

    gotoHome = (value) => {
        if(this.state.pin == value){
            Actions.home()
        } else {
            this.showAlert()
        }
    }

    renderPinComponent = () => {
        return(
            <PinComponent
                header={this.state.header}
                subheader={this.state.subheader}
                description={this.state.description}
                pin_desc={this.state.pin_desc}
                welcome_text={this.state.welcome_text}
                button_text={this.state.button_text}
                isVerify={this.state.isVerify}
                submit={this.state.isExisting ? this.gotoHome : (this.state.isVerify ? this.gotoHome : this.storeData)}
            />
        )
    }

    render(){
        return(
            <View style={styles.container}>
                {this.renderPinComponent()}
            </View>
        )
    }
}