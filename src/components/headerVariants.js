export const logoVariants = {
    initial: {
        opacity: 0,
        scale: 1,
    },
    animate: {
        opacity:0.91,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 80,
            damping: 30,
            mass: 1
        }
    },
    whileHover: {
        scale: 1.06,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 140,
            damping: 30,
            mass: 1
        }
    }
}

export const leafVariants = {
    initial: {
        opacity: 0,
        scale: 0.5,
        rotate: 40,
    },
    animate: {
        opacity:0.95,
        scale: 1,
        rotate: 0,
        transition: {
            type: "spring",
            stiffness: 180,
            damping: 20,
            mass: 5
        }
    },
    whileHover: {
        scale: 1.1,
        opacity: 1,
        rotate: -41,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 20,
            mass: 5
        }
    }
}

export const menuItemVariants = {
    initial: {
        opacity: 0,
        scale: 0,
    },
    animate: (i) => ({
        opacity:0.95,
        scale: 1,
        transition: {
            type: "tween",
            ease: "linear",
            duration: 0.4,
            delay: 0.052 * i,
        }
    }),
    whileHover: {
        scale: 1,
        opacity: 1,
        transition: {
            type: "tween",
            ease: "linear",
            duration: 0.2
        }
    }
}

export const underlineVariants = {
    initial: {
        scaleX: 0,
        scaleY: 0,
    },
    animate: (i) => ({
        scaleX: 0.76,
        scaleY: 1,
        transition: {
            type: "tween",
            ease: "circOut",
            duration: 0.3,
            delay: 0.052 * i,
        }
    }),
    whileHover: {
        scaleX: 1,
        scaleY: 1.1,
        transition: {
            type: "tween",
            ease: "circOut",
            duration: 0.3
        }
    }
}

export const menuVariants = {
    initial: {
        y: -500,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1
    },
    exit: {
        y: -500,
        opacity: 0
    }
}