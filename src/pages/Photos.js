import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./photos.css";

export default function Albums() {
  const { albumId } = useParams();
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
      .then((response) => response.json())
      .then((data) => setPhotos(data));
  }, [albumId]);

  return (
    <>
    <Link className="back" to="/">Home</Link>
    <Link className="go" to={`/albums/${albumId}`}>Albums</Link>
    <ul className="photos">
      {photos.map((photo) => {
        return (
          <li className="li__ph" key={photo.id}>
            <img src={photo.thumbnailUrl} alt={photo.title} />
          </li>
        );
      })}
    </ul>
    </>
  );
}
