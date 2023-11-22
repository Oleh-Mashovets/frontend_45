import { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import "./list.css";

export default function List() {
  const [users, setUsers] = useState([]);


  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  
  return (
    <div className="wrapper">
      {users.map((item) => {
        return (
          <div className="item" key={item.id}>
            <div className="item__info">
              <span className="placeholder">name:</span>
              <span className="info">{item.name}</span>
              <span className="placeholder">username:</span>
              <span className="info">{item.username}</span>
              <span className="placeholder">email:</span>
              <span className="info">{item.email}</span>
              <span className="placeholder">website:</span>
              <span className="info">{item.website}</span>
            </div>
            <div className="item__buttons">
              <Link to={`/albums/${item.id}`} className="btn">Albums</Link>
              <Link to={`/photos/${item.id}`} className="btn">Photos</Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
