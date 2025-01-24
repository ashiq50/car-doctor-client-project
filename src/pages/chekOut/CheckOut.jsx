import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";

const CheckOut = () => {
  const service = useLoaderData();
  const { _id, title, price, img } = service;
  const { user } = useContext(AuthContext);
  const handleService = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = user?.email;
    const date = form.date.value;
    const phone = form.phone.value;
    const booking = {
      userName: name,
      email,
      date,
      phone,
      img,
      service: title,
      service_id: _id,
      price: price,
    };
    console.log(booking);
    fetch("http://localhost:5000/bookings/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Information successfully added",
            icon: "success",
            draggable: true,
          });
        }
      });
  };
  return (
    <div className="mb-24">
      <h1 className="text-center text-3xl font-bold">Service: {title}</h1>
      <form onSubmit={handleService} className="card-body">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              defaultValue={user?.name}
              type="text"
              name="name"
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>
          {/* date */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input
              type="date"
              name="date"
              className="input input-bordered"
              required
            />
          </div>
          {/* email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              defaultValue={user?.email}
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          {/* phone */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Phone</span>
            </label>
            <input
              type="text"
              name="phone"
              placeholder="phone"
              className="input input-bordered"
              required
            />
          </div>
          {/* price */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              defaultValue={"$" + price}
              type="text"
              placeholder="price"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="mt-5">
          <input
            className="btn btn-primary btn-block font-bold"
            type="submit"
            value="Order Confirm"
          />
        </div>
      </form>
    </div>
  );
};
export default CheckOut;
