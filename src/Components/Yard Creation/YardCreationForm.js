import React, {Component} from 'react';
import ReactDOM from 'react-dom'

class YardCreationForm extends Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeEvent = this.onChangeEvent.bind(this);
        this.onChangeEventYardCode = this.onChangeEventYardCode.bind(this);
        this.onChangeEventYardName = this.onChangeEventYardName.bind(this);


        this.state = {

            errorStatus: true,
            yardCode: "",
            yardName: "",
            yardDescription: "",
            yardLevel: "5",
            yardLocation: "Matara"

        }
    }

    onChangeEventYardCode(e) {
        let yardCodeValue = e.target.value;

        this.setState({yardCode: yardCodeValue});

        let errMsgYardCode = "";

        //Check the length of Yard Code input field
        if (yardCodeValue.length < 4 && yardCodeValue.length > 0) {

            errMsgYardCode = "Length should be 4 digit";

            this.setState({errorStatus: true});

        } else if (yardCodeValue.length === 0) {

            errMsgYardCode = "This is required field";

            this.setState({errorStatus: true});

        } else if (/[^0-9a-zA-Z]/.test(yardCodeValue)) {

            errMsgYardCode = "Please input alphanumeric characters only";

            this.setState({errorStatus: true});

        } else {

            errMsgYardCode = "";

            this.setState({errorStatus: false});

        }

        ReactDOM.render(errMsgYardCode, document.getElementById('yardCodeError'))
    }

    onChangeEventYardName(e) {
        let yardNameValue = e.target.value;

        this.setState({yardName: yardNameValue});

        let errMsgYardName = "";

        if (yardNameValue.length === 0) {

            errMsgYardName = "This is required field";

            this.setState({errorStatus: true});

        }

        ReactDOM.render(errMsgYardName, document.getElementById('yardNameError'))

    }

    onChangeEvent(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(e) {
        e.preventDefault();

        const {yardCode, yardName} = this.state;

        if (yardCode === "" || yardName === "") {

            alert("* fields are required. Please fill * fields")

        } else if (this.state.errorStatus === true) {

            alert("Please full fill the requrments");

        } else {
            console.log(yardCode);
        }
    }


    render() {
        return (
            <div className={'my-5 mx-5'}>
                <div className={'card'}>
                    <h3 className={'card-title ml-5 my-3'}>Yard Creation</h3>
                    <div className={'card-body'}>
                        <div className={'card'}>
                            <form onSubmit={this.onSubmit}>

                                <div className="form-row m-2">
                                    <div className="form-group col-md-6">
                                        <label>Yard Code</label><label className={"text-danger"}>&nbsp;*</label>
                                        <input type="text" className="form-control" name={"yardCode"}
                                               value={this.state.yardCode} onChange={this.onChangeEventYardCode}
                                               placeholder="Yard Code" maxLength={4}/>
                                        <label id={"yardCodeError"} className={"errorText"}/>
                                    </div>
                                </div>

                                <div className="form-row m-2">
                                    <div className="form-group col-md-6">
                                        <label>Yard Name</label><label className={"text-danger"}>&nbsp;*</label>
                                        <input type="text" className="form-control" name={"yardName"}
                                               value={this.state.yardName} onChange={this.onChangeEventYardName}
                                               placeholder="Yard Name"/>
                                        <label id={"yardNameError"} className={"errorText"}/>
                                    </div>
                                </div>

                                <div className="form-row m-2">
                                    <div className="form-group col-md-6">
                                        <label>Yard Description</label>
                                        <input type="text" className="form-control" name={"yardDescription"}
                                               value={this.state.yardDescription} onChange={this.onChangeEvent}
                                               placeholder="Yard Description"/>
                                        <label id={"yardDescriptionError"} className={"errorText"}/>
                                    </div>
                                </div>

                                <div className="form-row m-2">
                                    <div className="form-group col-md-6">
                                        <label>Yard Level</label><label className={"text-danger"}>&nbsp;*</label>
                                        <input type="text" className="form-control" name={"yardLevel"}
                                               value={this.state.yardLevel} onChange={this.onChangeEvent}
                                               placeholder="Yard Level" disabled/>
                                        <label id={"yardLevelError"} className={"errorText"}/>
                                    </div>
                                </div>

                                <div className="form-row m-2">
                                    <div className="form-group col-md-6">
                                        <label>Yard Location</label><label className={"text-danger"}>&nbsp;*</label>
                                        <input type="text" className="form-control" name={"yardLocation"}
                                               value={this.state.yardLocation} onChange={this.onChangeEvent}
                                               placeholder="Yard Location" disabled/>
                                        <label id={"yardLocationError"} className={"errorText"}/>
                                    </div>
                                </div>

                                <div className={"form-row m-2"}>
                                    <div className={"form-group col-md-6"}>
                                        <button className={"btn btn-primary form-control"}>Submit</button>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default YardCreationForm;