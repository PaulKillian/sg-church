import tw from 'tailwind-styled-components'
import styled from 'styled-components';

export const ProjectStyles = styled.div.attrs({
	className: 'hover: bg-pink-200 hover:bg-opacity-75 ring-4 ring-pink-200 ring-offset-2 top fade-node m-auto col-12 col-lg-6 p-4 parallax project-glass'
})``;

export const IconStyles = styled.div.attrs({
	className: 'pointer mr-2 ring-4 ring-blue-300 ring-offset-2 rounded-md'
})``;

export const ImageStyles = styled.div.attrs({
	className: 'm-auto ring-4 ring-blue-300 ring-offset-2 project-initial-position img-dimension top slideNode'
})``;

export const RowStyles = styled.div.attrs({
	className: 'col-10 d-flex flex-wrap justify-content-center pro-dimensions'
})``;
