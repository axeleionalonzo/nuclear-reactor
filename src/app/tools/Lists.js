import React from 'react'

const Lists = ({lists, deleteExpense}) => {

  const expenseLists = lists.length ? (
    lists.map(list => {
      return (
        <div className="collection-item" key={list.id} onClick={() => { deleteExpense(list.id) }}>
          <span>{list.name}</span>
        </div>
      )
    })
  ) : (
    <div className="collection-item">
      <p className="center">start spending!</p>
    </div>
  );
  return (
    <div className="lists collection">
      {expenseLists}
    </div>
  )
}

export default Lists