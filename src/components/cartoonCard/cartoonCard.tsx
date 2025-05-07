import "./cartoonCard.css";
import { Cartoon } from "../../types/cartoon";
import { Link } from "react-router-dom";
import spongpop from "../../assets/spongpop.png";

type Props = {
  cartoon: Cartoon;
};

export default function CartoonCard({ cartoon }: Props) {
  return (
    <Link to={`/cartoon/${cartoon.id}`} className="card-link">
      <div className="card">
        <img
          src={cartoon.image}
          className="card-image"
          onError={(e) => {
            e.currentTarget.src = spongpop;
          }}
        />
        <div>
          <h2 className="card-title"> {cartoon.title}</h2>
        </div>
      </div>
    </Link>
  );
}
