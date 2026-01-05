import type { ButtonProps } from "@poplar-ui/taro";

import type { HeadlessComponentProps } from "../../utils/types";

export type ButtonRootState = object;
export type ButtonRootProps = HeadlessComponentProps<ButtonRootState> & ButtonProps;