const mapa =
  "https://upload.wikimedia.org/wikipedia/commons/5/53/Mapa-brasil-1824.png";

const MapaHTML = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <base target="_top" />
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <title>CRS.Simple example - Leaflet</title>

    <link
      rel="shortcut icon"
      type="image/x-icon"
      href="docs/images/favicon.ico"
    />

    <link
      rel="stylesheet"
      href="https://unpkg.com/leaflet@1.9.3/dist/leaflet.css"
      integrity="sha256-kLaT2GOSpHechhsozzB+flnD+zUyjE2LlfWPgU04xyI="
      crossorigin=""
    />
    <script
      src="https://unpkg.com/leaflet@1.9.3/dist/leaflet.js"
      integrity="sha256-WBkoXOwTeyKclOHuWtc+i2uENFpDZ9YPdf5Hf+D7ewM="
      crossorigin=""
    ></script>

    <style>
      html,
      body {
        height: 100%;
        margin: 0;
      }
      .leaflet-container {
        height: 400px;
        width: 600px;
        max-width: 100%;
        max-height: 100%;
      }
      #map {
        width: 100%;
        height: 100%;
      }
    </style>
  </head>
  <body>
    <div id="map"></div>
    <text-area id="lat"> </text-area>
    <text-area id="lng"></text-area>
    <script>
    const map = L.map("map", {
        crs: L.CRS.Simple,
        minZoom: -3,
      });
    
      const yx = L.latLng;
    
      function xy(x, y) {
        if (Array.isArray(x)) {
          // When doing xy([x, y]);
          return yx(x[1], x[0]);
        }
        return yx(y, x); // When doing xy(x, y);
      }
    
      // const bounds = [xy(-25, -26.5), xy(5189, 3674)];
      const bounds = [xy(-2640, -1830), xy(5189, 3674)];
      const image = L.imageOverlay(
        "https://i.imgur.com/fv8YrnD.png",
        bounds
      ).addTo(map);
    
      const sol = xy(2038.331624733145, 1303.0028990098588);
      const mizar = xy(41.6, 130.1);
      const kruegerZ = xy(13.4, 56.5);
      const deneb = xy(218.7, 8.3);
    
      const mSol = L.marker(sol).addTo(map).bindPopup("Sol");
      const mMizar = L.marker(mizar).addTo(map).bindPopup("Mizar");
      const mKruegerZ = L.marker(kruegerZ).addTo(map).bindPopup("Krueger-Z");
      const mDeneb = L.marker(deneb).addTo(map).bindPopup("Deneb");
    
      const travel = L.polyline([sol, deneb]).addTo(map);
    
      map.setView(xy(120, 70), 1);
    
      ///////////////////////////////////////////////////////
      var my_divicon = L.divIcon({
        className: "arrow_box",
      });
      var marker = L.marker([51.5, -0.09], {
        draggable: true,
      });
      function addToTextBox(lt, ln) {
        document.getElementById("lat").innerHTML = lt;
        document.getElementById("lng").innerHTML = ln;
      }
      marker.on("dragend", function (event) {
        //alert('drag ended');
        var marker = event.target;
        var location = marker.getLatLng();
        var lat = location.lat;
        var lon = location.lng;
        addToTextBox(lat, lon);
        //alert(lat);
        //retrieved the position
      });
    
      marker.addTo(map);
    </script>
  </body>
</html>

`;

const script = `console.log("olá, mundo")`;

export { MapaHTML, script };
