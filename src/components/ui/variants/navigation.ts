import { cva } from "class-variance-authority";

export const navItemVariants = cva("group flex items-center py-3", {
  variants: {
    state: {
      default: "",
      active: "active",
    },
  },
  defaultVariants: {
    state: "default",
  },
});

export const navIndicatorVariants = cva(
  "nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none",
  {
    variants: {
      state: {
        default: "",
        active: "w-16 bg-slate-200",
      },
    },
    defaultVariants: {
      state: "default",
    },
  },
);

export const navTextVariants = cva(
  "nav-text text-xs font-bold tracking-widest text-slate-500 uppercase group-hover:text-slate-200 group-focus-visible:text-slate-200",
  {
    variants: {
      state: {
        default: "",
        active: "text-slate-200",
      },
    },
    defaultVariants: {
      state: "default",
    },
  },
);
