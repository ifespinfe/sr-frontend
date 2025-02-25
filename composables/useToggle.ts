export const useToggle = () => {
  const active = ref(true);
  const toggle = () => {
    active.value = !active.value;
  };

  return {
    active,
    toggle,
  };
};
