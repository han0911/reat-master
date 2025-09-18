import { Link, Outlet, useParams } from "react-router-dom";
import { user } from "../db";
function User() {
  const { userid } = useParams();
  return (
    <>
      <h1>
        user {userid} {user[Number(userid) - 1].name}
      </h1>
      <hr></hr>
      <Link to={"followers"}>see follwoers</Link>
      <Outlet
        context={{
          myusername: user[Number(userid) - 1].name,
        }}
      />
    </>
  );
}
export default User;
