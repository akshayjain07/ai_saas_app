"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import aj from "../../public/assets/images/findo.jpg";

export const Collection = () => {
  // Hardcoded images and data for 18 cards
  const images = [
    { _id: "1", title: "Lost Wallet", color: "/assets/images/wallet.jpg", width: 200, height: 200 },
    { _id: "2", title: "Found Phone", color: "/assets/images/phone.jpg", width: 200, height: 200 },
    { _id: "3", title: "Lost Watch", color: "/assets/images/ring.jpg", width: 200, height: 200 },
    { _id: "4", title: "Found Ring", color: "/assets/images/ring.jpg", width: 200, height: 200 },
    { _id: "5", title: "Lost Bag", color: "/assets/images/bags.jpg", width: 200, height: 200 },
    { _id: "6", title: "Found Shoes", color: "/assets/images/books.jpg", width: 200, height: 200 },
    { _id: "7", title: "Lost Jacket", color: "/assets/images/iphone.jpg", width: 200, height: 200 },
    { _id: "8", title: "Found Keys", color: "/assets/images/laptop.jpg", width: 200, height: 200 },
    { _id: "9", title: "Lost Glasses", color: "/assets/images/glasses.jpg", width: 200, height: 200 },
    { _id: "10", title: "Found Watch", color: "/assets/images/watch.jpg", width: 200, height: 200 },
    { _id: "11", title: "Lost Phone", color: "/assets/images/phone.jpg", width: 200, height: 200 },
    { _id: "12", title: "Found Bag", color: "/assets/images/bags.jpg", width: 200, height: 200 },
    { _id: "13", title: "Lost Ring", color: "/assets/images/ring.jpg", width: 200, height: 200 },
    { _id: "14", title: "Found Shoes", color: "/assets/images/shoes.jpg", width: 200, height: 200 },
    { _id: "15", title: "Lost Glasses", color: "/assets/images/glasses.jpg", width: 200, height: 200 },
    { _id: "16", title: "Found Keys", color: "/assets/images/keys.jpg", width: 200, height: 200 },
    { _id: "17", title: "Lost Wallet", color: "/assets/images/wallet.jpg", width: 200, height: 200 },
    { _id: "18", title: "Found Jacket", color: "/assets/images/jacket.jpg", width: 200, height: 200 },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  // Logic to calculate the index range for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = images.slice(startIndex, endIndex);

  // Handle the page change
  const nextPage = () => {
    if (currentPage < Math.ceil(images.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto py-8">
      <h2 className="h2-bold text-dark-600 text-center mb-6">Recent Losts / Founds</h2>

      <div className="collection-list flex flex-wrap gap-4 justify-center">
        {currentItems.map((image) => (
          <div
            key={image._id}
            className="w-1/3 p-4 border rounded-lg shadow-md max-w-xs"
            style={{ height: "350px", width: "350px" }} // Set a fixed height for each card
          >
            <Link href={`/transformations/${image._id}`} className="collection-card">
              <img
                src={image.color}
                alt={image.title}
                width={image.width}
                height={image.height}
                className="h-52 w-full rounded-[10px] object-cover"
                loading="lazy"
              />
              <div className="flex justify-between items-center mt-2">
                <p className="p-20-semibold mr-3 text-dark-600">{image.title}</p>
                <Image
                  src="/assets/icons/filter.svg" // Adjust this path to use a fixed icon
                  alt={image.title}
                  width={24}
                  height={24}
                />
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Pagination controls */}
      {/* <div className="flex justify-between items-center mt-6">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 rounded-md text"
        >
          Previous
        </button>

        <p>
          Page {currentPage} of {Math.ceil(images.length / itemsPerPage)}
        </p>

        <button
          onClick={nextPage}
          disabled={currentPage === Math.ceil(images.length / itemsPerPage)}
          className="px-4 py-2 bg-gray-300 rounded-md"
        >
          Next
        </button>
      </div> */}

      <div className="flex justify-between items-center mt-6">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-md ${currentPage === 1 ? 'bg-gray-400' : 'bg-blue-500 text-white'}`}
        >
          Previous
        </button>

        <p>
          Page {currentPage} of {Math.ceil(images.length / itemsPerPage)}
        </p>

        <button
          onClick={nextPage}
          disabled={currentPage === Math.ceil(images.length / itemsPerPage)}
          className={`px-4 py-2 rounded-md ${currentPage === Math.ceil(images.length / itemsPerPage) ? 'bg-gray-400' : 'bg-blue-500 text-white'}`}
        >
          Next
        </button>
      </div>

    </div>
  );
};



// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useSearchParams, useRouter } from "next/navigation";
// import { CldImage } from "next-cloudinary";

// import {
//   Pagination,
//   PaginationContent,
//   PaginationNext,
//   PaginationPrevious,
// } from "@/components/ui/pagination";
// import { transformationTypes } from "@/constants";
// import { IImage } from "@/lib/database/models/image.model";
// import { formUrlQuery } from "@/lib/utils";

// import { Button } from "../ui/button";
// import { Search } from "./Search";
// import MediaCard from "./MediaCard";

// export const Collection = ({
//   hasSearch = false,
//   images,
//   totalPages = 1,
//   page,
// }: {
//   images: IImage[];
//   totalPages?: number;
//   page: number;
//   hasSearch?: boolean;
// }) => {
//   const router = useRouter();
//   const searchParams = useSearchParams();

//   // Pagination handler for navigating between pages
//   const onPageChange = (action: string) => {
//     const pageValue = action === "next" ? Number(page) + 1 : Number(page) - 1;

//     // Create a new URL based on the current search parameters and the updated page value
//     const newUrl = formUrlQuery({
//       searchParams: searchParams.toString(),
//       key: "page",
//       value: pageValue,
//     });

//     router.push(newUrl, { scroll: false });
//   };

//   return (
//     <>
//       <div className="collection-heading">
//         <h2 className="h2-bold text-dark-600">Recent Founds</h2>
//         {hasSearch && <Search />}
//       </div>
//       <div>
//         <MediaCard/>
//       </div>

//       {images.length > 0 ? (
//         <ul className="collection-list">
//           {images.map((image) => (
//             <Card image={image} key={image._id} />
//           ))}
//         </ul>
//       ) : (
//         <div className="collection-empty">
//           <p className="p-20-semibold">Empty List</p>
//           {/* <MediaCard/> */}
//         </div>
//       )}

//       {totalPages > 1 && (
//         <Pagination className="mt-10">
//           <PaginationContent className="flex w-full">
//             <Button
//               disabled={Number(page) <= 1}
//               className="collection-btn"
//               onClick={() => onPageChange("prev")}
//             >
//               <PaginationPrevious className="hover:bg-transparent hover:text-white" />
//             </Button>

//             <p className="flex-center p-16-medium w-fit flex-1">
//               {page} / {totalPages}
//             </p>

//             <Button
//               className="button w-32 bg-purple-gradient bg-cover text-white"
//               onClick={() => onPageChange("next")}
//               disabled={Number(page) >= totalPages}
//             >
//               <PaginationNext className="hover:bg-transparent hover:text-white" />
//             </Button>
//           </PaginationContent>
//         </Pagination>
//       )}
//     </>
//   );
// };

// const Card = ({ image }: { image: IImage }) => {
//   // Use the image.url directly for external images
//   return (
//     <li>
//       <Link href={`/transformations/${image._id}`} className="collection-card">
//         <img
//           src={image.color}
//           alt={image.title}
//           width={image.width}
//           height={image.height}
//           className="h-52 w-full rounded-[10px] object-cover"
//           loading="lazy"
//         />
//         <div className="flex-between">
//           <p className="p-20-semibold mr-3 line-clamp-1 text-dark-600">
//             {image.title}
//           </p>
//           <Image
//             src={`/assets/icons/${image.transformationType}.svg`} // Use appropriate icon
//             alt={image.title}
//             width={24}
//             height={24}
//           />
//         </div>
//       </Link>
//     </li>
//   );
// };


// // Card component for displaying each image with a transformation icon
// const Card = ({ image }: { image: IImage }) => {
//   // Determine the appropriate icon based on transformation type, with a fallback
//   const iconSrc =
//     transformationTypes[image.transformationType]?.icon || "camera.svg";

//   return (
//     <li>
//       <Link href={`/transformations/${image._id}`} className="collection-card">
//         <CldImage
//           src={image.publicId}
//           alt={image.title}
//           width={image.width}
//           height={image.height}
//           {...image.config}
//           loading="lazy"
//           className="h-52 w-full rounded-[10px] object-cover"
//           sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
//         />
//         <div className="flex-between">
//           <p className="p-20-semibold mr-3 line-clamp-1 text-dark-600">
//             {image.title}
//           </p>
//           <Image
//             src={`/assets/icons/${iconSrc}`}
//             alt={image.title}
//             width={24}
//             height={24}
//           />
//         </div>
//       </Link>
//     </li>
//   );
// };



// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useSearchParams, useRouter } from "next/navigation";
// import { CldImage } from "next-cloudinary";

// import {
//   Pagination,
//   PaginationContent,
//   PaginationNext,
//   PaginationPrevious,
// } from "@/components/ui/pagination";
// import { transformationTypes } from "@/constants";
// import { IImage } from "@/lib/database/models/image.model";
// import { formUrlQuery } from "@/lib/utils";

// import { Button } from "../ui/button";

// import { Search } from "./Search";

// export const Collection = ({
//   hasSearch = false,
//   images,
//   totalPages = 1,
//   page,
// }: {
//   images: IImage[];
//   totalPages?: number;
//   page: number;
//   hasSearch?: boolean;
// }) => {
//   const router = useRouter();
//   const searchParams = useSearchParams();

//   // PAGINATION HANDLER
//   const onPageChange = (action: string) => {
//     const pageValue = action === "next" ? Number(page) + 1 : Number(page) - 1;

//     const newUrl = formUrlQuery({
//       searchParams: searchParams.toString(),
//       key: "page",
//       value: pageValue,
//     });

//     router.push(newUrl, { scroll: false });
//   };

//   return (
//     <>
//       <div className="collection-heading">
//         <h2 className="h2-bold text-dark-600">Recent Founds</h2>
//         {hasSearch && <Search />}
//       </div>

//       {images.length > 0 ? (
//         <ul className="collection-list">
//           {images.map((image) => (
//             <Card image={image} key={image._id} />
//           ))}
//         </ul>
//       ) : (
//         <div className="collection-empty">
//           <p className="p-20-semibold">Empty List</p>
//         </div>
//       )}

//       {totalPages > 1 && (
//         <Pagination className="mt-10">
//           <PaginationContent className="flex w-full">
//             <Button
//               disabled={Number(page) <= 1}
//               className="collection-btn"
//               onClick={() => onPageChange("prev")}
//             >
//               <PaginationPrevious className="hover:bg-transparent hover:text-white" />
//             </Button>

//             <p className="flex-center p-16-medium w-fit flex-1">
//               {page} / {totalPages}
//             </p>

//             <Button
//               className="button w-32 bg-purple-gradient bg-cover text-white"
//               onClick={() => onPageChange("next")}
//               disabled={Number(page) >= totalPages}
//             >
//               <PaginationNext className="hover:bg-transparent hover:text-white" />
//             </Button>
//           </PaginationContent>
//         </Pagination>
//       )}
//     </>
//   );
// };

// const Card = ({ image }: { image: IImage }) => {
//   return (
//     <li>
//       <Link href={`/transformations/${image._id}`} className="collection-card">
//         <CldImage
//           src={image.publicId}
//           alt={image.title}
//           width={image.width}
//           height={image.height}
//           {...image.config}
//           loading="lazy"
//           className="h-52 w-full rounded-[10px] object-cover"
//           sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
//         />
//         <div className="flex-between">
//           <p className="p-20-semibold mr-3 line-clamp-1 text-dark-600">
//             {image.title}
//           </p>
//           <Image
//             // src={`/assets/icons/${
//             //   transformationTypes[
//             //     image.transformationType as TransformationTypeKey
//             //   ].icon
//             // }`}
//             src={"/assets/icons/camera.svg"}
//             alt={image.title}
//             width={24}
//             height={24}
//           />
//         </div>
//       </Link>
//     </li>
//   );
// };