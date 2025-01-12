import { cn, type ClassValue } from "@/utils/cn";
import React from "react";
import {
	Text,
	TouchableOpacity,
	View,
	type TouchableOpacityProps,
} from "react-native";

type ButtonProps = TouchableOpacityProps & {
	label: string;
	btnClassName?: ClassValue;
	lblClassName?: ClassValue;
};

export function Button({
	label,
	btnClassName,
	lblClassName,
	...props
}: ButtonProps) {
	return (
		<View
			className={cn(
				"bg-black w-[90%] h-14 rounded-lg shadow shadow-black",
				btnClassName,
			)}
		>
			<TouchableOpacity
				{...props}
				className="w-full h-full justify-center py-2"
			>
				<Text
					className={cn(
						"text-white text-center text-lg font-medium",
						lblClassName,
					)}
				>
					{label}
				</Text>
			</TouchableOpacity>
		</View>
	);
}
