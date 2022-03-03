import React, { useState, useEffect } from "react";
import Pagination from "components/ui/Pagination";
import MembersList from "components/ui/MembersList";
import { getMembers } from "assets/data/members";
import { Box } from "@chakra-ui/react";

const MembersPreview = () => {
	const [members, setMembers] = useState([]);
	const [currentPage, setCurrentPage] = useState(0);

	// Show 4 members at most per page
	const membersPerPage = 4;

	useEffect(() => {
		getMembers()
			.then(members => setMembers(members))
			.catch(err => console.error(err));
	}, []);

	const handlePageChange = page => {
		setCurrentPage(page);
	};

	return (
		<Box>
			<MembersList
				members={members}
				currentPage={currentPage}
				membersLimit={membersPerPage}
			/>
			<Pagination
				membersPerPage={membersPerPage}
				totalMembers={members.length}
				handleClick={handlePageChange}
				currentPage={currentPage}
			/>
		</Box>
	);
};

export default MembersPreview;
