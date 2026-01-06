import { View } from "@poplar-ui/taro";

import { type AvatarRootProps } from "../index.types";
import { AvatarProvider, useAvatarContext } from "../AvatarProvider";
import { resolveClassName } from "../../../utils/resolveClassName";

function AvatarContainer(props: AvatarRootProps) {
  const avatarContext = useAvatarContext();

  const className = resolveClassName({
    className: props.className,
    classNameFn: props.classNameFn,
    state: avatarContext.state,
  });

  return <View {...props} className={className} />;
}

export function AvatarRoot(props: AvatarRootProps) {
  return (
    <AvatarProvider>
      <AvatarContainer {...props} />
    </AvatarProvider>
  );
}
