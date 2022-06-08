import { useState, useEffect } from 'react';
import { Container } from '../../components/Container';
import { useSelector, useDispatch } from 'react-redux';
import InteractiveMap, { Marker, Popup } from 'react-map-gl';
import { changeUserLocation } from '../../store/user';
import { addMarker } from '../../store/markers';

import style from './Map.module.css';
import 'mapbox-gl/dist/mapbox-gl.css';

const MAP_TOKEN =
  'pk.eyJ1IjoidmVuaWtlZWUiLCJhIjoiY2w0NXJlaHQyMDBsdTNpbW9oN2c4eXh4aiJ9.PYLcpGTcBR8Qo2N9Gur43w';
const MAP_STYLE = 'mapbox://styles/mapbox/streets-v9';

export const Map = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupCoords, setPopupCoords] = useState([0, 0]);
  const userLocation = useSelector((state) => state.user.location);
  const markers = useSelector((state) => state.markers);
  const dispatch = useDispatch();

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const handleMapClick = (event) => {
    const { lngLat } = event;
    const { lng, lat } = lngLat;
    setPopupCoords([lng, lat]);
    setIsPopupOpen(true);
  };

  const handleMarkerDrug = (event) => {
    const { lngLat } = event;
    const { lng, lat } = lngLat;
    dispatch(changeUserLocation([lng, lat]));
  };

  const handleAddMarker = () => {
    const [lng, lat] = popupCoords;
    console.log(lng, lat);
    dispatch(
      addMarker({
        coords: [lng, lat],
      })
    );
    closePopup();
  };

  useEffect(() => {
    if (userLocation) return;

    navigator.geolocation.getCurrentPosition((event) => {
      const { coords } = event;
      const { longitude, latitude } = coords;

      dispatch(changeUserLocation([longitude, latitude]));
    });
  }, [userLocation, dispatch]);

  return (
    <section className={style.wrapper}>
      <Container>
        <div className={style.content}>
          <div className={style.markers}>markers</div>
          <div className={style.map}>
            {userLocation && (
              <InteractiveMap
                reuseMap
                reuseMaps
                width="100%"
                height="100%"
                onClick={handleMapClick}
                initialViewState={{
                  longitude: userLocation[0],
                  latitude: userLocation[1],
                  zoom: 12,
                }}
                mapboxAccessToken={MAP_TOKEN}
                mapStyle={MAP_STYLE}
              >
                <Marker
                  draggable
                  captureClick={true}
                  longitude={userLocation[0]}
                  latitude={userLocation[1]}
                  anchor="bottom"
                  onDrag={handleMarkerDrug}
                />

                {markers.map((marker) => (
                  <Marker
                    key={`${marker.coords[0]}${marker.coords[1]}`}
                    longitude={marker.coords[0]}
                    latitude={marker.coords[1]}
                    anchor="bottom"
                    onDrag={handleMarkerDrug}
                  />
                ))}

                {isPopupOpen && (
                  <Popup
                    latitude={popupCoords[1]}
                    longitude={popupCoords[0]}
                    onClose={closePopup}
                    closeOnClick={false}
                  >
                    <button onClick={handleAddMarker}>Add location</button>
                  </Popup>
                )}
              </InteractiveMap>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Map;
