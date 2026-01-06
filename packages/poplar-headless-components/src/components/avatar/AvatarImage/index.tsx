import { Image } from "@poplar-ui/taro";

import type { AvatarImageProps } from "../index.types";
import { useAvatarContext } from "../AvatarProvider";
import { resolveClassName } from "../../../utils/resolveClassName";

export function AvatarImage(props: AvatarImageProps) {
  const avatarContext = useAvatarContext();

  const className = resolveClassName({
    className: props.className,
    classNameFn: props.classNameFn,
    state: avatarContext.state,
  });

  return <Image {...props} className={className} />;
}
