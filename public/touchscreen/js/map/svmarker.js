/*
** Copyright 2013 Google Inc.
**
** Licensed under the Apache License, Version 2.0 (the "License");
** you may not use this file except in compliance with the License.
** You may obtain a copy of the License at
**
**    http://www.apache.org/licenses/LICENSE-2.0
**
** Unless required by applicable law or agreed to in writing, software
** distributed under the License is distributed on an "AS IS" BASIS,
** WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
** See the License for the specific language governing permissions and
** limitations under the License.
*/

define(
['config', 'bigl', 'stapes', 'mergemaps'],
function(config, L, Stapes, XMaps) {

  var MIN_COVERAGE_ZOOM_LEVEL = 14;

  var SVMarkerModule = Stapes.subclass({
    constructor: function(map) {
			this.map = map;
			this.default_center = new XMaps.LatLng(
        config.touchscreen.default_center[XMaps.apiProvider - 1].lat,
        config.touchscreen.default_center[XMaps.apiProvider - 1].lng
      );

      this.markerOpt = {
        map: this.map,
        position: this.default_center,
        title: 'Street View',
        icon: 'icons/sv_sprite.png',
        clickable: false,
				enableClicking: false
      };
			
			this.sv_marker = new XMaps.Marker(this.markerOpt);			
			console.log(this.sv_marker);
			this.map.addOverlay(this.sv_marker); 
			//this.sv_marker.setMap(this.map);

    },
	
    move: function(latlng) {
      this.sv_marker.setPosition(latlng);
      this.sv_marker.setMap(this.map);
    },

    hide: function() {
     this.sv_marker.removeMap(this.map);
    }
  });

  return SVMarkerModule;
});
