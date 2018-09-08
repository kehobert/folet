import React, {Component} from 'react'
import { View, Platform, Text, ScrollView, ActivityIndicator} from 'react-native'

class MainScreen extends Component {

    constructor(props){
        super(props)
        this.state = {
            isLoading: true,
            dataSource: null
        }
    }

    static navigationOptions = () => ({ 
        title: 'Folet'
    })

    loadData(){
        const url = "http://192.168.100.9/folet_rest/menu.json"
        return fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    dataSource: responseJson
                })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render(){
        this.loadData()
        if (this.state.isLoading) {
            return (
                <View>
                    <ActivityIndicator></ActivityIndicator>
                </View>
            )
        }else{
            let menuData = this.state.dataSource.map((val, key) => {
                return <View key={key}>
                            <Text>{val.menu_name}</Text>
                        </View>
            })  

            return(
                <View style={{flex:1, backgroundColor:'#ddd'}}>
                    <ScrollView>{menuData}</ScrollView>
                </View>
            )
        }
    }

}

const styles = {
    image:{
        marginTop: 20,
        marginLeft: 10,
        width: 40,
        height: 40
    }
}

export default MainScreen;