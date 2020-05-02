import React, { useContext } from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';


const IndexScreen = () => {
    const { state, addBlogPost } = useContext(BlogContext);

    return (
        <View>
            <Text>IndexScreen</Text>
            <Button onPress={addBlogPost} title="Add post" />
            <FlatList 
            keyExtractor={blogPost => blogPost.title}
            renderItem={({ item }) => {
                return (<View style={styles.rowStyle}>
                    <Text style={styles.titleStyle}>
                        {item.title}
                    </Text>
                    <Feather name="trash" style={styles.iconStyle} />
                </View>);
            }}
            data={state}/>
        </View>
    )
};

const styles = StyleSheet.create({
    rowStyle: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderColor: "gray",
        borderBottomWidth: 1
    },
    titleStyle: {
        fontSize: 18
    },
    iconStyle: {
        fontSize: 20
    }
});

export default IndexScreen;