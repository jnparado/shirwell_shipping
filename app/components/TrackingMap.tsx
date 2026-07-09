"use client";

import type { TrackingSnapshot } from "@/lib/tracking";
import {
  APIProvider,
  Map,
  Marker,
  useMap,
} from "@vis.gl/react-google-maps";
import { useEffect, useMemo, useState } from "react";

type TrackingMapProps = {
  code: string;
};

const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? "";

const darkMapStyles: google.maps.MapTypeStyle[] = [
  { elementType: "geometry", stylers: [{ color: "#1d1d1d" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#8a8a8a" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#1d1d1d" }] },
  { featureType: "road", elementType: "geometry", stylers: [{ color: "#2c2c2c" }] },
  { featureType: "water", elementType: "geometry", stylers: [{ color: "#0e0e0e" }] },
];

function RouteOverlay({ snapshot }: { snapshot: TrackingSnapshot }) {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    const path = snapshot.route.waypoints.map(
      (point) => ({ lat: point.lat, lng: point.lng }),
    );

    const routeLine = new google.maps.Polyline({
      path,
      strokeColor: "#ffd700",
      strokeOpacity: 0.9,
      strokeWeight: 4,
      map,
    });

    const bounds = new google.maps.LatLngBounds();
    path.forEach((point) => bounds.extend(point));
    map.fitBounds(bounds, 60);

    return () => {
      routeLine.setMap(null);
    };
  }, [map, snapshot.code, snapshot.route.waypoints]);

  return null;
}

function LiveShipmentMap({ snapshot }: { snapshot: TrackingSnapshot }) {
  const center = useMemo(
    () => ({ lat: snapshot.current.lat, lng: snapshot.current.lng }),
    [snapshot.current.lat, snapshot.current.lng],
  );

  return (
    <Map
      defaultCenter={center}
      defaultZoom={6}
      gestureHandling="greedy"
      disableDefaultUI={false}
      styles={darkMapStyles}
      mapTypeControl={false}
      streetViewControl={false}
      className="h-[420px] w-full sm:h-[480px]"
    >
      <RouteOverlay snapshot={snapshot} />

      <Marker
        position={{ lat: snapshot.route.origin.lat, lng: snapshot.route.origin.lng }}
        title={snapshot.route.origin.name}
        label={{ text: "A", color: "#ffffff", fontWeight: "bold" }}
      />

      <Marker
        position={{
          lat: snapshot.route.destination.lat,
          lng: snapshot.route.destination.lng,
        }}
        title={snapshot.route.destination.name}
        label={{ text: "B", color: "#ffffff", fontWeight: "bold" }}
      />

      <Marker position={center} title="Live shipment location" label="📦" />
    </Map>
  );
}

export default function TrackingMap({ code }: TrackingMapProps) {
  const [snapshot, setSnapshot] = useState<TrackingSnapshot | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!code) return;

    let cancelled = false;

    async function fetchLocation() {
      try {
        const response = await fetch(`/api/tracking/${encodeURIComponent(code)}`);
        if (!response.ok) throw new Error("Unable to load tracking data");
        const data = (await response.json()) as TrackingSnapshot;
        if (!cancelled) {
          setSnapshot(data);
          setError(null);
        }
      } catch {
        if (!cancelled) setError("Failed to refresh live location.");
      }
    }

    fetchLocation();
    const interval = setInterval(fetchLocation, 5000);
    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, [code]);

  if (!GOOGLE_MAPS_API_KEY) {
    return (
      <div className="mt-8 rounded-xl border border-border bg-white p-6 text-sm text-muted">
        Google Maps API key missing. Add{" "}
        <code className="text-foreground">NEXT_PUBLIC_GOOGLE_MAPS_API_KEY</code> to{" "}
        <code className="text-foreground">.env.local</code>
      </div>
    );
  }

  if (error && !snapshot) {
    return (
      <div className="mt-8 rounded-xl border border-border bg-white p-6 text-sm text-muted">
        {error}
      </div>
    );
  }

  if (!snapshot) {
    return (
      <div className="mt-8 flex h-[420px] items-center justify-center rounded-xl border border-border bg-[#0a0a0a] text-gold-bright">
        Loading live map…
      </div>
    );
  }

  return (
    <div className="mt-8 space-y-4">
      <div className="grid gap-4 rounded-xl border border-border bg-white p-5 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-muted">Status</p>
          <p className="mt-1 font-serif text-lg font-bold text-gold">{snapshot.status}</p>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-muted">Progress</p>
          <p className="mt-1 text-lg font-bold text-foreground">{snapshot.progress}%</p>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-muted">Speed</p>
          <p className="mt-1 text-lg font-bold text-foreground">{snapshot.speedKmh} km/h</p>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-muted">ETA</p>
          <p className="mt-1 text-lg font-bold text-foreground">{snapshot.eta}</p>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border-2 border-gold-bright/40 shadow-lg">
        <APIProvider apiKey={GOOGLE_MAPS_API_KEY}>
          <LiveShipmentMap snapshot={snapshot} />
        </APIProvider>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 text-sm text-muted">
        <p>
          <span className="font-semibold text-foreground">{snapshot.route.origin.name}</span>
          {" → "}
          <span className="font-semibold text-foreground">{snapshot.route.destination.name}</span>
        </p>
        <p className="text-xs">
          Live location updates every 5s · Last update{" "}
          {new Date(snapshot.updatedAt).toLocaleTimeString("en-AU")}
        </p>
      </div>

      {error && <p className="text-sm text-brand-red">{error}</p>}
    </div>
  );
}
