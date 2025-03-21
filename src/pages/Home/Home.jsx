import { useEffect, useState } from "react";
import { useGetMonthlySales } from "../../hooks/useGetMonthlySales";
import SalesChart from "./SalesChart";
import WellcomeSection from "./WellcomeSection";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [sales] = useGetMonthlySales(null);
  useEffect(() => {
    if (sales === undefined || sales === null) return;
    setLoading(false);
  }, [sales]);

  if (loading) {
    return (
      <div className="flex justify-content-center align-items-center" style={{ height: "calc(100vh-100px)" }}>
        Loading...
      </div>
    );
  }
  return sales?.length <= 0 ? <WellcomeSection /> : <SalesChart sales={sales} />;
}
