import * as React from "react";
import Svg, { Path, G } from "react-native-svg";

export default function SvgComponent(props) {
  return (
    <Svg id="Camada_2" data-name="Camada 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 82.28 63.33" {...props}>
      <G id="Camada_1-2" data-name="Camada 1">
        <G>
          <Path class="cls-1" d="m6.13.88l28.59,32.44c1.62,1.84,3.97,2.9,6.43,2.9s4.8-1.06,6.43-2.9L75.66,1.44c.23-.26.51-.47.8-.63-1.19-.52-2.5-.81-3.89-.81H9.71c-1.32,0-2.58.27-3.73.75.05.05.1.09.15.14Z" />
          <Path class="cls-1" d="m80.79,4.55c-.13.33-.3.65-.55.93l-28.1,31.88c-2.78,3.16-6.79,4.97-11,4.97s-8.22-1.81-11-4.97L1.55,4.91c-.06-.07-.1-.14-.15-.21-.88,1.46-1.4,3.17-1.4,5v43.91c0,5.36,4.35,9.71,9.71,9.71h62.86c5.36,0,9.71-4.35,9.71-9.71V9.71c0-1.9-.55-3.66-1.49-5.16Z" />
        </G>
      </G>
    </Svg>
  )
}