import { useEffect, useState } from "react";
import { GoBook } from "react-icons/go";
import { FiDollarSign } from "react-icons/fi";
import Cart from "../Cart/Cart";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Home = () => {

    const [allCourse, setAllCourse ] = useState([]);
    const [selectedCourse, setSelectedCourse ] = useState([]);

    useEffect((()=>{

        fetch('data.json')
        .then(res=>res.json())
        // .then(data=>console.log(data))
        .then(data=>setAllCourse(data))
    }),[])

    
    const handleAllCourse = (course) =>{
        const isExist = selectedCourse.find((item)=> item.id == course.id);
        if(isExist){
            return toast.warn("This Course Already selected !!",{
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
        else{
            setSelectedCourse([...selectedCourse,course]);
        }

  
    }


    return (
        <>
       
    <div className="flex justify-evenly">

         

         <div className="w-3/4">
         <h2 className="text-xl text-center font-semibold">Course:{allCourse.length} </h2>
         {/* card-container */}
         <div className="grid lg:grid-cols-3 gap-8">
 
            {
                allCourse.map(course=>{
                return(<div key={course.id} className="w-[312px] h-[370px] rounded-lg bg-[#fff] shadow-xl ">
                    <figure className="px-5 pt-5">
                        <img src={course.image} alt="" className="rounded-xl" />
                    </figure>
                    <div className="items-center text-center px-2 m-3">
                        <div>
                            <h2 className="text-lg text-[#1C1B1B] font-semibold mt-3"> {course.course_name}</h2>
                            <p className="text-[#1C1B1B99] text-sm font-normal mt-3 text-justify">{course.course_details}
                            </p>
                        </div>

                        < div className="flex justify-between text-sm font-medium text[#1C1B1B99] mt-3">
                           
                            <h2 className="flex"><span className="mt-1 w-[24px] h-[24px]"><FiDollarSign/></span>Price:{course.price}</h2> 
                           
                            <h2 className="flex"><span className=" w-[24px] h-[24px] mt-1 mb-1 "><GoBook/></span>Credit: {course.credit}hr</h2>
                        </div>


                        <div className=" ">
                        <button onClick={()=> handleAllCourse(course)} className="btn hover:bg-[#2F80ED] bg-[#2F80ED] text-[#fff] w-[270px] h-[40px] mt-3 mx-auto p-2">Select</button>
                        </div>
                    </div>
                    </div>
                )
            })

            }
 
         </div>
         </div>

        {/* cart section */}

        <div className="w-1/4">
            <h2>length course:{selectedCourse.length }</h2>
            <Cart selectedCourse={selectedCourse}></Cart>

        </div>


    </div>



    <ToastContainer />

    </>
        
    );
};

export default Home;