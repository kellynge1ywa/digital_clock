//useEffect - React hook that tells react to do something when :
//                                 -The component rerenders
//                                  The component mounts
//                                   The state of a value changes
// useEffect(function,[dependencies])
// 1. useEffect(()=>{})            //Runs after every rerenders
// 2. useEffect(()=>{},[])        //Runs only on mount
//  3. useEffect(()=>{},[value])  //Runs on mount + when value changes

//USES
// 1. Event listeners
// 2. DOM manipulation
// 3.Fetching data from an API
// 4. Subscriptions
//  5. Clean up when component unmounts
function UseEffect()
{
    return (
        <div>
            <div>
                <h2>Our clock</h2>
                <span>00:00:00</span>
            </div>
        </div>
    );
}
export default UseEffect;