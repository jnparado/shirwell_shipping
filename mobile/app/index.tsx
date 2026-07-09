import { colors } from "@/constants/theme";
import { siteConfig } from "@/lib/site";
import { Link, router } from "expo-router";
import { useState } from "react";
import {
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function HomeScreen() {
  const [trackingCode, setTrackingCode] = useState("");

  function handleTrack() {
    if (!trackingCode.trim()) return;
    router.push({ pathname: "/track", params: { code: trackingCode.trim() } });
  }

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <ImageBackground
        source={require("@/assets/hero-background.png")}
        style={styles.hero}
        imageStyle={styles.heroImage}
      >
        <View style={styles.heroOverlay} />
        <View style={styles.heroInner}>
          <View style={styles.redLine} />
          <Text style={styles.title}>Fast Delivery Service</Text>
          <Text style={styles.subtitle}>
            Cost effective logistic solutions across Australia. Domestic, international, and
            e-commerce delivery with complete flexibility.
          </Text>

          <View style={styles.trackCard}>
            <Text style={styles.trackLabel}>Enter Tracking Code</Text>
            <TextInput
              value={trackingCode}
              onChangeText={setTrackingCode}
              placeholder="Tracking Code"
              placeholderTextColor="rgba(255,255,255,0.6)"
              style={styles.input}
              autoCapitalize="characters"
            />
            <Pressable style={styles.trackButton} onPress={handleTrack}>
              <Text style={styles.trackButtonText}>Track Shipment</Text>
            </Pressable>
          </View>

          <View style={styles.actions}>
            <Link href="/track" asChild>
              <Pressable style={styles.outlineButton}>
                <Text style={styles.outlineButtonText}>Track</Text>
              </Pressable>
            </Link>
            <Link href="/login" asChild>
              <Pressable style={styles.outlineButton}>
                <Text style={styles.outlineButtonText}>Login</Text>
              </Pressable>
            </Link>
            <Link href="/admin" asChild>
              <Pressable style={styles.solidButton}>
                <Text style={styles.solidButtonText}>Admin</Text>
              </Pressable>
            </Link>
          </View>
        </View>
      </ImageBackground>

      <View style={styles.aboutSection}>
        <Text style={styles.aboutLabel}>About Us</Text>
        <Text style={styles.aboutTitle}>
          {siteConfig.name}, founded in 2019, belongs to a distinguished class of logistic
          companies with a clear defined market path in Australia.
        </Text>
        <Text style={styles.aboutBody}>
          With scores of local branches and a robust global network, we provide domestic intra
          and inter-state express delivery services. Our footprints are also clearly visible in
          the areas of freight forwarding and e-commerce logistics.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.surface,
  },
  content: {
    paddingBottom: 32,
  },
  hero: {
    minHeight: 560,
    justifyContent: "flex-end",
  },
  heroImage: {
    resizeMode: "cover",
  },
  heroOverlay: {
    ...StyleSheet.absoluteFill,
    backgroundColor: "rgba(0,0,0,0.58)",
  },
  heroInner: {
    padding: 20,
    gap: 12,
  },
  redLine: {
    width: 56,
    height: 3,
    backgroundColor: colors.brandRed,
  },
  title: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "800",
    maxWidth: 320,
  },
  subtitle: {
    color: "#fff",
    fontSize: 15,
    lineHeight: 22,
    maxWidth: 360,
  },
  trackCard: {
    marginTop: 8,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.25)",
    backgroundColor: "rgba(255,255,255,0.1)",
    padding: 16,
    gap: 12,
  },
  trackLabel: {
    color: "#fff",
    fontSize: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.2)",
    backgroundColor: "rgba(255,255,255,0.2)",
    color: "#fff",
    paddingHorizontal: 14,
    paddingVertical: 14,
  },
  trackButton: {
    backgroundColor: colors.goldBright,
    borderWidth: 1,
    borderColor: colors.goldBright,
    paddingVertical: 14,
    alignItems: "center",
  },
  trackButtonText: {
    color: colors.foreground,
    fontWeight: "800",
    letterSpacing: 1,
    textTransform: "uppercase",
  },
  actions: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginTop: 4,
  },
  outlineButton: {
    borderWidth: 2,
    borderColor: colors.goldBright,
    backgroundColor: colors.headerSurface,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 12,
  },
  outlineButtonText: {
    color: colors.goldBright,
    fontWeight: "800",
    textTransform: "uppercase",
  },
  solidButton: {
    borderWidth: 2,
    borderColor: colors.goldBright,
    backgroundColor: colors.goldBright,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 12,
  },
  solidButtonText: {
    color: colors.foreground,
    fontWeight: "800",
    textTransform: "uppercase",
  },
  aboutSection: {
    backgroundColor: colors.brandRed,
    padding: 24,
    gap: 12,
  },
  aboutLabel: {
    color: "#fff",
    fontWeight: "800",
    letterSpacing: 2,
    textTransform: "uppercase",
    fontSize: 12,
  },
  aboutTitle: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "800",
    lineHeight: 30,
  },
  aboutBody: {
    color: "rgba(255,255,255,0.95)",
    fontSize: 15,
    lineHeight: 22,
  },
});
