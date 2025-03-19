import { Chart } from "primereact/chart";
import { useEffect, useState } from "react";

function SalesChart({ sales }) {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});
  const [axis, setAxis] = useState({ x: [], y: [] });

  useEffect(() => {
    if (sales?.length > 0) {
      const Xaxis = sales.map((sale) => sale.sale_day + "/" + sale.sale_month);
      const Yaxis = sales.map((sale) => sale.total_amount_per_day.toFixed(2));
      const axisData = { x: Xaxis, y: Yaxis };
      setAxis(axisData);
    }
  }, [sales]);
  useEffect(() => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue("--text-color");
    const textColorSecondary = documentStyle.getPropertyValue("--text-color-secondary");
    const surfaceBorder = documentStyle.getPropertyValue("--surface-border");
    const data = {
      labels: axis.x,
      datasets: [
        {
          label: "Ventas Diarias",
          data: axis.y,
          fill: false,
          borderColor: documentStyle.getPropertyValue("--cyan-500"),
          tension: 0.4,
        },
      ],
    };
    const options = {
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
          },
        },
        y: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
          },
        },
      },
    };
    setChartData(data);
    setChartOptions(options);
  }, [axis]);

  return (
    <div className="card w-full flex flex-column align-items-center justify-content-center mt-8">
      <div className="sm:w-full md:w-7">
        <h3 className="text-center">Ventas del último Mes</h3>
        <Chart type="line" data={chartData} options={chartOptions} className="w-12 h-20rem md:h-full md:h-12" />
      </div>
    </div>
  );
}

export default SalesChart;
