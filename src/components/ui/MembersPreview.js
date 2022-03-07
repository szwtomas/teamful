import React, { useState, useEffect } from "react";
import Pagination from "components/ui/Pagination";
import MembersList from "components/ui/MembersList";
import { getMembers } from "assets/data/members";
import { Heading } from "@chakra-ui/react";

const MembersPreview = ({ showTitle = true, showEdit = false }) => {
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
		<>
			{showTitle && (
				<Heading textAlign={"center"} as="h3" fontSize={"2xl"} mt={5}>
					Team members
				</Heading>
			)}
			<MembersList
				members={members}
				currentPage={currentPage}
				membersLimit={membersPerPage}
				showRemove={showEdit}
			/>
			<Pagination
				itemsPerPage={membersPerPage}
				totalItems={members.length}
				handleClick={handlePageChange}
				currentPage={currentPage}
			/>
		</>
	);
};

export default MembersPreview;
