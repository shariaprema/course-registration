const Cart = ({selectedCourse}) => {
    return (
        <div>

            <div className="w-[312px] rounded-lg bg-[#fff] shadow-xl px-4 mx-8">
                <div className="m-2">
                <h1 className="text-lg font-bold text-[#2F80ED] pt-3 pb-3">Credit Hour Remaining: 7 hr</h1>
                
                <hr />
             
                Completed selected cource name section using event-handler in button. When i clicked the button then course name was displayed in the cart section

                git add .
                git commit -m "Completed selected cource name section using event-handler in button. When i clicked the button then course name was displayed in the cart section
"
                
                
                
               <div className="pb-5">
                <h1 className="text-xl font-bold text-[#1C1B1B] pt-3 pb-2">Course Name</h1>
              
                    {
                        selectedCourse.map((course, idx)=>{
                            return(<li className="list-decimal pt-2 " key={idx}>{course.course_name}</li>
                            )
                        })
                    }

               </div>
                <hr />

                <h1 className="text-base font-medium text-[#1C1B1BCC] pt-3 pb-3">Total Credit Hour :</h1>
                <hr />
                <h1 className=" text-base font-semibold text-[#1C1B1BCC] pt-3 pb-3">Total Price :  USD :</h1>
                <hr />

                </div>
            </div>
            
        </div>
    );
};

export default Cart;