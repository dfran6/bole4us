import { createContext, useCallback, useContext, useEffect, useReducer } from 'react';
import * as authApi from '../api/auth';
import { getAccessToken, clearAccessToken } from '../api/tokenStorage';

const AuthContext = createContext(null);

const initialState = { user: null, status: 'idle' };

function reducer(state, action) {
  switch (action.type) {
    case 'LOADING':
      return { ...state, status: 'loading' };
    case 'AUTHENTICATED':
      return { user: action.user, status: 'authenticated' };
    case 'UNAUTHENTICATED':
      return { user: null, status: 'unauthenticated' };
    default:
      return state;
  }
}

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    let active = true;
    async function hydrate() {
      if (!getAccessToken()) {
        dispatch({ type: 'UNAUTHENTICATED' });
        return;
      }
      dispatch({ type: 'LOADING' });
      // This backend is known to drop connections intermittently. A network
      // blip here shouldn't log the user out -- only a genuine auth failure
      // (401/revoked token) should. One retry absorbs most transient drops.
      let lastError = null;
      for (let attempt = 0; attempt < 2; attempt++) {
        try {
          const user = await authApi.getMe();
          if (active) dispatch({ type: 'AUTHENTICATED', user });
          return;
        } catch (error) {
          lastError = error;
          if (error.kind !== 'network') break;
        }
      }
      // Only a confirmed auth failure clears the token. A network error
      // leaves it in place so the next navigation can retry instead of
      // forcing a re-login over a connectivity issue.
      if (lastError.kind !== 'network') clearAccessToken();
      if (active) dispatch({ type: 'UNAUTHENTICATED' });
    }
    hydrate();
    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    function handleAuthExpired() {
      dispatch({ type: 'UNAUTHENTICATED' });
    }
    window.addEventListener('bole4us:auth-expired', handleAuthExpired);
    return () => {
      window.removeEventListener('bole4us:auth-expired', handleAuthExpired);
    };
  }, []);

  const login = useCallback(async (credentials) => {
    const user = await authApi.login(credentials);
    dispatch({ type: 'AUTHENTICATED', user });
    return user;
  }, []);

  const register = useCallback(async (payload) => {
    const user = await authApi.register(payload);
    dispatch({ type: 'AUTHENTICATED', user });
    return user;
  }, []);

  const logout = useCallback(async () => {
    await authApi.logout().catch(() => {});
    dispatch({ type: 'UNAUTHENTICATED' });
  }, []);

  const refreshProfile = useCallback(async () => {
    const user = await authApi.getMe();
    dispatch({ type: 'AUTHENTICATED', user });
    return user;
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, login, register, logout, refreshProfile }}>
      {children}
    </AuthContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components -- hook belongs with its context
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
}
