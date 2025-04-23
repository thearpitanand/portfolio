import { cva } from "class-variance-authority";

export const postItemVariants = cva(
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

export const postItemHoverBackgroundVariants = cva(
  "absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-400/5 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg",
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

export const postItemContentVariants = cva("z-10 sm:col-span-6");

export const postMetaVariants = cva("z-10 flex-shrink-0 sm:col-span-2");

export const postDateVariants = cva(
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

export const postTitleVariants = cva(
  "group/link inline-flex items-baseline text-base leading-tight font-medium text-slate-200 hover:text-slate-100 focus-visible:text-slate-100",
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

export const postTitleArrowVariants = cva(
  "ml-1 inline-block transform transition-transform duration-200 ease-in-out group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 motion-reduce:transition-none",
);

export const postImageWrapperVariants = cva(
  "relative h-16 w-28 flex-shrink-0 overflow-hidden rounded border-2 border-slate-200/10",
);

export const postPlaceholderVariants = cva(
  "flex h-16 w-28 flex-shrink-0 items-center justify-center rounded border-2 border-slate-200/10 bg-slate-800/50 text-xs text-slate-500",
);
