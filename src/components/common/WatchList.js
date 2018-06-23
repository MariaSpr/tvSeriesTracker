import React, { Component } from 'react';
import {StyleSheet, View, ScrollView, Image} from 'react-native';
import ShowDetail from './ShowDetail';
import firebase from 'firebase';


class ShowList extends Component{
    state = {shows: []};

    componentWillMount(){
        const {currentUser} = firebase.auth();
        var firebaseRef = firebase.database().ref(`users/${currentUser.uid}/watchlist`);
        var placeHolderShows = [];
        firebaseRef.on('value', (data)=>{
            data.forEach(function(childData){
                placeHolderShows.push(childData.val());

            })
            //reset state after update watchlist...
            this.setState({shows: []});
            this.setState({shows: placeHolderShows});
            //reset placeholder
            placeHolderShows = [];

        });





    }

    renderShows() {
        return this.state.shows.map((show,index) =>
            <ShowDetail key={index} show={show} />
        );
    }

    render(){
        console.log(this.state.shows);
        return (
            <ScrollView>
                {this.renderShows()}
            </ScrollView>
        );
    }
}

export default ShowList;