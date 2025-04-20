import { cva } from "class-variance-authority";

export const sectionVariants = cva(
  "mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24",
  {
    variants: {
      size: {
        default: "",
        small: "mb-8 md:mb-12 lg:mb-16",
        large: "mb-24 md:mb-32 lg:mb-48",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

export const sectionHeaderVariants = cva(
  "sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0",
  {
    variants: {
      variant: {
        default: "",
        visible: "lg:not-sr-only lg:opacity-100",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export const sectionHeaderTitleVariants = cva(
  "text-sm font-bold tracking-widest text-slate-200 uppercase lg:sr-only",
  {
    variants: {
      variant: {
        default: "",
        visible: "lg:not-sr-only",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);
