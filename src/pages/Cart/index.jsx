import axios from 'axios';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { useState } from 'react';
import { useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import StatisticTable from '../../components/StatisticTable';
import './index.css'


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

 const options = {
  responsive: true,
  plugins: {
    legend: {
        display: false, 
        position: 'top',
    },
    title: {
      display: false,
      text: 'Chart.js Bar Chart',
    },
  },
};

const list = [
    {
        "day": "2022-01-01",
        "orderCount": 1
      },
      {
        "day": "2022-01-02",
        "orderCount": 2
      },
      {
        "day": "2022-01-03",
        "orderCount": 3
      },
      {
        "day": "2022-01-04",
        "orderCount": 4
      },
      {
        "day": "2022-01-05",
        "orderCount": 5
      },
      {
        "day": "2022-01-06",
        "orderCount": 6
      },
      {
        "day": "2022-01-07",
        "orderCount": 8
      },
      {
        "day": "2022-01-08",
        "orderCount": 12
      },
      {
        "day": "2022-01-09",
        "orderCount": 14
      },
      {
        "day": "2022-01-10",
        "orderCount": 20
      },
      {
        "day": "2022-01-11",
        "orderCount": 22
      },
      {
        "day": "2022-01-12",
        "orderCount": 23
      },
      {
        "day": "2022-01-13",
        "orderCount": 14
      },
]

const labels = list.map((item) => item.day);
// console.log(labels)

 const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: list.map((item) => item.orderCount),
      backgroundColor: 'rgba(88, 107, 144, 1)',
    },
  ],
};


function Cart() {
  const [dataList, setDataList] = useState([]);
  const getData = () => {
    const api = 'https://api-car-rental.binaracademy.org/admin/v2/order?page=1&pageSize=10';
    axios.get(api, {
      headers: {
        // sesuaikan sama API
          'Content-Type': 'application/x-www-form-urlencoded',
          'access_token': localStorage.getItem('admin_token')
      }
    }).then(
        (res) => setDataList(res.data.orders))
        .catch((err) => console.log(err));
};

    useEffect(() => {
      getData()
    }, []);

  return (
    <div className="container">
        <p style={{fontSize: "12px", marginTop: "32px"}}><strong>Dashboard &gt; </strong> Dashboard</p>
        <div className="row">
            <div className="rented-car-visualization">
                <div className="bluebox-dashboard" />
                <p><strong>Rented Car Visualization</strong></p>
            </div>
            <Bar options={options} data={data} />
        </div>
        <div className="row">
            <p className='dashboard-text'>Dashboard</p>
            <div className="rented-car-visualization">
              <div className="bluebox-dashboard" />
              <p><strong>List Order</strong></p>
            </div>
            <StatisticTable dataList={dataList} />
        </div>
    </div>
  )
}

export default Cart