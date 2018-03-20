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

  }
  // calculate({ amountDue, amountReceived }) {
  //   var amountDue = this.state.amount-due.value;
  //   var amountReceived = document.getElementById("amount-received").value;
  //   var changeDue = parseFloat(amountReceived) - parseFloat(amountDue);

  calculate() {
    var changeDue = parseInt(this.state.amountReceived - this.state.amountDue);
    var total = this.state.amountReceived - this.state.amountDue;
    total = Math.round(total*100)/100;

    var twenties = Math.floor(changeDue / 20);
    changeDue = changeDue % 20;
    var tens = Math.floor(changeDue / 10);
    changeDue = changeDue % 10;
    var fives = Math.floor(changeDue / 5);
    changeDue = changeDue % 5;
    var ones = Math.floor(changeDue / 1);
    changeDue = changeDue % 1;
    //Dollars is done

    changeDue = (this.state.amountReceived - this.state.amountDue);
    changeDue = changeDue - parseInt(changeDue);
    var quarters = Math.floor(changeDue / 0.25);
    changeDue = changeDue % 0.25;
    var dimes = Math.floor(changeDue / 0.10);
    changeDue = changeDue % 0.10;
    var nickels = Math.floor(changeDue / 0.05);
    changeDue = changeDue % 0.05;
    var pennies = Math.floor(Math.round(changeDue / 0.01));
    changeDue = changeDue % 0.01;;

    this.setState({
      total,
      changeDue,
      twenties,
      tens,
      fives,
      ones,
      quarters,
      dimes,
      nickels,
      pennies
    }, () => console.log(this.state))
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
                <input name='amountDue' className="input mb-3" type="number" id="amountDue" placeholder="Oh" onChange={this.handleInputChange}></input>
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
              <div name="output" className="alert alert-success card-header bg-secondary">
                The total change due is ${this.state.total}
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3">
                    <div className="card mb-3">
                      <div className="card-body">
                        <label>Twenties</label>
                        <h5 className="card-text text-center">{this.state.twenties}</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="card mb-3">
                      <div className="card-body">
                        <label>Tens</label>
                        <h5 className="card-text text-center">{this.state.tens}</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="card mb-3">
                      <div className="card-body">
                        <label>Fives</label>
                        <h5 className="card-text text-center">{this.state.fives}</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="card mb-3">
                      <div className="card-body">
                        <label>Ones</label>
                        <h5 className="card-text text-center">{this.state.ones}</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-3">
                    <div className="card">
                      <div className="card-body">
                        <label>Quarters</label>
                        <h5 className="card-text text-center">{this.state.quarters}</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="card">
                      <div className="card-body">
                        <label>Dimes</label>
                        <h5 className="card-text text-center">{this.state.dimes}</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="card">
                      <div className="card-body">
                        <label>Nickels</label>
                        <h5 className="card-text text-center">{this.state.nickels}</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="card">
                      <div className="card-body">
                        <label>Pennies</label>
                        <h5 className="card-text text-center">{this.state.pennies}</h5>
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