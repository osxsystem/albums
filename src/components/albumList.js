import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './albumDetail';

class AlbumList extends Component {
    constructor(props) {
        super(props);
        this.state = { albums: [] };
    }
    componentDidMount() {
        axios.get('http://reactapis.local/api/albums')
            .then(response => this.setState({ albums: response.data }))
            .catch(function (error) {
                console.log(error);
            }); 
    }

    renderAlbums() {
        const { albums } = this.state;
        if (typeof albums.data !== 'undefined') {
            return albums.data.map(album => 
                <AlbumDetail key={album.id} record={album} />
            );
        }
    }

    render() {
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}

export default AlbumList;
