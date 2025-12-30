import { Image, type ImageProps } from "@poplar-ui/taro";

interface AvatarImageProps extends ImageProps {}

export function AvatarImage(props: AvatarImageProps) {
  return <Image {...props} />;
}
