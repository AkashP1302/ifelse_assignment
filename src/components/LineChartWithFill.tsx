import React from 'react';
import {LineChart, Grid} from 'react-native-svg-charts';
import {Circle} from 'react-native-svg';
import {StyleSheet} from 'react-native';
import * as shape from 'd3-shape';

interface LineChartWithFillProps {
  data: number[];
  strokeColor: string;
  fillOpacity?: string;
  showGrid?: boolean;
  showDots?: boolean;
}

const LineChartWithFill: React.FC<LineChartWithFillProps> = ({
  data,
  strokeColor,
  fillOpacity = '33',
  showGrid = true,
  showDots = true,
}) => {
  // Dot renderer
  const Dots = ({x, y, data}: any) =>
    data.map((value: number, index: number) => (
      <Circle
        key={index}
        cx={x(index)}
        cy={y(value)}
        r={4}
        stroke={strokeColor}
        fill="white"
        strokeWidth={2}
      />
    ));

  return (
    <LineChart
      style={StyleSheet.absoluteFill}
      data={data}
      svg={{
        stroke: strokeColor,
        strokeWidth: 2,
        fill: `${strokeColor}${fillOpacity}`,
      }}
      contentInset={{top: 20, bottom: 20}}
      curve={shape.curveMonotoneX}>
      {showGrid && <Grid />}
      {showDots && <Dots />}
    </LineChart>
  );
};

export default LineChartWithFill;
