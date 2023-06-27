import React, { useState } from 'react'
import { ImageBackground } from 'react-native'
import * as Progress from 'react-native-progress'
interface photo_props{
    url:string
    className:string
}
const Photo = (props:photo_props) => {
    const {url,className} = props;
    const [state,set_state] = useState(true)
    return (
        <ImageBackground
            className={className}
            source={{uri:url}}
            onLoadEnd={()=> set_state(false)}
        >
            {state ? (
                  <Progress.CircleSnail thickness={10} size={70} color={"#0bb3b2"} />
            ):(null)}
        </ImageBackground>
    )
}

export { Photo }
