import React, { useEffect, useState } from 'react'
import axios from 'axios'

const MainPart = () => {
    const [gurumukhi,setgurumukhi] = useState();
    const [english,setenglish] = useState();
    const [loading,setLoading] = useState('false');

    useEffect(()=>{
        async function fetchData(){
            try{
                setLoading(true);
        const response = await axios.get('https://innovative-backend.vercel.app/response')
          
        const newReponse = Object.entries(response.data);
        const newArra = newReponse[2][1];
        const newArr= [];

        const len = newArra.length;
        for(let i=0;i<len;i++){
            newArr[i] = Object.entries(newArra[i])
            

        };
        
        
        let newGurumukhi =[];
        let newEnglish =[];
        for(let i=0;i<newArr.length;i++){
            let a = newArr[i];
            let newlet=Object.entries(a[0][1]);
            
            newGurumukhi[i] = Object.entries(newlet[2][1]);
            newEnglish[i] = Object.entries(newlet[4][1]);
            

            

        };


        let finalEnglish = [];

        for(let i=0;i<newEnglish.length;i++){
            let a = newEnglish[i][0];
            finalEnglish[i] = Object.entries(a[1]);

        }
        let allfinalEnglish = [];
        let allfinalGurumukhi = [];

        for(let i=0;i<finalEnglish.length;i++){

            let a= finalEnglish[i][0]
            allfinalEnglish[i] = a[1];
        }
        for(let i=0;i<newGurumukhi.length;i++){

            let a= newGurumukhi[i][1]
            allfinalGurumukhi[i] = a[1];
        }

        setenglish(allfinalEnglish);
        setgurumukhi(allfinalGurumukhi);


       




        
         
      

        
         console.log(response.data)
        



            }
            catch(error){
                console.log(error.message)
            }
            finally{
                setLoading(false)
            }


        }

        fetchData();

    },[]);


    if(loading){

        return(
        <div>Loading..</div>


        )
    }

    let i=0;

  return (
    <div className='flex justify-center mt-12' >
    <div className=' bg-gray-400 bg-opacity-40 border w-4/5 rounded-xl mb-20 '>
    
    {
        gurumukhi.map((item,index)=>(
            <div key={index} className='text-center  p-4 font-mono font-2xl'>
            <div className='font-mono text-3xl font-bold'>
                {item}
                </div>
                
             <div className='font-mono text-xl font-light'>
            {english[i++]}
            </div>
                
                
            </div>

        ))}
       
    </div>

      
    </div>
  )
}

export default MainPart
