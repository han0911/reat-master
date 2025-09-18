import { useOutletContext } from "react-router-dom";
interface Context{
    myusername:string
}
function Followers() {
  const {myusername} = useOutletContext<Context>();
  return (
    <div>
      <h1>{myusername}나의 팔로워</h1>
    </div>
  );
}
export default Followers;
