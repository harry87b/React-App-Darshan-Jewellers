import React, { useState } from 'react'
import { StyleSheet,  View } from 'react-native'
import {Title,Caption, Drawer, Avatar} from "react-native-paper";
import { DrawerContentScrollView,DrawerItem } from '@react-navigation/drawer';
import { Icon } from 'react-native-elements';

export default function DrawerContent(props) 
{
    return (
        <View style={{flex:1}}>
            
                  <View style={{flex:1}}>
                     <DrawerContentScrollView {...props}>
                   <View style={styles.topsec}>
                        <Avatar.Image source={{ uri: "https://scontent.fluh1-2.fna.fbcdn.net/v/t1.6435-9/120345824_1841196109355300_3787663625662150373_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=84a396&_nc_ohc=KTkDQxehzq4AX_xYGps&_nc_ht=scontent.fluh1-2.fna&oh=00_AT_Qe9ITlQxqH4cMXYX1_nWnIrDuG5bbRi08mbEUBtCdvw&oe=61E46052" }} />
                      <View style={styles.caption}>
                            <Title>Harry</Title>
                            <Caption>harry@example.com </Caption>
                      </View>
                   </View>
                    <Drawer.Section> 
                    <DrawerItem
                            label="Home"
                            icon={({ color, size }) => (<Icon name="home" type="ionicon" color={color} size={size} />)}
                            onPress={()=>{props.navigation.navigate("Item")}}
                        />
                        <DrawerItem
                            label="Products"
                            icon={({ color, size }) => (<Icon name="md-pricetag" type="ionicon" color={color} size={size} />)}
                            onPress={() => { props.navigation.navigate("Item") }}
                        />
                        <DrawerItem
                            label="AboutUs"
                            icon={({ color, size }) => (<Icon name="newspaper" type="ionicon" color={color} size={size} />)}
                            onPress={() => { props.navigation.navigate("Item") }}
                        />
                    </Drawer.Section>
                     
                      
                    </DrawerContentScrollView>
                    <Drawer.Section>
                    <DrawerItem
                        icon={({ color, size }) => (<Icon name="exit-to-app" color={color} size={size} />)}
                        label="Sign Out"
                        onPress={()=>{props.navigation.replace("Signin")}}
                      
                    />
                    </Drawer.Section>
            
                  </View>
            

        </View>
      
    )
}

const styles = StyleSheet.create({
    topsec:{
        flexDirection:"row",
        padding:10

    },
    caption:{
        marginLeft:20
    }
})
