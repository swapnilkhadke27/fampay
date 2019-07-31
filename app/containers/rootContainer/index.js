import React, {Component} from 'react';
import { SafeAreaView } from 'react-native';
import styles from './styles'
import NavigationRouter from '../../navigation'

export default class RootContainer extends Component {
    render(){
        return(
            <SafeAreaView style={styles.applicationView}>
                <NavigationRouter/>
            </SafeAreaView>
        )
    }
}