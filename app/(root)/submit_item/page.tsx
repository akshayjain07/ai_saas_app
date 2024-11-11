// import dynamic from 'next/dynamic';
// import { transformationTypes, header } from '@/constants'
// import Header from '@/components/shared/Header'
// import MediaCard from '@/components/shared/MediaCard';

// const MapComponent = dynamic(() => import('../../../components/shared/MapComponent'), { 
//   ssr: false 
// });

// const Submit_item = () => {
//   return (
//     <div>
//       <Header  
//         title={header.submit_item.title}
//         subtitle={header.submit_item.subtitle}
//       />
//       <MapComponent />
      
//       {/* Flex container for Media Cards */}
//       <div className="flex flex-wrap justify-between gap-4">
//         <MediaCard className="w-full sm:w-1/2 md:w-1/3 h-32ss w-64" />
//         <MediaCard className="w-full sm:w-1/2 md:w-1/3 h-32ss w-64" />
//         <MediaCard className="w-full sm:w-1/2 md:w-1/3 h-32ss w-64" />
//       </div>
//     </div>
//   );
// };

// export default Submit_item;


import dynamic from 'next/dynamic';
import { transformationTypes, header } from '@/constants'
import Header from '@/components/shared/Header'
import MediaCard from '@/components/shared/MediaCard';

const MapComponent = dynamic(() => import('../../../components/shared/MapComponent'), { 
  ssr: false 
});

const Submit_item = () => {
  return (
    <div>
      <Header  
        title={header.submit_item.title}
        subtitle={header.submit_item.subtitle}
      />
      <MapComponent />
      <MediaCard/>
      <MediaCard/>
      <MediaCard/>
    </div>
  );
};

export default Submit_item;
