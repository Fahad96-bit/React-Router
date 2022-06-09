import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function ItemDetails(match) {
  const [itemss, setItem] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const datas = await fetch(
      `https://fortnite-api.theapinetwork.com/item/get?id=${id}
      `
    );
    const {
      data: { item },
    } = await datas.json();
    setItem(item);
    console.log("items", item);
  };

  return (
    <div>
      <h1>Item Details</h1>
      {Object.keys(itemss).length !== 0 ? (
        <div>
          <h1>{itemss.name}</h1>
          <h1>{itemss.rarity}</h1>
          <img src={itemss.images.background} alt="" />
        </div>
      ) : (
        <p>pls wait item is being fetched</p>
      )}
    </div>
  );
}

export default ItemDetails;

// {items.map(({ item, itemId }) => (
//     <h1>
//       <Link to={`/shop/${itemId}`}>{item.name}</Link>
//     </h1>
//   ))}
