import profilepic from './assets/profilepict.jpg'

function Card(){
    return(
            <div className="card">
                    <img src= {profilepic} alt="profile picture"></img>
                    <h2>John Doe</h2>
                    <p>Joendoe@johndoe.com</p>
            </div>

    );
}
export default Card