import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';
import colors from '../assets/colors/colors';
import Feather from 'react-native-vector-icons/Feather';
import activitiesData from '../assets/data/activitiesData'
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import profile from '../assets/images/person.png'

Feather.loadFont();

const Home = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ScrollView>

                {/* Header */}
                <SafeAreaView>
                    <View style={styles.menuWrapper}>
                        <Feather name="menu" size={32} color={colors.black} style={styles.menuIcon}/>
                        <Image source={profile} style={styles.profileImage}/>
                    </View>
                </SafeAreaView>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        color: colors.white
    },
    menuWrapper: {
        marginHorizontal: 20,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    profileImage: {
        width: 52,
        height: 52
    },
})

export default Home