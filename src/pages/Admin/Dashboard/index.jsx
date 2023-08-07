import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import DashBoardCard from '../../../components/DashboardCard'
import ModalDelete from '../../../components/ModalDelete'
import './index.css'

function Dashboard() {
  const [name, setName] = useState("")
  const [category, setCategory] = useState("")
  const [price, setPrice] = useState()
  const [status, setStatus] = useState()
  const [data, setData] = useState([])
  const navigate = useNavigate()

  const getData = () => {
    const api = `https://api-car-rental.binaracademy.org/admin/v2/car?name=${name}&price=${price}&status=${status}&category=${category}`;
    axios.get(api, {
      headers: {
        // sesuaikan sama API
          'Content-Type': 'application/x-www-form-urlencoded',
          'access_token': localStorage.getItem('admin_token')
      }
    }).then(
        (res) => setData(res.data.cars))
        .catch((err) => console.log(err));
};

    useEffect(() => {
      getData()
    }, []);
    console.log(data);

    const goToEdit = (id) => {
      navigate(`/edit-car/${id}`)
    }

  // for delete

  const [modalId, setModalId] = useState("");
  const [isShown, setIsShown] = useState(false)

  const handleModal = (id) => {
    setIsShown(true);
    setModalId(id);
  }

  const handleClose = () => {
    setIsShown(false);
    setModalId(null);
  }

  const handleDelete = (id) => {
    axios.delete(`https://api-car-rental.binaracademy.org/admin/car/${id}`,
    {
      headers: {
        // sesuaikan sama API
          'Content-Type': 'application/x-www-form-urlencoded',
          'access_token': localStorage.getItem('admin_token')
      }
    }).then((res) => {
      setIsShown(true);
      setModalId(null);
      getData();
      // setShowToast(true);
    }).catch((err) => console.log(err))
  }

  setTimeout(() => {
    setShowToast(false);
  }, 3000)


  return (
    <>
    <div className="container">
      <p>Cars &gt; List Cars</p>
      <div className="row">
        <div className="col">
          <strong>List Cars</strong>
        </div>
        <div className="col button">
          <Link to='/add-car'>
        <button type="button" className="btn btn-primary">Add New Car</button>
        </Link>
        </div>
      </div>
      {isShown && modalId !== null && (
        <ModalDelete 
        show={isShown}
        handleClose={handleClose}
        modalId={modalId}
        deleteButton={handleDelete}
        />
      )}
      <div className="row card-car">
        {data.map((item) => (
           // eslint-disable-next-line react/jsx-key
           <div className="col item" style={{marginBottom: "16px"}}>
               <DashBoardCard name={item.name} image={item.image} price={item.price} category={item.category} update={item.updatedAt} editcarbutton={() => goToEdit(item.id)} deletecarbutton={() => handleModal(item.id)} />
           </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default Dashboard