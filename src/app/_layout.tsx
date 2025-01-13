import "../../global.css";
import "react-native-reanimated";

import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

import { Slot } from "expo-router";
import { SQLiteProvider } from "expo-sqlite";
import { AuthProvider } from "../contexts/authentication";
import { StatusBar } from "expo-status-bar";
import { createUserTable } from "@/db/initialize";
export { ErrorBoundary } from "expo-router";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const [loaded, error] = useFonts({
		SpaceMono: require("../../assets/fonts/SpaceMono-Regular.ttf"),
		...FontAwesome.font,
	});

	// Expo Router uses Error Boundaries to catch errors in the navigation tree.
	useEffect(() => {
		if (error) throw error;
	}, [error]);

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	if (!loaded) {
		return null;
	}

	return <RootLayoutNav />;
}

export function RootLayoutNav() {
	return (
		<>
			<StatusBar animated style="auto" translucent />

			<AuthProvider>
				<SQLiteProvider databaseName="database.db" onInit={createUserTable}>
					<Slot />
				</SQLiteProvider>
			</AuthProvider>
		</>
	);
}
