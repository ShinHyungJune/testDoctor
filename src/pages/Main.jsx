import React, {useEffect, useState} from 'react';
import axios from "axios";
import {setUser} from "../actions/commonActions";
import {connect} from "react-redux";
import Time from "../components/Time";

const Main = ({user}) => {
	useEffect(() => {

	}, []);

	return (
			<div className="area-main">
				<div className="container">
					<div className="sidebar">
						<div className="top">
							<div className="m-ratioBox-wrap">
								<div className="m-ratioBox">
									<img src="/img/doctor.png" alt="" />
								</div>
							</div>

							<div className="content">
								<h3 className="title">{user.name}</h3>
								<p className="body">{user.hospital_name}</p>
							</div>
						</div>

						<div className="states">
							<div className="state-wrap">
								<div className="state">
									<h3 className="title">진료 상태</h3>

									<div className="m-input-select type02">
										<div className="option value primary">즉시 <img src="/img/arrowDown-gray.png"
																					  alt=""/></div>

										<div className="options">
											<div className="option primary">즉시</div>
											<div className="option alert">대기</div>
											<div className="option">식사</div>
											<div className="option disable">금일 진료 종료</div>
										</div>
									</div>
								</div>
							</div>

							<div className="state-wrap">
								<div className="state">
									<h3 className="title">화상 진료</h3>

									<div className="m-input-select type02">
										<div className="option value primary">활성화 <img src="/img/arrowDown-gray.png"
																					   alt="" /></div>

										<div className="options">
											<div className="option primary">활성화</div>
											<div className="option disable">비활성화</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="box-time">
							<div className="box-title">
								<h3 className="title">진료시간</h3>

								<button className="m-btn type03">수정하기</button>
							</div>

							<div className="times-wrap">
								<img src="/img/time.png" alt="" />

									<div className="times">
										{user.dc_info ? user.dc_info.map((time, index) => <Time key={index} time={time} index={index} />) : ""}

										{/*
												<div className="time"><span className="date">화</span>11:00~19:00</div>
										<div className="time"><span className="date">수</span>11:00~19:00</div>
										<div className="time"><span className="date">목</span>11:00~19:00</div>
										<div className="time"><span className="date">금</span>11:00~19:00</div>
										<div className="time"><span className="date">토</span>11:00~19:00</div>
										<div className="time"><span className="date">일</span>11:00~19:00</div>
										<div className="time">10/10 공휴일 휴무</div>
										*/}

									</div>
							</div>

						</div>
					</div>

					<div className="container-inner">
						<div className="m-boxes type01">
							<div className="box-wrap">
								<div className="box state01">
									<div className="box-title">
										<h3 className="title">날짜</h3>
										<button className="m-btn type03">달력 보기</button>
									</div>

									<div className="content">
										<h3 className="title">2022.09.26 (월)</h3>
									</div>
								</div>
							</div>

							<div className="box-wrap">
								<div className="box state02">
									<div className="box-title">
										<h3 className="title">현재 진료 중인 환자</h3>
									</div>

									<div className="content">
										<h3 className="title">
											김소민
											<span className="state">처방전 미발행</span>
										</h3>

										<a href="#" className="btn-more">
											<img src="/img/arrowRight-gray.png" alt="" />
										</a>
									</div>
								</div>
							</div>

							<div className="box-wrap">
								<div className="box">
									<div className="box-title">
										<h3 className="title">총 진료 건수</h3>
									</div>

									<div className="content">
										<h3 className="title">
											<span className="point">15</span>
											<span className="sub">건</span>
										</h3>

										<a href="#" className="btn-more">
											<img src="/img/arrowRight-gray.png" alt="" />
										</a>
									</div>
								</div>
							</div>

							<div className="box-wrap">
								<div className="box">
									<div className="box-title">
										<h3 className="title">총 대기 건수</h3>

										<div className="m-input-checkbox type03">
											<span className="text">대기 받기</span>
											<input type="checkbox" id="test" />
												<label htmlFor="test"></label>
										</div>
									</div>

									<div className="content">
										<h3 className="title">
											<span className="point">5</span>
											<span className="sub">명</span>
										</h3>

										<a href="#" className="btn-more">
											<img src="/img/arrowRight-gray.png" alt="" />
										</a>
									</div>
								</div>
							</div>
						</div>

						<div className="mt-60"></div>

						<div className="m-title type02">환자 대기 목록</div>

						<div className="mt-20"></div>

						<div className="m-table type01">
							<div className="thead">
								<div className="tr">
									<div className="th">이름</div>
									<div className="th">주민등록번호</div>
									<div className="th">전화번호</div>
									<div className="th">접수일</div>
									<div className="th">증상</div>
									<div className="th">비고</div>
								</div>
							</div>
							<div className="tbody">
								<div className="tr">
									<div className="td">김소민</div>
									<div className="td">990101-2******</div>
									<div className="td">010-1234-1234</div>
									<div className="td">2022.09.26</div>
									<div className="td">감기 기운이 있고 머리가 아파요</div>
									<div className="td">화상 진료 접수</div>
								</div>
								<div className="box-more">
									<div className="fragments">
										<div className="fragment-wrap">
											<div className="fragment box-info">
												<h3 className="title">김소민</h3>

												<div className="boxes">
													<div className="box-wrap">
														<div className="box">
															<div className="info">
																<h3 className="info-title">주민번호</h3>
																<p className="info-body">990101-2*****</p>
															</div>

															<div className="info">
																<h3 className="info-title">전화번호</h3>
																<p className="info-body">010-1234-1223</p>
															</div>

															<div className="info">
																<h3 className="info-title">접수일</h3>
																<p className="info-body">2022.02.23</p>
															</div>
														</div>
													</div>
													<div className="box-wrap">
														<div className="box">
															<div className="info">
																<h3 className="info-title">증상</h3>
																<p className="info-body">감기 기운이 있고 머리가 아파요. 미열도 있는 것
																	같아요.</p>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="fragment-wrap">
											<div className="fragment box-imgs">
												<div className="m-ratioBox-wrap">
													<div className="m-ratioBox">
														<img src="/img/picture.png" alt="" />
													</div>
												</div>

												<div className="m-ratioBox-wrap">
													<div className="m-ratioBox">
														<img src="/img/picture.png" alt="" />
													</div>
												</div>

												<div className="m-ratioBox-wrap">
													<div className="m-ratioBox">
														<img src="/img/picture.png" alt="" />
													</div>
												</div>
											</div>
										</div>
										<div className="fragment-wrap">
											<div className="fragment box-btns">
												<button className="m-btn type02">진료 승인</button>
												<br/>
												<button className="m-btn type02 bg-gray">진료 취소</button>
											</div>
										</div>
									</div>
								</div>
								<div className="tr">
									<div className="td">김소민</div>
									<div className="td">990101-2******</div>
									<div className="td">010-1234-1234</div>
									<div className="td">2022.09.26</div>
									<div className="td">감기 기운이 있고 머리가 아파요</div>
									<div className="td">화상 진료 접수</div>
								</div>
								<div className="tr">
									<div className="td">김소민</div>
									<div className="td">990101-2******</div>
									<div className="td">010-1234-1234</div>
									<div className="td">2022.09.26</div>
									<div className="td">감기 기운이 있고 머리가 아파요</div>
									<div className="td">화상 진료 접수</div>
								</div>
								<div className="tr">
									<div className="td">김소민</div>
									<div className="td">990101-2******</div>
									<div className="td">010-1234-1234</div>
									<div className="td">2022.09.26</div>
									<div className="td">감기 기운이 있고 머리가 아파요</div>
									<div className="td">화상 진료 접수</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {

	}
}
const mapStateToProps = (state) => {
	return {
		user: state.common.user
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);