import "./footer.scss";
export default function Footer() {
	return (
		<>
			<footer className="footer">
				<div className="container">
					<div className="footer-wrapper d-flex flex-column flex-md-row justify-content-between align-items-center">
						<h2>Total Todos: </h2>
						<h2>Completed Todos: </h2>
					</div>
				</div>
			</footer>
		</>
	);
}
