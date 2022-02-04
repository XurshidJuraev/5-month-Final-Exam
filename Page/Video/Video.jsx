import React from 'react';
import './Video.scss'
import '../Home/Home.scss'
import { NavLink, useParams, useNavigate } from 'react-router-dom';
import Logo from '../../Assets/Images/Logo.svg';
import Menu from '../../Assets/Images/Menu.svg';
import AllVideo from '../../Assets/Images/AllVideo.svg';
import NewVideo from '../../Assets/Images/NewVideo.svg';
import qongiroqcha from '../../Assets/Images/qongiroqcha.svg';
import userPic from '../../Assets/Images/Userpic.png';
import Player from '../../Assets/Images/player.png';
import LikeDislike from '../../Assets/Images/like-dislike.png';

function Video(){

    const navigate = useNavigate();
	const { id } = useParams();
	const [user, setUser] = React.useState({});
	const [users, setUsers] = React.useState([]);
	const [isLoading, setLoading] = React.useState(true);

	// React.useEffect(() => {
	// 	fetch('https://reqres.in/api/users/' + id)
	// 		.then((response) => response.json())
	// 		.then((data) => {
	// 			setUser(data?.data);
	// 			setLoading(false);
	// 		});

			

	// 		(async () => {
	// 			try {
	// 				const response = await fetch('https://reqres.in/api/users');
	// 				const data = await response.json();
					
					
	// 				if (data?.data?.length > 0) {
	// 					setUsers([...data.data]);
	// 					setLoading(false);
	// 				}
	// 			} catch (err) {
	// 				console.log(err);
	// 			}
	// 		})();
	// }, []);
	React.useEffect(() => {
		fetch('https://reqres.in/api/users/' + id)
			.then((response) => response.json())
			.then((data) => {
				setUser(data?.data);
				setLoading(false);
			});

			

			(async () => {
				try {
					const response = await fetch('https://reqres.in/api/users');
					const data = await response.json();
					
					
					if (data?.data?.length > 0) {
						setUsers([...data.data]);
						setLoading(false);
					}
				} catch (err) {
					console.log(err);
				}
			})();
	}, [id]);

    // React.useEffect(() => {
	// 	// Immediately invoked function
	// 	(async () => {
	// 		try {
	// 			const response = await fetch('https://reqres.in/api/users');
	// 			const data = await response.json();
				
				
	// 			if (data?.data?.length > 0) {
	// 				setUsers([...data.data]);
	// 				setLoading(false);
	// 			}
	// 		} catch (err) {
	// 			console.log(err);
	// 		}
	// 	})();
	// }, []);

    return(
        <>
        <header className='container header'>
            <div className="flex jcsb">
                <div className="flex">
                    <div className="meny">
                        <img className='meny' src={Menu} alt="YouTubeImage" />
                    </div>
                    <div className="logo">
                    <NavLink className='tdn' to={'/'}>
                    <img className='logo' src={Logo} alt="YouTubeImage" />
                    </NavLink>
                    </div>
                </div>

                <div className="input">
                    <input className='header-input' type="search" placeholder='   Search' />
                </div>

                <div className="header-newVideo flex jcsb">
                    <img className='flex-headerImage' src={NewVideo} alt="YouTubeImage" />
                    <img className='flex-headerImage' src={AllVideo} alt="YouTubeImage" />
                    <img className='flex-headerImage' src={qongiroqcha} alt="YouTubeImage" />
                    <img className='flex-headerImage2' src={userPic} alt="YouTubeImage" />
                </div>
            </div>
        </header>
        
        <main className='container allfa'>
            <div className="varry-flex">
            <div className="div-globall-video">
                <img className='vorry-image' src={user.avatar} alt="YouTubeImage" />
                <div className="player-image">
                <img className='player-image' src={Player} alt="YouTubeImage" />
                </div>

			<div className="alisa allfa-text">
				<p className='allfa-dude'>Dude You Re Getting A Telescope</p>
				<div className="allfa-like-and-wiews">
				<p className='box-like'>230k views</p>

				<img className='likesdrop' src={LikeDislike} alt="YouTubeImage" />
				</div>
			</div>

			<div className="text-opisaniya">
				<div className="flex">
				<img className='avatarcha-baruxa' src={user.avatar} alt="YouTubeImage" />
				<div className="aligon">
				<p className='userni-last-ismi'>{user.last_name + ' ' + user.first_name}</p>
				<p className='box-like grotin'>Published on 14 Jun 2019</p>
				</div>
				</div>
				<div className="apisaniya">
					<p className='a-sucses'>A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy; it is based on a number of factors, including ad placement, demographic, even the consumer’s mood when they see your ad.</p>
					<p className='wov-mor'>Show more</p>
				</div>
			</div>
            </div>

            <div className="klient">
            {users.length > 0 &&
				users.map((user) => (
						<NavLink  key={user.id}  className='tdn' to={'/video/' + user.id}>
							<div className='box-heding'>
						<div className="box-love">
							<div className="box-image">
								<img className="box-image" src={user.avatar} alt="YouTubeImage" />
							</div>
							<div className="box-text">
								<h3 className='box-title'>{user.last_name + " " + user.first_name}</h3>
								<div className="box-flex">
									<p className='box-like'>80k views  ·  3 days ago</p>
									<p className='box-like'>{user.last_name}</p>
								</div>
							</div>
						</div>
					</div>
						</NavLink>
			))}
            </div>
            </div>

        </main>
            
    </>

    )
}
export default Video