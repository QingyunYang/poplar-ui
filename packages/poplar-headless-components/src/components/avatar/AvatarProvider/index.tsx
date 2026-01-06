import * as React from "react";

import type { AvatarRootState } from "../index.types";

type AvatarContext = {
  state: AvatarRootState;
};

const avatarContext = React.createContext<AvatarContext>({
  state: null,
});

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
  const value = React.useMemo(() => ({ state: null }), []);
  return <avatarContext.Provider value={value}>{props.children}</avatarContext.Provider>;
}
