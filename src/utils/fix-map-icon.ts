import L from 'leaflet';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconRetine from 'leaflet/dist/images/marker-icon-2x.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl:icon,
    iconRetinaUrl:iconRetine,
    shadowUrl:iconShadow,
    iconSize:[25,41],
    iconAnchor:[12,41],
});

L.Marker.prototype.options.icon = DefaultIcon;
