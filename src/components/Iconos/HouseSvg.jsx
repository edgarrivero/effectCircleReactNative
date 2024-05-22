import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';

  export function HomeLine({ fill = "white", strokeWidth = 1, stroke = "white", width = 24, height = 24 }) {
    return (
      <View>
        <Svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" width={width} height={height}>
          <Path d="M19 24H5c-2.757 0-5-2.243-5-5V9.724c0-1.665.824-3.215 2.204-4.145L9.203.855a4.98 4.98 0 0 1 5.594 0l7 4.724A4.99 4.99 0 0 1 24 9.724V19c0 2.757-2.243 5-5 5M12 1.997a3 3 0 0 0-1.678.517l-7 4.723A3 3 0 0 0 2 9.723v9.276c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3V9.724c0-.999-.494-1.929-1.321-2.486l-7.001-4.724A3 3 0 0 0 12 1.997"
            fill={fill}
            strokeWidth={strokeWidth}
            stroke={stroke}
            strokeLinejoin="round"
          />
        </Svg>
      </View>
    );
  }

  export function ChartLine({ fill = "white", strokeWidth = 1, stroke = "white", width = 24, height = 24 }) {
    return (
      <View>
        <Svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" width={width} height={height}>
          <Path d="M23 22H5a3 3 0 0 1-3-3V1a1 1 0 0 0-2 0v18a5.006 5.006 0 0 0 5 5h18a1 1 0 0 0 0-2"
            fill={fill}
            strokeWidth={strokeWidth}
            stroke={stroke}
            strokeLinejoin="round"
          />
          <Path d="M6 20a1 1 0 0 0 1-1v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 1 1m4-10v9a1 1 0 0 0 2 0v-9a1 1 0 0 0-2 0m5 3v6a1 1 0 0 0 2 0v-6a1 1 0 0 0-2 0m5-4v10a1 1 0 0 0 2 0V9a1 1 0 0 0-2 0M6 9a1 1 0 0 0 .707-.293l3.586-3.586a1.025 1.025 0 0 1 1.414 0l2.172 2.172a3 3 0 0 0 4.242 0l5.586-5.586A1 1 0 0 0 22.293.293l-5.586 5.585a1 1 0 0 1-1.414 0l-2.172-2.171a3 3 0 0 0-4.242 0L5.293 7.293A1 1 0 0 0 6 9"
            fill={fill}
            strokeWidth={strokeWidth}
            stroke={stroke}
            strokeLinejoin="round"
          />
        </Svg>
      </View>
    );
  }

  export function GameLine({ fill = "white", strokeWidth = 1, stroke = "white", width = 24, height = 24 }) {
    return (
      <View>
        <Svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" width={width} height={height}>
          <Path d="M20.466 1.967 14.78.221a5.01 5.01 0 0 0-6.224 3.24L8.368 4H5a5.006 5.006 0 0 0-5 5v10a5.006 5.006 0 0 0 5 5h6a4.97 4.97 0 0 0 3.92-1.934 5 5 0 0 0 .689.052 4.98 4.98 0 0 0 4.775-3.563L23.8 8.156a5.02 5.02 0 0 0-3.334-6.189M11 22H5a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3M21.887 7.563l-3.412 10.4a2.99 2.99 0 0 1-2.6 2.134A5 5 0 0 0 16 19V9a5.006 5.006 0 0 0-5-5h-.507a3 3 0 0 1 3.7-1.867l5.686 1.746a3.006 3.006 0 0 1 2.008 3.684M12 13c0 1.45-1.544 3.391-2.714 4.378a1.99 1.99 0 0 1-2.572 0C5.544 16.391 4 14.45 4 13a2 2 0 0 1 4 0 2 2 0 0 1 4 0"
            fill={fill}
            strokeWidth={strokeWidth}
            stroke={stroke}
            strokeLinejoin="round"
          />
        </Svg>
      </View>
    );
  }

  export function SettingLine({ fill = "white", strokeWidth = 1, stroke = "white", width = 24, height = 24 }) {
    return (
      <View>
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={width} height={height}>
          <Path d="M12 8a4 4 0 1 0 4 4 4 4 0 0 0-4-4m0 6a2 2 0 1 1 2-2 2 2 0 0 1-2 2"
            fill={fill}
            strokeWidth={strokeWidth}
            stroke={stroke}
            strokeLinejoin="round"
          />
          <Path d="m21.294 13.9-.444-.256a9.1 9.1 0 0 0 0-3.29l.444-.256a3 3 0 1 0-3-5.2l-.445.257A9 9 0 0 0 15 3.513V3a3 3 0 0 0-6 0v.513a9 9 0 0 0-2.848 1.646L5.705 4.9a3 3 0 0 0-3 5.2l.444.256a9.1 9.1 0 0 0 0 3.29l-.444.256a3 3 0 1 0 3 5.2l.445-.257A9 9 0 0 0 9 20.487V21a3 3 0 0 0 6 0v-.513a9 9 0 0 0 2.848-1.646l.447.258a3 3 0 0 0 3-5.2Zm-2.548-3.776a7.05 7.05 0 0 1 0 3.75 1 1 0 0 0 .464 1.133l1.084.626a1 1 0 0 1-1 1.733l-1.086-.628a1 1 0 0 0-1.215.165 7 7 0 0 1-3.243 1.875 1 1 0 0 0-.751.969V21a1 1 0 0 1-2 0v-1.252a1 1 0 0 0-.751-.969A7 7 0 0 1 7.006 16.9a1 1 0 0 0-1.215-.165l-1.084.627a1 1 0 1 1-1-1.732l1.084-.626a1 1 0 0 0 .464-1.133 7.05 7.05 0 0 1 0-3.75 1 1 0 0 0-.465-1.129l-1.084-.626a1 1 0 0 1 1-1.733l1.086.628A1 1 0 0 0 7.006 7.1a7 7 0 0 1 3.243-1.875A1 1 0 0 0 11 4.252V3a1 1 0 0 1 2 0v1.252a1 1 0 0 0 .751.969A7 7 0 0 1 16.994 7.1a1 1 0 0 0 1.215.165l1.084-.627a1 1 0 1 1 1 1.732l-1.084.626a1 1 0 0 0-.463 1.129Z"
            fill={fill}
            strokeWidth={strokeWidth}
            stroke={stroke}
            strokeLinejoin="round"
          />
        </Svg>
      </View>
    );
  }



