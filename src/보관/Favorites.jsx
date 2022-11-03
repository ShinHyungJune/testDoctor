import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Favorite from "./Favorite";

const Favorites = () => {
	
	let [favorites, setFavorites] = useState([]);
	
	let [form, setForm] = useState({
		title: "", // 좋아하는것 이름
		reason: "", // 좋아하는 이유
	});
	
	/* 컴포넌트가 렌더링 되면 바로 좋아하는것 목록을 불러와 favorites 데이터를 설정하기 */
	useEffect(() => {
		axios.get("/favorites")
			.then(response => {
				// 응답 데이터 형태 관찰해보기
				console.log(response);
				
				setFavorites(response.data);
			}).catch(error => {
			console.log(error);
			
			alert("문제가 발생하였습니다.");
		});
		
	}, []);
	
	const changeForm = (event) => {
		setForm({
			...form,
			[event.target.name]: event.target.value
		})
	};
	
	const save = (event) => {
		event.preventDefault();
		
		axios.post("/favorites", form)
			.then(response => {
				// 응답 데이터 형태 관찰해보기(저장한 data를 반환해줌)
				console.log(response);
				
				// 데이터를 저장한 후, todos 목록 전체를 다시 불러올 수도 있지만,
				// 기존 목록에 새로 생성된 todo만 추가해주는게 더 효율적
				setFavorites([...favorites, response.data]);
			}).catch(error => {
			console.log(error);
			
			alert("문제가 발생하였습니다.");
		});
	};
	
	
	return (
		<div>
			<form onSubmit={save}>
				<div>
					<input type="text" name="title" placeholder="좋아하는것" onChange={changeForm}/>
				</div>
				<div>
					<input type="text" name="reason" placeholder="좋아하는 이유" onChange={changeForm} />
				</div>
				
				<button>좋아하는것 추가</button>
			</form>
			
			{/* map으로 컴포넌트를 여러개 만들 때는 각 컴포넌트를 구별할 수 있는 유일한 key값을 넘겨줘야함. */}
			{favorites.map(favorite => <Favorite key={favorite.id} favorite={favorite} favorites={favorites} setFavorites={setFavorites}/>)}
		</div>
	);
};
export default Favorites;