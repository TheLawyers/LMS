
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import React, { Component } from 'react';

const MapLocation = ReactMapboxGl({
 accessToken: "pk.eyJ1IjoiZ290aGFtZXkiLCJhIjoiY2pxejRzMjVhMDlyZjQ1bGh4ZHdzaXkzMyJ9.3nRJUHgfnPtcOJvi9q06hw"
});
class Map extends Component {


 render() {

   return (
     <div className="mapContainer">
       <MapLocation
         style="mapbox://styles/mapbox/streets-v9"
         containerStyle={{
           height: "50vh",
           width: "50vw"
         }}>
           <Layer
             type="symbol"
             id="marker"
             layout={{ "icon-image": "marker-15" }}>
             <Feature coordinates={[46.70469633381731, 24.633948443770308]}/>
           </Layer>
       </MapLocation>
     </div>

   )
 }
}

export default Map;
