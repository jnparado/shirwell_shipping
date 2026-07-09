import { colors } from "@/constants/theme";
import { siteConfig } from "@/lib/site";
import { Link, usePathname } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/track", label: "Track" },
  { href: "/login", label: "Login" },
  { href: "/admin", label: "Admin" },
] as const;

export default function Header() {
  const pathname = usePathname();

  return (
    <View style={styles.wrapper}>
      <View style={styles.row}>
        <Link href="/" asChild>
          <Pressable style={styles.logoBox}>
            <Image source={require("@/assets/logo-icon.png")} style={styles.logoImage} />
            <Text style={styles.logoText}>{siteConfig.name}</Text>
          </Pressable>
        </Link>
      </View>

      <View style={styles.navRow}>
        {navLinks.map((link) => {
          const active = pathname === link.href;
          return (
            <Link key={link.href} href={link.href} asChild>
              <Pressable style={[styles.navLink, active && styles.navLinkActive]}>
                <Text style={[styles.navText, active && styles.navTextActive]}>{link.label}</Text>
              </Pressable>
            </Link>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.headerBg,
    borderBottomWidth: 2,
    borderBottomColor: colors.goldBright,
    paddingTop: 48,
    paddingBottom: 12,
    paddingHorizontal: 16,
  },
  row: {
    marginBottom: 12,
  },
  logoBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    alignSelf: "flex-start",
    backgroundColor: colors.headerBg,
    borderWidth: 2,
    borderColor: colors.goldBright,
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  logoImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: colors.goldBright,
  },
  logoText: {
    color: colors.goldBright,
    fontSize: 18,
    fontWeight: "800",
  },
  navRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  navLink: {
    borderWidth: 1,
    borderColor: "transparent",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  navLinkActive: {
    borderColor: colors.goldBright,
  },
  navText: {
    color: colors.gold,
    fontWeight: "600",
    fontSize: 14,
  },
  navTextActive: {
    color: colors.goldBright,
  },
});
