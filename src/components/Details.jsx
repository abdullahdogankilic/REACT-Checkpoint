import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function Details() {
  const { userid } = useParams();
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/" + userid)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUser(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      {user && (
        <div>
          <ul>
            <li>{user.name}</li>
            <li>{user.email}</li>
            <li>{user.address}</li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Details;
