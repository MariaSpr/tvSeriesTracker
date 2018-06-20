import React from "react";
import {StackNavigator, DrawerNavigator, SwitchNavigator} from "react-navigation";

import Login from "../../screens/LoginScreen";
import Main from "../../screens/MainScreen";
import Profile from "../../screens/ProfileScreen";


export const LoggedOut = StackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            title: 'tvSeriesTracker',
        }
    }
});

export const LoggedIn = DrawerNavigator(
    {
        Main: {
            screen: Main,
            navigationOptions: {
                drawerLabel: 'Main',
            }
        },
        Profile: {
            screen: Profile,
            navigationOptions: {
                drawerLabel: "Profile",
            }
        }
    }
);

export const createRootNavigator = (signedIn = false) => {
    return SwitchNavigator(
        {
            SignedIn: {
                screen: SignedIn
            },
            SignedOut: {
                screen: SignedOut
            }
        },
        {
            initialRouteName: signedIn ? "SignedIn" : "SignedOut"
        }
    );
};