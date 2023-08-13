import React from 'react'

function StatisticTable({dataList}) {
    console.log(dataList)
  return (
    <>
    <table className="table">
    <thead>
        <tr>
            <th scope="col">No</th>
            <th scope="col">User Email</th>
            <th scope="col">Car</th>
            <th scope="col">Start Rent</th>
            <th scope="col">Finish Rent</th>
            <th scope="col">Price</th>
        </tr>
    </thead>
        <tbody>
            {dataList.map((item) => (
                <tr>
                    <th scope="row">{item.id}</th>
                        <td>{item.User.email}</td>
                        <td>{item.CarId}</td>
                        <td>{item.start_rent_at}</td>
                        <td>{item.finish_rent_at}</td>
                        <td>{item.total_price}</td>
                </tr>
            ))}
        </tbody>
    </table>
    </>
  )
}

export default StatisticTable