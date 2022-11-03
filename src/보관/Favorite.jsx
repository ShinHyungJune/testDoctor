import React, {useState, Fragment} from 'react';
import axios from "axios";

const Favorite = ({favorite, setFavorites, favorites}) => {
	let [updateMode, setUpdateMode] = useState(false); // 수정모드 여부
	
	let [form, setForm] = useState({
		title: favorite.title,
		description: favorite.description
	});
	
	const changeMode = () => {
		setUpdateMode(!updateMode);
	};
	
	const changeForm = (event) => {
		setForm({
			...form,
			[event.target.name]: event.target.value
		})
	};
	
	const update = (event) => {
		event.preventDefault();
		
		axios.patch("/favorites/" + favorite.id, form)
			.then(response => {
				// 응답 데이터 형태 관찰해보기(수정한 data를 반환해줌)
				console.log(response);
				
				// 부모로부터 받은 setFavorites 참조를 이용하여 부모의 setFavorites를 호출하여 favorites를 업데이트
				setFavorites(favorites.map(favorite => {
					if(favorite.id === response.data.id)
						return response.data;
					
					return favorite;
				}));
				
				setUpdateMode(false);
			}).catch(error => {
			console.log(error);
			
			alert("문제가 발생하였습니다.");
		});
	};
	
	const remove = () => {
		axios.delete("/favorites/" + favorite.id)
			.then(response => {
				// 응답 데이터 형태 관찰해보기
				console.log(response);
				
				/* filter는 배열의 요소 중 본인이 명시한 조건을 만족하는 요소만 남긴 배열을 반환함 */
				setFavorites(favorites.filter(favoriteData => {
					return favoriteData.id !== favorite.id;
				}));
				
			}).catch(error => {
			console.log(error);
			
			alert("문제가 발생하였습니다.");
		});
	};
	
	return (
		<div>
			{updateMode ?
				(
					<Fragment>
						<div>
							<input type="text" name="title" defaultValue={favorite.title} onChange={changeForm}/>
						</div>
						<div>
							<input type="text" name="reason" defaultValue={favorite.reason} onChange={changeForm}/>
						</div>
						<button onClick={update}>수정완료</button>
						<button onClick={changeMode}>취소</button>
					</Fragment>
				) :
				(
					<Fragment>
						<p>좋아하는 것 : {favorite.title}</p>
						<p>좋아하는 이유 : {favorite.reason}</p>
						<button onClick={changeMode}>수정</button>
					</Fragment>
				)
			}
			
			<button type="button" onClick={remove}>삭제</button>
		</div>
	);
};

export default Favorite;