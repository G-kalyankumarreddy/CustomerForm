import {Component} from "react";
import ThankYou  from "../Thankyou";

import './index.css'

class CustomerSupport extends Component{
    state={formSubmitted:false,name:"",errorMsg:"",satisfactionLevel:"",
    subqueryAnswers:[],
    textareaValue:"Additional Comments",
    agentGoodBehviourIsChecked:false,
    productGoodQualityIsChecked:false,
    onTimeDeliveryIsChecked:false,
    agentBadBehviourIsChecked:false,
    productBadQualityIsChecked:false,
    delayedDeliveryIsChecked:false}

     //to add name in the form 
     onChangeNameInput=event=>{
        this.setState({name:event.target.value})
     }

    // to get  satisfaction levels of customer
    onChangeSatisfaction=event=>{
        this.setState({satisfactionLevel:event.target.value,subqueryAnswers:[],
            agentGoodBehviourIsChecked:false,
            productGoodQualityIsChecked:false,
            onTimeDeliveryIsChecked:false,
            agentBadBehviourIsChecked:false,
            productBadQualityIsChecked:false,
            delayedDeliveryIsChecked:false})
    } 
     
    //to get agentBehaviour good behaviour value
    onClickDeliveryAgentBehaviourSatisfied=event=>{
        const agentBehaviour=event.target.value 
       this.setState(prevState=>({agentGoodBehviourIsChecked:!prevState.agentGoodBehviourIsChecked,
        subqueryAnswers:[...prevState.subqueryAnswers,agentBehaviour]}))
      
    }

    //to get on time delivery value 
    onClickOnTimeDelivery=event=>{
        const delvieryValue=event.target.value 
       this.setState(prevState=>({onTimeDeliveryIsChecked:!prevState.onTimeDeliveryIsChecked,
        subqueryAnswers:[...prevState.subqueryAnswers,delvieryValue]}))
      
    }

    //to get product quality value 
    onClickProductQualitySatisfied=event=>{
        const productValue=event.target.value 
       this.setState(prevState=>({productGoodQualityIsChecked:!prevState.productGoodQualityIsChecked,
        subqueryAnswers:[...prevState.subqueryAnswers,productValue]}))
      
    }
   
    //to get agentBehaviour bad behaviour value
    onClickAgentBehaviourNotSatisfied=event=>{
        const agentBehaviour=event.target.value 
       this.setState(prevState=>({agentBadBehviourIsChecked:!prevState.agentBadBehviourIsChecked    ,
        subqueryAnswers:[...prevState.subqueryAnswers,agentBehaviour]}))
      
    }

    //to get delayed  delivery value
    onClickDelayedDelivery=event=>{
        const deliveryValue=event.target.value 
       this.setState(prevState=>({delayedDeliveryIsChecked:!prevState.delayedDeliveryIsChecked    ,
        subqueryAnswers:[...prevState.subqueryAnswers,deliveryValue]}))
      
    }

    //to get bad product  quality value
    onClickProductQualityNotSatisified=event=>{
        const productValue=event.target.value 
       this.setState(prevState=>({productBadQualityIsChecked:!prevState.productBadQualityIsChecked    ,
        subqueryAnswers:[...prevState.subqueryAnswers,productValue]}))
      
    }

    //to display options when customer clicks on happy 
    onClickingSatisfied=()=>{
        const{agentGoodBehviourIsChecked,onTimeDeliveryIsChecked,productGoodQualityIsChecked}=this.state 
        return(
            <>
            <p className="quesiton-line">What went well?</p>
            <label className="label-styling">
            <input type="checkbox" value="agentBehaviour" onChange={this.onClickDeliveryAgentBehaviourSatisfied} checked={agentGoodBehviourIsChecked}/>
            Delivery Agent Behaviour
            </label>
            <br/>
            <label className="label-styling">
                <input type="checkbox" value="onTimeDelivery" onChange={this.onClickOnTimeDelivery} checked={onTimeDeliveryIsChecked}/>
                On Time Delivery
            </label>
            <br/>
        <label className="label-styling">
        <input type="checkbox" value="productQuality" onChange={this.onClickProductQualitySatisfied} checked={productGoodQualityIsChecked}/>
                Product Quality
        </label>
            </>
        )
    }
        
    //to display option when customer clicks on not happy
    onClickingNotSatisfied=()=>{
        const{agentBadBehviourIsChecked,productBadQualityIsChecked,delayedDeliveryIsChecked}=this.state
        return(
            <>
             <p className="quesiton-line">What didn't go well?</p>
            <label className="label-styling">
            <input type="checkbox" value="agentBehaviourNotSatisfied" onChange={this.onClickAgentBehaviourNotSatisfied} checked={agentBadBehviourIsChecked}/>
            Delivery Agent Behaviour
            </label>
            <br/>
            <label className="label-styling">
                <input type="checkbox" value="delayedDelivery" onChange={this.onClickDelayedDelivery} checked={delayedDeliveryIsChecked}/>
                Delayed Delivery
            </label>
            <br/>
        <label className="label-styling">
        <input type="checkbox" value="productQuality" onChange={this.onClickProductQualityNotSatisified} checked={productBadQualityIsChecked}/>
                Product Quality
        </label>
            </>
        )
    }

    //displaySubQuestions based on customer experience
    toDisplaySubQueries=()=>{
        const{satisfactionLevel}=this.state 
        if(satisfactionLevel==="happy"){
           return this.onClickingSatisfied()
        }else if(satisfactionLevel==="unHappy"){
           return this.onClickingNotSatisfied()
        }
    }

    //to get additional comments from user using textarea element 
    onChangeTextArea=event=>{
        this.setState({textareaValue:event.target.value})
    }

    //on clicking submit button 
    onClickSubmit=event=>{
        const{name}=this.state
        event.preventDefault()
        if(name===""){
            this.setState({errorMsg:true})
        }else{
            this.setState(prevState=>({formSubmitted:!prevState.formSubmitted,errorMsg:false}))
        }
    }
    
   //customerFeedbackForm 
   customerFeedbackForm=()=>{
    const {nameInput,textareaValue,errorMsg}=this.state 
    return(
        <>
          <h1 className="title">Delivery Feedback</h1>
                 <form className="form-styling"  type="submit">
                    <label className="label-styling">Name <br/>
                    <input type="text" className="name-styling" value={nameInput} onChange={this.onChangeNameInput} placeholder="Name"/>
                    </label>
                    {errorMsg && <p className="error-msg">*Enter a valid name</p>}
                    <br/>
                    <p className="quesiton-line">Your experience with our service?</p>
                   <label className="label-styling">
                   <input type="radio" value="happy" name="delvieryFeedback" onChange={this.onChangeSatisfaction}/>
                   Satisfied
                   </label>
                   <br/>
                   <label className="label-styling">
                   <input type="radio" value="unHappy"  name="delvieryFeedback" onChange={this.onChangeSatisfaction}/>
                   Not Satisfied
                   </label>
                 <div>
                 {this.toDisplaySubQueries()}   
                 </div>
                 <textarea className="textarea-styling" rows="6" cols="20" value={textareaValue} onChange={this.onChangeTextArea}/>
                 <br/>
                 <label className="label-styling">upload image <br/><input type="file" id="file-input" name="ImageStyle"/></label>
                 <br/>
                 <button className="submit-button"  onClick={this.onClickSubmit}>Submit</button>
                 </form>
        </>
    )
   }

    render(){
       const{formSubmitted}=this.state
        return(
            <div className="page-container">
              {formSubmitted? <ThankYou/> :this.customerFeedbackForm()}
            </div>
        )
    }
}

export default CustomerSupport