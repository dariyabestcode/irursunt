function moveMainDownToFacet(facetMain) {
  // Create a deep copy of the subtree
  const subtreeCopy = JSON.parse(JSON.stringify(facetMain));

  // Remove the main node from the facet
  delete facetMain.main;

  // Place the copied subtree before the facet's main node
  facetMain.main = subtreeCopy.main;
}
