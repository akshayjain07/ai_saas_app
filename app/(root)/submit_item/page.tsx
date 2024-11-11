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
    </div>
  );
};

export default Submit_item;
