import unsplash from '../lib/unsplash';

export async function getImage(query) {
   const res = await unsplash.search.getPhotos({ 
      query, 
      orientation: 'landscape',
      perPage: 1,
      contentFilter: 'low',
      orderBy: 'relevant'
   });
   // console.log(res);

   return res.response.results[0].urls.thumb;
} 

// export async function getImage(query) {
//    const res = await unsplash.search.getPhotos({ 
//       query, 
//       orientation: 'portrait',
//       perPage: 1,
//    });
//    console.log(res);

//    return res.response.results[0].urls.thumb;
// } 