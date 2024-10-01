import { BlockStack, Box, InlineStack, Text } from "@shopify/polaris";
import SalesGrowthCard from "./SalesGrowthCard";
import { SalesGridBox } from "./SalesGridBox";
import { useEffect, useState } from "react";
export const Sales = () => {
  const [products, setProducts] = useState([]);

  async function fetchData() {
    try {
      const response = await fetch("https://dummyjson.com/products/?limit=3");
      const data = await response.json();
        console.log(data.products)
      setProducts(data.products);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Box className="Sales_Wrape">
      <InlineStack align="center" gap={200} blockAlign="center">
        <Box className="SalesGrowthCards_Wrap">
          <BlockStack align="center" gap={500}>
            {/* Sales Growth */}
            <SalesGrowthCard
              Title={"Sales Growth"}
              Percentage={`${32.7} %`}
              GrowthPercentage={1.4}
            />
            {/* Total Orders */}
            <SalesGrowthCard
              Title={"Total Orders"}
              Percentage={52}
              GrowthPercentage={11.4}
            />
          </BlockStack>
        </Box>
        {/* Top 3 Products */}
        <Box className="TopOrders_Wrap">
          <InlineStack>
            {products && (
              <SalesGridBox
                data={products}
                Title={"Top 3 Products by unit Solds"}
              />
            )}
            {products && (
              <SalesGridBox
                data={products}
                Title={"Top 3 Products by total sales"}
              />
            )}
          </InlineStack>
        </Box>
      </InlineStack>
    </Box>
  );
};
