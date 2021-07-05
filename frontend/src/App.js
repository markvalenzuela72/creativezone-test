import React, { Component } from "react";
import BookingDataService from "./services/booking.service";


import './App.css';

import mainLogo from './images/main-logo.png';
import facilityBG from './images/facility-bg.jpg';
import homeMap from './images/home-map.jpg';

class App extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.saveBooking = this.saveBooking.bind(this);

    this.state = {
      id: null,
      name: "",
      phone: "",
      submitted: false
    };
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    })
  }

  onChangePhone(e) {
    this.setState({
      phone: e.target.value
    })
  }

  saveBooking() {
    var data = {
      name: this.state.name,
      phone: this.state.phone
    }
    BookingDataService.create(data).
      then(response => {
        this.setState({
          id: response.data.id,
          name: response.data.name,
          phone: response.data.phone,
          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      })
  }
  render() {
    return (
      <div>

        <nav class="navbar navbar-expand-lg navbar-light">
          <div class="container">
            <a class="navbar-brand" href="#"><img src={mainLogo} alt="" /></a>

          </div>
        </nav>

        <header class="masthead">
          <div class="container h-100">
            <div class="row h-100 align-items-center">
              <div class="col-12">
                <h1 class="text-white">The only place to stay </h1>
              </div>
            </div>
          </div>
        </header>

        <section class="py-5">
          <div class="container">
            <div class="row mb-4 equal">
              <div class="col-12 col-md-6">
                <div class="home-box">
                  <h2>Welcome</h2>
                  <hr />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sodales mauris vitae nisl lacinia, a ullamcorper dolor sollicitudin. Suspendisse egestas ex non aliquet efficitur.
                  </p>
                  <p>
                    Quisque vel nunc tempor, scelerisque magna vitae, viverra erat. Fusce iaculis metus ut ex elementum interdum.
                  </p>

                </div>

              </div>
              <div class="col-12 col-md-6">
                <div class="home-box border">
                  <h2>Book Now</h2>
                  <hr />
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sodales mauris vitae nisl lacinia, a ullamcorper dolor sollicitudin.</p>
                  {this.state.submitted ? (
                      <h4>You have book successfully!</h4>
                  ) : (
                  <div>
                    <div class="row mb-2">
                      <div class="col">
                        <input type="text"
                          value={this.state.name}
                          onChange={this.onChangeName}
                          name="name"
                          class="form-control" placeholder="Name*" />
                      </div>
                    </div>
                    <div class="row mb-2 gx-2">
                      <div class="col-8">
                        <input type="text"
                          value={this.state.phone}
                          onChange={this.onChangePhone}
                          name="name"
                          class="form-control" placeholder="Phone*" />
                      </div>
                      <div class="col-4">
                        <button onClick={this.saveBooking} type="submit" class="btn btn-primary w-100 h-100">Submit</button>
                      </div>
                    </div>
                  </div>
                  )}
                </div>
              </div>
            </div>
            <div class="row equal">
              <div class="col-12 col-md-6">
                <div class="home-box border">
                  <h2>Facilities</h2>
                  <hr />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sodales mauris vitae nisl lacinia, a ullamcorper dolor sollicitudin. Suspendisse egestas ex non aliquet efficitur.
                  </p>
                  <p>
                    Quisque vel nunc tempor, scelerisque magna vitae, viverra erat. Fusce iaculis metus ut ex elementum interdum.
                  </p>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="w-100">
                  <img src={facilityBG} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <img src={homeMap} alt="" />
        </section>
      </div>
    );
  }
}

export default App;