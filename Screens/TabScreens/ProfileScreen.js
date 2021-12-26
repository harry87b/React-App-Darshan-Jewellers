import React, { useEffect, useState } from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { Button, Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import auth from '@react-native-firebase/auth';
import { DataTable } from 'react-native-paper';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function ProfileScreen({ navigation }) {
    const [user, setUser] = useState([])

    useEffect(() => {
        setUser(auth().currentUser)
    }, [navigation, user])
    console.log(user)
    return (
        <SafeAreaView style={styles.container}>
        <ScrollView>
        <View style={{width: '100%',alignItems: 'center',flex:1}}>
            <Icon name='user-circle' size={100} color={"#fff"} style={{ margin: '10%' }} />
            <View style={styles.tableView}>
                <DataTable style={{justifyContent: 'space-evenly'}}>
                    <DataTable.Row style={{width:'100%',flexDirection: 'row',height:80}}>
                        <DataTable.Cell style={{...styles.cell}}>Name</DataTable.Cell>
                        <DataTable.Cell style={{...styles.cell}}>90</DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row style={{width:'100%',flexDirection: 'row',height:80}}>
                        <DataTable.Cell style={{...styles.cell}}>Email</DataTable.Cell>
                        <DataTable.Cell style={{...styles.cell}}>67</DataTable.Cell>
                    </DataTable.Row>
                </DataTable>
            </View>
            <Button mode='contained' labelStyle={{ color: '#C38F3A', fontSize: 20, fontWeight: 'bold' }} style={{ margin: 20, width: '70%', height: 50, alignItems: 'center', justifyContent: 'center' }} theme={{ colors: { primary: '#fff' } }} onPress={() => auth().signOut().then(navigation.replace('Splash'))}>Logout</Button>
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C38F3A',
    },
    heading: {
        fontSize: 24,
        color: "#000",
        marginBottom: 12
    },
    cell:{
        marginHorizontal:20,
    },
    tableView: {
        width: '90%',
        height: 400,
        backgroundColor: '#fff',
        borderRadius: 30
    },
    text: {
        color: '#000'
    }
})
