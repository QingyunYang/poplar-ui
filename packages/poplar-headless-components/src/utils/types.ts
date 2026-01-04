export type HeadlessComponentProps<State> = {
  classNameFn?: (state: State) => string | undefined;
  styleFn?: (state: State) => React.CSSProperties | undefined;
}
