import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  Pressable,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  TouchableNativeFeedback,
  Platform,
  Alert,
} from "react-native";

export default function CoreComponentsExample() {
  const [count, setCount] = useState(0);

const handlePress = (label: string) => {
  Alert.alert("Pressed", `You pressed: ${label}`);
  setCount(count + 1);
};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contoh Core Components Button</Text>

      {/* A. Button */}
      <View style={styles.section}>
        <Text style={styles.subtitle}>1. Button</Text>
        <Button
          title="Tekan Aku"
          color="#1E88E5"
          onPress={() => handlePress("Button")}
          accessibilityLabel="Tombol contoh"
        />
      </View>

      {/* B. Pressable */}
      <View style={styles.section}>
        <Text style={styles.subtitle}>2. Pressable</Text>
        <Pressable
          onPress={() => handlePress("Pressable")}
          onLongPress={() => Alert.alert("Long Press", "Pressable ditahan")}
          style={({ pressed }) => [
            styles.pressable,
            { backgroundColor: pressed ? "#1565C0" : "#2196F3" },
          ]}
        >
          <Text style={styles.pressableText}>Tekan Aku</Text>
        </Pressable>
      </View>

      {/* C. TouchableOpacity */}
      <View style={styles.section}>
        <Text style={styles.subtitle}>3. TouchableOpacity</Text>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => handlePress("TouchableOpacity")}
          style={styles.touchable}
        >
          <Text style={styles.touchText}>Opacity Effect</Text>
        </TouchableOpacity>
      </View>

      {/* D. TouchableHighlight */}
      <View style={styles.section}>
        <Text style={styles.subtitle}>4. TouchableHighlight</Text>
        <TouchableHighlight
          activeOpacity={0.85}
          underlayColor="#1976D2"
          onPress={() => handlePress("TouchableHighlight")}
          style={styles.touchHighlight}
        >
          <Text style={styles.touchText}>Underlay Effect</Text>
        </TouchableHighlight>
      </View>

      {/* E. TouchableWithoutFeedback */}
      <View style={styles.section}>
        <Text style={styles.subtitle}>5. TouchableWithoutFeedback</Text>
        <TouchableWithoutFeedback
          onPress={() => handlePress("TouchableWithoutFeedback")}
        >
          <View style={styles.noFeedback}>
            <Text style={styles.touchText}>Tanpa Feedback Visual</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>

      {/* F. TouchableNativeFeedback */}
      {Platform.OS === "android" && (
        <View style={styles.section}>
          <Text style={styles.subtitle}>6. TouchableNativeFeedback</Text>
          <TouchableNativeFeedback
            background={TouchableNativeFeedback.Ripple("#90CAF9", false)}
            onPress={() => handlePress("TouchableNativeFeedback")}
          >
            <View style={styles.nativeFeedback}>
              <Text style={styles.touchText}>Ripple Android</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      )}

      <Text style={styles.counter}>Tombol ditekan: {count} kali</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ECEFF1",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#0D47A1",
  },
  section: {
    marginVertical: 10,
    width: "100%",
    alignItems: "center",
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
    color: "#1565C0",
  },
  pressable: {
    padding: 10,
    borderRadius: 8,
  },
  pressableText: {
    color: "#fff",
    fontWeight: "bold",
  },
  touchable: {
    backgroundColor: "#42A5F5",
    padding: 10,
    borderRadius: 8,
  },
  touchHighlight: {
    backgroundColor: "#64B5F6",
    padding: 10,
    borderRadius: 8,
  },
  noFeedback: {
    backgroundColor: "#BBDEFB",
    padding: 10,
    borderRadius: 8,
  },
  nativeFeedback: {
    backgroundColor: "#1E88E5",
    padding: 10,
    borderRadius: 8,
  },
  touchText: {
    color: "#fff",
    fontWeight: "bold",
  },
  counter: {
    marginTop: 25,
    fontSize: 16,
    fontWeight: "600",
    color: "#0D47A1",
  },
});