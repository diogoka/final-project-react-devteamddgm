import styled from "styled-components";
import homeImage from "../../../public/static/images/homeImage.jpg";

export default function HomeImg() {
	return (
		<Div>
			<Img src={homeImage} alt="" />
		</Div>
	);
}

const Div = styled.div`
	width: 50vw;
`;

const Img = styled.img`
	width: 100%;
	height: auto;
	object-fit: cover;
`;
