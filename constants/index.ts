// constants/index.js
export const image = [
// export const SAMPLE_IMAGES = [
  {
    _id: "1",
    publicId: "sample1",
    author: {
      _id: "user1",
      firstName: "John",
      lastName: "Doe",
      clerkId: "clerk1",
    },
    color: "https://via.placeholder.com/300x200.png?text=Sample+Image+1",
    title: "Sample Image 1",
    width: 300,
    height: 200,
    transformationType: "example",
  },
  {
    _id: "2",
    publicId: "sample2",
    author: {
      _id: "user2",
      firstName: "Jane",
      lastName: "Smith",
      clerkId: "clerk2",
    },
    color: "https://via.placeholder.com/300x200.png?text=Sample+Image+2",
    title: "Sample Image 2",
    width: 300,
    height: 200,
    transformationType: "example",
  },
  {
    _id: "3",
    publicId: "sample3",
    author: {
      _id: "user3",
      firstName: "Alice",
      lastName: "Johnson",
      clerkId: "clerk3",
    },
    color: "https://via.placeholder.com/300x200.png?text=Sample+Image+3",
    title: "Sample Image 3",
    width: 300,
    height: 200,
    transformationType: "example",
  },
];


export const navLinks = [
  {
    label: "Home",
    route: "/",
    icon: "/assets/icons/home.svg",
  },
  {
    label: "Report Lost",
    route: "/report_lost",
    icon: "/assets/icons/camera.svg",
  },
  {
    label: "Report Found",
    route: "/report_found",
    // icon: "/assets/icons/stars.svg",
    icon: "/assets/icons/scan.svg",
  },
  {
    label: "Submission Centers",
    route: "/submit_item",
    icon: "/assets/icons/image.svg",
  },
  {
    label: "Contact Support",
    route: "/contact_support",
    icon: "/assets/icons/filter.svg",
  },
  {
    label: "Credits",
    route: "/credits",
    icon: "/assets/icons/stars.svg",
  },
  {
    label: "Profile",
    route: "/profile",
    icon: "/assets/icons/profile.svg",
  },
  // {
  //   label: "Buy Credits",
  //   route: "/credits",
  //   icon: "/assets/icons/bag.svg",
  // },
];

export const plans = [
  {
    _id: 1,
    name: "Free",
    icon: "/assets/icons/free-plan.svg",
    price: 0,
    // credits: 20,
    inclusions: [
      {
        label: "20 Free Credits",
        isIncluded: true,
      },
      {
        label: "Basic Access to Services",
        isIncluded: true,
      },
      {
        label: "Priority Customer Support",
        isIncluded: false,
      },
      {
        label: "Priority Updates",
        isIncluded: false,
      },
    ],
  },
  {
    _id: 2,
    name: "Pro Package",
    icon: "/assets/icons/free-plan.svg",
    price: 40,
    // credits: 120,
    inclusions: [
      {
        label: "120 Credits",
        isIncluded: true,
      },
      {
        label: "Full Access to Services",
        isIncluded: true,
      },
      {
        label: "Priority Customer Support",
        isIncluded: true,
      },
      {
        label: "Priority Updates",
        isIncluded: false,
      },
    ],
  },
  {
    _id: 3,
    name: "Premium Package",
    icon: "/assets/icons/free-plan.svg",
    price: 199,
    // credits: 2000,
    inclusions: [
      {
        label: "2000 Credits",
        isIncluded: true,
      },
      {
        label: "Full Access to Services",
        isIncluded: true,
      },
      {
        label: "Priority Customer Support",
        isIncluded: true,
      },
      {
        label: "Priority Updates",
        isIncluded: true,
      },
    ],
  },
];

export const transformationTypes = {
  restore: {
    type: "restore",
    title: "Restore Image",
    subTitle: "Refine images by removing noise and imperfections",
    config: { restore: true },
    icon: "image.svg",
  },
  removeBackground: {
    type: "removeBackground",
    title: "Background Remove",
    subTitle: "Removes the background of the image using AI",
    config: { removeBackground: true },
    icon: "camera.svg",
  },
  fill: {
    type: "fill",
    title: "Search by Image",
    subTitle: "Enhance an image's dimensions using AI outpainting",
    config: { fillBackground: true },
    icon: "stars.svg",
  },
  remove: {
    type: "remove",
    title: "Object Remove",
    subTitle: "Identify and eliminate objects from images",
    config: {
      remove: { prompt: "", removeShadow: true, multiple: true },
    },
    icon: "scan.svg",
  },
  recolor: {
    type: "recolor",
    title: "Object Recolor",
    subTitle: "Identify and recolor objects from the image",
    config: {
      recolor: { prompt: "", to: "", multiple: true },
    },
    icon: "filter.svg",
  },
};

export const aspectRatioOptions = {
  "1:1": {
    aspectRatio: "1:1",
    label: "Square (1:1)",
    width: 1000,
    height: 1000,
  },
  "3:4": {
    aspectRatio: "3:4",
    label: "Standard Portrait (3:4)",
    width: 1000,
    height: 1334,
  },
  "9:16": {
    aspectRatio: "9:16",
    label: "Phone Portrait (9:16)",
    width: 1000,
    height: 1778,
  },
};

export const defaultValues = {
  title: "",
  aspectRatio: "",
  color: "",
  prompt: "",
  publicId: "",
};

// export const creditFee = -1;

export const header = {
  contact_support : {
    title : "Contact Support",
    subtitle : "Contact Support",
  },
  report_lost : {
    title : "Report Lost Item",
    subtitle : "Contact Support",
  },
  report_found : {
    title : "Report FoundItem",
    subtitle : "Contact Support",
  },
  submit_item : {
    title : "Item Submission Centers",
    subtitle : "Contact Support",
  },
  credits : {
    title : "Findo App Credits",
    subtitle : "Contact Support",
  },

}