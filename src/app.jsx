import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amountDue: 0,
      amountReceived: 0,
      changeDue: 0,
      twenties: 0,
      tens: 0,
      fives: 0,
      ones: 0,
      quarters: 0,
      dimes: 0,
      nickels: 0,
      pennies: 0
    }
    var dollars = Math.floor(changeDue);
    changeDue = changeDue % 1;
    var quarters = Math.floor(changeDue / 0.25);
    changeDue = changeDue % 0.25;
    var dimes = Math.floor(changeDue / 0.10);
    changeDue = changeDue % 0.10;
    var nickels = Math.floor(changeDue / 0.05);
    changeDue = changeDue % 0.05;
    var pennies = Math.floor(Math.round(changeDue / 0.01));
    changeDue = changeDue % 0.01;
  }


  render() {
    return (
      <div className="container-fluid">
        <h1 className='text-left'>Change Calculator</h1>
        <p className='lead bg-secondary text-dark text-left'>Respect React</p>
        <hr />
        <div className="row">
          <div className="col-sm-4">
            <div className="card">
              <div className="card-header bg-secondary">
                <h5 className='text-dark'>Enter Information</h5>
              </div>
              <div className="card-body">
                <p className="card-text">How much is due?</p>
                <input className="input mb-3" type="text" id="amount due" placeholder="Fuck Yea"></input>
                <p className="card-text">How much is owed?</p>
                <input className="input mb-3" type="text" id="amount back" placeholder="Fuck Yea"></input>
                <div className="card-footer">
                  <button className="btn btn-secondary btn-block">Go somewhere</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-8">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3">
                    <div className="card mb-3">
                      <div className="card-body">
                        <p className="card-text text-center">Twenties</p>
                        <p className="card-text text-center">0</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="card mb-3">
                      <div className="card-body">
                        <p className="card-text text-center">Tens</p>
                        <p className="card-text text-center">0</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="card mb-3">
                      <div className="card-body">
                        <p className="card-text text-center">Fives</p>
                        <p className="card-text text-center">0</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="card mb-3">
                      <div className="card-body">
                        <p className="card-text text-center">Ones</p>
                        <p className="card-text text-center">0</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-3">
                    <div className="card">
                      <div className="card-body">
                        <p className="card-text text-center">Quarters</p>
                        <p className="card-text text-center">0</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="card">
                      <div className="card-body">
                        <p className="card-text text-center">Dimes</p>
                        <p className="card-text text-center">0</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="card">
                      <div className="card-body">
                        <p className="card-text text-center">Nickels</p>
                        <p className="card-text text-center">0</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="card">
                      <div className="card-body">
                        <p className="card-text text-center">Pennies</p>
                        <p className="card-text text-center">0</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;







