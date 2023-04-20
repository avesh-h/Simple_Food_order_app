import React from "react";
import { Button, CardBody, Card } from "reactstrap";
import { cartActions } from "../../store/Cart-slice";
import { useDispatch } from "react-redux";

function ProductItem(props) {
  const { title, id, image } = props;

  // console.log(props)
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        image,
      })
    );
  };
  return (
    <Card
      style={{
        width: "100%",
        float: "left",
        backgroundColor: "#474774",
        padding: "20px",
        marginTop: "10px",
      }}
    >
      <img src={image} style={{ width: "100%", height: "300px" }} />
      <CardBody>
        <h4>Title:{title}</h4>
        <h5>Meal Code:{id}</h5>
        <Button color="light" onClick={addToCart}>
          Add To Cart
        </Button>
      </CardBody>
    </Card>
  );
}

export default ProductItem;
