import React from "react";
import { Button, Card } from "react-bootstrap";
import "./ProductCard.css";
import { useDispatch,useSelector } from "react-redux";
import { deleteProduct } from "../../Js/Actions/product";
import { useNavigate } from "react-router-dom";
import cart from "./cart.png";


const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const allowedAdminId = "6500ad79f959769b7043502a"; // ID autorisé à accéder au profil admin
  const user = useSelector((state) => state.userReducer.user);

 

  const handleDelete = (e) => {
    e.preventDefault();
    if (product) {
      dispatch(deleteProduct(product._id));
      window.location.reload();
    }
  };

  // Vérification de l'existence de 'product' avant d'y accéder
 

  return (
    <div>
      <Card style={{ width: "17rem" }} className="j17">
        <Card.Body>
        
          <div>
            <Card.Img
              variant="top"
              className="productimage"
              src={`uploads/${product.imageURL}`}
              width="50%"
            />
          </div>
          <Card.Text>{product.name}</Card.Text>
          <Card.Text>
            <span className="forms">Ref :</span> {product.reference}
          </Card.Text>
          <Card.Text> <span className="forms">Prix :</span>{product.prix} DT</Card.Text>

          <p
            className="plusprdct"
            onClick={() => navigate(`/description/${product._id}`)}
          >
            En savoir plus →
          </p>
          <Button
            className="btnproduct"
            variant="light"
            href="tel:+216-78443500"
          >
            {" "}
            <span className="v44">Appelez pour commander</span>
          </Button>
          <div
            className="button5"
            onClick={() => navigate(`/addorder/${product._id}`)}
          >
            {" "}
            Passer une commande <img
              src={cart}
              className="cart"
              alt="img"
            />{" "}
          </div>

          
            {user?._id=== allowedAdminId ? <Button variant="danger" onClick={handleDelete}>
              Supprimer produit
            </Button>: null}
         
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCard;
