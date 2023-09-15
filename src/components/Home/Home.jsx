import { useEffect, useState } from "react";

const Home = () => {

    const [allCourse, setAllCourse ] = useState([]);
    console.log(allCourse);

    useEffect((()=>{

        fetch('data.json')
        .then(res=>res.json())
        // .then(data=>console.log(data))
        .then(data=>setAllCourse(data))
    }),[])


    return (
        <>

       
    <div className="flex justify-evenly">

         

         <div className="w-3/4">
         <h2 className="text-xl text-center font-semibold">Course:{allCourse.length} </h2>
         {/* card-container */}
         <div className="grid lg:grid-cols-3 gap-5">
 
            {

            allCourse.map(course=>{
                return(<div key={course.id} className="bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={course.image} alt="" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title"> {course.course_name}</h2>
                        <p>{course.course_details}</p>

                        <div className="flex justify-evenly">
                            <h3>Price {course.price}</h3>
                            <h2>Credit {course.credit}hr</h2>
                        </div>
                        <div className="card-actions">
                        <button className="btn btn-primary">Select</button>
                        </div>
                    </div>
                    </div>
                )
            })

            }
 
         </div>
         </div>

        {/* cart section */}

        <div className="w-1/4 bg-orange-400">

        <h1>All cart</h1>

        </div>


    </div>


      
        
        
        </>
        
    );
};

export default Home;