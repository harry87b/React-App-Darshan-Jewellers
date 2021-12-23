import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { Title, Caption, Drawer, Avatar } from "react-native-paper";
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
//import { Icon } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import auth from '@react-native-firebase/auth';
export default function DrawerContent(props) {
    const user = auth().currentUser;
    const [active, setActive] = useState('Bangles');
    const list = [
        { label: "Necklace", icon: 'life-ring', collection: 'Necklace' },
        { label: "Braclets", icon: 'ra', collection: 'Bracelet' },
        { label: "Bangles", icon: 'circle-o', collection: 'Bangles' },
        { label: "Chain", icon: 'chain', collection: 'Chain' },
        { label: "Rings", icon: 'circle-o-notch', collection: 'Rings' },
        { label: "Lockets", icon: 'mercury', collection: 'Lockets' },
    ]
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <DrawerContentScrollView {...props}>
                    <Drawer.Section >
                        <DrawerItem
                            label="More Products"
                            style={styles.sectionTitle}
                            labelStyle={{ fontWeight: "900", fontSize: 16, color: "black" }}
                        />
                        {list.map(item =>
                            <DrawerItem
                                style={styles.section}
                                key={item.label}
                                label={item.label}
                                labelStyle={{ fontWeight: "600", fontSize: 15, color: item.label === active ? "#808080" : "#000" }}
                                // icon={({ color, size }) => (<Icon name={item.icon} type="ionicon" color="black" size={30} />)}
                                onPress={() => {
                                    props.navigation.navigate("Item", { collection: item.collection })
                                    setActive(item.label)
                                }}
                            />
                        )}
                    </Drawer.Section>
                </DrawerContentScrollView>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    topsec: {
        flexDirection: "row",
        padding: 10
    },
    sectionTitle: {
        fontSize: 20,
        backgroundColor: '#fff',
        elevation: 5
    },
})
{/*
<Drawer.Section>
<DrawerItem
icon={({ color, size }) => (<Icon name="sign-out" color={color} size={size} />)}
label="Logout"
onPress={() => auth().signOut()}
/>
</Drawer.Section> 

<View style={styles.topsec}>
<TouchableOpacity onPress={() => props.navigation.navigate('Profile')}>
<Avatar.Image source={{ uri: "https://scontent.fluh1-2.fna.fbcdn.net/v/t1.6435-9/120345824_1841196109355300_3787663625662150373_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=84a396&_nc_ohc=KTkDQxehzq4AX_xYGps&_nc_ht=scontent.fluh1-2.fna&oh=00_AT_Qe9ITlQxqH4cMXYX1_nWnIrDuG5bbRi08mbEUBtCdvw&oe=61E46052" }} />
</TouchableOpacity>
<View style={styles.caption}>
<Title>{user?.displayName ?user.displayName : 'username'}</Title>
<Caption>{user?.email ?user.email: 'email'}</Caption>
</View>
</View> 
*/}