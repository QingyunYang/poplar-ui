import * as React from "react";

interface AvatarContext {}

const avatarContext = React.createContext<AvatarContext | undefined>(undefined);

export const useAvatarContext = () => {
  const context = React.useContext(avatarContext);
  if (!context) {
    throw new Error(
      "Poplar UI: avatarContext is missing. Avatar parts must be placed within <Avatar.Root>."
    );
  }
  return context;
};

export function AvatarProvider(props: React.PropsWithChildren) {
  const value = React.useMemo(() => ({}), []);
  return <avatarContext.Provider value={value}>{props.children}</avatarContext.Provider>;
}
