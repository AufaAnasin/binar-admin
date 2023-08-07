import { faClock, faEdit, faTrash, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import Civic from '../img/car-example.jpg'
import './index.css'

function DashBoardCard({name, image, price, category, update, editcarbutton, deletecarbutton}) {
  return (
    <>
    <div className="card car">
      <div className="carimage">
        <img src={image} className='card-img-top' alt="carcard" />
      </div>
      <div className="card-body">
        <p className="card-text">{name}</p>
        <div className="card-text card-price"><strong>Rp. {price}/Hari</strong></div>
        <div className="card-text car-price"><FontAwesomeIcon icon={faUserGroup} style={{color: "#8A8A8A", width: "16px", height:"12px", marginRight: "3px"}} />{category}</div>
        <div className="card-text car-updated"><FontAwesomeIcon icon={faClock} style={{color: "#8A8A8A", width: "16px", height:"12px", marginRight: "3px"}} />Updated at {update}</div>
        <div className="buttongroups">
          <button type="button" className="btn btn-outline-danger" onClick={deletecarbutton} style={{width: "143px"}}><FontAwesomeIcon icon={faTrash} style={{color: "red", width: "16px", height:"12px", marginRight: "3px"}} />Delete</button>
          <button type="button" className="btn btn-primary" onClick={editcarbutton} style={{marginLeft: "16px", width: "143px", height: "48px"}}><FontAwesomeIcon icon={faEdit} style={{color: "white", width: "16px", height:"12px", marginRight: "3px"}} />Edit</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default DashBoardCard