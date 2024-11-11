import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// Importing the image from the public directory
import iguanaImage from '@/public/assets/images';

const MediaCard: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center m-10">
    {/* // <div className="m-10 flex flex-wrap justify-center gap-1"> */}
      {/* First Card */}
      <Card sx={{ maxWidth: 345 }} className="w-full sm:w-1/2 md:w-1/3">
        <CardMedia
          sx={{ height: 140 }}
          image="/assets/images/canteen.jpg"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Canteen
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            You can collect your item from Anuj Bhaiya at the Canteen. Contact him at +91-9876543210 for details.
          </Typography>
        </CardContent>
        {/* <CardActions>
          <Button size="small">Canteen</Button>
          <Button size="small">Learn More</Button>
        </CardActions> */}
        <CardActions>
  <Button size="small">
    <img src="https://cdn-icons-png.flaticon.com/512/724/724664.png" alt="Phone Icon" style={{ width: '16px', marginRight: '8px' }} />
    Canteen
  </Button>
  <Button size="small">
    <img src="https://cdn-icons-png.flaticon.com/512/724/724664.png" alt="Phone Icon" style={{ width: '16px', marginRight: '8px' }} />
    Sahyog
  </Button>
</CardActions>

      </Card>

      
      {/* <Card sx={{ maxWidth: 345 }} className="w-full sm:w-1/2 md:w-1/3">
        <CardMedia
          sx={{ height: 140 }}
          image="/assets/images/findo.jpg"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>

      
      <Card sx={{ maxWidth: 345 }} className="w-full sm:w-1/2 md:w-1/3">
        <CardMedia
          sx={{ height: 140 }}
          image="/assets/images/findo.jpg"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card> */}
    </div>
  );
}

export default MediaCard;


// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

// // Importing the image from the public directory
// import iguanaImage from '@/public/assets/images/findo.jpg';

// const MediaCard: React.FC = () => {
//   return (
//     <div className='m-10'>
//         <Card sx={{ maxWidth: 345 }}>
//         <CardMedia
//             sx={{ height: 140 }}
//             image="/assets/images/findo.jpg"
//             // component="img" // This will use the 'img' element for the image source
//             // image={iguanaImage} // Pass the imported image here
//             title="green iguana"
//         />
//         <CardContent>
//             <Typography gutterBottom variant="h5" component="div">
//             Lizard
//             </Typography>
//             <Typography variant="body2" sx={{ color: 'text.secondary' }}>
//             Lizards are a widespread group of squamate reptiles, with over 6,000
//             species, ranging across all continents except Antarctica.
//             </Typography>
//         </CardContent>
//         <CardActions>
//             <Button size="small">Share</Button>
//             <Button size="small">Learn More</Button>
//         </CardActions>
//         </Card>
//         <Card sx={{ maxWidth: 345 }}>
//         <CardMedia
//             sx={{ height: 140 }}
//             image="/assets/images/findo.jpg"
//             // component="img" // This will use the 'img' element for the image source
//             // image={iguanaImage} // Pass the imported image here
//             title="green iguana"
//         />
//         <CardContent>
//             <Typography gutterBottom variant="h5" component="div">
//             Lizard
//             </Typography>
//             <Typography variant="body2" sx={{ color: 'text.secondary' }}>
//             Lizards are a widespread group of squamate reptiles, with over 6,000
//             species, ranging across all continents except Antarctica.
//             </Typography>
//         </CardContent>
//         <CardActions>
//             <Button size="small">Share</Button>
//             <Button size="small">Learn More</Button>
//         </CardActions>
//         </Card>
//         <Card sx={{ maxWidth: 345 }}>
//         <CardMedia
//             sx={{ height: 140 }}
//             image="/assets/images/findo.jpg"
//             // component="img" // This will use the 'img' element for the image source
//             // image={iguanaImage} // Pass the imported image here
//             title="green iguana"
//         />
//         <CardContent>
//             <Typography gutterBottom variant="h5" component="div">
//             Lizard
//             </Typography>
//             <Typography variant="body2" sx={{ color: 'text.secondary' }}>
//             Lizards are a widespread group of squamate reptiles, with over 6,000
//             species, ranging across all continents except Antarctica.
//             </Typography>
//         </CardContent>
//         <CardActions>
//             <Button size="small">Share</Button>
//             <Button size="small">Learn More</Button>
//         </CardActions>
//         </Card>
//     </div>
//   );
// }

// export default MediaCard;
