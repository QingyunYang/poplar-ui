import { clsx } from "clsx";

import { HeadlessComponentProps } from './types'

export function resolveClassName<State>(options: {
  className?: string
  classNameFn?: HeadlessComponentProps<State>["classNameFn"];
  state: State;
}) {
  if (!options.classNameFn) return options.className;
  return clsx(options.className, options.classNameFn(options.state));
}
