import colors from "../constants/colors";

export const activityChartData = {
  title: 'September Activities',
  height: 160,
  data: [
    {
      label: 'Current Month',
      color: colors.primary,
      data: [50, 80, 40, 90, 100, 85, 120],
    },
    {
      label: 'Previous Month',
      color: colors.primarySecond,
      data: [70, 60, 80, 100, 95, 105, 115],
    },
  ],
};
