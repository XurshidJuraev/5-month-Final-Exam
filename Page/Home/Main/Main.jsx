import React from 'react'
import './Main.scss'
import '../Home.scss'
import user from '../../../Assets/Images/Userpic.png';
// import youTubeRasm8 from '../../Assets/Images/AchkiliBrat.png';
// import youTubeRasm3 from '../../Assets/Images/Asteroids.png';
// import youTubeRasm7 from '../../Assets/Images/bittaKishi.png';
// import youTubeRasm9 from '../../Assets/Images/BittaQiz.png';
// import youTubeRasm12 from '../../Assets/Images/Makaron.png';
// import youTubeRasm10 from '../../Assets/Images/Marojni.png';
// import youTubeRasm5 from '../../Assets/Images/Medical.png';
// import youTubeRasm6 from '../../Assets/Images/Moon.png';
// import youTubeRasm11 from '../../Assets/Images/Olcha.png';
// import youTubeRasm14 from '../../Assets/Images/pchinni.png';
// import youTubeRasm1 from '../../Assets/Images/Piramida.jpg';
// import youTubeRasm2 from '../../Assets/Images/Right.png';
// import youTubeRasm13 from '../../Assets/Images/Shoptoli.png';
// import youTubeRasm15 from '../../Assets/Images/tarvuz.png';
// import youTubeRasm4 from '../../Assets/Images/Telescopes.png';

function Main(){
    return ( <main className='main'>
		<div className="flex aic">
			<img className='hedr-user-img' src={user} alt="YouTubeImage" />
			<p className='hader-dolli'>Dollie Blair</p>
		</div>
	</main>)
}
export default Main