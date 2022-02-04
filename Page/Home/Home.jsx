import React from 'react';
import './Home.scss'
import { NavLink } from 'react-router-dom'
import Favourite from '../../Assets/Images/Favourites.svg';
import Games from '../../Assets/Images/Games.svg';
import History from '../../Assets/Images/History.svg';
import HomeImage from '../../Assets/Images/Home.svg';
import Library from '../../Assets/Images/Library.svg';
import LikedVideos from '../../Assets/Images/LikedVideos.svg';
import Logo from '../../Assets/Images/Logo.svg';
import Menu from '../../Assets/Images/Menu.svg';
import Music from '../../Assets/Images/Music.svg';
import ShowMore from '../../Assets/Images/ShowMore.svg';
import Subscriptions from '../../Assets/Images/Subscriptions.svg';
import Trending from '../../Assets/Images/Trending.svg';
import WatchLater from '../../Assets/Images/WatchLater.svg';
import AllVideo from '../../Assets/Images/AllVideo.svg';
import NewVideo from '../../Assets/Images/NewVideo.svg';
import qongiroqcha from '../../Assets/Images/qongiroqcha.svg';
import user from '../../Assets/Images/Userpic.png';
import Settings from '../../Assets/Images/Settings.svg';
import youTubeRasm8 from '../../Assets/Images/AchkiliBrat.png';
import youTubeRasm3 from '../../Assets/Images/Asteroids.png';
import youTubeRasm7 from '../../Assets/Images/bittaKishi.png';
import youTubeRasm9 from '../../Assets/Images/BittaQiz.png';
import youTubeRasm12 from '../../Assets/Images/Makaron.png';
import youTubeRasm10 from '../../Assets/Images/Marojni.png';
import youTubeRasm5 from '../../Assets/Images/Medical.png';
import youTubeRasm6 from '../../Assets/Images/Moon.png';
import youTubeRasm11 from '../../Assets/Images/Olcha.png';
import youTubeRasm14 from '../../Assets/Images/pchinni.png';
import youTubeRasm1 from '../../Assets/Images/Piramida.jpg';
import youTubeRasm2 from '../../Assets/Images/Right.png';
import youTubeRasm13 from '../../Assets/Images/Shoptoli.png';
import youTubeRasm15 from '../../Assets/Images/tarvuz.png';
import youTubeRasm4 from '../../Assets/Images/Telescopes.png';



function Home() {
	const [users, setUsers] = React.useState([]);
	const [twousers, setTwoUsers] = React.useState([]);
	const [setLoading] = React.useState(true)
	
	React.useEffect(() => {
		// Immediately invoked function
		(async () => {
			try {
				const response = await fetch('https://reqres.in/api/users');
				const data = await response.json();
				
				
				if (data?.data?.length > 0) {
					setUsers([...data.data]);
				}
			} catch (err) {
				console.log(err);
			}
		})();
	}, []);
	

	return (
		<section>
			<header className='container header'>
				<div className="flex jcsb">
					<div className="flex">
					<div className="meny">
					<img className='meny' src={Menu} alt="YouTubeImage" />
					</div>
					<div className="logo">
					<img className='logo' src={Logo} alt="YouTubeImage" />
					</div>
					</div>

					<div className="input">
					<input className='header-input' type="search" placeholder='   Search'/>
					</div>

				<div className="header-newVideo flex jcsb">
					<img className='flex-headerImage' src={NewVideo} alt="YouTubeImage" />
					<img className='flex-headerImage' src={AllVideo} alt="YouTubeImage" />
					<img className='flex-headerImage' src={qongiroqcha} alt="YouTubeImage" />
					<img className='flex-headerImage2' src={user} alt="YouTubeImage" />
				</div>
				</div>
			</header>

			<div className="container nav">
				<div className="hedr-margn">
				<div className="flex">
				<img src={HomeImage} alt="YouTubeImage" />
				<p className='home'>Home</p>
				</div>
				<div className="flex">
				<img src={Trending} alt="YouTubeImage" />
				<p className='hader-wit'>Trending</p>
				</div>
				<div className="flex">
				<img src={Subscriptions} alt="YouTubeImage" />
				<p className='hader-wit'>Subscriptions</p>
				</div>
				</div>
				<div className="flex">
				<img src={Library} alt="YouTubeImage" />
				<p className='hader-wit'>Library</p>
				</div>
				<div className="flex">
				<img src={History} alt="YouTubeImage" />
				<p className='hader-wit'>History</p>
				</div>
				<div className="flex">
				<img src={WatchLater} alt="YouTubeImage" />
				<p className='hader-wit'>WatchLater</p>
				</div>
				<div className="flex">
				<img src={Favourite} alt="YouTubeImage" />
				<p className='hader-wit'>Favourite</p>
				</div>
				<div className="flex">
				<img src={LikedVideos} alt="YouTubeImage" />
				<p className='hader-wit'>Liked Videos</p>
				</div>
				<div className="flex">
				<img src={Music} alt="YouTubeImage" />
				<p className='hader-wit'>Music</p>
				</div>
				<div className="flex">
				<img src={Games} alt="YouTubeImage" />
				<p className='hader-wit'>Games</p>
				</div>
				<div className="flex">
				<img src={ShowMore} alt="YouTubeImage" />
				<p className='hader-wit'>Show More</p>
				</div>
				<h3>Subscriptions</h3>

				{users.length > 0 &&
					users.map((user) => (
						<NavLink  key={user.id} className='tdn' to={'channel/' + user.id}>
							<div className="flex">
							<img className='user-imag_hedr' src={user.avatar} alt="YouTubeImage" />
							<p className='hader-wit'>{user.first_name}</p>
						</div>
						</NavLink>
					))}
				<div className="hedr-margn2">
					<div className="flex">
					<img src={Settings} alt="YouTubeImage" />
					<p className='hader-wit'>Settings</p>
					</div>
				</div>
			</div>

			<main className='main'>
				{users.length > 0 &&
					users.slice(0, 1).map((user) => (
						<div  key={user.id}  className="flex aic">
						<NavLink className='flex aic tdn' to={'channel/' + user.id}>
							<img className='hedr-user-img' src={user.avatar} alt="YouTubeImage" />
							<p className='hader-dolli'>{user.first_name}</p>
						</NavLink>
				</div>
					))}
				
				<div className='box'>
				{users.length > 0 &&
					users.map((user) => (
						<NavLink  key={user.id}  className='tdn' to={'video/' + user.id}>
							<div className='box-heding'>
						<div className="box-love">
							<div className="box-image">
								<img className="box-image" src={user.avatar} alt="YouTubeImage" />
							</div>
							<div className="box-text">
								<h3 className='box-title'>{user.last_name + " " + user.first_name}</h3>
								<div className="box-flex">
									<p className='box-like'>80k views  ·  3 days ago</p>
									<p className='box-like'>Dollie Blair</p>
								</div>
							</div>
						</div>
					</div>
						</NavLink>
					))}
				</div>
				<h3>Recommended</h3>

				<div className="box-big">
				{users.length > 0 &&
					users.slice(3, 6).map((user) => (
						<NavLink  key={user.id}  className='tdn' to={'video/' + user.id}>
							<div className='box-heding2'>
							<div className="box-love">
								<div className="big-box-imag">
									<img className="big-box-imag" src={user.avatar} alt="YouTubeImage" />
								</div>
								<div className="box-text">
									<h3 className='box-title'>{user.last_name + " " + user.first_name}</h3>
									<div className="box-flex">
										<p className='box-like'>34k views  ·  5 months ago</p>
										<p className='box-like'>{user.last_name}</p>
									</div>
								</div>
							</div>
					</div> 	
						</NavLink>
					))}
				</div>

				{users.length > 0 &&
					users.slice(1, 2).map((user) => (
						<div  key={user.id}  className="flex aic">
						<NavLink className='flex aic tdn' to={'channel/' + user.id}>
							<img className='hedr-user-img' src={user.avatar} alt="YouTubeImage" />
							<p className='hader-dolli'>{user.first_name}</p>
						</NavLink>
				</div>
					))}
				
				<div className='box'>
				{users.length > 0 &&
					users.map((user) => (
						<NavLink  key={user.id}  className='tdn' to={'video/' + user.id}>
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
			</main>

		</section>
	);
}

export default Home;

{/* {users.length > 0 &&
	users.map((user) => (
			<Box sx={{ padding: '0 0 30px 20px' }}>
				
				<div>
				<Accordion>
					<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1a-content"
					id="panel1a-header"
					>
					<Typography>{user.first_name + ' ' + user.last_name}</Typography>
					</AccordionSummary>
					<AccordionDetails>
					<Typography>
						<NavLink to={'profile/' + user.id}>
							<Button>Wiew Profile</Button>
						</NavLink>
					</Typography>
					</AccordionDetails>
				</Accordion>
				</div>
			</Box>
	))} */}