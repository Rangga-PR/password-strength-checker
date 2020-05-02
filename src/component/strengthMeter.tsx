import React from "react";
import styled from "styled-components";
import { colorPalates } from "../variables";

interface StrengthMeterProps {
  gauge?: number;
}

const StrengthGauge = styled.div`
  position: relative;
  height: 25px;
  width: 314px;
  border-radius: 5px;
  background-color: white;
  margin-top: 10px;
  overflow: hidden;

  ::before {
    content: "";
    position: absolute;
    left: 0;
    height: 100%;
    transition: 0.7s;
    width: ${(props: StrengthMeterProps) => props.gauge}%;
    background-color: ${(props: StrengthMeterProps) => {
      if (props.gauge && props.gauge < 40) return colorPalates.paleRed;
      if (props.gauge && props.gauge < 80) return colorPalates.paleYellow;
      return colorPalates.paleGreen;
    }};
  }
`;

const StrengthMeter = ({ gauge }: StrengthMeterProps) => {
  return <StrengthGauge gauge={gauge} />;
};

export default StrengthMeter;
