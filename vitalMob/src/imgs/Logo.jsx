import React from 'react';
import Svg, { Path, G, Text } from 'react-native-svg';
import { StyleSheet } from 'react-native';

export default function SvgComponent(props) {
  return (
    <Svg
      id="Camada_2"
      data-name="Camada 2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 472.93 488.85"
      fill="black"
    >
      <G id="Camada_1-2" data-name="Camada 1">
        <G>
          <G>
            <G>
              <Path
                style={styles.cls6}
                d="m324.84,245.89c45.91-31.35,69.31-89.32,54.11-146.06C359.7,28,285.87-14.63,214.04,4.62c-58.69,15.73-97.88,67.89-99.75,125.63,8.12-47.39,42.91-88.09,92.39-101.35,67.79-18.16,137.47,22.06,155.63,89.85,12.76,47.62-3.29,96.17-37.48,127.14h0Z"
              />
              <G>
                <Path
                  style={styles.cls4}
                  d="m261.88,190.66c10.63-1.39,20.69-6.98,29.91-16.76,1.41-1.4,1.96-3.35,1.68-5.03,12.02-14.54,19.29-34.67,19.29-50.04,0-23.77-11.47-26.28-30.19-30.19h-.28c-1.12-2.24-3.35-3.91-6.16-3.91-4.19,0-7.26,3.08-7.26,6.99.01,3.64,3.07,6.44,7.26,6.44,1.41,0,3.08-.56,4.21-1.41h0c18.44,3.91,23.48,5.04,23.48,22.09,0,13.41-7,31.59-17.34,44.73-1.96,0-3.63.84-4.75,2.23-5.59,5.6-13.97,12.58-24.31,12.58s-18.73-6.99-24.04-12.58c-1.12-1.39-3.08-1.95-4.75-2.23-10.35-13.14-17.34-31.31-17.34-44.73,0-17.05,4.76-18.18,23.2-22.09h0c1.41.85,2.8,1.41,4.47,1.41,3.91,0,7.25-2.8,7.25-6.44,0-3.91-3.34-6.99-7.25-6.99-2.79,0-5.32,1.68-6.44,3.91h0c-19,3.91-30.47,6.43-30.47,30.19,0,15.37,7.55,35.5,19.57,50.32-.28,1.4.29,3.35,1.41,4.75,9.22,9.78,19.01,15.38,29.35,16.76l-.28,29.91c0,20.69-17.9,37.47-39.98,37.47s-40.24-16.78-40.24-37.47v-26.28c12.85-1.95,22.64-12.29,22.64-24.88,0-13.7-12.3-25.15-27.12-25.15s-27.1,11.45-27.1,25.15c0,12.59,9.78,22.93,22.64,24.88v26.28c0,25.44,22.08,45.85,49.19,45.85,s49.2-20.4,49.2-45.85v-29.91h.55Z"
                />
                <Path
                  style={styles.cls6}
                  d="m167.39,186.47c9.79,0,17.9-7.54,17.9-17.05s-8.11-16.77-17.9-16.77c-10.06,0-17.89,7.55-17.89,16.77s7.82,17.05,17.89,17.05h0Z"
                />
              </G>
              <Path
                style={styles.cls4}
                d="m146.5,25.75c-54.4,37.15-82.14,105.85-64.12,173.09,22.81,85.13,110.3,135.64,195.43,112.83,69.56-18.64,116-80.46,118.22-148.88-9.63,56.15-50.85,104.39-109.5,120.11-80.34,21.53-162.91-26.15-184.44-106.48-15.12-56.43,3.9-113.96,44.41-150.67h0Z"
              />
            </G>
            <Text
              transform="translate(236.47 428.85)" // Center the text horizontally
              fontSize="50" // Set font size
              fontWeight="bold" // Set font weight
              fill="black" // Set text color
              textAnchor="middle" // Align text to the center
              y="0" // Position y at the baseline
              style={styles.text} // Apply the styles using StyleSheet
            >
              VITAL MOB
            </Text>
          </G>
          <Text
            transform="translate(236.47 477.99)" // Center the text horizontally
            fontSize="20" // Set font size
            fontWeight="bold" // Set font weight
            fill="black" // Set text color
            textAnchor="middle" // Align text to the center
            y="0" // Position y at the baseline
            style={styles.text} // Apply the styles using StyleSheet
          >
            MEDICAL CENTER
          </Text>
        </G>
      </G>
    </Svg>
  );
}

const styles = StyleSheet.create({
  cls4: {
    fill: '#4f6466',
  },
  cls6: {
    fill: '#22c7b8',
  },
  text: {
    fontFamily: 'CustomFont',
  },
});
