import { Stack } from "expo-router";
import "../../global.css";

export default function RootLayout() {
  return <Stack screenOptions={{ headerShown: false }} />;
}

//_layout file to Share ui Elements and Logic between multiple screens
//and its going to wrap every screen on pur Apllications
//The layout simply asking what to render? whether its <Tabs /> <Slot /> etc..
//and if its <Stack /> then youre going to render and actual Navigator,  i mean if its index.tsx about.tsx etc...

//Slot -is like children, take everything an render it here in _layout
//import { Slot }from 'expo-router
