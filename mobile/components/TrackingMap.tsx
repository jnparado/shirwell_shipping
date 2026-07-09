import { colors } from "@/constants/theme";
import { getTrackingSnapshot, type TrackingSnapshot } from "@/lib/tracking";
import { useEffect, useRef, useState } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import MapView, { Marker, Polyline, PROVIDER_GOOGLE } from "react-native-maps";

type TrackingMapProps = {
  code: string;
};

export default function TrackingMap({ code }: TrackingMapProps) {
  const [snapshot, setSnapshot] = useState<TrackingSnapshot | null>(null);
  const mapRef = useRef<MapView>(null);

  useEffect(() => {
    if (!code) return;

    function refresh() {
      setSnapshot(getTrackingSnapshot(code));
    }

    refresh();
    const interval = setInterval(refresh, 5000);
    return () => clearInterval(interval);
  }, [code]);

  useEffect(() => {
    if (!snapshot || !mapRef.current) return;

    const coordinates = snapshot.route.waypoints.map((point) => ({
      latitude: point.lat,
      longitude: point.lng,
    }));

    mapRef.current.fitToCoordinates(coordinates, {
      edgePadding: { top: 60, right: 60, bottom: 60, left: 60 },
      animated: true,
    });
  }, [snapshot?.code]);

  if (!snapshot) {
    return (
      <View style={styles.loadingBox}>
        <Text style={styles.loadingText}>Loading live map…</Text>
      </View>
    );
  }

  const routeCoords = snapshot.route.waypoints.map((point) => ({
    latitude: point.lat,
    longitude: point.lng,
  }));

  return (
    <View style={styles.container}>
      <View style={styles.statsGrid}>
        <Stat label="Status" value={snapshot.status} highlight />
        <Stat label="Progress" value={`${snapshot.progress}%`} />
        <Stat label="Speed" value={`${snapshot.speedKmh} km/h`} />
        <Stat label="ETA" value={snapshot.eta} />
      </View>

      <View style={styles.mapWrap}>
        <MapView
          ref={mapRef}
          provider={Platform.OS === "android" ? PROVIDER_GOOGLE : undefined}
          style={styles.map}
          initialRegion={{
            latitude: snapshot.current.lat,
            longitude: snapshot.current.lng,
            latitudeDelta: 8,
            longitudeDelta: 8,
          }}
        >
          <Polyline coordinates={routeCoords} strokeColor={colors.goldBright} strokeWidth={4} />
          <Marker
            coordinate={{
              latitude: snapshot.route.origin.lat,
              longitude: snapshot.route.origin.lng,
            }}
            title={snapshot.route.origin.name}
            pinColor="green"
          />
          <Marker
            coordinate={{
              latitude: snapshot.route.destination.lat,
              longitude: snapshot.route.destination.lng,
            }}
            title={snapshot.route.destination.name}
            pinColor="red"
          />
          <Marker
            coordinate={{
              latitude: snapshot.current.lat,
              longitude: snapshot.current.lng,
            }}
            title="Live shipment"
            description="📦 Current location"
          />
        </MapView>
      </View>

      <Text style={styles.routeText}>
        {snapshot.route.origin.name} → {snapshot.route.destination.name}
      </Text>
      <Text style={styles.updatedText}>
        Live updates every 5s · Last update{" "}
        {new Date(snapshot.updatedAt).toLocaleTimeString("en-AU")}
      </Text>
    </View>
  );
}

function Stat({
  label,
  value,
  highlight = false,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <View style={styles.stat}>
      <Text style={styles.statLabel}>{label}</Text>
      <Text style={[styles.statValue, highlight && styles.statHighlight]}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 12,
  },
  loadingBox: {
    height: 420,
    borderRadius: 12,
    backgroundColor: colors.headerBg,
    alignItems: "center",
    justifyContent: "center",
  },
  loadingText: {
    color: colors.goldBright,
    fontSize: 16,
  },
  statsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    backgroundColor: colors.background,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 16,
  },
  stat: {
    width: "47%",
  },
  statLabel: {
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 1,
    color: colors.muted,
    textTransform: "uppercase",
  },
  statValue: {
    marginTop: 4,
    fontSize: 16,
    fontWeight: "700",
    color: colors.foreground,
  },
  statHighlight: {
    color: colors.gold,
  },
  mapWrap: {
    borderRadius: 12,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "rgba(255, 215, 0, 0.4)",
  },
  map: {
    height: 420,
    width: "100%",
  },
  routeText: {
    color: colors.foreground,
    fontWeight: "600",
  },
  updatedText: {
    color: colors.muted,
    fontSize: 12,
  },
});
