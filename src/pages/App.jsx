import './App.scss';
import { Button } from "react-bootstrap";
import React, { useState } from 'react';

function App() {

  const [slot, setSlot] = useState([0, 0, 0, 0]);

  const toggleClass = (id, value) => {
    setSlot(prevSlot => prevSlot.map((el, index) => index === id ? value : el));
  };

  return (
    <div className="view01">
      <div className="sideBarParent">
        <div className="sideBar">
          <div className="button01Parent">
            <Button className="button01" variant="primary">
              Parking Slots
            </Button>
            <Button
              className="button2"
              variant="primary"
              name="logout_btn"
              id="logout_btn"
            >
              Logout
            </Button>

            <div className="parkwise">ParkWise</div>
            <img className="icon" alt="" src="/images/logo/logo.png" />
          </div>
        </div>
        <div className="slotsWrapper">
          <div className="slots" id="container_slots">
            <div className="slot01Parent">
              <div className="slot01" id="slot_01">
                <b className="t">A01</b>
                <img
                  id='slot_01'
                  className={"carcolored1Icon animate__animated " + (slot[0] === 0 ? 'animate__fadeOutDown' : 'animate__fadeInUp')}
                  alt=""
                  src="/images/dashboard/carColored.png"
                />
                <div className="slot01Child" />
              </div>
              <div className="slot01" id="slot_02">
                <b className="t">A02</b>
                <img
                  id='slot_02'
                  className={"carcolored1Icon animate__animated " + (slot[1] === 0 ? 'animate__fadeOutDown' : 'animate__fadeInUp')}
                  alt=""
                  src="/images/dashboard/carColored.png"
                />
                <div className="slot01Child" />
              </div>
              <div className="slot01" id="slot_03">
                <b className="t">A03</b>
                <img
                  id='slot_03'
                  className={"carcolored1Icon animate__animated " + (slot[2] === 0 ? 'animate__fadeOutDown' : 'animate__fadeInUp')}
                  alt=""
                  src="/images/dashboard/carColored.png"
                />
                <div className="slot01Child" />
              </div>
              <div className="slot01" id="slot_04">
                <b className="t">A04</b>
                <img
                  id='slot_04'
                  className={"carcolored1Icon animate__animated " + (slot[3] === 0 ? 'animate__fadeOutDown' : 'animate__fadeInUp')}
                  alt=""
                  src="/images/dashboard/carColored.png"
                />
              </div>
            </div>

            <div className="roadParent">
              <b className="road">Road</b>
              <div className="groupChild" />
              <div className="groupItem" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
