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
import React, { useCallback, useEffect, useState } from "react";
import {
  SearchIcon,
  CaretDownIcon,
  ChevronDownIcon,
} from "@shopify/polaris-icons";
import { TableData } from "../components/Charts/ChartsConstants/AppAnalysisConstants";
import { Loader } from "../assests/Loader";

const Table = ({ loading }) => {
  const [rows, setRow] = useState(TableData);
  const [expandedRowIndex, setExpandedRowIndex] = useState(null);
  const [textFieldValue, setTextFieldValue] = useState("");
  const [sort,setSort] = useState(false)

  const tableRows = rows.flatMap((row, index) => [
    [
      <div
        style={{ display: "flex", alignItems: "center", gap: "8px" }}
        key={`row-${index}`}
      >
        <img src={row.image} alt="" style={{ width: 30, height: 30 }} />
        <Text variant="headingMd">{row.name}</Text>
      </div>,
      `${row.size} KIB`,
      `${row.lastUsage} h ago`,
      `${row.size} ms`,
      row.icon,
      // "",

      <div
        key={`icon-${index}`}
        className={expandedRowIndex === index ? "rotate" : ""}
        style={{ cursor: "pointer" }}
        onClick={() => handleRowClick(index)}
      >
        <Icon source={ChevronDownIcon} />
      </div>,
    ],
    ...(expandedRowIndex === index
      ? [
          [
            `url`,
            `Transfer Size`,
            `Total CPU Time`,
            `Script Evaluation`,
            `Script Evaluation`,
            "",
          ],
          ...row.details,
        ]
      : []),
  ]);

  const handleRowClick = (index) => {
    setExpandedRowIndex(expandedRowIndex === index ? null : index);
  };

  const handleTextFieldChange = useCallback((value) => {
    setTextFieldValue(value);

    const FilteredData = rows.filter((lists) =>
      lists.name.toLowerCase().includes(value.toLowerCase()),
    );
    setRow(FilteredData);
  }, []);

  
  
  const handleSorting = () => {
    setSort(!sort)
   if(sort) {
    const sortedData = rows.sort((a, b) => a.size - b.size);
    setRow(sortedData);
   }
   else {
    const sortedData = rows.sort((a, b) => b.size - a.size);
    setRow(sortedData);
   }
  };

  return (
    <Box className="table_wrapper">
      <Card>
        <Box className={loading ? "" : "show"}>
          <BlockStack>
            <Box className="ToggleWrap">
              <InlineStack blockAlign="center" gap={200}>
                <Text variant="bodyMd">Slowest apps :</Text>
                <Text variant="bodyMd">Desktop</Text>
                <label htmlFor="toggle">
                  <input type="checkbox" id="toggle" className="toggle-input" />
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
                      value={textFieldValue}
                      onChange={handleTextFieldChange}
                      prefix={
                        <Icon
                          source={SearchIcon}
                          tone="base"
                          autoComplete="off"
                          placeholder="Filter"
                        />
                      }
                    />
                    <Button size="medium" onClick={handleSorting}>
                      <InlineStack>

                        {
                          sort ? (<Text>Size Descending</Text> ) : ( <Text>Size Ascending</Text> )
                        }
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
        </Box>
        {!loading && (
          <Box className="LoaderText">
            <Box className="Loader_wrap">
              <Loader />
            </Box>
            <Text variant="headingMd"> Aggregating Analytics </Text>
          </Box>
        )}

        {rows && rows.length <= 0 && (
          <Box paddingBlock={500}>
            <Text variant="headingLg" alignment="center">
              No Data Found
            </Text>
          </Box>
        )}
      </Card>
    </Box>
  );
};

export default Table;
