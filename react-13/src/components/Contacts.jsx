import React from "react";
import Contact from "./Contact";

class Contacts extends React.Component {
	constructor(props) {
		super(props);
		this.props = props;
	}

	render() {	
		return (
			<div className="container">
				<section className="contacts">
					<Contact data= {{
						id: 0,
						avatar: '',
						name: 'Nome',
						phone: 'Telefone',
						country: 'País',
						admissionDate: 'Admissão',
						company: 'Empresa',
						department: 'Departamento',
					}} />	
					{this.props.data.map(item => (
						<Contact data={item} key={item.id}/>						
					))}					
				</section>
			</div>
		);
	}
}

export default Contacts;
