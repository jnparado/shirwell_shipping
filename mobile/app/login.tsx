import { colors } from "@/constants/theme";
import { Link } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

export default function LoginScreen() {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Customer Login</Text>
      <Text style={styles.subtitle}>Sign in to manage your shipments and account.</Text>

      <View style={styles.form}>
        <Text style={styles.label}>Email Address</Text>
        <TextInput
          keyboardType="email-address"
          autoCapitalize="none"
          style={styles.input}
          placeholder="you@example.com"
          placeholderTextColor={colors.muted}
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          secureTextEntry
          style={styles.input}
          placeholder="Password"
          placeholderTextColor={colors.muted}
        />

        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Sign In</Text>
        </Pressable>
      </View>

      <Link href="/" style={styles.backLink}>
        <Text style={styles.backLinkText}>← Back to homepage</Text>
      </Link>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.surface },
  content: { padding: 20, gap: 12 },
  title: { fontSize: 28, fontWeight: "800", color: colors.gold },
  subtitle: { color: colors.muted, fontSize: 15 },
  form: {
    marginTop: 8,
    gap: 12,
    backgroundColor: colors.background,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 20,
  },
  label: { fontWeight: "600", color: colors.foreground },
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: 14,
    paddingVertical: 12,
    color: colors.foreground,
  },
  button: {
    backgroundColor: colors.goldBright,
    paddingVertical: 14,
    alignItems: "center",
  },
  buttonText: {
    color: colors.foreground,
    fontWeight: "800",
    textTransform: "uppercase",
  },
  backLink: { marginTop: 12, alignSelf: "center" },
  backLinkText: { color: colors.gold, fontWeight: "700" },
});
