function useRenderIf(key, value, children) {
  if (key.name === value) {
    return children;
  }
  return null;
}
export default useRenderIf;
