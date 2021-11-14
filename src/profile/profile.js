import PropTypes from 'prop-types';


const Details = (props) => {
return <div style={{backgroundColor: "lightblue", padding:"20px"}}>
    <h1>My name's {props.name} <br/> Bio : {props.desc}<br/> Profession : {props.job} </h1>
    <button onClick={props.data} style={{
  color:"white" ,padding:"10px",backgroundColor:"#3369ff", borderRadius:"0.2em"}}>Call function</button>
    </div>
    
}
 Details.propTypes = {
     name: PropTypes.string,
     desc: PropTypes.string,
     job: PropTypes.string
 }

export default Details
