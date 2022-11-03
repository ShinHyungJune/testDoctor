import React, {} from 'react';
import {Link} from "react-router-dom";

const PageB = () => {
	return (
		<div>
			pageB
			
			<div>
				<Link to={"/pageA/동적타이틀"}>pageA로 이동</Link>
			</div>
		</div>
	);
};

export default PageB;