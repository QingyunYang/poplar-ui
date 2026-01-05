import { View } from "@poplar-ui/taro";
import * as React from "react";

import { type AvatarRootProps} from '../index.types'
import { AvatarProvider, useAvatarContext } from "../AvatarProvider";

function AvatarContainer(props: AvatarRootProps) {
  const avatarContext = useAvatarContext();

  const className = React.useMemo(() => {
    if (!props.classNameFn) return props.className;
    return `${props.className || ""} ${props.classNameFn(avatarContext.state)}`;
  }, [avatarContext.state, props]);

  return <View {...props} className={className} />;
}

export function AvatarRoot(props: AvatarRootProps) {
  return (
    <AvatarProvider>
      <AvatarContainer {...props} />
    </AvatarProvider>
  );
}
