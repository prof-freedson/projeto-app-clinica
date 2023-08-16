import * as React from "react";
import Svg, { Circle, Path, G } from "react-native-svg";

export default function SvgComponent(props) {
  return (
    <Svg
      id="Camada_2"
      data-name="Camada 2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 65.97 83.28"
      {...props}
    >
      <G id="Camada_1-2" data-name="Camada 1">
        <G>
          <Circle
            class="cls-1"
            cx="32.98"
            cy="17.78"
            r="17.78"
            transform="translate(-4.3 14.05) rotate(-22.61)"
          />
          <Path
            class="cls-1"
            d="m32.99,41.64h0C14.77,41.64,0,56.41,0,74.63h0c0,4.78,3.88,8.66,8.66,8.66h48.66c4.78,0,8.66-3.88,8.66-8.66h0c0-18.22-14.77-32.98-32.98-32.98Z"
          />
        </G>
      </G>
    </Svg>
  );
}
