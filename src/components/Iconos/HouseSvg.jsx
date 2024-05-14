import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

export function HomeSolid({ fill = "white", strokeWidth = 2, stroke = "white", width = 32, height = 32 }) {
  return (
    <View>
      <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={width} height={height}>
        <Path
          d="M22 5.724V2a1 1 0 1 0-2 0v2.366L14.797.855a4.98 4.98 0 0 0-5.594 0l-7 4.724A5 5 0 0 0 0 9.724V19c0 2.757 2.243 5 5 5h2a1 1 0 0 0 1-1v-9c0-.551.448-1 1-1h6c.552 0 1 .449 1 1v9a1 1 0 0 0 1 1h2c2.757 0 5-2.243 5-5V9.724a5 5 0 0 0-2-4"
          fill={fill}
          strokeWidth={strokeWidth}
          stroke={stroke}
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  );
}

export function HomeLine({ fill = "white", strokeWidth = 2, stroke = "white", width = 32, height = 32 }) {
    return (
      <View>
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={width} height={height}>
          <Path
            d="M22.017 5.831 21 5.145V1.5a.5.5 0 0 0-1 0v2.97L14.517.77a4.48 4.48 0 0 0-5.033 0L1.983 5.831A4.49 4.49 0 0 0 0 9.561V19.5C0 21.981 2.019 24 4.5 24h3a.5.5 0 0 0 .5-.5v-9c0-.827.673-1.5 1.5-1.5h5c.827 0 1.5.673 1.5 1.5v9a.5.5 0 0 0 .5.5h3c2.481 0 4.5-2.019 4.5-4.5V9.561a4.49 4.49 0 0 0-1.983-3.73M23 19.5c0 1.93-1.57 3.5-3.5 3.5H17v-8.5c0-1.378-1.121-2.5-2.5-2.5h-5A2.503 2.503 0 0 0 7 14.5V23H4.5C2.57 23 1 21.43 1 19.5V9.561c0-1.166.576-2.25 1.542-2.901l7.5-5.061a3.48 3.48 0 0 1 3.916 0l7.5 5.061A3.5 3.5 0 0 1 23 9.561z"
            fill={fill}
            strokeWidth={strokeWidth}
            stroke={stroke}
            strokeLinejoin="round"
          />
        </Svg>
      </View>
    );
  }


