import { Input } from "@/components/Input";
import { Controller, useForm, type SubmitHandler } from "react-hook-form";
import { View, Text, Alert } from "react-native";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/Button";
import { Link } from "expo-router";

export default function SignUp() {
	const userSchema = z.object({
		name: z.string(),
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
		Alert.alert("Success", `Create account for ${data.name}`);
	};

	return (
		<View className="flex-1 items-center justify-center gap-2 bg-gray-100">
			<Text className="text-5xl text-black font-bold mb-14">Sign Up</Text>

			<View className="w-full items-center gap-4 mb-10">
				<Controller
					control={control}
					render={({
						field: { onChange, onBlur, value },
						fieldState: { error },
					}) => (
						<Input
							placeholder="Name"
							onBlur={onBlur}
							onChange={onChange}
							value={value}
							className="shadow-md bg-white"
							textContentType="name"
						/>
					)}
					name="name"
				/>
				{errors.name && (
					<Text className="text-red-500 text-sm text-start ml-6 -mt-2.5">
						{errors.name.message}
					</Text>
				)}
				<Controller
					control={control}
					render={({
						field: { onChange, onBlur, value },
						fieldState: { error },
					}) => (
						<Input
							placeholder="Email"
							onBlur={onBlur}
							onChange={onChange}
							value={value}
							className="shadow-md bg-white"
							textContentType="emailAddress"
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
							placeholder="Password"
							onBlur={onBlur}
							onChange={onChange}
							value={value}
							className="shadow-md bg-white"
							textContentType="password"
							secureTextEntry={true}
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

			<Text className="mt-4 text-black/70">
				Already have an account?{"  "}
				<Link href="/sign-in">
					<Text className="font-bold text-lg text-black">Sign In</Text>
				</Link>
			</Text>
		</View>
	);
}
