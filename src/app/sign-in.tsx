import { View, Text, Pressable } from "react-native";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { Link } from "expo-router";
import { Controller, type SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { AntDesign } from "@expo/vector-icons";
import { Separator } from "@/components/Separator";
import { useAuth } from "@/contexts/authentication";

export default function SignIn() {
	const { login } = useAuth();
	const userSchema = z.object({
		email: z.string().email(),
		password: z.string(),
	});

	type UserFormType = z.infer<typeof userSchema>;

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<UserFormType>({
		resolver: zodResolver(userSchema),
	});

	const onSubmit: SubmitHandler<UserFormType> = (data: UserFormType) => {
		login();
	};

	return (
		<View className="flex-1 h-full bg-gray-100 items-center justify-center gap-2">
			<Text className="text-5xl text-black font-bold mb-14">Sign In</Text>

			<View className="w-full flex flex-col items-center gap-4 mb-10">
				<Controller
					control={control}
					render={({
						field: { onChange, onBlur, value },
						fieldState: { error },
					}) => (
						<Input
							onBlur={onBlur}
							onChange={onChange}
							value={value}
							placeholder="user@example.com"
							textContentType="emailAddress"
							className="shadow-md bg-white"
						/>
					)}
					name="email"
				/>
				{errors.email && (
					<Text className="text-red-500 text-sm text-start ml-6 -mt-2.5">
						{errors.email.message}
					</Text>
				)}
				<Controller
					control={control}
					render={({
						field: { onChange, onBlur, value },
						fieldState: { error },
					}) => (
						<Input
							onBlur={onBlur}
							onChange={onChange}
							value={value}
							placeholder="Password"
							textContentType="password"
							secureTextEntry={true}
							className="shadow-md bg-white"
						/>
					)}
					name="password"
				/>
				{errors.password && (
					<Text className="text-red-500 text-sm text-start ml-6 -mt-2.5">
						{errors.password.message}
					</Text>
				)}
			</View>

			<Button label="Send" onPress={handleSubmit(onSubmit)} />

			<Separator phrase="Or Sign in with" className="top-10" />

			<View className="w-[90%] flex flex-row justify-center gap-14 top-10">
				<Pressable
					className="py-2 px-4 bg-gray-50 shadow-md rounded-lg w-[42%] h-16 items-center justify-center"
					onPress={() => {}}
				>
					<AntDesign name="google" size={30} color="grey" />
				</Pressable>

				<Pressable
					className="py-2 px-4 bg-gray-50 shadow-md rounded-lg w-[42%] items-center justify-center"
					onPress={() => {}}
				>
					<AntDesign name="github" size={30} color="grey" />
				</Pressable>
			</View>

			<Text className="mt-4 text-black/40 top-44">
				Don't have an account?{"  "}
				<Link href="/sign-up">
					<Text className="font-bold text-black text-lg">Sign Up</Text>
				</Link>
			</Text>
		</View>
	);
}
