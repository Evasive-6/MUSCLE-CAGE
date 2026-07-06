import { createContext, useContext, useEffect, useState } from "react";
import api from "@/services/api";

const AuthContext = createContext(null);
const TOKEN_KEY = "muscle-cage-token";
const USER_KEY = "muscle-cage-user";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const raw = localStorage.getItem(USER_KEY);
    return raw ? JSON.parse(raw) : null;
  });
  const [token, setToken] = useState(() => localStorage.getItem(TOKEN_KEY));
  const [loading, setLoading] = useState(Boolean(token));

  useEffect(() => {
    if (!token) {
      setLoading(false);
      return;
    }

    let active = true;

    async function syncSession() {
      try {
        const response = await api.get("/auth/me");
        if (!active) {
          return;
        }

        setUser(response.data.user);
        localStorage.setItem(USER_KEY, JSON.stringify(response.data.user));
      } catch (_error) {
        logout();
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    syncSession();

    return () => {
      active = false;
    };
  }, [token]);

  function persistSession(nextToken, nextUser) {
    setToken(nextToken);
    setUser(nextUser);
    localStorage.setItem(TOKEN_KEY, nextToken);
    localStorage.setItem(USER_KEY, JSON.stringify(nextUser));
  }

  async function login(payload) {
    const response = await api.post("/auth/login", payload);
    persistSession(response.data.token, response.data.user);
    return response.data;
  }

  async function register(payload) {
    const response = await api.post("/auth/register", payload);
    persistSession(response.data.token, response.data.user);
    return response.data;
  }

  function logout() {
    setToken(null);
    setUser(null);
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
  }

  const value = { user, token, loading, isAuthenticated: Boolean(token), login, register, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }
  return context;
}