import { cva } from "class-variance-authority";

export const experienceItemVariants = cva(
  "group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:group-hover/list:opacity-50 lg:hover:!opacity-100",
  {
    variants: {
      variant: {
        default: "",
        highlighted: "opacity-100",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export const experienceItemHoverBackgroundVariants = cva(
  "absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg",
  {
    variants: {
      variant: {
        default: "",
        active:
          "bg-slate-800/50 shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] drop-shadow-lg",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export const experienceDateVariants = cva(
  "z-10 mt-1 mb-2 text-xs font-semibold tracking-wide text-slate-500 uppercase sm:col-span-2",
  {
    variants: {
      size: {
        default: "",
        small: "text-2xs",
        large: "text-sm",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

export const experienceTitleVariants = cva(
  "group/link inline-flex items-baseline text-base leading-tight font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300",
  {
    variants: {
      size: {
        default: "text-base",
        small: "text-sm",
        large: "text-lg",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

export const experienceTagsContainerVariants = cva("mt-2 flex flex-wrap", {
  variants: {
    spacing: {
      default: "",
      tight: "mt-1 gap-1",
      loose: "mt-3 gap-2",
    },
  },
  defaultVariants: {
    spacing: "default",
  },
});

export const experienceTagVariants = cva(
  "flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs leading-5 font-medium text-teal-300",
  {
    variants: {
      color: {
        teal: "bg-teal-400/10 text-teal-300",
        blue: "bg-blue-400/10 text-blue-300",
        purple: "bg-purple-400/10 text-purple-300",
        amber: "bg-amber-400/10 text-amber-300",
      },
    },
    defaultVariants: {
      color: "teal",
    },
  },
);
