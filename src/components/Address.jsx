import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Address() {
  const { userid } = useParams();
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/" + userid)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.address);
        setUser(data.address);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      {user && (
        <div>
          <ul>
            <li>{user.street}</li>
            <li>{user.city}</li>
            <li>{user.street}</li>
          </ul>
        </div>
      )}
    </>
  );
}
export default Address;
