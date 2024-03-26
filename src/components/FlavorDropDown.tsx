import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import Icon from "react-native-vector-icons/FontAwesome5";

const data = [
  { label: "Fruity", value: "1" },
  { label: "Sweet", value: "2" },
  { label: "Creamy", value: "3" },
  { label: "Light", value: "4" },
  { label: "Spicy", value: "5" },
  { label: "Spiced", value: "6" },
  { label: "Seasonal", value: "7" },
  { label: "Fizzy", value: "8" },
  { label: "Botanical", value: "9" },
  { label: "Refreshing", value: "10" },
  { label: "Strong", value: "11" },
];

const FlavorDropDown = () => {
  const [value, setValue] = useState(null);

  return (
    <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      data={data}
      search
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder="Select item"
      searchPlaceholder="Search..."
      value={value}
      onChange={(item) => {
        setValue(item.value);
      }}
      renderLeftIcon={() => (
        <Icon style={styles.icon} color="black" name="lemon" size={25} />
      )}
    />
  );
};

export default FlavorDropDown;

const styles = StyleSheet.create({
  dropdown: {
    margin: 16,
    height: 50,
    borderBottomColor: "gray",
    borderBottomWidth: 0.5,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
