import React, {} from 'react';
import {Link} from "react-router-dom";

const PageA = ({match}) => {
	return (
		<div>
			{match.params.title}
			
			<div>
				<Link to={"/pageB"}>pageB로 이동</Link>
			</div>
		</div>
	);
};

export default PageA;