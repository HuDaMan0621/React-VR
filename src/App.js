import React from 'react';
import { asset, Pano, Text, View, AmbientLight, Sound, VrButton } from 'react-vr';
// import Primitives from './Primitives';
import Penholder from './Penholder';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            background: 'background.jpeg',
            sound: 'office.mp3',
            visible: true,
        };
    }
    changeScene(){
        this.setState({
            background: 'outside.jpeg',
            sound: 'birds.wav',
            visible: false
        });
    }
    renderItems(){
        if(this.state.visible === true) {
            return <Penholder />
        }
    }
    render() {
        return (
            <View>
                <AmbientLight intensity={2.5} />
                <Pano source={asset(this.state.background)} />
                {/* this is the component to create to the hello text */}
                <Sound
                    loop={true} //loop the sound, yes
                    volume={2.7}
                    source={{
                        mp3: asset(this.state.sound)
                    }}
                />
                <VrButton onClick={this.changeScene.bind(this)}>
                    <Text
                        style={{
                            backgroundColor: '#00ff00',
                            fontSize: 0.8,
                            fontWeight: '400',
                            paddingLeft: 0.2,
                            paddingRight: 0.2,
                            textAlign: 'center',
                            textAlignVertical: 'center',
                            transform: [{ translate: [-.75, 2, -14] }],
                        }}>
                        Welcome to DigitalCrafts
                    </Text>
                </VrButton>
                {/* <Penholder /> */}
                {this.renderItems()}
                {/* <Primitives /> */}
            </View>
        );
    }
};


//all medias goes into the static_assets
