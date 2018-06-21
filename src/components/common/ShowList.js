import React, { Component } from 'react';
import {StyleSheet, View, ScrollView, Image} from 'react-native';
import { List, ListItem, Text, Thumbnail, Body, Left } from 'native-base';
import axios from 'axios';
import ShowDetail from './ShowDetail';
import {TMDB_URL, TMDB_IMG_URL, TMDB_API_KEY} from './api';
import firebase from 'firebase';


class ShowList extends Component{
    state = {shows: []};

    componentWillMount(){
        axios.get(TMDB_URL+'tv/popular'+TMDB_API_KEY)
            .then(res => {this.setState({shows: res.data.results});
            console.log(res.data.results);
            })
            .catch(err => {console.log(err)})

    }

    renderShows() {
        return this.state.shows.map((show,index) =>
            <ShowDetail key={index} show={show} />
        );
    }

    render(){
        return (
            <ScrollView>
                {this.renderShows()}
            </ScrollView>
        );
    }
}

export default ShowList;