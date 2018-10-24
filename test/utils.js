import checkPropTypes from 'check-prop-types'
import { createStore, applyMiddleware } from 'redux'

import { middlewares } from '../src/configureStore'
import rootReducer from '../src/reducers'

/**
 * Create a testing store with imported reducers, middlewares, and initial state.
 * @function storeFactory
 * @param {object} state - Initial state for store.
 * @returns {Store} - Redux store.
 */
export const storeFactory = (state) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)
  return createStoreWithMiddleware(rootReducer, state)
}

/**
 * Return ShallowWrapper containing node(s) with the givin data-test value.
 * @function findByTestAttr
 * @param {ShallowWrapper} wrapper ShallowWrapper to Search in.
 * @param {string} value Value of data-test for search.
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, value) => {
  return wrapper.find(`[data-test="${value}"]`)
}

/**
 * Check props type.
 * @function checkProps
 * @param {component} component The component you want to check.
 * @param {object} conformingProps The expecting props.
 */
export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    'props',
    component.name
  )
  expect(propError).toBeUndefined()
}
