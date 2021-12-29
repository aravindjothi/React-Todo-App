import React, { Component } from 'react'

export default class TodoInput extends Component {
  render() {
    const { item, handleChange, handleSubmit, editItem } = this.props
    return (
      <div className='card card-body my-3'>
        <h3 className='text-capitalize text-center'>todo input</h3>
        <form onSubmit={handleSubmit}>
          <div className='input-group'>
            <div className='input-group-prepend'>
              <div className='input-group-text bg-primary text-white'>
                <i className='fas fa-book'></i>
              </div>
            </div>
            <input
              type='text'
              className='form-control text-capitalize'
              placeholder='add a todo item'
              style={{ height: '30px', marginLeft: '3px' }}
              value={item}
              onChange={handleChange}
            />
          </div>
          <div className='text-center mt-3'>
            <button
              type='submit'
              className={
                editItem
                  ? 'btn btn-block btn-success'
                  : 'btn btn-block btn-primary'
              }
            >
              {editItem ? 'Edit Item' : 'Add Item'}
            </button>
          </div>
        </form>
      </div>
    )
  }
}
