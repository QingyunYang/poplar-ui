import { Image, type ImageProps } from "@poplar-ui/taro";

export interface AvatarImageProps extends ImageProps {}

export function AvatarImage(props: AvatarImageProps) {
  return <Image {...props} />;
}

export namespace AvatarImage {
  export type Props = AvatarImageProps;
}
