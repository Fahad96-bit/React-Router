import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Shop() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const datas = await fetch(
      "https://fortnite-api.theapinetwork.com/items/list"
    );
    const { data } = await datas.json();
    setItems(data);
    console.log("items", data);
  };

  return (
    <div>
      <h1>Shop</h1>
      {items.map(({ item, itemId }) => (
        <h1>
          <Link to={`/shop/${itemId}`}>{item.name}</Link>
        </h1>
      ))}
    </div>
  );
}

export default Shop;
