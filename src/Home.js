import { useState, useEffect } from 'react';
import Bloglist from './Bloglist';

const Home = () => {
     //eslint-disable-next-line
    const [blogs, setBlogs] = useState(null);
     
    const [isPending, setIsPending] = useState(true);
      
       
   
    return ( 
        <div className="Home">
         { isPending && <div>Loading...</div> }
          {blogs && <Bloglist blogs={blogs} title={"All blogs!"} /> }          
        </div>
     );
}
 
export default Home;