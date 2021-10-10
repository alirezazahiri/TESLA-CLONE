import React, { useEffect } from "react";
import styled from "styled-components";
import Section from "./common/Section";

// redux
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../redux/cars/carsAction";
import Detail from "./common/Detail";

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
      <Section image="new-interior.jpg" title="All New Interior" id="5" />
      <Section
        image="solar-panel.jpg"
        id="6"
        title="Lowest Cost Solar Panels in America"
        description="Money-back guarantee"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
      />
      <Section
        image="solar-roof.jpg"
        id="7"
        title="Solar for New Roofs"
        description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
      />
      <Section
        image="accessories.jpg"
        id="8"
        title="Accessories"
        leftBtnText="Shop Now"
      />
      <Details>
        <Detail
          title="Game from Anywhere"
          description="Up to 10 terallops of processing power enables in-car gaming on-par with today's newest consoles. Wireless controller compatibility lets you game from any seat."
          image="/images/game.jpg"
          direction="right"
        />
        <Detail
          title="Stay Connected"
          description="Multi-device Bluetooth, wireless and USB-C charging for every passenger, with enough power to fast-charge your tablets and laptops."
          image="/images/connected.jpg"
          direction="left"
        />
        <Detail
          title="Your Best Audio System"
          description="Experience a great audio System, which spreads the voices in the whole room."
          image="/images/audio.jpg"
          direction="right"
        />
      </Details>
    </Container>
  ) : (
    "Loading..."
  );
};

const Container = styled.div`
  height: 100vh;
  z-index: 10;
`;

const Details = styled.div`
  background: #000;
  padding: 100px;
  scroll-snap-align: start;
`;

export default Home;
