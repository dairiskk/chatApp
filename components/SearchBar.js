import React, { useState } from 'react';
import { Searchbar } from 'react-native-paper';

import { StyleSheet } from 'react-native';

export function SearchBar() {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);
  return (
    <Searchbar
      style={styles.item}
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
  );
}
const styles = StyleSheet.create({
  item: {
    marginBottom: 5,
    borderBottomColor: "grey",
    shadowColor: "grey",
    borderBottomWidth: 2,
    marginBottom: 20
    // borderWidth: 5,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
  },
});



