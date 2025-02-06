import React, { memo } from "react";
import { List } from "react-native-paper";

const AddNewService = () => {
  return (
    <List.AccordionGroup>
      <List.Accordion title="Empresa" id={1}>
        <List.Item title="item 1" />
      </List.Accordion>
    </List.AccordionGroup>
  );
};

export default memo(AddNewService);
