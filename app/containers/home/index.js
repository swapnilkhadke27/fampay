import React, {Component} from 'react';
import { View, Text, Image, TouchableOpacity, AsyncStorage } from 'react-native';
import styles from './styles'
import Images from '../../helpers/Images';
import { Actions } from 'react-native-router-flux';

export default class Home extends Component {

    render_welcomeCard = () => {
        return(
            <TouchableOpacity style={[styles.welcome_style, styles.card_style]}>
                <Image source={Images.avatar} style={styles.image_style}/>
                <View style={styles.welcome_inner_container}>
                    <Text style={styles.welcome_text_header}>Hello Swapnil!</Text>
                    <Text style={styles.welcome_text_subheader}>Today is movie day!</Text>
                </View>
            </TouchableOpacity>
        )
    }

    renderAppCard = () => {
        return(
            <TouchableOpacity style={[styles.app_card_style, styles.card_style]}>
                <View style={styles.welcome_inner_container}>
                    <Text style={styles.app_card_text_header}>You are in the app</Text>
                    <Text style={styles.app_card_text_subheader}>You can unlock/lock this app whenever you want</Text>
                </View>
            </TouchableOpacity>
        )
    }

    clearStack = async() => {
        await AsyncStorage.clear()
        Actions.reset("inputPin")
    }

    renderResetPin = () => {
        return(
            <TouchableOpacity style={[styles.card_style, styles.reset_style]} onPress={() => {this.clearStack()}}>
                <Text style={styles.reset_text}>Reset PIN</Text>
            </TouchableOpacity>
        )
    }

    renderlock = () => {
        return(
            <TouchableOpacity style={[styles.card_style, styles.lock_style]} onPress={() => {Actions.reset("inputPin")}}>
                <Text style={styles.reset_text}>Lock</Text>
            </TouchableOpacity>
        )
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.inner_container}>
                    {this.render_welcomeCard()}
                    {this.renderAppCard()}
                    {this.renderResetPin()}
                </View>
                <View style={styles.remaining_container}>
                    {this.renderlock()}
                </View>
            </View>
        )
    }
}