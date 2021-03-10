import tw from 'tailwind-styled-components'
import styled from 'styled-components';

export const ProjectStyles = styled.div.attrs({
	className: 'hover:bg-pink-200 hover:bg-opacity-75 top fade-node m-auto col-12 col-lg-6 p-4 parallax project-glass'
})``;

export const IconStyles = styled.div.attrs({
	className: 'pointer mr-2 rounded-md'
})``;

export const ImageStyles = styled.div.attrs({
	className: 'col-6 m-auto project-initial-position img-dimension top slideNode'
})``;

export const RowStyles = styled.div.attrs({
	className: 'col-10 d-flex flex-wrap justify-content-center pro-dimensions'
})``;
