import React, { Component } from 'react'
import { Scene, Router, Stack } from 'react-native-router-flux'

// Scene
import InputPin from '../containers/inputPin'
import Home from '../containers/home'

class NavigationRouter extends Component {

    componentDidMount(){
        console.log('router loaded...')
    }

    render () {
        return (
            <Router>
                <Stack key="root" >
                    <Scene initial key="inputPin" component={InputPin} title="InputPin" hideNavBar />
                    <Scene key="home" component={Home} title="Home" hideNavBar />
                </Stack>
            </Router>
        )
    }
}

export default NavigationRouter;