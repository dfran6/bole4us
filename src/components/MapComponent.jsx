import React, { useEffect, useRef } from 'react';

const MapComponent = ({ center = [3.3792, 6.5244], zoom = 12, markers = [] }) => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const markersRef = useRef([]);

  // 1. Initialize map only once
  useEffect(() => {
    if (map.current) return;

    if (window.maplibregl) {
      map.current = new window.maplibregl.Map({
        container: mapContainer.current,
        style: 'https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json',
        center: center,
        zoom: zoom,
      });

      map.current.addControl(new window.maplibregl.NavigationControl(), 'top-right');
    }

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []); // Empty dependency array ensures initialization happens only once

  // 2. Update center smoothly when prop changes
  useEffect(() => {
    if (map.current) {
      map.current.flyTo({
        center: center,
        essential: true,
        duration: 2000
      });
    }
  }, [center]);

  // 3. Manage Markers: Remove old ones and add new ones
  useEffect(() => {
    if (!map.current || !window.maplibregl) return;

    // Remove existing markers
    markersRef.current.forEach(m => m.remove());
    markersRef.current = [];

    // Add new markers
    markers.forEach(marker => {
      const el = document.createElement('div');
      el.className = 'marker';
      el.style.width = '32px';
      el.style.height = '32px';
      el.style.backgroundColor = marker.color || '#FF4D00';
      el.style.borderRadius = '50%';
      el.style.border = '4px solid white';
      el.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
      el.style.cursor = 'pointer';

      const newMarker = new window.maplibregl.Marker(el)
        .setLngLat(marker.lngLat)
        .setPopup(new window.maplibregl.Popup({ offset: 25 }).setHTML(`
          <div style="padding: 10px; font-family: sans-serif;">
            <b style="color: #FF4D00; text-transform: uppercase; font-size: 12px;">${marker.title}</b>
            <p style="margin: 5px 0 0; font-size: 10px; color: #666;">${marker.desc}</p>
          </div>
        `))
        .addTo(map.current);
      
      markersRef.current.push(newMarker);
    });
  }, [markers]);

  return (
    <div className="w-full h-full relative overflow-hidden rounded-[2.5rem] shadow-inner bg-zinc-100">
      <div ref={mapContainer} className="absolute inset-0" />
      
      {/* Overlay UI for aesthetic */}
      <div className="absolute bottom-6 left-6 z-10 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl border border-zinc-100 shadow-xl flex items-center gap-3">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-[10px] font-black uppercase tracking-widest text-zinc-900">MapLibre Active Signal</span>
      </div>
    </div>
  );
};

export default MapComponent;
