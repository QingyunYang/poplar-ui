export type HeadlessComponentProps<State> = {
  classNameFn?: (state: State) => string;
  styleFn?: (state: State) => React.CSSProperties;
}
