export type AuthStore = {
    isLogged: boolean;
    signIn: () => Promise<boolean>;
    signOut: () => Promise<boolean>;
    initAuth: () => void;
  };