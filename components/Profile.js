/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    FlatList,
} from 'react-native';


const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        image: "https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg",
        description: "First item",
        nbreLikes: "5",
        nbreComments: "20",

    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        image: "https://image.shutterstock.com/image-photo/white-transparent-leaf-on-mirror-260nw-1029171697.jpg",
        description: 'Second Item',
        nbreLikes: "5",
        nbreComments: "20",
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        image: "https://image.freepik.com/photos-gratuite/image-du-cerveau-humain_99433-298.jpg",
        description: 'Third Item',
        nbreLikes: "5",
        nbreComments: "20",
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        image: "https://image.freepik.com/photos-gratuite/image-du-cerveau-humain_99433-298.jpg",
        description: 'Third Item',
        nbreLikes: "5",
        nbreComments: "20",
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        image: "https://image.freepik.com/photos-gratuite/image-du-cerveau-humain_99433-298.jpg",
        description: 'Third Item',
        nbreLikes: "5",
        nbreComments: "20",
    },
];

const Profile= ({route}) => {
    const { name, lastName,email } = route.params;
      //const [login, setLogin] = useState("")
    const renderItem = ({ item }) => (
        <View style={{ width: "100%", }}>
            <Image source={{ uri: item.image }} style={{ width: "100%", height: 100 }}></Image>
            <View style={
                {
                    justifyContent: "center",
                    alignItems: "center",
                }
            }>
                <Text style={{ padding: 10, }} >{item.description}</Text>
            </View>
            <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 10,
            }}>

                <Text >Nombre de J'aime: {item.nbreComments}</Text>
                <Text >Nombre de commentaires: {item.nbreLikes}</Text>
            </View>


        </View>

    );

    return (

        <View style={
            {
                flex: 1,
            }
        }>
            <View style={
                {
                    flex: 1,

                    flexDirection: 'row',

                }
            }>

                <View style={
                    {
                        flex: 1,

                        justifyContent: "center",
                        alignItems: "center",

                    }
                }>
                    <Image style={
                        {
                            width: 100,
                            height: 100,
                            borderRadius: 50,

                        }
                    } source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png" }}></Image>

                </View>
                <View style={
                    {
                        flex: 1,
                        justifyContent: "center",
                    }
                }>
                   <Text>Nom:  {JSON.stringify(name)}</Text>
                    <Text>Prenom:  {JSON.stringify(lastName)}</Text>
                    <Text>Email:  {JSON.stringify(email)}</Text>
                </View>
            </View>

            <View style={
                {
                    flex: 3,
                }

            }>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
        </View>

    );
};

export default Profile;
