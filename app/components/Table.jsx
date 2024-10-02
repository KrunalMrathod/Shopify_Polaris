import {
  BlockStack,
  Box,
  Button,
  Card,
  DataTable,
  Icon,
  InlineStack,
  Text,
  TextField,
} from "@shopify/polaris";
import React, { useState } from "react";
import { SearchIcon, CaretDownIcon, ChevronDownIcon } from "@shopify/polaris-icons";
import { TableData } from "../components/Charts/ChartsConstants/AppAnalysisConstants";

const Table = () => {
  const [rows, setRow] = useState(TableData);
  const [expandedRowIndex, setExpandedRowIndex] = useState(null);

  const handleRowClick = (index) => {
    setExpandedRowIndex(expandedRowIndex === index ? null : index);
  };

  const tableRows = rows.flatMap((row, index) => [
    [
      <div
        style={{ display: "flex", alignItems: "center", gap: "8px" }}
        key={`row-${index}`}
      >
        <img src={row?.image} alt="Logo" style={{ width: 30, height: 30 }} />
        {row.name}
      </div>,
      `${row.size} KIB`,
      `${row.lastUsage}h ago`,
      `${row.avgLoadTime}ms`,
      <div
        onClick={() => handleRowClick(index)}
        key={`icon-${index}`}
        className={expandedRowIndex === index ? "rotate" : ""}
        style={{ cursor: "pointer" }}
      >
        <Icon source={ChevronDownIcon} tone="base" />
      </div>,
      
    ],
    ...(expandedRowIndex === index
      ? [
          [
            "URL",
            "Transfer size",
            "Total CPU Time",
            "Script Evaluation",
            "Script Evaluation",
            "",
          ],
          ...row.details,
        ]
      : []),
  ]);

  return (
    <Box className="table_wrapper">
      <Card>
        <BlockStack>
          <Box className="ToggleWrap">
            <InlineStack blockAlign="center" gap={200}>
              <Text variant="bodyMd">Slowest apps :</Text>
              <Text variant="bodyMd">Desktop</Text>
              <label htmlFor="toggle">
                <input
                  type="checkbox"
                  id="toggle"
                  className="toggle-input"
                />
                <Box className="toggle-switch"></Box>
              </label>
              <Text variant="bodyMd">Mobile</Text>
            </InlineStack>
          </Box>

          {/* Filter */}
          <Box className="filter_wrap">
            <InlineStack align="space-between">
              <Box paddingInlineStart={500}>
                <Text variant="headingLg">
                  Installed apps
                  <sub> (10) </sub>
                </Text>
              </Box>
              <Box paddingInlineEnd={500}>
                <InlineStack blockAlign="center" gap={200} align="center">
                  <TextField
                    type="text"
                    prefix={
                      <Icon
                        source={SearchIcon}
                        tone="base"
                        autoComplete="off"
                        placeholder="Filter"
                      />
                    }
                  />
                  <Button size="medium">
                    <InlineStack>
                      <Text>Size Ascending</Text>
                      <Icon source={CaretDownIcon} />
                    </InlineStack>
                  </Button>
                </InlineStack>
              </Box>
            </InlineStack>
          </Box>

          {/* Table */}
          <Box>
            {tableRows && tableRows.length > 0 && (
              <DataTable
                columnContentTypes={[
                  "text",
                  "numeric",
                  "text",
                  "numeric",
                  "text",
                  "text",
                ]}
                headings={[
                  "3rd Party Apps",
                  "Transfer size",
                  "Last Usage",
                  "Average Load Time",
                  "",
                  "",
                ]}
                rows={tableRows}
                verticalAlign="middle"
                pagination={{
                  hasNext: true,
                  hasPrevious: true,
                  label: "8 / 24",
                }}
              />
            )}
          </Box>
        </BlockStack>
      </Card>
    </Box>
  );
};

export default Table;
