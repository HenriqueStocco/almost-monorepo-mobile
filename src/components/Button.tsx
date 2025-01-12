import React from "react";
import {
	Text,
	TouchableOpacity,
	View,
	type TouchableOpacityProps,
} from "react-native";

type ButtonProps = TouchableOpacityProps & {
	label: string;
};

export function Button({ label, ...props }: ButtonProps) {
	return (
		<View className="bg-black w-[90%] h-12 rounded-lg shadow shadow-black">
			<TouchableOpacity
				{...props}
				className="w-full h-full justify-center py-2"
			>
				<Text className="text-white text-center text-lg font-medium">
					{label}
				</Text>
			</TouchableOpacity>
		</View>
	);
}
