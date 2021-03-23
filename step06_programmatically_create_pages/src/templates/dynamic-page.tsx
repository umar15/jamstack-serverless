import React from "react";

export default ({ pageContext }) => {
	return (
		<div>
			<div>
				Hello Dynamic Page from {pageContext.fname} {pageContext.lname}
			</div>
			<div>This page is create dynamically at Build Time</div>
		</div>
	);
};
