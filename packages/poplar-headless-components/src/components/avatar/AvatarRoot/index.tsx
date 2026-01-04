import * as React from "react";
import { View, type ViewProps } from "@poplar-ui/taro";

import { AvatarProvider, type AvatarRootState, useAvatarContext } from "../AvatarProvider";
import { HeadlessComponentProps } from "../../../utils/types";

export interface AvatarRootProps extends HeadlessComponentProps<AvatarRootState>, ViewProps {}

export namespace AvatarRoot {
  export type Props = AvatarRootProps;
  export type State = AvatarRootState;
}

function AvatarContainer(props: AvatarRootProps) {
  const avatarContext = useAvatarContext();

  const className = React.useMemo(() => {
    if (!props.classNameFn) return props.className;
    return `${props.className || ""} ${props.classNameFn(avatarContext.state)}`;
  }, []);

  return <View {...props} className={className} />;
}

export function AvatarRoot(props: AvatarRootProps) {
  return (
    <AvatarProvider>
      <AvatarContainer {...props} />
    </AvatarProvider>
  );
}
