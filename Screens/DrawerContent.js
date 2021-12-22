import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { Title, Caption, Drawer, Avatar } from "react-native-paper";
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Icon } from 'react-native-elements';
import auth from '@react-native-firebase/auth';
export default function DrawerContent(props) 
{
    const user=auth().currentUser
    const list=[
        {label:"Braclets",icon:'home',collection:'Bracelet'},
        { label: "Bangles", icon: 'home', collection: 'Bangles' },
        { label: "Chain", icon: 'home', collection: 'Chain' },
        { label: "Necklace", icon: 'home', collection: 'Necklace' },
        { label: "Rings", icon: 'home', collection: 'Rings' },
        { label: "Lockets", icon: 'home', collection: 'Lockets' },
    ]
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <DrawerContentScrollView {...props}>
                    <View style={styles.topsec}>
                        <TouchableOpacity onPress={() => props.navigation.navigate('Profile')}>
                            <Avatar.Image source={{ uri: "https://scontent.fluh1-2.fna.fbcdn.net/v/t1.6435-9/120345824_1841196109355300_3787663625662150373_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=84a396&_nc_ohc=KTkDQxehzq4AX_xYGps&_nc_ht=scontent.fluh1-2.fna&oh=00_AT_Qe9ITlQxqH4cMXYX1_nWnIrDuG5bbRi08mbEUBtCdvw&oe=61E46052" }} />
                        </TouchableOpacity>
                        <View style={styles.caption}>
                            <Title>{user?.displayName ?user.displayName : 'username'}</Title>
                            <Caption>{user?.email ?user.email: 'email'}</Caption>
                        </View>
                    </View>

                    <Drawer.Section>
                        {list.map(item => <DrawerItem
                        key={item.label}
                            label={item.label}
                            icon={({ color, size }) => (<Icon name={item.icon} type="ionicon" color={color} size={size} />)}
                            onPress={() => { props.navigation.navigate("Item",{collection:item.collection}) }}
                        />)}
                       
                        
                    </Drawer.Section>

                </DrawerContentScrollView>
                <Drawer.Section>
                    <DrawerItem
                        icon={({ color, size }) => (<Icon name="exit-to-app" color={color} size={size} />)}
                        label="Logout"
                        onPress={() => auth().signOut()}
                    />
                </Drawer.Section>

            </View>


        </View>

    )
}

const styles = StyleSheet.create({
    topsec: {
        flexDirection: "row",
        padding: 10

    },
    caption: {
        marginLeft: 20
    }
})
