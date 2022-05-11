export default function ResponsesModal({ responses, showResponses, onClose }) {
	if (!showResponses) {
		return null;
	}

	return (
		<div className="modal">
			<div className="modal-content">
				<div className="modal-header" onClick={() => onClose()}>
					<button className="close-btn">&times;</button>
				</div>
				<ul className="responses-ul modal-body">
					{responses.map((response) => {
						return (
							<li className="response-li" key={responses.indexOf(response)}>
								<p className="response-p">
									<strong>Name</strong>
									<br />
									{response.name}
								</p>
								<p className="response-p">
									<strong>Business</strong> <br />
									{response.business}
								</p>
								<p className="response-p">
									<strong>Personal</strong> <br />
									{response.personal}
								</p>
								<p className="response-p">
									<strong>People</strong> <br />
									{response.relationships}
								</p>
								<p className="response-p">
									<strong>[Something]</strong> <br />
								</p>
								<p className="response-p">
									<strong>[Something]</strong> <br />
								</p>
							</li>
						);
					})}
				</ul>
				<div className="modal-footer">
					<button className="btn" onClick={() => onClose()}>
						Close
					</button>
				</div>
			</div>
		</div>
	);
}
