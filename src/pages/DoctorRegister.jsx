import React, {useState} from 'react';
import axios from "axios";
import {connect} from "react-redux";
import {login} from "../actions/commonActions";
import Form from "../components/Form";

const DoctorRegister = ({login, history}) => {
	let [form, setForm] = useState({
		agree1: false,
		agree2: false,

		email: "",
		password: "",

	});

	const changeForm = (event) => {
		return alert(event.target.type);
		setForm({
			...form,
			[event.target.name] : event.target.value
		});
	};

	const submit = (event) => {
		event.preventDefault();

		axios.post("/register", form)
			.then(response => {
				login({email: form.email}, response.data.accessToken, onLogin);
			})
	};

	const agreeAll = () => {
		setForm({
			...form,
			agree1: true,
			agree2: true,
			agree3: true
		});
	}

	const register = () => {

	};

	const onLogin = () => {
		history.push("/");
	};

	return (
			<div className="area-register">
				<form onSubmit={register}>

					<div className="boxes">
						<div className="box-wrap">
							<div className="box box01">
								<div className="box-logo">
									<img src="/img/logo-1.png" alt="" className="logo" />

									<h3 className="title">회원가입</h3>
								</div>

								<div className="bottom">
									<div className="m-title type01">이용약관</div>

									<div className="m-input-checkbox type02" onClick={agreeAll}>모두 동의합니다.</div>

									<div className="mt-28"></div>

									<div className="m-input-checkbox type01">
										<input type="checkbox" id="agree1" name="agree1" />
											<label htmlFor="agree1">
												<div className="circle">
													<img src="/img/check-white.png" alt="" />
												</div>

												<span className="text">(필수) 서비스 이용약관</span>

												<button className="btn-page">
													<img src="/img/arrowRight-gray.png" alt="" />
												</button>
											</label>
									</div>

									<div className="mt-24"></div>

									<div className="m-input-checkbox type01">
										<input type="checkbox" id="agree2" name="agree2" />
											<label htmlFor="agree2">
												<div className="circle">
													<img src="/img/check-white.png" alt="" />
												</div>

												<span className="text">(필수) 개인정보 수집 및 이용 동의</span>

												<button className="btn-page">
													<img src="/img/arrowRight-gray.png" alt="" />
												</button>
											</label>
									</div>

									<div className="mt-24"></div>

									<div className="m-input-checkbox type01">
										<input type="checkbox" id="agree3" />
											<label htmlFor="agree3">
												<div className="circle">
													<img src="/img/check-white.png" alt="" />
												</div>

												<span className="text">(선택) 알람 이용</span>

												<button className="btn-page">
													<img src="/img/arrowRight-gray.png" alt="" />
												</button>
											</label>
									</div>
								</div>
							</div>
						</div>

						<div className="box-wrap">
							<div className="box box02">
								<div className="m-title type01">개인정보</div>

								<div className="m-input-wrap">
									<div className="m-input-title type01">이름</div>

									<div className="m-input-text type01">
										<input type="text" placeholder="이름 입력" />
									</div>

									
								</div>

								<div className="m-input-wrap">
									<div className="m-input-title type01">휴대폰 번호</div>

									<div className="m-input-withBtn type01">
										<div className="m-input m-input-text type01">
											<input type="text" placeholder="010-0000-0000" />
										</div>

										<button type="button" className="m-input-btn m-btn type02">인증받기</button>
									</div>
									

								</div>

								<div className="m-input-wrap">
									<div className="m-input-title type01">인증번호</div>

									<div className="m-input-withBtn type01">
										<div className="m-input m-input-text type01">
											<input type="text" placeholder="" />
										</div>

										<button type="button" className="m-input-btn m-btn type02">인증하기</button>
									</div>
									

								</div>

								<div className="m-input-wrap">
									<div className="m-input-title type01">귀하의 이메일</div>

									<div className="m-input-withBtn type01">
										<div className="m-input m-input-text type01">
											<input type="text" placeholder="email@email.com" />
										</div>

										<button type="button" className="m-input-btn m-btn type02">중복확인</button>
									</div>

									<p className="m-input-comment">* 로그인 아이디로 사용됩니다.</p>
									

								</div>

								<div className="m-input-wrap">
									<div className="m-input-title type01">새 비밀번호</div>

									<div className="m-input m-input-text type01">
										<input type="text" placeholder="새 비밀번호" />
									</div>
								</div>

								<div className="m-input-wrap">
									<div className="m-input-title type01">새 비밀번호 확인</div>

									<div className="m-input m-input-text type01">
										<input type="text" placeholder="새 비밀번호 확인" />
									</div>

									
								</div>
							</div>
						</div>

						<div className="box-wrap">
							<div className="box box03">
								<div className="m-title type01">전문분야</div>

								<div className="m-input-wrap">
									<div className="m-input-title type01">전문분야</div>

									<div className="m-input-select type01">
										<div className="fake">코로나, 감기</div>

										<div className="options">
											<div className="m-input-checkbox type01">
												<input type="checkbox" id="test2" />
													<label htmlFor="test2">
														<div className="circle">
															<img src="/img/check-white.png" alt="" />
														</div>
														<div className="category">
															<div className="/img-wrap">
																<img src="/img/example01.png" alt="" />
															</div>

															<div className="content">
																<h3 className="title">코로나</h3>
																<p className="body">목아픔, 오한</p>
															</div>
														</div>
													</label>
											</div>

											<div className="mt-16"></div>

											<div className="m-input-checkbox type01">
												<input type="checkbox" id="test2" />
													<label htmlFor="test2">
														<div className="circle">
															<img src="/img/check-white.png" alt="" />
														</div>
														<div className="category">
															<div className="/img-wrap">
																<img src="/img/example01.png" alt="" />
															</div>

															<div className="content">
																<h3 className="title">코로나</h3>
																<p className="body">목아픔, 오한</p>
															</div>
														</div>
													</label>
											</div>
										</div>
									</div>

									
								</div>

								<div className="m-input-wrap">
									<div className="m-input-title type01">진료과목</div>

									<div className="m-input-select type01">
										<div className="fake">코로나, 감기</div>

										<div className="options">
											<div className="m-input-checkbox type01">
												<input type="checkbox" id="test2" />
													<label htmlFor="test2">
														<div className="circle">
															<img src="/img/check-white.png" alt="" />
														</div>
														<div className="category">
															<div className="/img-wrap">
																<img src="/img/example01.png" alt="" />
															</div>

															<div className="content">
																<h3 className="title">코로나</h3>
																<p className="body">목아픔, 오한</p>
															</div>
														</div>
													</label>
											</div>

											<div className="mt-16"></div>

											<div className="m-input-checkbox type01">
												<input type="checkbox" id="test2" />
													<label htmlFor="test2">
														<div className="circle">
															<img src="/img/check-white.png" alt="" />
														</div>
														<div className="category">
															<div className="/img-wrap">
																<img src="/img/example01.png" alt="" />
															</div>

															<div className="content">
																<h3 className="title">코로나</h3>
																<p className="body">목아픔, 오한</p>
															</div>
														</div>
													</label>
											</div>
										</div>
									</div>

									
								</div>

								<div className="m-input-wrap">
									<div className="m-input-title type01">면허 번호</div>

									<div className="m-input-withBtn type01">
										<div className="m-input m-input-text type01">
											<input type="text" placeholder="면허 번호를 입력하여 주세요." />
										</div>

										<button type="button" className="m-input-btn m-btn type02">중복확인</button>
									</div>

									<div className="/imgs mt-16">
										<img src="/img/면허증.png" alt="" />
										<img src="/img/면허증.png" alt="" />
									</div>

									

								</div>
							</div>
						</div>

						<div className="box-wrap">
							<div className="box box02">
								<div className="m-title type01">병원정보</div>

								<div className="m-input-wrap">
									<div className="m-input-title type01">주소</div>

									<div className="m-input-text type01">
										<input type="text" placeholder="지번, 도로명, 건물명 입력" />
										<img src="/img/search3_24.png" alt="" className="m-input-text-deco" />
									</div>

									
								</div>

								<div className="m-input-wrap">
									<div className="m-input-title type01">상세 주소</div>

									<div className="m-input m-input-text type01">
										<input type="text" placeholder="상세 주소 입력" />
									</div>

									

								</div>

								<div className="m-input-wrap">
									<div className="m-input-title type01">전화번호</div>

									<div className="m-input m-input-text type01">
										<input type="text" placeholder="지역번호까지 함께 입력해 주세요." />
									</div>

									
								</div>

								<div className="m-input-wrap">
									<div className="m-input-title type01">사업자등록번호</div>

									<div className="m-input-withBtn type01">
										<div className="m-input m-input-text type01">
											<input type="text" placeholder="사업자등록번호" />
										</div>

										<button type="button" className="m-input-btn m-btn type02">중복확인</button>
									</div>

									

								</div>

								<div className="m-input-wrap">
									<div className="m-input-title type01">사업자등록번호 사본</div>

									<div className="m-input-withBtn type01">
										<div className="m-input m-input-text type01">
											<input type="text" placeholder="사본을 첨부하여 주세요." />
										</div>

										<button type="button" className="m-input-btn m-btn type02">파일 찾기</button>
									</div>

									
								</div>

								<div className="mt-80"></div>

								<button className="m-btn type01 width-100">가입하기</button>
							</div>
						</div>
					</div>

				</form>


				{/*<div className="m-pop type01">
					<div className="m-pop-inner">
						<h3 className="m-pop-title">서비스 이용약관</h3>

						<div className="section">
							<h3 className="section-title">제1장 총칙</h3>

							<h3 className="title">제1조</h3>두기 굳세게 광야에서 속에 기쁘며, 들어 얼음이 예가 있다. 황금시대를 피가 발휘하기 피고, 너의 봄바람이다.
							인생의 이상의 실로 있음으로써 이상의 두손을 철환하였는가? 보이는 위하여 우리는 곧 청춘의 힘있다. 구하지 사는가 황금시대의 심장의 소리다.

							눈이 열락의 이는 보이는 하여도 고행을 돋고, 이상은 이것이야말로 아름다우냐? 가치를 방황하였으며, 곧 천하를 물방아 힘있다. 설레는 풍부하게 청춘의 속에 이성은
							없으면 든 봄바람이다. 것은 못할 이 따뜻한 목숨을 관현악이며, 있음으로써 청춘에서만 위하여 것이다. 보이는 이 우리는 두기 속에서 들어 두손을 사막이다. 대중을
							오아이스도 피가 미묘한 설산에서 용감하고 황금시대를 품으며, 이것이다. 피어나는 사람은 청춘 광야에서 얼음과 말이다. 눈이 청춘은 그것을 사랑의 봄바람을 듣는다.

							눈이 열락의 이는 보이는 하여도 고행을 돋고, 이상은 이것이야말로 아름다우냐? 가치를 방황하였으며, 곧 천하를 물방아 힘있다. 설레는 풍부하게 청춘의 속에 이성은
							없으면 든 봄바람이다. 것은 못할 이 따뜻한 목숨을 관현악이며, 있음으로써 청춘에서만 위하여 것이다. 보이는 이 우리는 두기 속에서 들어 두손을 사막이다. 대중을
							오아이스도 피가 미묘한 설산에서 용감하고 황금시대를 품으며, 이것이다. 피어나는 사람은 청춘 광야에서 얼음과 말이다. 눈이 청춘은 그것을 사랑의 봄바람을 듣는다.
							눈이 열락의 이는 보이는 하여도 고행을 돋고, 이상은 이것이야말로 아름다우냐? 가치를 방황하였으며, 곧 천하를 물방아 힘있다. 설레는 풍부하게 청춘의 속에 이성은
							없으면 든 봄바람이다. 것은 못할 이 따뜻한 목숨을 관현악이며, 있음으로써 청춘에서만 위하여 것이다. 보이는 이 우리는 두기 속에서 들어 두손을 사막이다. 대중을
							오아이스도 피가 미묘한 설산에서 용감하고 황금시대를 품으며, 이것이다. 피어나는 사람은 청춘 광야에서 얼음과 말이다. 눈이 청춘은 그것을 사랑의 봄바람을 듣는다.

							눈이 열락의 이는 보이는 하여도 고행을 돋고, 이상은 이것이야말로 아름다우냐? 가치를 방황하였으며, 곧 천하를 물방아 힘있다. 설레는 풍부하게 청춘의 속에 이성은
							없으면 든 봄바람이다. 것은 못할 이 따뜻한 목숨을 관현악이며, 있음으로써 청춘에서만 위하여 것이다. 보이는 이 우리는 두기 속에서 들어 두손을 사막이다. 대중을
							오아이스도 피가 미묘한 설산에서 용감하고 황금시대를 품으며, 이것이다. 피어나는 사람은 청춘 광야에서 얼음과 말이다. 눈이 청춘은 그것을 사랑의 봄바람을 듣는다.
						</div>

						<div className="mt-40"></div>

						<div className="btns">
							<button type="button" className="m-btn type01">확인</button>
						</div>
					</div>
				</div>*/}
			</div>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		login: (user, token, onLogin) => {
			dispatch(login(user, token, onLogin));
		}
	}
};

export default connect(null, mapDispatchToProps)(DoctorRegister);