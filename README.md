## Install

```js
npm install --save redux-thunk-status
```

## Usage

1. First you'll need to ensure `redux-thunk` middleware is applied to store already:

    ```js
    import { createStore, applyMiddleware } from 'redux'
    import thunkMiddleware from 'redux-thunk'
    const store = createStore(
      reducer,
      applyMiddleware(
        thunkMiddleware
      )
    )
    ```
    
2. Install the reducer into the `async` path of your `combineReducers`:

    ```js
    import { combineReducers } from 'redux'
    import { reducer as asyncReducer } from 'redux-thunk-status'
    
    const reducer = combineReducers({
      async: asyncReducer,
      ...reducers
    })
    ```
    
3. Create asynchronous actions/thunks (These *must* return a promise):

    ```js
    // Thunk returning promise
    const getDataFromPromise = () => {
      return ( dispatch, getState ) => {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve(['item1', 'item2', 'item3'])
          }, 1000)
        })
      }
    }

    // or with ajax 
    import async from 'async'
    const getDataFromAjaxCall = () => {
      return ( dispatch, getState ) => {
        return axios.get( '/api/admin/users' )
          .then(response => {
            // dispatch more actions
            // optionally return explicit resolution
            return Promise.resolve(response)
          })
          .catch(error => {
            // dispatch more actions 
            // optionally return explicit rejection 
            return Promise.reject(error)
          })
        })
      }
    }
    ```
    
4. Name and wrap dispatchable actions with the `captureStatus( name, action )` method:

    ```js
    const mapDispatchToProps = ( dispatch ) => {
      return {
        getItems: () => {
          dispatch( captureStatus( 'get_items', getDataFromAjaxCall() ) )
        }
      }
    }
    ```
    
5. Get status of thunk with the `getLoadingStatus( name )( state )` selector method:

    ```js
    const mapStateToProps = ( state ) => {
      return {
        loading: getLoadingStatus( 'get_items' )( state )
      }
    }
    ```
    
6. Optionally use the `AwaitLoading` component to conditionally render jsx blocks or components:

    ```js
    import React from 'react'
    import { connect } from 'react-redux'
    import { captureStatus, getLoadingStatus, AwaitLoading } from 'redux-thunk-status'
  
    // Thunk returning promise
    const getDataFromPromise = () => {
      return ( dispatch, getState ) => {
        return new Promise(resolve => {
          setTimeout(() => {
            // dispatch your action creator to save to store 
            dispatch( setItemsInReduxStoreAction(['item1', 'item2', 'item3'])
            resolve(true)
          }, 1000)
        })
      }
    }
    
    class Items extends React.Component {
      constructor( props ){
        super( props )
      }
      componentDidMount(){
        this.props.getItems()
      }
      render(){
      const { items, loading } = this.props
      
        return (
          <div>
            <AwaitLoading loading={loading}>
              <ul>
                {items.map(item => (
                  <li>{item}</li>
                )}
              </ul>
            </AwaitLoading>
          </div>
        )
      }
    }
    
    const mapStateToProps = ( state ) => {
      return {
        items: state.items,
        loading: getLoadingStatus( 'get_items' )( state )
      }
    }
   
    const mapDispatchToProps = ( dispatch ) => {
      return {
        getItems: () => {
          dispatch( captureStatus( 'get_items', getDataFromPromise() ) )
        }
      }
    }
    
    export default connect( mapStateToProps, mapDispatchToProps )( Items )
    ```
    
    You can also pass a custom loading component to the `component` prop of `AwaitLoading`:
    
    ```js
    const RenderLoading = ( props ) => {
      return (
        <div>
          <i className="fa fa-refresh fa-spin fa-3x fa-fw"></i>
          <span className="sr-only">Loading...</span>
        </div>
      )
    }

    <AwaitLoading loading={loading} component={RenderLoading}>
      {/* child jsx */}
    </AwaitLoading>
    ```


