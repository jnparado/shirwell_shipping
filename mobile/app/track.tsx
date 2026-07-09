import TrackingMap from "@/components/TrackingMap";
import { colors } from "@/constants/theme";
import { Link, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function TrackScreen() {
  const params = useLocalSearchParams<{ code?: string }>();
  const initialCode = typeof params.code === "string" ? params.code : "";
  const [inputCode, setInputCode] = useState(initialCode);
  const [activeCode, setActiveCode] = useState(initialCode);

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Track Your Shipment</Text>
      <Text style={styles.subtitle}>Enter your tracking code to view live location on the map.</Text>

      <View style={styles.form}>
        <Text style={styles.label}>Tracking Code</Text>
        <TextInput
          value={inputCode}
          onChangeText={setInputCode}
          placeholder="Enter tracking code"
          placeholderTextColor={colors.muted}
          style={styles.input}
          autoCapitalize="characters"
        />
        <Pressable
          style={styles.button}
          onPress={() => setActiveCode(inputCode.trim())}
        >
          <Text style={styles.buttonText}>Track Shipment</Text>
        </Pressable>
      </View>

      {activeCode ? <TrackingMap code={activeCode} /> : null}

      <Link href="/" style={styles.backLink}>
        <Text style={styles.backLinkText}>← Back to homepage</Text>
      </Link>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.surface,
  },
  content: {
    padding: 20,
    gap: 12,
  },
  title: {
    fontSize: 28,
    fontWeight: "800",
    color: colors.gold,
  },
  subtitle: {
    color: colors.muted,
    fontSize: 15,
  },
  form: {
    gap: 8,
    marginTop: 8,
  },
  label: {
    fontWeight: "600",
    color: colors.foreground,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.background,
    paddingHorizontal: 14,
    paddingVertical: 14,
    color: colors.foreground,
  },
  button: {
    backgroundColor: colors.goldBright,
    borderWidth: 1,
    borderColor: colors.goldBright,
    paddingVertical: 14,
    alignItems: "center",
  },
  buttonText: {
    color: colors.foreground,
    fontWeight: "800",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  backLink: {
    marginTop: 12,
    alignSelf: "center",
  },
  backLinkText: {
    color: colors.gold,
    fontWeight: "700",
  },
});
