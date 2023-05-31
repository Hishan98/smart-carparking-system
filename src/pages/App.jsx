import './App.scss';
import { Button } from "react-bootstrap";
import { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: "AIzaSyB-OvjivTUyKnRJ688UDyxdaW9kg1__Oi8",
  authDomain: "smart-carpark-7c43f.firebaseapp.com",
  databaseURL: "https://smart-carpark-7c43f-default-rtdb.firebaseio.com",
  projectId: "smart-carpark-7c43f",
  storageBucket: "smart-carpark-7c43f.appspot.com",
  messagingSenderId: "832551841106",
  appId: "1:832551841106:web:67fd29b4852e2aba40de8b",
  measurementId: "G-P71CK340FG"
};

firebase.initializeApp(firebaseConfig);



function App() {

  //Toggle Class Function
  const [slot, setSlot] = useState([0, 0, 0, 0]);

  const toggleClass = (data) => {
    const output = Object.keys(data).map((x) => {
      return data[x].availability;
    })

    setSlot(output);
  };

  //Firebase Function

  useEffect(() => {
    const fetchData = () => {
      const dbRef = firebase.database().ref('/slots');
      dbRef.on('value', (snapshot) => {
        toggleClass(snapshot.val());
      });
    };

    fetchData();

    // Clean up the event listener on unmount
    return () => {
      const dbRef = firebase.database().ref('/slots');
      dbRef.off();
    };
  }, []);

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
