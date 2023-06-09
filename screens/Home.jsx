import { useState } from "react";
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from "react-native";
import { globalStyles } from '../styles/global';

export default function Home({ navigation }){
    const [reviews, setReviews] = useState([
        { title: 'Zelda, Breath of the Wild', rating: 5, body: 'lorem ipsum', key: '1'},
        { title: 'Pokémon Fire Red', rating: 4, body: 'lorem ipsum', key: '2'},
        { title: 'Final Fantasy', rating: 3, body: 'lorem ipsum', key: '3'},
    ])

    return(
        <View style={globalStyles.container}>
            <FlatList 
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                        <Text style={globalStyles.titleText}>{ item.title }</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}
