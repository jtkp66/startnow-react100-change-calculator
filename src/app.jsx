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
      pennies: 0,
      total: 0
    },

      this.handleInputChange = this.handleInputChange.bind(this)
    this.calculate = this.calculate.bind(this)
  };

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    }, () => console.log(this.state))

    return this.setState({
      [name]: e.value,
    });
  }


  // calculate({ amountDue, amountReceived }) {
  //   var amountDue = this.state.amount-due.value;
  //   var amountReceived = document.getElementById("amount-received").value;
  //   var changeDue = parseFloat(amountReceived) - parseFloat(amountDue);

  calculate() {
    var changeDue = parseInt(this.state.amountReceived - this.state.amountDue);
    var total = changeDue;

    var twenties = Math.floor(changeDue);
    changeDue = changeDue % 20;
    var tens = Math.floor(changeDue);
    changeDue = changeDue % 10;
    var fives = Math.floor(changeDue);
    changeDue = changeDue % 5;
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
    console.log(changeDue);

    this.setState({
      total,
      changeDue,
      dollars,
      quarters,
      dimes,
      nickels,
      pennies
    })
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
                <h5 className='text-dark'>Enter Information!</h5>
              </div>
              <div className="card-body">
                <p className="card-text">How much is due?</p>
                <input name='amountDue' className="input mb-3" type="number" id="amount-due" placeholder="Oh" onChange={this.handleInputChange}></input>
                <p className="card-text">How much is owed?</p>
                <input name="amountReceived" className="input mb-3" type="number" id="amount-received" placeholder="Yea" onChange={this.handleInputChange}></input>
                <div className="card-footer">
                  <button className="btn btn-primary btn-block" name="btn" onClick={this.calculate}>Calculate</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-8">
            <div className="card">
              <div name="output" className="card-header bg-secondary">
                <h5 className='text-dark text-center'>{this.state.total}</h5>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3">
                    <div className="card mb-3">
                      <div className="card-body">
                        <label>Twenties</label>
                        <p className="card-text text-center">{this.state.twenties}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="card mb-3">
                      <div className="card-body">
                        <label>Tens</label>
                        <p className="card-text text-center">{this.state.tens}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="card mb-3">
                      <div className="card-body">
                        <label>Fives</label>
                        <p className="card-text text-center">{this.state.fives}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="card mb-3">
                      <div className="card-body">
                        <label>Ones</label>
                        <p className="card-text text-center">{this.state.ones}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-3">
                    <div className="card">
                      <div className="card-body">
                        <label>Quarters</label>
                        <p className="card-text text-center">{this.state.quarters}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="card">
                      <div className="card-body">
                        <label>Dimes</label>
                        <p className="card-text text-center">{this.state.dimes}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="card">
                      <div className="card-body">
                        <label>Nickels</label>
                        <p className="card-text text-center">{this.state.nickels}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="card">
                      <div className="card-body">
                        <label>Pennies</label>
                        <p className="card-text text-center">{this.state.pennies}</p>
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



// {/* // // // onChange={ this.onInputChange }
// // // /* <div className="output-div">
// // //  <p id="output" className={ this.state.output }>{ this.state.total }</p>
// // //            <label className="twenties money-label" htmlFor="twenties">
// // //              Twenties */
// <div className="output-div">
//               <div className="col-sm-8">
//                 <div className="card">
//                   <div className="card-body">
//                     <p id="output">{this.state.total}stuff</p>
//                   </div>
//               </div>
//             </div>