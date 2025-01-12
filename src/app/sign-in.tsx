import { View, Text } from "react-native";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { Link } from "expo-router";

export default function SignIn() {
	return (
		<View className="flex-1 items-center justify-center gap-10">
			<Text className="text-5xl text-black font-bold mb-14">Sign In</Text>

			<View className="w-full flex flex-col items-center gap-4">
				<Input placeholder="Email" />
				<Input placeholder="Password" />
			</View>

			<Button label="Send" />

			<Link href="/sign-up">
				<Text>Don't have an account?</Text>
			</Link>
		</View>
	);
}
