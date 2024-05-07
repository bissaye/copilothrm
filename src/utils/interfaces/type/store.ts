export type AuthStore = {
    isLogged?: boolean;
    signIn: () => void;
    signOut: () => void;
    initAuth: () => void;
  };