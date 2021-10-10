import React, { useEffect } from "react";
import styled from "styled-components";
import Section from "./common/Section";

// redux
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../redux/cars/carsAction";

const Home = () => {
  const state = useSelector((state) => state.carsState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
  }, []);

  return state.cars.length > 0 ? (
    <Container>
      {state.cars.map((car) => (
        <Section
          key={car.id}
          id={car.id}
          {...car}
          rightBtnText="Custom Order"
          leftBtnText="Existing Inventory"
        />
      ))}
      <Section
        image="solar-panel.jpg"
        id="4"
        title="Lowest Cost Solar Panels in America"
        description="Money-back guarantee"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
      />
      <Section
        image="solar-roof.jpg"
        id="5"
        title="Solar for New Roofs"
        description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
      />
      <Section
        image="accessories.jpg"
        id="6"
        title="Accessories"
        leftBtnText="Shop Now"
      />
    </Container>
  ) : (
    "Loading..."
  );
};

const Container = styled.div`
  height: 100vh;
  z-index: 10;
`;

export default Home;
