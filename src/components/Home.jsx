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
          {...car}
          rightBtnText="Custom Order"
          leftBtnText="Existing Inventory"
        />
      ))}
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
