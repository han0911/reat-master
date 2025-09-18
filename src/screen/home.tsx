import { Link } from "react-router-dom";
import { user } from "../db";
function Home() {
  return (
    <div>
      <ul>
        {user.map((user) => (
          <li key={user.id}>
            <Link to={`/user/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
      <div>홈입니다</div>
    </div>
  );
}
export default Home;
