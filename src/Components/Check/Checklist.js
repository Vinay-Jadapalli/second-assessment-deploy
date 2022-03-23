import React from "react";
import './Checklist.css'
class Checklist extends React.Component {

    state={
        Colornames: {
            IceCream:false,
            Cake:false,
            Juice:false
        }
    }

        checkclick = (e) => {
            var {name,checked} = e.target;
            this.setState((e)=>{
                var Selectedsport = e.Colornames;
                return Selectedsport[name]=checked;
            })
        };
    render(){
        var displaysports=Object.keys(this.state.Colornames).filter((x)=>this.state.Colornames[x]);
        return(
            <div>
                <center>
                    <h2 className="check1">Check Box</h2>
                    <h4>React Js</h4>
                    <div className="check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" name="IceCream" onChange={this.checkclick} />
                        <label className="form-check-label" for="flexCheckDefault">IceCream</label>
                    </div>

                    <div className="check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" name="Cake" onChange={this.checkclick}/>
                        <label className="form-check-label" for="flexCheckDefault">Cake</label>
                    </div>

                    <div className="check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" name="Juic" onChange={this.checkclick} />
                        <label className="form-check-label" for="flexCheckDefault">Juice</label>
                    </div>
                    <hr/>
                    <div style={{backgroundColor:"black",color:"cyan",width:"250px"}}>
                        <strong>{displaysports+""}</strong>
                    </div>
                </center>
            </div>
        )
    }
}
export default Checklist;