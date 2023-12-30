import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchproducts } from "./rtk/slices/products-slice";
import { addtoCArt, deletFromCart } from "./rtk/slices/Cart-slice";
import { TbArrowsShuffle } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { FaAnglesDown } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa6";

import "./style/Product.css";
import "./../comp/style/Container-prod.css";

function Products() {
  const products = useSelector((state) => state.products);
  console.log(products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchproducts());
  });

  return (
    <div>
      <Container fluid className="py-5 ">
        <Row className="py-5 Row">
          {products?.map((product) => (
            <Col className="py-5  Container-prod" key={product.id}>
              <Card style={{ width: "18rem" }}>
                <div className="Card-img-data">
                  <img className="img-product" src={product.image} alt="" />
                  <h2>{product.title}</h2>

                  <div className="card-icon">
                    <div className="circle">
                      <TbArrowsShuffle className="shuffle" />
                    </div>
                    <div className="circle">
                      <FaRegHeart className="heart" />
                    </div>
                    <div className="circle">
                      <CiUser className="user" />
                    </div>
                  </div>
                </div>

                <div className="Price">
                  <h5>{product.price}$</h5>
                  <h6>
                    {" "}
                    $99.00
                    <span></span>
                  </h6>
                </div>

                <Card.Body>
                  <Button
                    variant="primary btn1"
                    onClick={() => dispatch(addtoCArt(product))}
                  >
                    Add to cart <FaAnglesDown className="download" />{" "}
                  </Button>
                  <Button
                    variant="danger m-3 btn2 "
                    onClick={() => dispatch(deletFromCart(product))}
                  >
                    {" "}
                    Remove <FaArrowUp className="removee" />
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Products;
