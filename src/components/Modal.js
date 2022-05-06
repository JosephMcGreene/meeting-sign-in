export default function Modal({ showModal }) {
	if (!showModal) {
		return null;
	}

	return (
		<div className="modal">
			<div className="modal-content">
				<div className="modal-header">
					<h4 className="modal-title">Title</h4>
				</div>
				<div className="modal-body">modal main content</div>
				<div className="modal-footer">
					<button className="modal-btn">Close</button>
				</div>
			</div>
		</div>
	);
}
