export const parentGridVariant = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.2,
      when: "beforeChildren",
      staggerChildren: 0.12,
    },
  },
};

export const childGridItemVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.7,
    },
  },
};

export const testVarient = {
  initial: { opacity: 1 },
  animate: { opacity: 1 },
};

export const gridItemHover = {
  y: "-12px",
};
