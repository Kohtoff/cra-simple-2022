import React, { useState } from "react";
import TabPanel from "../TabPanel/TabPanel";
import { Box, Tabs, Tab } from "@mui/material";

export default function GoodTabs(props) {
  const [currentTab, setCurrentTab] = useState(0);
  const { tabs } = props;

  const handleOpenTab = (event, newValue) => setCurrentTab(newValue);

  return (
    <>
      <Box fullWidth sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={currentTab} onChange={handleOpenTab}>
          {tabs.map((item, index) => (
            <Tab label={item.title} key={index}/>
          ))}
        </Tabs>
      </Box>
      {tabs.map((item, index) => (
        <TabPanel value={currentTab} index={index} key={index}>
          {item.children}
        </TabPanel>
      ))}
    </>
  );
}
