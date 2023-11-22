import { useEffect, useState } from "react";
import {useParams, Link} from 'react-router-dom';
import "./albums.css";

export default function Albums() {
  const {userId} = useParams();
  const [albums, setAlbums] = useState([]);


  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
      .then((response) => response.json())
      .then((data) => setAlbums(data));
  }, [userId]);

  return (
    <>
    <Link to="/" className="back">Home</Link>
    <Link className="go" to={`/photos/${userId}`}>Photos</Link>
    <ul className="albums">
      {albums.map((album) => {
        return (
          <div className="albums__wrap">
          <li className="li" key={album.id}>{album.title}</li>
          </div>
        );
      })}
    </ul>
    </>
  );
}