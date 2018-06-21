import React, { Component } from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import { Container, Header, Content, Footer, Text, Card, CardItem, Body, Button, Form, Item, Label, Input, Spinner } from 'native-base';


const ShowDetail = (props) => {
    return (
        <View>
            <Text>{props.show['original_name']}</Text>
        </View>
    );

};

export default ShowDetail;