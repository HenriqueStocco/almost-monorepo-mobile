import { type ClassValue, cn } from "@/utils/cn";
import { Text, View } from "react-native";

type SeparatorProps = {
	phrase: string;
	className?: ClassValue;
};

export function Separator({ phrase, className }: SeparatorProps) {
	return (
		<View className={cn("flex flex-row items-center py-2.5", className)}>
			<View className="bg-gray-400 h-px w-[30%]" />
			<Text className="font-light italic text-xs mx-auto px-4">{phrase}</Text>
			<View className="bg-gray-400 h-px w-[30%]" />
		</View>
	);
}
