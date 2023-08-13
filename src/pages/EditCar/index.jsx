import axios from 'axios'
import { useEffect } from 'react';
import { useState } from 'react'
import { Toast } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom'

function EditCar() {

  // get the data first
  const { id } = useParams();
  const [data, setData] = useState({});
  const getData = () => {
    const api = `https://api-car-rental.binaracademy.org/admin/car/${id}`;
    axios.get(api, {
      headers: {
        // sesuaikan sama API
          'Content-Type': 'application/x-www-form-urlencoded',
          'access_token': localStorage.getItem('admin_token')
      }
    }).then(
      (res) => setData(res.data))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getData()
  }, [])


  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [category, setCategory] = useState("")
  const [photo, setPhoto] = useState(null)

  // status hanya untuk menyesuaikan API
  const [status, setStatus] = useState(false)
  const navigate = useNavigate();

  // after edit succesfully
  const [showToast, setShowToast] = useState(false);

  const handleChangeName = (e) => {
    setName(e.target.value);
  }

  const handleChangePrice= (e) => {
    setPrice(e.target.value);
  }

  const handleChangeCategory= (e) => {
    setCategory(e.target.value);
  }

  const handleChangePhoto= (e) => {
    setPhoto(e.target.files[0]);
  }


  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData();
    formData.append('name', name)
    formData.append('price', parseInt(price))
    formData.append('category', category)
    // the api requesting for status, but we set to false, because we post the car that not been rented yet
    formData.append('status', false)
    formData.append('image', photo)
    formData.append('status', status)

    const config = {
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'access_token': localStorage.getItem('admin_token')
      }
    }

    // karena kita ngeadd data, jadi kita menggunakan method post dari axios
    const api = `https://api-car-rental.binaracademy.org/admin/car/${id}`
    axios.put(api, formData, config
    ).then((res) => {
      console.log(res)
      setShowToast(true)
    })
    .catch((err) => console.log(err));
      setTimeout(() => {
        navigate('/dashboard')
      }, 3000);
  }
  setTimeout(() => {
    setShowToast(false);
  }, 2000)


  return (
    <>
    <div className="container">
    {showToast && (
        <Toast delay={3000} autohide>
          <Toast.Body style={{ background: "green"}}>
            Berhasil Edit
          </Toast.Body>
        </Toast>
      )}
        <div className="row">
            <p className='page-direct'><strong>Cars &gt; List Cars &gt; </strong> Edit Cars</p>
            <h1>Edit Cars</h1>
        </div>
        <div className="row">
            <form>
                <div className="col form">
                    <p>Nama/Type Mobil</p>
                    <input type="text" className="form-control add" value={name} onChange={handleChangeName} id="formGroupExampleInput" placeholder={data?.name} style={{marginBottom: "10px"}} />
                </div>
                <div className="col form">
                    <p>Harga</p>
                    <input type="text" className="form-control add" value={price} onChange={handleChangePrice} id="formGroupExampleInput" placeholder={data?.price} style={{marginBottom: "10px"}} />
                </div>
                <div className="col form">
                    <p>Foto</p>
                    <input type="file" className="form-control add" onChange={handleChangePhoto} aria-label="file example" style={{marginBottom: "10px"}} required />
                </div>
                <div className="col form">
                    <p>Kategori</p>
                    <select className="form-control add" id="validationServer04" onChange={handleChangeCategory} aria-describedby="validationServer04Feedback" style={{marginBottom: "10px"}}  required>
                        <option selected disabled value="">Choose...</option>
                        <option value='small'>Small</option>
                        <option value='medium'>Medium</option>
                        <option value='large'>Large</option>
                    </select>
                </div>
                <div className="col form">
                    <p>Created At</p>
                    <p>{data?.createdAt}</p>
                </div>
                <div className="col form">
                    <p>Updated At</p>
                    <p>{data?.updatedAt}</p>
                </div>
                <div className="button-groups">
                    <button type="submit" onClick={() => navigate('/dashboard')} className="btn btn-outline-primary" style={{marginRight: "16px"}}>Cancel</button>
                    <button type="submit" onClick={handleSubmit} className="btn btn-primary">Save</button>
                </div>
            </form>
        </div>
    </div>
    </>
  )
}

export default EditCar