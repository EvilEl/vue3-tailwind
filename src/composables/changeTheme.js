import { useDark, useToggle } from "@vueuse/core";

export function changeTheme(selector = "body") {
  const dark = useDark();
  const toggle = useToggle(dark);
  return {
    toggle,
  };
}
