export type AuthStore = {
    isLogged: boolean;
    signIn: () => Promise<boolean>;
    signOut: () => Promise<boolean>;
    initAuth: () => void;
  };

export type SignupStore = {
  signupStep: 1 | 2 | 3 | 4;
  setSignupStep: (step: 1 | 2 | 3 | 4) => void;
}