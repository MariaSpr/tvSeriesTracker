import React, { Component } from "react";
import {
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";

import { NavigationActions } from "react-navigation";

class DrawerMenu extends Component {
    navigate(route) {
        return this.props.navigation.dispatch(
            NavigationActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({ routeName: `${route}` })]
            })
        );
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.menuItem}
                    onPress={() =>
                        this.navigate("Main", { isStatusBarHidden: false })}
                >
                    <Text style={styles.menuItemText}>Main</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.menuItem}
                    onPress={() => this.navigate("Profile", { isStatusBarHidden: false })}
                >
                    <Text style={styles.menuItemText}>Profile</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 100
    },
    menuItem: {
        padding: 10,
        justifyContent: "center",
        backgroundColor: "rgba(12, 12, 12, 0.2)",
        marginBottom: 2
    },
    menuItemText: {
        fontSize: 20
    }
});

DrawerMenu.defaultProps = {};

DrawerMenu.propTypes = {};

export default DrawerMenu;