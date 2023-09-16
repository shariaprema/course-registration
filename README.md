### Questions-1: Add at least 3 Project features.

Answer:
- Course selection.
- Calculate total credit hour.
- Calculate total course price.



### Questions-2: Discuss how you managed the state in your assignment project?

   Answer:

   In my assignment project, i used five usestate. The useState hook is used to manage state within functional components. Here's a concise explanation of how it works:



1. #### Effect Handling:
   State changes can trigger side effects using the useEffect hook to handle fetch json API data and store in the state.

2. #### Initialization:
   useState initializes a state variable and returns an array with two elements: the current state value and a function to update the state.

   Example: const [allCourse, setAllCourse ] = useState([]);
 
3. #### Usage: 
   When i get all api data in state variable 'allCourse'. Then i used even handler, the state variable (allCourse in this case) in our component to display or manipulate the state.

   example: 
   <button onClick={()=> handleAllCourse(course)}</button>


4. #### Updating State:
   When i called the state update function (setAllCourse), React re-renders the component with the updated state value.
   State updates can be based on the current state or directly provide a new state value.


   Basically state store the array data Which i want to store in state. And we can send them as prob and use them wherever needed
   









