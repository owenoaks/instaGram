import { Text } from "react-native";
import { Redirect } from "expo-router";
//2:05:31
export default function Home() {
  return <Redirect href="/(tabs)" />;
}
//<Link href="/about">Go to About Page</Link>;
