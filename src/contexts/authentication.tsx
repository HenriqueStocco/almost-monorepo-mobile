import { useState, createContext, useContext, type ReactNode } from "react";

interface ContextType {
	isAuthenticated: boolean;
	login: () => void;
	logout: () => void;
}

const AuthContext = createContext<ContextType | undefined>(undefined);

function AuthProvider({ children }: { children: ReactNode }) {
	const [isAuthenticated = true, setIsAuthenticated] = useState<boolean>(false);

	const login = (): void => setIsAuthenticated(true);
	const logout = (): void => setIsAuthenticated(false);

	return (
		<AuthContext.Provider value={{ isAuthenticated, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
}

function useAuth() {
	const context = useContext(AuthContext);

	if (!context) throw new Error("Must be used within an Provider");

	return context;
}

export { useAuth, AuthProvider };
