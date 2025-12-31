import { View, type ViewProps } from "@poplar-ui/taro";

import { AvatarProvider } from "../AvatarProvider";

export interface AvatarRootProps extends ViewProps {}

export function AvatarRoot(props: AvatarRootProps) {
  return (
    <AvatarProvider>
      <View {...props} />
    </AvatarProvider>
  );
}

export namespace AvatarRoot {
  export type Props = AvatarRootProps;
}
