import React, { useState, useEffect } from 'react';


/*const ItemInfoTemplate = ({ item }) => {
    return (
        <div>
            <div className="d-flex align-items-center">
                <div className="mb-3 d-flex justify-content-start align-items-center w-50">
                    <h5 className="card-title m-3">{item.title}</h5>
                    <h6 className="card-subtitle m-2 text-muted">{item.category}</h6>
                </div>
                <div className="mb-3 d-flex justify-content-end align-items-center w-50">
                    <button type="button" className="btn btn-outline-danger m-1" id={`favourite_button-${item.id}`}>
                        <i className="bi bi-heart" id={`heart-icon-${item.id}`}></i>
                    </button>
                    <button type="button" className="btn btn-outline-danger m-1" id={`info_close_button-${item.id}`}>
                        <i className="bi bi-x-lg"></i>
                    </button>
                </div>
            </div>
            <img src={item.image} alt={item.title} className="card-img-top mb-3" style={{ maxWidth: '100%', height: 'auto' }} />
            <div className="card-body">
                <p className="mb-2">{item.description}</p>
                {/!* Include additional item details here *!/}
            </div>
        </div>
    );
}*/

const ItemCard = ({ item }) => (
  <div className="card col col-3 m-2 justify-content-between">
    <img src={item.image} alt={item.title} className="img-thumbnail m-2 row-6" />

    <div className="card-body d-flex flex-column justify-content-end">
      <h5 className="card-title">{item.title}</h5>
      <p className="card-price mb-1">${item.price}</p>
    </div>
    <div className="d-flex align-items-center justify-content-between m-2">
        <button type="button" className="btn btn-outline-danger m-1" id={`favourite_button-${item.id}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
            </svg>
        </button>
        <a href="#" className="btn btn-primary" id={`info_button-${item.id}`}>More Info</a>
    </div>
  </div>
);

const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Fetch items data (you can replace this with your data fetching logic)
    fetch('https://fakestoreapi.com/products')
    .then((response) => response.json())
    .then((data) => setItems(data));
  }, []);

  return (
    <div className="items-container container-xlg">
      <div className="item-list d-flex flex-wrap w-100 justify-content-center">
        {items.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
