import React from 'react';
import { asset, Model, View, StyleSheet } from 'react-vr';

export default class Penholder extends React.Component {
    render() {
        return (
            <View>
                <Model
                    source={{
                        obj: asset('/penholder/Table_Set_obj.obj'),
                        mtl: asset('//penholder/Table_Set_obj.mtl')
                    }}
                    style={{
                        transform: [
                            { translate: [-3.25, 0.70, -4] },
                            { scale: 0.001 },
                            { rotateX: -90 }
                        ]
                    }}
                />
                <Model
                    source={{
                        obj: asset('/penholder/Table_Set_obj.obj'),
                        mtl: asset('//penholder/Table_Set_obj.mtl')
                    }}
                    style={{
                        transform: [
                            { translate: [5.25, 0.70, -4] },
                            { scale: 0.001 },
                            { rotateX: -90 }
                        ]
                    }}
                />
                <Model
                    source={{
                        obj: asset('/penholder/Table_Set_obj.obj'),
                        mtl: asset('//penholder/Table_Set_obj.mtl')
                    }}
                    style={{
                        transform: [
                            { translate: [10.50, 0.65, -4] }, //=) 
                            { scale: 0.001 },
                            { rotateX: -90 }
                        ]
                    }}
                />
                <Model
                    source={{
                        obj: asset('/penholder/Table_Set_obj.obj'),
                        mtl: asset('//penholder/Table_Set_obj.mtl')
                    }}
                    style={{
                        
                        transform: [
                            { translate: [16.50, 0.2, 4] }, //added one more for the office after the previous one. 
                            { scale: 0.001 },
                            { rotateX: -90 }
                        ]
                    }}
                />
            </View>
        );
    }
};


//all medias goes into the static_assets
