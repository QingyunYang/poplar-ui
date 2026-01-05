import type { ViewProps, ImageProps } from "@poplar-ui/taro";

import type { HeadlessComponentProps } from "../../utils/types";

export type AvatarRootState = object;
export type AvatarRootProps = HeadlessComponentProps<AvatarRootState> & ViewProps;
export type AvatarImageProps = HeadlessComponentProps<AvatarRootState> & ImageProps;
