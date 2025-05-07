import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Cartoon } from "../types/cartoon";
import "./CartoonDetail.css";
import spongpop from "../assets/spongpop.png";

export default function CartoonDetail() {
  const { id } = useParams(); //بتخليني اخد الباراميترز من اللينك
  const [cartoon, setCartoon] = useState<Cartoon | null>(null);

  useEffect(() => {
    fetch("https://api.sampleapis.com/cartoons/cartoons2D")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item: Cartoon) => item.id.toString() === id);
        setCartoon(found);
      });
  }, [id]);

  if (!cartoon) return <div>Loading...</div>;

  return (
    <div className="detail-wrapper">
      <img
        src={cartoon.image}
        alt={cartoon.title}
        className="detail-image"
        onError={(e) => {
          e.currentTarget.src = spongpop;
        }}
      />
      <div className="detail-info">
        <h1>{cartoon.title}</h1>
        <p>
          <strong>creator: </strong>
          {cartoon.creator}{" "}
        </p>
        <p>
          <strong>episodes: </strong>
          {cartoon.episodes}{" "}
        </p>
        <p>
          <strong>genre: </strong>
          {cartoon.genre}{" "}
        </p>
        <p>
          <strong>id: </strong>
          {cartoon.id}{" "}
        </p>
        <p>
          <strong>rating: </strong>
          {cartoon.rating}{" "}
        </p>
        <p>
          <strong>year: </strong>
          {cartoon.year}{" "}
        </p>
      </div>
    </div>
  );
}
