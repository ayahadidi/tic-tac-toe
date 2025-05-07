import CartoonCard from "../components/cartoonCard/cartoonCard";
import { useState, useEffect } from "react";
import { Cartoon } from "../types/cartoon";
import "./Home.css";
import Pagination from "../components/Pagination/Pagination";

export default function Home() {
  const [cartoons, setCartoons] = useState<Cartoon[]>([]);
  const [currentPage, setCurrentpage] = useState(1);
  const itemsPerpage = 6;
  const first = (currentPage - 1) * itemsPerpage;
  const last = currentPage * itemsPerpage;
  const totalPages = Math.ceil(cartoons.length / itemsPerpage);
  const currentItems = cartoons.slice(first, last);

  useEffect(() => {
    fetch("https://api.sampleapis.com/cartoons/cartoons2D")
      .then((res) => res.json())
      .then((json) => {
        setCartoons(json);
      })
      .catch((error) => {
        console.error("Failed to fetch cartoons:", error);
      });
  }, []);

  return (
    <div className="home-containor">
      <h1 className="home-title"> 2D Cartoons </h1>
      <div className="cartoon-grid">
        {currentItems.map((cartoon) => (
          <CartoonCard key={cartoon.id} cartoon={cartoon} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentpage(page)}
      />
    </div>
  );
}
