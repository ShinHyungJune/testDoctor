import React, {Fragment, useEffect, useRef, useState} from 'react';
import axios from "axios";
import {setUser} from "../actions/commonActions";
import {connect} from "react-redux";
import Time from "../components/Time";
import Notice from "../components/Notice";
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';

const NoticesIndex = ({user}) => {
	let [notices, setNotices] = useState([]);

	let [targetNotice, setTargetNotice] = useState(null);

	let [form, setForm] = useState({
		title: "",
		contents: "",
	});

	let editorRef = useRef();

	const handleClick = () => {
		editorRef.current.getInstance().exec('Bold');
	};

	useEffect(() => {
		getNotices();
	}, []);

	const getNotices = () => {
		axios.get(window.domain + "/api/admin/noticeList?page=1&size=300")
			.then(response => {
				setNotices(response.data.lists);
			});
	}

	const changeTarget = (target) => {
		setForm({
			title: target.title,
			contents: target.contents
		});

		setTargetNotice(target);

		editorRef.current.getInstance().setHtml(target.contents);
	};

	const changeForm = (event) => {
		setForm({
			...form,
			[event.target.name] : event.target.value
		});
	};

	const store = () => {
		axios.post(window.domain + "/api/admin/notice", form)
			.then(response => {
				getNotices();

				alert("성공적으로 처리되었습니다.");

				clear();
			})
			.catch(error => {
				alert(error.response.data.message);
			});
	};
	const update = () => {
		axios.patch(window.domain + "/api/admin/notice/" + targetNotice.notice_idx, form)
			.then(response => {
				getNotices();
			})
			.catch(error => {
				alert(error.response.data.message);
			});
	};

	const destroy = () => {
		axios.delete(window.domain + "/api/admin/notice/" + targetNotice.notice_idx)
			.then(response => {
				clear();

				getNotices();
			})
			.catch(error => {
				alert(error.response.data.message);
			});
	};

	const changeContents = () => {
		let contents = editorRef.current.getInstance().getHtml();

		setForm({
			...form,
			contents: contents
		});
	}

	const clear = () => {
		setTargetNotice(null);

		setForm({
			title: "",
			contents: ""
		});

		editorRef.current.getInstance().setHtml();
	}

	const uploadImage = async (blob) => {

		let formData = new FormData();

		formData.append("file", blob);

		return axios.post(window.domain + "/api/admin/noticeImageUpload", formData)
			.then(response => {
				return response.data.file_url;
			});
	}

	const onUploadImage = async (blob, callback) => {
		const url = await uploadImage(blob);

		callback(url, '');

		changeContents();

		return false;
	}

	return (
		<div className="notices-index">
			<div className="wrap">
				<div className="left">
					<div className="top">
						<h3 className="title">공지사항</h3>

						<button className="m-btn type02" onClick={clear}>신규작성</button>
					</div>

					<div className="notices">
						{notices.map(notice => <Notice key={notice.notice_idx} item={notice} target={targetNotice} changeTarget={changeTarget} />)}
					</div>
				</div>

				<div className="right">
					<div className="m-input-text type01">
						<input type="text" placeholder="제목을 입력해주세요." value={form.title} name={"title"} onChange={changeForm}/>
					</div>

					<div className="mt-20"></div>

					<div className="m-input-textarea type01">
						<Editor
							height="600px"
							initialEditType="wysiwyg"
							initialValue={form.contents}
							ref={editorRef}
							useCommandShortcut={false}
							hideModeSwitch={true}
							hooks={{
								addImageBlobHook : onUploadImage
							}}
							onChange={changeContents}
							toolbarItems={['bold', 'ul', 'image',]}
						/>
					</div>

					<div className="mt-40"></div>

					<div className="btns">
						{
							targetNotice
								? (
									<Fragment>
										<button className="m-btn type02 bg-red" onClick={destroy}>삭제하기</button>
										<button className="m-btn type02" onClick={update}>수정하기</button>
									</Fragment>
								)
								: <button className="m-btn type02" onClick={store}>등록하기</button>
						}
		
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

export default connect(mapStateToProps, mapDispatchToProps)(NoticesIndex);