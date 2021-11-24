import './index.css'

const ContactItem = ({contactDetails, deleteContact, onEditList, index}) => {
  const {name, Email, id  } = contactDetails


  const onDeleteContact = () => {
    deleteContact(id)
  }

  return (

    <li type="1" className="table-row">
        <div className="table-cell serial-column">
          <p>{index + 1}</p>
        </div>
        <hr className="separator" />
        <div className="table-cell name-column">
          <p>{name}</p>
        </div>
        <hr className="separator" />
        <div className="table-cell Email-column">
          <p>{Email}</p>
        </div>
        <hr className="separator" />
        <div className="table-cell deletecontainer">
          <button
            className="deletebutton"
            type="button"
            onClick={onDeleteContact}
            testid="delete"
          >
            <img
              className="delete"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
              alt="delete" />
          </button>
        </div>
        <hr className="separator" />
        <div className="table-cell edit-column" onClick={() => onEditList(name, Email, index)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="edit" viewBox="0 0 16 16">
            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
          </svg>
        </div>
        <div>

        </div>
      </li>

  )
}

export default ContactItem