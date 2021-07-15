import React,{ useState , useEffect } from "react";
import Card from "./components/Card";
function App() {
  const [images,setimages]=useState([]);
  const [isloading,setisloading]=useState(true);
  const [term,setterm]=useState('');
  useEffect(()=>{
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXA_KEY}&q=${term}&image_type=photo&pretty=true`)
    .then(res=>res.json())
    .then(data=>{
      setimages(data.hits);
      setisloading(false);
    })
    .catch(err=> console.log(err));
  },[]);

  return (
    <div className="container mx-auto" >
     <div className="grid grid-cols-3 gap-3">
       {images.map(image=>(
        <Card
        key={image.id}
        image={image}
        />
       ))}
     </div>
    </div>
  );
}

export default App;
