import React, {Component} from 'react'
import { View, Platform, Text, ScrollView, ActivityIndicator, Button} from 'react-native'
import PopupDialog, {SlideAnimation} from 'react-native-popup-dialog';

const slideAnimation = new SlideAnimation({
    slideFrom: 'bottom',
});

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
                return <View key={key} style={styles.listContainer}>
                            <Text>{val.menu_name}</Text>
                            <Button
                                title="Press"
                                onPress={() => {
                                    this.popupDialog.show();
                                }} 
                            />
                        </View>
            })  

            return(
                <View style={{flex:1, backgroundColor:'#ddd'}}>
                    <ScrollView>{menuData}</ScrollView>

                    <PopupDialog ref={(popupDialog) => { this.popupDialog = popupDialog; }} style={styles.popUpContainer} dialogAnimation={slideAnimation}>
                        <View>
                        <Text>Hello</Text>
                        </View>
                    </PopupDialog>

                </View>
            )
        }
    }

}

const styles = {
    listContainer: {
        padding: 5
    },
    popUpContainer: {
        padding: 20
    }
}

export default MainScreen;