import type React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Redirect, Tabs } from "expo-router";
import { useAuth } from "../../contexts/authentication";

function TabBarIcon(props: {
	name: React.ComponentProps<typeof FontAwesome>["name"];
	color: string;
}) {
	return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function AppLayout() {
	const { isAuthenticated } = useAuth();

	// if (!isAuthenticated) {
	// 	return <Redirect href="/sign-in" />;
	// }

	return (
		<Tabs
			screenOptions={{
				headerShown: false,
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					title: "Home",
					tabBarIcon: ({ color }) => <TabBarIcon name="home" color={"black"} />,
				}}
			/>
			<Tabs.Screen
				name="sign-out"
				options={{
					title: "Sign Out",
					tabBarIcon: ({ color }) => (
						<TabBarIcon name="sign-out" color={color} />
					),
				}}
			/>
		</Tabs>
	);
}
