import React from "react";
import {StackNavigator, DrawerNavigator, SwitchNavigator, NavigationActions} from "react-navigation";

import Login from "../../screens/LoginScreen";
import Main from "../../screens/MainScreen";
import Profile from "../../screens/ProfileScreen";
import DrawerMenu from "../../components/common/DrawerMenu";
import SideBar from "../../components/common/SideBar";


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
    },
    {
        contentComponent: SideBar,
        drawerWidth: 200
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