
export default function ConditionalWrapper({ children, wrapper, condition }) {
  return condition ? wrapper(children) : children;
}
