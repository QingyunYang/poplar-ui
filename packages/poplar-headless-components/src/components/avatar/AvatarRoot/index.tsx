import { View, type ViewProps } from "@poplar-ui/taro";

import { AvatarProvider } from "../AvatarProvider";

interface AvatarRootProps extends ViewProps {}

export function AvatarRoot(props: AvatarRootProps) {
  return (
    <AvatarProvider>
      <View {...props} />
    </AvatarProvider>
  );
}
