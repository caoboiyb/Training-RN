import React, { PureComponent } from 'react';
import {
    StyleSheet,
    Text,
    ScrollView,
    Button
} from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail'

class AlbumList extends PureComponent {
    state = {
        albums: []
    }

    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({ albums: response.data }))
    }

    _renderAlbums = () => {
        return this.state.albums.map(album =>
            <AlbumDetail key={album.title} album={album} />)
    }

    render() {
        return (
            <ScrollView>
                {this._renderAlbums()}
            </ScrollView>
        );
    }
}

export default AlbumList;