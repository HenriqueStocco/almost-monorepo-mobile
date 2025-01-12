import { type ClassValue, cn } from "@/utils/cn";
import React from "react";
import { TextInput, View, type TextInputProps } from "react-native";

type InputProps = TextInputProps & {
	className?: ClassValue;
};

export function Input({ className, ...props }: InputProps) {
	return (
		<View className={cn("bg-gray-300 w-[90%] h-16 rounded-lg", className)}>
			<TextInput
				{...props}
				className="text-gray-700 pl-2.5 text-lg w-full h-full py-2.5"
			/>
		</View>
	);
}
