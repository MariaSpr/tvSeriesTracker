import React, { Component } from 'react';
import {StyleSheet, View, ScrollView, Image} from 'react-native';
import { List, ListItem, Text, Thumbnail, Body, Left } from 'native-base';
import axios from 'axios';
import ShowDetail from './ShowDetail';
import {TMDB_URL, TMDB_IMG_URL, TMDB_API_KEY} from './api';
import InfiniteScroll from 'react-native-infinite-scroll';


class ShowList extends Component{
    state = {shows: [], page: 1};

    componentWillMount(){
        axios.get(TMDB_URL+'tv/popular'+TMDB_API_KEY)
            .then(res => {this.setState({shows: res.data.results});
            console.log(res.data.results);
            })
            .catch(err => {console.log(err)})

        //Load more pages
        var pageCount = this.state.page;

        if(pageCount <= 5) {
            pageCount++;
            console.log(pageCount);
            this.setState({page: pageCount});

            axios.get(TMDB_URL+'tv/popular'+TMDB_API_KEY+"&page="+pageCount)
                .then(res => {this.setState({shows: this.state.shows.concat(res.data.results)});
                    console.log(res.data.results);
                    console.log(this.state.shows);
                })
                .catch(err => {console.log(err)})
        }

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