import React, { useEffect } from "react";
import "./Product.css";
import { useDispatch,useSelector } from "react-redux";
import { getProducts } from "../../Js/Actions/product";
import ProductCard from "../../Component/ProductCard/ProductCard";
import { Button } from "react-bootstrap";

const Products = ({ filtredProducts }) => {
  const allowedAdminId = "6500ad79f959769b7043502a"; // ID autorisé à accéder au profil admin
  const user = useSelector((state) => state.userReducer.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div>
      <h1 className="Produit">NOS PRODUITS</h1>
      <div className="help">
        <p>
          Besoin d'aide pour choisir?{" "}
          <a href="tel:+216-78443500">Appelez-nous</a>{" "}
        </p>
      </div>
      <div>
       
         {user?._id=== allowedAdminId ? <Button className="v33" variant="light" href="/addproduct">
            <span className="v3">Ajouter produit</span>
          </Button>: null}
       
        <div className="productcontainer12">
          <div className="productlist">
            {filtredProducts.length > 0 ? (
              filtredProducts.map((el) => (
                <ProductCard product={el} key={el.id} />
              ))
            ) : (
              <p>No result</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
