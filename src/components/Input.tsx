import React from "react";
import { TextInput, View, type TextInputProps } from "react-native";

type InputProps = TextInputProps;

export function Input({ ...props }: InputProps) {
	return (
		<View className="bg-gray-300/60 w-[90%] h-16 rounded-lg shadow-inner">
			<TextInput
				{...props}
				className="text-gray-700 pl-2.5 text-lg w-full h-full py-2.5"
			/>
		</View>
	);
}
