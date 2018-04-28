import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

class AlbumList extends Component {
    
    constructor(props) {
        super(props);
        this.state = { albums: [] };
    }
    componentDidMount() {
        axios.get("http://reactapis.local/api/albums")
            .then(response => this.setState({ albums: response.data }))
            .catch(function (error) {
                console.log(error);
            }); 
    }

    renderAlbums() {
        const { albums } = this.state;
        console.log(albums.data);
        if (typeof albums.data !== "undefined") {
            return albums.data.map(album => 
            <Text key={album.id}>{album.title}</Text>
        );
        }
    }

    render() {
        return (
            <View>
                {this.renderAlbums()}
            </View>
        );
    }
}

export default AlbumList;
