export const containerAnimation = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

export const imageAnimation = {
  hidden: {
    opacity: 0,
    x: -30,
    transition: {
      yoyo: Infinity,
      ease: "easeInOut",
    },
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      yoyo: Infinity,
      ease: "easeInOut",
    },
  },
  exit: { opacity: 0 },
};

export const titleAnimation = {
  hidden: {
    opacity: 0,
    y: -30,
    transition: {
      yoyo: Infinity,
      ease: "easeInOut",
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: 0.2,
      yoyo: Infinity,
      ease: "easeInOut",
    },
  },
  exit: { opacity: 0 },
};

export const textAnimation = {
  hidden: {
    opacity: 0,
    x: -30,
    transition: {
      yoyo: Infinity,
      ease: "easeInOut",
    },
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: 0.4,
      yoyo: Infinity,
      ease: "easeInOut",
    },
  },
  exit: { opacity: 0 },
};

export const invertedTextAnimation = {
  hidden: {
    opacity: 0,
    x: 30,
    transition: {
      yoyo: Infinity,
      ease: "easeInOut",
    },
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      delay: 0.6,
      yoyo: Infinity,
      ease: "easeInOut",
    },
  },
  exit: { opacity: 0 },
};
