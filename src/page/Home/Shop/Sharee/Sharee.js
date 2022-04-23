import { useEffect, useState } from "react";
import SingleSharee from "../SingleSharee/SingleSharee";

const Sharee = () => {
    const [sharee, setSharee] = useState([]);
    useEffect( () => {
        fetch('sharee.json')
        .then(res => res.json())
        .then(data => setSharee(data))
    } ,[])
    return (
        <div className='row'>
            <h3 className="text-primary">Sharee Collection</h3>
            {
                sharee.map(singleSharee => <SingleSharee 
                    key={singleSharee.id}
                    singleSharee = {singleSharee}
                ></SingleSharee>)
            }
        </div>
    );
};

export default Sharee;