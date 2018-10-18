/**
 * Return ShallowWrapper containing node(s) with the givin data-test value.
 * @function findByTestAttr
 * @param {ShallowWrapper} wrapper ShallowWrapper to Search in.
 * @param {string} value Value of data-test for search.
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, value) => {
  return wrapper.find(`[data-test="${value}"]`);
};
