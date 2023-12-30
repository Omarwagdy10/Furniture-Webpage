import React from "react";
import { Button, Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { Clear, deletFromCart } from "./rtk/slices/Cart-slice";

function Cart() {
  const cart = useSelector((state) => state.Cart);

  const dispatch = useDispatch();
  const totalPrice = cart.reduce((acc, product) => {
    acc += product.price;
    return acc;
  }, 0);
  var x = 0;
  return (
    <Container>
      <h1 className="py-5">Welcome to cart</h1>
      <h5>Total Price:{totalPrice.toFixed(2)}</h5>

      <Button
        variant="danger"
        className="mb-3"
        onClick={() => dispatch(Clear())}
      >
        clear
      </Button>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Img</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((product) => (
            <tr key={product.id}>
              <td>{x++}</td>
              <td>{product.title}</td>
              <td>
                <img
                  style={{ height: "100px", width: "100px" }}
                  src={product.image}
                  alt=""
                />
              </td>
              <td>{product.price}</td>
              <td>
                <Button
                  variant="danger"
                  onClick={() => dispatch(deletFromCart(product))}
                >
                  delete{" "}
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default Cart;
