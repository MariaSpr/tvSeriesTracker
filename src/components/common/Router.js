import React from "react";
import {StackNavigator, DrawerNavigator, SwitchNavigator, NavigationActions} from "react-navigation";

import Login from "../../screens/LoginScreen";
import Main from "../../screens/MainScreen";
import Profile from "../../screens/ProfileScreen";
import Details from "../../screens/DetailsScreen";
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

export const ShowDetails = StackNavigator({
    Details: {
        screen: Details,
        navigationOptions: {
            title: 'Show Details',
            }
        }
    }, {
        headerMode: 'none',
    }
);


export const createRootNavigator = (loggedInUser = false) => {
    return SwitchNavigator(
        {
            LoggedIn: {
                screen: LoggedIn
            },
            LoggedOut: {
                screen: LoggedOut
            }
        },
        {
            initialRouteName: loggedInUser ? "LoggedIn" : "LoggedOut"
        }
    );
};