import PropTypes from 'prop-types';

const Cart = ({selectedCourse, selectedCredit, selectedPrice, remainingCreditHours}) => {

    return (
        <div>

            <div className="w-[312px] rounded-lg bg-[#fff] shadow-xl px-4 mx-8">
                <div>
                <h1 className="text-lg font-bold text-[#2F80ED] pt-3 pb-3">Credit Hour Remaining: {remainingCreditHours} hr</h1>
                
                <hr />
                
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

                <h1 className="text-base font-medium text-[#1C1B1BCC] pt-3 pb-3">Total Credit Hour: {selectedCredit}</h1>
                <hr />
                <h1 className=" text-base font-semibold text-[#1C1B1BCC] pt-3 pb-3">Total Price: {selectedPrice} USD</h1>
                <hr />

                </div>
            </div>
            
        </div>
    );
};

    Cart.propTypes = {
   
        selectedCourse: PropTypes.array,
        selectedCredit: PropTypes.number,
        selectedPrice: PropTypes.number,
        remainingCreditHours: PropTypes.number,

    }
export default Cart;